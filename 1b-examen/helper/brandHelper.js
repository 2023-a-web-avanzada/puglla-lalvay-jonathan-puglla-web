import * as helper from "./helper.js";

const brandsFilePath = './data/brands.json';
const smartphonesFilePath = './data/smartphones.json';

// Create
async function createBrand(brand) {
    try {
        const brands = await helper.readJSONFile(brandsFilePath);
        const lastBrand = brands[brands.length - 1];
        const id = lastBrand ? lastBrand.id + 1: 0;
        brand = { id, ...brand }
        brands.push(brand);
        await helper.writeJSONFile(brandsFilePath,  JSON.stringify(brands));
        console.log('Brand created successfully!');
    } catch (error) {
        console.log('Error: ', error)
    }
}

// Read
async function getAllBrands() {
    const brands = await helper.readJSONFile(brandsFilePath);
    if (brands.length === 0) {
        console.log('No brands found.');
    } else {
        console.log('All Brands:');
        brands.forEach(brand => {
            console.log('------------------------------------');
            console.log(`ID: ${brand.id}`);
            console.log(`Name: ${brand.name}`);
            console.log(`Country: ${brand.country}`);
            console.log(`Established: ${brand.established}`);
            console.log(`Active: ${brand.active}`);
            console.log('------------------------------------');
        });
    }
}

async function getBrandById(id) {
    const brands = await helper.readJSONFile(brandsFilePath);
    const brand = brands.find(brand => brand.id === id);
    if (brand) {
        console.log('Brand found:');
        console.log('------------------------------------');
        console.log(`ID: ${brand.id}`);
        console.log(`Name: ${brand.name}`);
        console.log(`Country: ${brand.country}`);
        console.log(`Established: ${brand.established}`);
        console.log('------------------------------------');
    } else {
        console.log('Brand not found.');
    }
}

// Update
async function updateBrand(id, updatedBrand) {
    const brands = await helper.readJSONFile(brandsFilePath);
    const index = brands.findIndex(brand => brand.id === id);
    if (index !== -1) {
        brands[index] = { ...brands[index], ...updatedBrand };
        await helper.writeJSONFile(brandsFilePath, JSON.stringify(brands));
        console.log('Brand updated successfully!');
    } else {
        console.log('Brand not found.');
    }
}

// Delete
async function deleteBrandById(id) {
    const brands = await helper.readJSONFile(brandsFilePath);
    const updatedBrands = brands.filter(brand => brand.id !== id);
    if (updatedBrands.length !== brands.length) {
        await helper.writeJSONFile(brandsFilePath, JSON.stringify(updatedBrands));

        const smartphones = await helper.readJSONFile(smartphonesFilePath);
        const updatedSmartphones = smartphones.filter(smartphone => smartphone.brandId !== id);
        await helper.writeJSONFile(smartphonesFilePath, JSON.stringify(updatedSmartphones));

        console.log('Brand and associated smartphones deleted successfully!');
    } else {
        console.log('Brand not found.');
    }
}

export {
    createBrand,
    getAllBrands,
    getBrandById,
    deleteBrandById,
    updateBrand
};