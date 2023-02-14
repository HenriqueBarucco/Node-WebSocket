import { refrashEditorText } from "./documento.js";

const socket = io();

function selectDocument(name) {
    socket.emit("selecionar_documento", name, (text) => {
        refrashEditorText(text);
    });
}

function emitEditorText(dados) {
    socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (text) => {
    refrashEditorText(text);
});

export { emitEditorText, selectDocument };
