import * as helper from "./helper.js";

const smartphonesFilePath = './data/smartphones.json';
const brandsFilePath = './data/brands.json';

// Create
async function createSmartphone(smartphone) {
    try {
        const brands = await helper.readJSONFile();
        const brand = brands.find(brand => brand.id === smartphone.brandId);
        if (brand) {
            if (!brand.smartphones) {
                brand.smartphones = [];
            }
            const smartphones = await helper.readJSONFile(smartphonesFilePath);
            smartphones.push(smartphone);
            brand.smartphones.push(smartphone);
            await helper.writeJSONFile(smartphonesFilePath, JSON.stringify(smartphones));
            await helper.writeJSONFile(brandsFilePath, JSON.stringify(brands));
            console.log('Smartphone created successfully!');
        }
    } catch (error) {
        console.log('Error: ', error);
    }
}

// Read
async function getAllSmartphones() {
    try {
        const smartphones = await helper.readJSONFile(smartphonesFilePath);
        if (smartphones.length === 0) {
            console.log("No smartphones found.");
        } else {
            console.log("All smartphones:");
            smartphones.forEach(smartphone => {
                console.log('------------------------------------');
                console.log(`ID: ${smartphone.id}`);
                console.log(`Name: ${smartphone.name}`);
                console.log(`Brand ID: ${smartphone.brandId}`);
                console.log(`Color: ${smartphone.color}`);
                console.log(`Price: ${smartphone.price}`);
                console.log('------------------------------------');
            });
        }
    } catch (error) {
        console.log('Error: ', error);
    }
}

export {
    createSmartphone,
    getAllSmartphones,
};
