import { renderizarElemento } from "./Template";


export function buscarAccion(formulario: HTMLFormElement, productos: Products[], contenedor: HTMLDivElement) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const entrada = formulario.firstElementChild as HTMLInputElement;
        const filtrarElementos = productos.filter(element => {
            const buscar = entrada.value.toLocaleUpperCase();
            const titulo = element.title.toLocaleUpperCase();
            return titulo.includes(buscar);
        });
        renderizarElemento(filtrarElementos, contenedor);
    });
}