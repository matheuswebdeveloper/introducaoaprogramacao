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
  play() {
    this.elemento.play();
    document.querySelector(".play").style.display = "none";
    document.querySelector(".pause").style.display = "block";
    this.status = true;
    console.log("play");
  },
  pause() {
    this.elemento.pause();
    document.querySelector(".play").style.display = "block";
    document.querySelector(".pause").style.display = "none";
    this.status = false;
    console.log("pause");
  },
};
window.Player = Player;

export default Player;
