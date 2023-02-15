import { documentsCollection } from "./dbConnect.js";

function getDocuments() {
    return documentsCollection.find().toArray();
}

function addDocument(name) {
    const res = documentsCollection.insertOne({
        name,
        text: "",
    });
    return res;
}

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

function removeDocument(name) {
    const res = documentsCollection.deleteOne({
        name,
    });

    return res;
}

export {
    findDocument,
    editDocument,
    getDocuments,
    addDocument,
    removeDocument,
};
