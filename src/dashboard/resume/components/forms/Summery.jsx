import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../../service/GlobalApi";
import { Brain, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { AIChatSession } from "./../../../../../service/AIModal";

const prompt =
  "Job Title: {jobTitle} , Depends on job title give me list of summary for 3 experience levels, Mid Level and Fresher level in 3-4 lines in array format, With summary and experience_level Field in JSON Format";

function Summary({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summary, setSummary] = useState(resumeInfo?.summary || "");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const params = useParams();
  const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState([]);

  useEffect(() => {
    setResumeInfo(prev => ({ ...prev, summary }));
  }, [summary]);

  const generateSummaryFromAI = async () => {
    setLoading(true);
    try {
      const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle || "");
      console.log(PROMPT);
      const result = await AIChatSession.sendMessage(PROMPT);
      const responseText = await result.response.text();
      const summaries = JSON.parse(responseText);
      setAiGeneratedSummaryList(summaries);
      console.log(summaries, "aiGeneratedSummary");
    } catch (error) {
      toast("Failed to generate summary from AI. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  console.log(loading2, "loading2");

  const onSave = e => {
    e.preventDefault();
    setLoading2(true);
    const data = { summary };
    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      resp => {
        console.log(resp);
        setLoading2(false);
        enabledNext(true);
        toast("Details updated", loading2);
      },
      error => {
        toast("Failed to save summary. Please try again!", error);
      }
    );
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add Summary for your job title</p>

        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Add Summary</label>
            <Button
              variant="outline"
              onClick={generateSummaryFromAI}
              type="button"
              size="sm"
              className="border-primary text-primary flex gap-2"
              disabled={loading}
            >
              <Brain className="h-4 w-4" />
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Generate from AI"
              )}
            </Button>
          </div>
          <Textarea
            className="mt-5"
            required
            value={summary}
            onChange={e => setSummary(e.target.value)}
          />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading2}>
              {loading2 ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {aiGeneratedSummaryList.length > 0 && (
        <div className="my-5">
          <h2 className="font-bold text-lg">Suggestions</h2>
          {aiGeneratedSummaryList.map((item, index) => (
            <div
              key={index}
              onClick={() => setSummary(item.summary)}
              className="p-5 shadow-lg my-4 rounded-lg cursor-pointer"
            >
              <h2 className="font-bold my-1 text-primary">
                Level: {item.experience_level}
              </h2>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Summary;
