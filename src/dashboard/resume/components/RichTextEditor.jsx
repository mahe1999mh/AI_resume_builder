import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useState, useEffect } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnUnderline,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { AIChatSession } from "./../../../../service/AIModal";
import { toast } from "sonner";

const PROMPT =
  "Position title: {positionTitle}. Based on the position title, provide 2-3 bullet points summarizing my experience for a resume. Please return the result as plain text (no experience level, no JSON, no HTML tags).";

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
  const [value, setValue] = useState(defaultValue || "");
  const { resumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const generateSummaryFromAI = async () => {
    const positionTitle = resumeInfo?.experience[index]?.title;

    if (!positionTitle) {
      toast.error("Please add a Position Title before generating summary");
      return;
    }

    setLoading(true);
    const prompt = PROMPT.replace("{positionTitle}", positionTitle);

    try {
      const result = await AIChatSession.sendMessage(prompt);
      const resp = await result.response.text();

      const cleanedResp = resp.replace(/\[|\]/g, "");
      setValue(cleanedResp?.slice(1, -1));
      onRichTextEditorChange(cleanedResp?.slice(1, -1));
    } catch (error) {
      toast.error("Error generating summary");
    } finally {
      setLoading(false);
    }
  };

  const handleEditorChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
    onRichTextEditorChange(newValue);
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <label className="text-xs">Summary</label>
        <Button
          variant="outline"
          size="sm"
          onClick={generateSummaryFromAI}
          disabled={loading}
          className="flex gap-2 border-primary text-primary"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="h-4 w-4" /> Generate from AI
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor value={value} onChange={handleEditorChange}>
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
