import { alertAndRedirect, refreshEditorText } from "./documento.js";

const socket = io();

function selectDocument(name) {
    socket.emit("selecionar_documento", name, (text) => {
        refreshEditorText(text);
    });
}

function emitEditorText(dados) {
    socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (text) => {
    refreshEditorText(text);
});

function emitRemoveDocument(name) {
    socket.emit("excluir_documento", name);
}

socket.on("excluir_documento_sucesso", (name) => {
    alertAndRedirect(name);
});

export { emitEditorText, selectDocument, emitRemoveDocument };
