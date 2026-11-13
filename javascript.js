  // constantes para cambiar el fondo de la pantalla al hacer clic
  
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

// para la encuesta
     const btnTest = document.getElementById('btntest');

