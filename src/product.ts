import { readOneProduct } from './api/readData';
import { generarDatos } from './productpage/generarDatos';
import { renderizarSlider } from './productpage/template';
import './styles/index.css';
import './styles/productomuestra.css';


(async ()=>{
    try {
        const page = window.location.search;
        const quitar = document.querySelector('.loading') as HTMLDivElement;
        const content = document.querySelector('.contenedor_producto') as HTMLDivElement;
        quitar.classList.remove('.quitar');
        const urlBase = new URLSearchParams(page);
        const id = urlBase.get('producto');
        const producto = await readOneProduct(Number(id));
        content.classList.remove('quitar');
        quitar.classList.add('quitar');
        document.querySelector('.boton')?.addEventListener('click', ()=>{
            window.location.href='index.html';
        });
        const titulo = document.querySelector('h1') as HTMLHeadingElement;
        titulo.textContent=producto.title;
        const foto = document.querySelector('.foto') as HTMLDivElement;
        renderizarSlider(producto.images, foto);
        generarDatos(producto);
    } catch (error) {
        console.error(error);
    }
})();