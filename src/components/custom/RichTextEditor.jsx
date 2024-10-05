import React, { useState, useEffect } from "react";
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

function TextEditor({ onTextEditorChange, defaultValue }) {
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleEditorChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
    onTextEditorChange(newValue);
  };

  return (
    <div>
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

export default TextEditor;
