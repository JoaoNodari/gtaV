const botaoPlaraforma = document.querySelector(".btn-plataforma")
const abrirPlataforma = document.querySelector(".btn-plataforma .plataformas")

botaoPlaraforma.addEventListener("click", () => {
    abrirPlataforma.classList.toggle('ativo')
})

