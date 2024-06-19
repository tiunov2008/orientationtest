document.addEventListener('DOMContentLoaded', ()=>{
    [...document.querySelectorAll('.card')].forEach(element => {
        element.classList.add('card-3d')
    });
    //document.addEventListener('mousemove', event=>{
    //    [...document.querySelectorAll('.card')].forEach(element => {
    //        element.style.transform = `rotate3d(1, 1, 1, ${event.clientX*event.clientY/1000}deg)`
    //    });
    //});
    function onOrientationChange(e) {
        // покажем значения параметров в реальном времени
        document.getElementById('alpha').innerHTML = 'α = ' + Math.round(e.alpha);
        document.getElementById('beta').innerHTML = 'β = '+Math.round(e.beta);
        document.getElementById('gamma').innerHTML = 'γ = '+Math.round(e.gamma);
         // поворот и масштабирование квадрата 
         // в зависимости от ориентации экрана
         var rotate = 'rotate(' + e.gamma + 'deg)';
         var scale = 'scale(' + ((e.beta/180)*2 + 1) + ')';
         document.getElementById('a').style.webkitTransform = rotate+' '+scale;
       }
     
       window.addEventListener('deviceorientation', onOrientationChange);
})
