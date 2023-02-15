import {
    addDocument,
    editDocument,
    findDocument,
    getDocuments,
    removeDocument,
} from "./documentsDb.js";
import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou! ID:", socket.id);

    socket.on("obter_documentos", async (returnDocuments) => {
        const documents = await getDocuments();
        returnDocuments(documents);
    });

    socket.on("adicionar_documento", async (name) => {
        const documentExist = (await findDocument(name)) !== null;

        if (documentExist) {
            socket.emit("documento_existente", name);
        } else {
            const res = await addDocument(name);

            if (res.acknowledged) {
                io.emit("adicionar_documento_interface", name);
            }
        }
    });

    socket.on("selecionar_documento", async (nameDocument, returnText) => {
        socket.join(nameDocument);

        const document = await findDocument(nameDocument);

        if (document) {
            returnText(document.text);
        }
    });

    socket.on("texto_editor", async ({ text, nameDocument }) => {
        const att = await editDocument(nameDocument, text);

        if (att.modifiedCount) {
            socket.to(nameDocument).emit("texto_editor_clientes", text);
        }
    });

    socket.on("excluir_documento", async (name) => {
        const res = await removeDocument(name);

        if (res.deletedCount) {
            io.emit("excluir_documento_sucesso", name);
        }
    });

    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado! Motivo: ${motivo}`);
    });
});
