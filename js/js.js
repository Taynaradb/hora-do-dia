function Carregar(){

    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var agora = new Date();
    var hora = agora.getHours();
    var min = agora.getMinutes();
    var now = `${hora}:${min}`
    msg.innerHTML = `Agora são ${now}`
    
    
    if( hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'images/manha.png'
        document.body.style.background = '#ffc055'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'images/tarde.png'
        document.body.style.background = '#9299b1'
    }else{
        //BOA NOITE
        img.src = 'images/noite.png'
        document.body.style.background = '#324b6f'
    }
    
    }