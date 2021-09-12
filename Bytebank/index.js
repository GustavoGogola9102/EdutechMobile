import {
    Cliente
} from "./Cliente.js";
import {
    Gerente
} from "./funcionarios/Gerente.js";
import {
    Diretor
} from "./funcionarios/Diretor.js";
import {
    SistemaAutenticacao
} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 263263514);
diretor.cadastrarSenha("123456");
const diretorLogado = SistemaAutenticacao.login(diretor, "123456");

const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("50263");
const gerenteLogado = SistemaAutenticacao.login(gerente, "50263");

const cliente = new Cliente("Lais", 78945601, "325");
const clienteLogado = SistemaAutenticacao.login(cliente, "325");