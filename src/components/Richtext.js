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
import axios from "axios";
import "./Richtext.css";

const Richtext = () => {
  const [modal, setmodal] = useState("");
  const [toemail, settoemail] = useState("");
  const config = {
    placeholderText: "Edit Your Content Here!",
    heightMin: 300,
    widthMin: 400,
  };
  const handleModelChange = (modal) => {
    setmodal(modal);
    settoemail(toemail);
  };

  const savedaata = async (e) => {
    e.preventDefault();

    if (modal&&toemail) {
      axios
        .post("http://localhost:3001/sendMail", {
          modal,
          toemail
        })
        .then((res) => {
          if (res.status === 200) {
            alert("Message Sent Sucessfully");
          } else {
            alert("Server Stopped");
          }
        });
    } else if(!toemail) {
      alert("Enter To Field To send Message");
    }else{
      alert("Enter A valid Message");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <form onSubmit={savedaata}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">From</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Samplemail.gmail.com"
                disabled
              />
              <label htmlFor="exampleInputEmail1">To</label>
              <input
                type="email"
                className="form-control mb-1"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => settoemail(e.target.value)}
              />
            </div>
            <FroalaEditorComponent
              tag="textarea"
              config={config}
              model={modal}
              onModelChange={handleModelChange}
            ></FroalaEditorComponent>
            <button className="btn btn-primary mt-3" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Richtext;
