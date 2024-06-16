document.addEventListener('DOMContentLoaded', ()=>{
    [...document.querySelectorAll('.card')].forEach(element => {
        element.classList.add('card-3d')
    });
    //document.addEventListener('mousemove', event=>{
    //    [...document.querySelectorAll('.card')].forEach(element => {
    //        element.style.transform = `rotate3d(1, 1, 1, ${event.clientX*event.clientY/1000}deg)`
    //    });
    //});
    window.addEventListener('orientationchange',(e)=>{
        [...document.querySelectorAll('.card')].forEach(element => {
        element.style.transform = `rotateZ(${e.target.screen.orientation.angle}deg)`
        });
    })
})