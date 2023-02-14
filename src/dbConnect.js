import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.STRING_DB);

let documentsCollection;

try {
    await client.connect();

    const db = client.db("alura-websockets");
    documentsCollection = db.collection("documentos");

    console.log("Conectado ao banco de dados com sucesso!");
} catch (error) {
    console.log(error);
}

export { documentsCollection };
