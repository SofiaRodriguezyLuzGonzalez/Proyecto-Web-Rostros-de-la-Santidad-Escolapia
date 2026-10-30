  const MUERTE = document.getElementById('btnCambioRojo');
MUERTE.addEventListener('click', function(){
    document.body.style.backgroundColor = '#f52c2c';
});

    const HOY = document.getElementById('btnHOY');
HOY.addEventListener('click', function(){
    document.body.style.backgroundColor = 'rgba(123, 255, 255, 0.79)';
})
    const catolicismo = document.getElementById('btncatolicismo');
catolicismo.addEventListener('click', function(){
    document.body.style.backgroundColor = '#67ea';
})
    //esta es la suposicion que habia puest antes : const imagenes = document.getElementById("CambioImagenes").src = "../img/image3.png";
    //esta es la version que me dice la IA
    const CambioImagenes = document.getElementById('CambioImagenes');
CambioImagenes.addEventListener('click', function(){
    CambioImagenes.src = "../img/image3.png";
})
