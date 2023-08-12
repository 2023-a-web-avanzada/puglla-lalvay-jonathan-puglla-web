import {Brand} from "@/app/types/Brand";

const baseUrl = "http://localhost:3001";

const getAllBrands = async (): Promise<Brand[]> => {
    const res = await fetch(`${baseUrl}/brands`, {cache: 'no-store'});
    return await res.json();
}

const addBrand = async (brand: Brand): Promise<Brand> => {
    const res = await fetch(`${baseUrl}/brands`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(brand)
    })
    return await res.json();
}

export {
    getAllBrands,
    addBrand
}