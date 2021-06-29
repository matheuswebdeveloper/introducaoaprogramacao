const Home = {
  load: () => {
    const tela = document.querySelector(".tela");
    const componente = "/src/components/Home/index.html";
    incluir(tela, componente);
  },
};

export default Home;
