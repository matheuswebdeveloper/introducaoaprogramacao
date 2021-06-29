const Player = {
  elemento: null,
  status: false,
  load: async () => {
    const tela = document.querySelector(".tela");
    const componente = "/src/components/Player/index.html";
    await incluir(tela, componente);
  },
  defineElemento() {
    this.elemento = document.querySelector("#player");
  },
  open: async function () {
    await this.load();
    this.defineElemento();
  },
};
window.Player = Player;

export default Player;
