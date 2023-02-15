import { insertLinkDocument, removeLinkDocument } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documents) => {
    documents.forEach((document) => {
        insertLinkDocument(document.name);
    });
});

function emitAddDocument(name) {
    socket.emit("adicionar_documento", name);
}

socket.on("adicionar_documento_interface", (name) => {
    insertLinkDocument(name);
});

socket.on("documento_existente", (name) => {
    alert(`O documento ${name} já existe`);
});

socket.on("excluir_documento.sucesso", (name) => {
    removeLinkDocument(name);
});

export { emitAddDocument };
