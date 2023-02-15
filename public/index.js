import { emitAddDocument } from "./socket-front-index.js";

const listDocuments = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocument = document.getElementById("input-documento");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    emitAddDocument(inputDocument.value);
    inputDocument.value = "";
});

function insertLinkDocument(nameDocument) {
    listDocuments.innerHTML += `
      <a
        href="documento.html?nome=${nameDocument}"
        class="list-group-item list-group-item-action"
        id="document-${nameDocument}"
      >
      ${nameDocument}
      </a>
    `;
}

function removeLinkDocument(name) {
    const document = document.getElementById(`document-${nameDocument}`);

    listDocuments.removeChild(document);
}

export { insertLinkDocument, removeLinkDocument };
