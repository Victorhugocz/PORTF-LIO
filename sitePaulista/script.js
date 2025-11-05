let tema = document.querySelector(".escuro");
let corpo = document.body;

tema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    "#main, #sobre, #skills, #projetos, #contato"
  );

  const navLinks = document.querySelectorAll("header nav ul li a");

  function setActive() {
    let atual = "";
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        atual = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("ativo");
      if (link.getAttribute("href") === "#" + atual) {
        link.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", setActive);
  setActive();
});


function mascara_numero() {
  var tel_formatado = document.getElementById("numero").value;
  if (tel_formatado[0] != "(") {
    if (tel_formatado[0] != undefined) {
      document.getElementById("numero").value = "(" + tel_formatado[0];
    }
  }

  if (tel_formatado[3] != ")") {
    if (tel_formatado[3] != undefined) {
      document.getElementById("numero").value =
        tel_formatado.slice(0, 3) + ")" + tel_formatado[3];
    }
  }

  if (tel_formatado[9] != "-") {
    if (tel_formatado[9] != undefined) {
      document.getElementById("numero").value =
        tel_formatado.slice(0, 9) + "-" + tel_formatado[9];
    }
  }
}

const btnEnviar = document.querySelector("button[type='submit']");
const modalContato = document.getElementById("modalContact");
const fecharModal = modalContato.querySelector(".fechar");

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  modalContato.style.display = "block";
});

fecharModal.addEventListener("click", () => {
  modalContato.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modalContato) {
    modalContato.style.display = "none";
  }
});