import { renderizarElemento } from './Template';
import { readApiProducts } from './api/readData';
import { buscarAccion } from './buscador';
import './styles/index.css';


(async () => {
    try {
        const contenedor = document.querySelector('.contenedor') as HTMLDivElement;
        const loading = document.querySelector('.loading') as HTMLDivElement;
        loading.classList.remove('quitar');
        const data = await readApiProducts();
        loading.classList.add('quitar');
        inicio(data, contenedor);
    } catch (error) {
        console.error(error);
    }
})();


function inicio(data: ApiResponse, contenedor: HTMLDivElement) {
    const buscador = document.querySelector('.buscador') as HTMLFormElement;
    renderizarElemento(data.products, contenedor);
    buscarAccion(buscador, data.products, contenedor);
}