// MENU DO PERFIL
const btnPerfil = document.getElementById("perfilToggle");
const menuPerfil = document.getElementById("perfilMenu");

btnPerfil.addEventListener("click", () => {
  menuPerfil.style.display =
    menuPerfil.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!btnPerfil.contains(e.target) && !menuPerfil.contains(e.target)) {
    menuPerfil.style.display = "none";
  }
});

// TROCA DE ABAS (Login / Cadastro)
const abaLogin = document.getElementById("abaLogin");
const abaCadastro = document.getElementById("abaCadastro");
const blocoLogin = document.getElementById("blocoLogin");
const blocoCadastro = document.getElementById("blocoCadastro");

abaLogin.addEventListener("click", () => {
  abaLogin.classList.add("ativa");
  abaCadastro.classList.remove("ativa");
  blocoLogin.classList.add("ativo");
  blocoCadastro.classList.remove("ativo");
  blocoCadastro.hidden = true;
  blocoLogin.hidden = false;
});

abaCadastro.addEventListener("click", () => {
  abaCadastro.classList.add("ativa");
  abaLogin.classList.remove("ativa");
  blocoCadastro.classList.add("ativo");
  blocoLogin.classList.remove("ativo");
  blocoLogin.hidden = true;
  blocoCadastro.hidden = false;
});
