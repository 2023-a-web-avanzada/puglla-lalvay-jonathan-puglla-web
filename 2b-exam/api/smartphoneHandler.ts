import {Smartphone} from "@/app/types/Smartphone";

const baseUrl = "http://localhost:3001";

const getSmartphonesByBrandId = async (brandId: string): Promise<Smartphone[]> => {
    const res = await fetch(`${baseUrl}/smartphones?brandId=${brandId}`, {cache: 'no-store'});
    return await res.json();
}

const addSmartphone = async (smartphone: Smartphone): Promise<Smartphone> => {
    const res = await fetch(`${baseUrl}/smartphones`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(smartphone)
    })
    return await res.json();
}

const editSmartphone = async (smartphone: Smartphone): Promise<Smartphone> => {
    const res = await fetch(`${baseUrl}/smartphones/${smartphone.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(smartphone)
    })
    return await res.json();
}

const deleteSmartphone = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/smartphones/${id}`, {
        method: 'DELETE',
    })
}

export {
    getSmartphonesByBrandId,
    addSmartphone,
    editSmartphone,
    deleteSmartphone
}
