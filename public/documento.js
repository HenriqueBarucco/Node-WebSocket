import { emitEditorText, selectDocument } from "./socket-front-documento.js";

const params = new URLSearchParams(window.location.search);
const nameDocument = params.get("nome");

const editorText = document.getElementById("editor-texto");
const titleDocument = document.getElementById("titulo-documento");

titleDocument.textContent = nameDocument || "Documento sem título";

selectDocument(nameDocument);

editorText.addEventListener("keyup", () => {
    emitEditorText({
        text: editorText.value,
        nameDocument,
    });
});

function refrashEditorText(text) {
    editorText.value = text;
}

export { refrashEditorText };
