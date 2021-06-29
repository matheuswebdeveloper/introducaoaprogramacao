const Home = {
  load: () => {
    const tela = document.querySelector(".tela");
    const componente = "/src/components/Desligar/index.html";
    incluir(tela, componente);
  },
};

export default Home;
