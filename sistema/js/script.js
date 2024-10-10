const  imgBanner = ['assets/icon/img/header.png', 'assets/icon/img/2.png', 'assets/icon/img/3.png'];
// definimos as imagens do banner

let fotoInicial = 0;
// indez inicial da foto do banner

function slider(){
    //encontrar o banner
    const banner = document.getElementById('banner');
    banner.style.backgroundImage = 
                `url('${imgBanner[fotoInicial]}')`;
    fotoInicial++;
    // mudar para  a proxima foto
    if(fotoInicial >= imgBanner.lenght){
        fotoInicial = 0;
    }
}

setInterval(slider, 2500);