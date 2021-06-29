export const incluir = async function (elemento, arquivo) {
  elemento.innerHTML = await (await fetch(arquivo)).text();
};
window.incluir = incluir;

export const pronto = function (funcao) {
  window.addEventListener("load", funcao);
};
window.pronto = pronto;
