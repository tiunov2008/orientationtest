document.addEventListener('DOMContentLoaded', ()=>{
    [...document.querySelectorAll('.card')].forEach(element => {
        element.classList.add('card-3d')
    });

    function onOrientationChange(e) {
        [...document.querySelectorAll('.card')].forEach(element => {
            element.style.transform = `rotateZ(${Math.round(e.alpha)}deg)`
        });
    }
    
    window.addEventListener('deviceorientation', onOrientationChange);
})
