
const elementosText = ({ id, title, thumbnail, price }: Products) => {
    const porducto = document.createElement('div');
    porducto.classList.add('producto');
    porducto.id=id.toString();
    porducto.innerHTML=`<img src="${thumbnail}" alt="${title}">
    <p class="precio">$${price}</p><h2>${title}</h2></div>`;
    porducto.addEventListener('click', ()=>{
        window.location.href =`producto.html?producto=${id}`;
    });
    return porducto;
};

export function renderizarElemento(products: Products[], contenedor: HTMLDivElement) {
    const elementos = products.map(elemento => elementosText(elemento));
    contenedor.innerHTML='';
    elementos.forEach(element=>{
        contenedor.appendChild(element);
    });
}