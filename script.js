// A mudança visual é responsabilidade do CSS; o JS alterna a classe.
const toggle = document.querySelector('#theme-toggle');
const status = document.querySelector('#theme-status');
toggle.addEventListener('click', () => {
  const light = document.body.classList.toggle('light-mode');
  toggle.textContent = light ? 'Ativar tema escuro' : 'Ativar tema claro';
  toggle.setAttribute('aria-pressed', String(light));
  status.textContent = light ? 'Tema claro ativo' : 'Tema escuro ativo';
});
