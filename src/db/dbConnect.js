import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.STRING_DB);

let documentosColecao, usuariosColecao;

try {
    await client.connect();

    const db = client.db("alura-websockets");
    documentosColecao = db.collection("documentos");
    usuariosColecao = db.collection("usuarios");

    console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
    console.log(erro);
}

export { documentosColecao, usuariosColecao };
