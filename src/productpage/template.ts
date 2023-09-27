import { intervalo } from "./intervalo";



export function renderizarSlider(images:string[], contenedor:HTMLDivElement){
    const slider = document.createElement('div');
    slider.classList.add('slider');
    const data = images.map(element=>`<div class="slide"><img src="${element}" alt=""></div>`).join('');
    slider.innerHTML=data;
    slider.style.width=`${images.length*100}%`;
    intervalo(slider);
    contenedor.appendChild(slider);
}