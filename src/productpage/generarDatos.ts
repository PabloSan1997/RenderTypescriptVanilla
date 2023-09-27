


export function generarDatos(producto:Products):void{
const precio = document.querySelector('.precio') as HTMLDivElement;
const descripcion= document.querySelector('.descripcion') as HTMLDivElement;
const escribir = document.querySelector('.escribir') as HTMLDivElement;
const escribir2 = document.querySelector('.escribir2') as HTMLDivElement;
const elementos = [precio, descripcion, escribir, escribir2];
const data = ['$'+producto.price.toString(), producto.description, producto.category, producto.brand];
elementos.forEach((element, i )=>{
    element.textContent=data[i];
});
}