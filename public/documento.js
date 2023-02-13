import { emitEditorText } from "./socket-front-documento.js";

const editorText = document.getElementById("editor-texto");

editorText.addEventListener("keyup", () => {
    emitEditorText(editorText.value);
});

function refrashEditorText(text) {
    editorText.value = text;
}

export { refrashEditorText };
