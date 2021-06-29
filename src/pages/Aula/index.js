const Aula = {
  load: () => {
    const tela = document.body;
    const componente = "/src/pages/Aula/index.html";
    incluir(tela, componente);
    setTimeout(() => {
      Celular.executar();
    }, 2000);
  },
};

export default Aula;
