import { documentsCollection } from "./dbConnect.js";

function findDocument(name) {
    const document = documentsCollection.findOne({ name });

    return document;
}

function editDocument(name, text) {
    const att = documentsCollection.updateOne(
        {
            name,
        },
        {
            $set: {
                text,
            },
        }
    );

    return att;
}

export { findDocument, editDocument };
