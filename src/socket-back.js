import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventosDocumentos from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
    registrarEventosInicio(socket, io);
    registrarEventosDocumentos(socket, io);
    registrarEventosCadastro(socket, io);
});
