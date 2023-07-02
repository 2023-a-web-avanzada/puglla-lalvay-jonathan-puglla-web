import * as helper from "./helper.js";

const smartphonesFilePath = './data/smartphones.json';

// Create
async function createSmartphone(smartphone) {
    try {
        const smartphones = await helper.readJSONFile(smartphonesFilePath);
        const lastSmartphone = smartphones[smartphones.length - 1];
        const id = lastSmartphone ? lastSmartphone.id + 1: 0;
        smartphone = { id, ...smartphone }
        smartphones.push(smartphone);
        await helper.writeJSONFile(smartphonesFilePath, JSON.stringify(smartphones));
        console.log('Smartphone created successfully!');
    } catch (error) {
        console.log('Error: ', error)
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

async function getSmartphoneById(id) {
    const smartphones = await helper.readJSONFile(smartphonesFilePath);
    const smartphone = smartphones.find(smartphone => smartphone.id === id);
    if (smartphone) {
        console.log('Smartphone found:');
        console.log('------------------------------------');
        console.log(`ID: ${smartphone.id}`);
        console.log(`Name: ${smartphone.name}`);
        console.log(`Brand ID: ${smartphone.brandId}`);
        console.log(`Color: ${smartphone.color}`);
        console.log(`Price: $${smartphone.price}`);
        console.log('------------------------------------');
    } else {
        console.log('Smartphone not found.');
    }
}

// Update
async function updateSmartphone(id, updatedSmartphone) {
    const smartphones = await helper.readJSONFile(smartphonesFilePath);
    const index = smartphones.findIndex(smartphone => smartphone.id === id);
    if (index !== -1) {
        smartphones[index] = {...smartphones[index], ...updatedSmartphone};
        await helper.writeJSONFile(smartphonesFilePath, JSON.stringify(smartphones));
        console.log('Smartphone updated successfully!');
    } else {
        console.log('Smartphone not found.');
    }
}

// Delete
async function deleteSmartphoneById(id) {
    const smartphones = await helper.readJSONFile(smartphonesFilePath);
    const updatedSmartphones = smartphones.filter(smartphone => smartphone.id !== id);
    if (updatedSmartphones.length !== smartphones.length) {
        await helper.writeJSONFile(smartphonesFilePath, JSON.stringify(updatedSmartphones));
        console.log('Smartphone deleted successfully!');
    } else {
        console.log('Smartphone not found.');
    }
}

export {
    createSmartphone,
    getAllSmartphones,
    getSmartphoneById,
    updateSmartphone,
    deleteSmartphoneById
};
