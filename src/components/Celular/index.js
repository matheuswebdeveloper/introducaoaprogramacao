import { incluir } from "../../utils/main.js";
import Bloqueio from "../Bloqueio/index.js";
import Home from "../Home/index.js";
import Player from "../Player/index.js";
import Desligar from "../Desligar/index.js";
import Aula from "/src/pages/Aula/index.js";

const Celular = {
  home() {
    this.tela.desbloquear();
  },
  tela: {
    status: "Desligada",
    ligar() {
      Bloqueio.load();
      this.status = "Bloqueada";
      setTimeout(() => {
        if (Celular.tela.status == "Bloqueada") {
          Celular.tela.desligar();
        }
      }, 5000);
      console.log("ligar");
    },
    desligar() {
      Desligar.load();
      this.status = "Desligada";
      console.log("desligar");
    },
    desbloquear() {
      Home.load();
      this.status = "Ligada";
      console.log("desbloquear");
    },
    bloquear() {
      Bloqueio.load();
      this.status = "Bloqueada";
      console.log("bloquear");
    },
  },
  volume: {
    status: 1,
    definir(valor) {
      Celular.player.elemento.volume = valor;
      this.status = valor;
    },
  },
  player: Player,
  carregar: async () => {
    Aula.load();
    setTimeout(() => {
      Celular.tela.desligar();
    }, 100);
  },
};
window.Celular = Celular;

Celular.carregar();
export default Celular;
