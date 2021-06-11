import React, { useState } from "react";
import ReactDOM from "react-dom";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/plugins/align.min.js";
import "froala-editor/js/languages/de.js";
import "froala-editor/js/third_party/image_tui.min.js";
import "froala-editor/js/third_party/embedly.min.js";
import "froala-editor/js/third_party/spell_checker.min.js";
import "froala-editor/js/third_party/font_awesome.min.js";
import FroalaEditorButton from "react-froala-wysiwyg/FroalaEditorButton";

const Richtext = () => {
  const [modal, setmodal] = useState("");
  const config = {
    placeholderText: "Edit Your Content Here!",
    heightMin: 300,
    widthMin: 400,
  };
  const handleModelChange = (modal) => {
    setmodal(modal)
  };

  const savedaata = ()=>{
    console.log(modal)
  }
  return (
    <>
        <FroalaEditorComponent
      tag="textarea"
      config={config}
      model={modal}
      onModelChange={handleModelChange}
    >
    </FroalaEditorComponent>
    <button type="button" onClick={savedaata}>Save</button>
    </>
  );
};

export default Richtext;
