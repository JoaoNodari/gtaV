const botaoPlaraforma = document.querySelector(".btn-plataforma")
const abrirPlataforma = document.querySelector(".btn-plataforma .plataformas")

botaoPlaraforma.addEventListener("click", () => {

    let verificarTag = abrirPlataforma.classList.contains('ativo');

    if(verificarTag) {
        abrirPlataforma.classList.remove('ativo')
    } else {
        abrirPlataforma.classList.add('ativo')
    }
})

