import React from "react";
import { Editor, EditorState, ContentState, convertToRaw, getDefaultKeyBinding, KeyBindingUtil } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "draft-js/dist/Draft.css";
import useSound from 'use-sound';
import { jsx, css, Global, ClassNames } from '@emotion/core'
import converted from './style.js';

import RisingPops from '../../sounds/rising-pops.mp3';
const { hasCommandModifier } = KeyBindingUtil;

function DraftMessageEditor({ onMessageSave }) {
  const [play] = useSound(RisingPops);
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  // const setDomEditorRef = () =>{};

  const focus = () => {
    setEditorState(() => EditorState.moveFocusToEnd(editorState));
  };

  const clearOnSubmit = () => {

    setEditorState(() =>
      EditorState.push(
        editorState,
        ContentState.createFromText(""),
        "remove-range"
      )
    );
  };

  const onMessageSaveHandler = () => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());

    const message = draftToHtml(rawContentState);
    const rowMessage = message.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
    console.log(rowMessage);
    clearOnSubmit();
    if (rowMessage !== "") onMessageSave(rowMessage);
    return play();
  };

  const cwvKeyBindingFn = (e) => {
    if (hasCommandModifier(e) && e.keyCode === 13) {
      return getDefaultKeyBinding(e)
    }

    if (e.keyCode === 13) {
      return onMessageSaveHandler()
    }

    return getDefaultKeyBinding(e);
  }

  const styles = {
    root: {
      fontFamily: "'Helvetica', sans-serif",
      padding: 20,
      width: 600,
    },
    editor: {
      border: "1px solid #ccc",
      cursor: "text",
      minHeight: 37,
      maxHeight: 37,
      padding: 10,
      minWidth: 283,
      background: '#fff'
    },
    button: {
      marginTop: 10,
      textAlign: "center",
    },
  };

  return (
    <>
    <Global styles={converted}/>
    <div className="wpcwv-messageForm">
      <div className="wpcwv-textarea" style={styles.editor} onClick={focus}>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          keyBindingFn={cwvKeyBindingFn}
          placeholder="Enter Your Replay..."
        />
      </div>
      <div className="wpcwv-RichEditorSubmit">
        <button
          className="wpcwv-button wpcwv-buttonSend"
          type="button"
          shape="round"
          onClick={() => onMessageSaveHandler()}
          size={"middle"}
        >
          SEND
        </button>
      </div>
    </div>
    </>
  );
}

export default DraftMessageEditor;
