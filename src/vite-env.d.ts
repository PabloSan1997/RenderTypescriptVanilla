/// <reference types="vite/client" />


type Products = {
    id:number,
    title:string,
    price:number,
    description:string,
    discountPercentage:number,
    rating:number,
    stock:number,
    brand:string,
    category: string,
    thumbnail:string,
    images: string[]
}

type ApiResponse = {
    total:number,
    skip:number,
    limit:number,
    products:Products[]
}