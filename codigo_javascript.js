const $ = (selector) => {
    return document.querySelector(selector);
}
const hora = $('.hora');
const dot = $('.dot');
const min = $('.min');
const semana = $('.semana');
let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();

    if (showDot){
        dot.classList.add('invisible');    
    } else {
        dot.classList.remove('invisible');
    }
    hora.textContent = String(now.getHours())
        .padStart(2, '0');
    min.textContent = String(now.getMinutes())
        .padStart(2, '0');
    
    Array
        .from(semana.children)
        .forEach(
            (ele) => {
                ele.classList.remove('activo');
            }
        );
    semana
            .children[now.getDay()]
            .classList
            .add('activo');
};

setInterval(update, 500);