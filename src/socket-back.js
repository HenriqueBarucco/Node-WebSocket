import { editDocument, findDocument } from "./documentsDb.js";
import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou! ID:", socket.id);

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

    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado! Motivo: ${motivo}`);
    });
});
