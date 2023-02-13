import { refrashEditorText } from "./documento.js";

const socket = io();

function emitEditorText(text) {
    socket.emit("texto_editor", text);
}

socket.on("texto_editor_clientes", (text) => {
    refrashEditorText(text);
});

export { emitEditorText };
