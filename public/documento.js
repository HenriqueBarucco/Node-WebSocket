import {
    emitEditorText,
    emitRemoveDocument,
    selectDocument,
} from "./socket-front-documento.js";

const params = new URLSearchParams(window.location.search);
const nameDocument = params.get("nome");

const editorText = document.getElementById("editor-texto");
const titleDocument = document.getElementById("titulo-documento");
const removeBtn = document.getElementById("excluir-documento");

titleDocument.textContent = nameDocument || "Documento sem título";

selectDocument(nameDocument);

editorText.addEventListener("keyup", () => {
    emitEditorText({
        text: editorText.value,
        nameDocument,
    });
});

function refreshEditorText(text) {
    editorText.value = text;
}

removeBtn.addEventListener("click", () => {
    emitRemoveDocument(nameDocument);
});

function alertAndRedirect(name) {
    if (name == nameDocument) {
        alert(`Documento ${name} excluído!`);
        window.location.href = "/";
    }
}

export { refreshEditorText, alertAndRedirect };
