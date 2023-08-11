import {Brand} from "@/app/types/Brand";

const baseUrl = "http://localhost:3001";

const getAllBrands = async (): Promise<Brand[]> => {
    const res = await fetch(`${baseUrl}/brands`);
    return await res.json();
}

export {
    getAllBrands
}