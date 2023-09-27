

export async function readApiProducts():Promise<ApiResponse> {
    const data = await fetch('https://dummyjson.com/products');
    const apiResult = await data.json();
    return apiResult;
}

export async function readOneProduct(id:number):Promise<Products>{
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const apiResult = await data.json();
    return apiResult;
}