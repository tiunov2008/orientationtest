document.addEventListener('DOMContentLoaded', ()=>{
    [...document.querySelectorAll('.card')].forEach(element => {
        element.classList.add('card-3d')
    });

    function onOrientationChange(e) {
        [...document.querySelectorAll('.card')].forEach(element => {
            element.style.webkitTransform  = `rotateZ(${Math.round(e.alpha)}deg) rotateX(${Math.round(e.gamma)}deg) rotateY(${Math.round(e.beta)}deg)`
        });
    }
    
    window.addEventListener('deviceorientation', onOrientationChange);
})
