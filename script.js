function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        img.src='./Assets/fotomanha.jpg'
        `Bom Dia! Agora são ${hora} horas`
    } else if (hora >= 12 && hora < 18) {
        img.src='./Assets/fototarde.jpg'
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas`
    } else {
        img.src='./Assets/fotonoite.jpg'
        msg.innerHTML = `Boa noite! Agora são ${hora} horas`
    }
}
    