import inquirer from "inquirer";
import * as smartphoneHelper from "./helper/smartphoneHelper.js";
import * as brandHelper from "./helper/brandHelper.js";
import * as helper from "./helper/helper.js";

// Variables
const brandsFilePath = './data/brand.json';
const smartphonesFilePath = './data/smartphones.json';

// Functions
// Brands and smartphones
async function getBrands() {
    return await helper.readJSONFile(brandsFilePath);
}

async function getSmartphones() {
    return await helper.readJSONFile(smartphonesFilePath);
}

// Brand IDs
async function getBrandsIds() {
    const myBrands = await getBrands();
    return myBrands.map(brand => brand.id);
}

// Smartphone IDs
async function getSmartphonesIds() {
    const mySmartphones = await getSmartphones();
    return mySmartphones.map(smartphone => smartphone.id);
}
// Smartphones prompts
async function createSmartphonePrompt() {
    const myBrandIds = await getBrandsIds();
    await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Smartphone name:'
        },
        {
            type: 'list',
            name: 'brandId',
            message: 'Select a brand:',
            choices: myBrandIds
        },
        {
            type: 'list',
            name: 'color',
            message: 'Select a color:',
            choices: ['Black', 'Silver', 'Red', 'Gray']
        },
        {
            type: 'input',
            name: 'price',
            message: 'Smartphone price:',
            validate: function (input) {
                const number = parseFloat(input);
                if (!isNaN(number)) {
                    return true;
                }
                return 'Please enter a valid number';
            }
        }
    ]).then(
        smartphone => {
            smartphone.price = parseFloat(smartphone.price);
            smartphoneHelper.createSmartphone(smartphone);
        }
    );
}

async function readSmartphonesPrompt() {
    await smartphoneHelper.getAllSmartphones();
}

async function updateSmartphonePrompt() {
    const smartphonesIds = await getSmartphonesIds();

    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "id",
            message: "Smartphone Id:",
            choices: smartphonesIds
        }
    ])

    const myBrandIds = await getBrandsIds();

    await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Smartphone name:'
        },
        {
            type: 'list',
            name: 'brandId',
            message: 'Select a brand:',
            choices: myBrandIds
        },
        {
            type: 'list',
            name: 'color',
            message: 'Select a color:',
            choices: ['Black', 'Silver', 'Red', 'Gray']
        },
        {
            type: 'input',
            name: 'price',
            message: 'Smartphone price:',
            validate: function (input) {
                const number = parseFloat(input);
                if (!isNaN(number)) {
                    return true;
                }
                return 'Please enter a valid number';
            }
        }
    ]).then(
        updatedSmartphone => {
            updatedSmartphone.price = parseFloat(updatedSmartphone.price);
            smartphoneHelper.updateSmartphone(parseInt(answer.id), updatedSmartphone);
        }
    );
}

async function deleteSmartphonePrompt() {
    const smartphonesIds = await getSmartphonesIds();
    await inquirer.prompt([
        {
            type: "list",
            name: "id",
            message: "Smartphone Id:",
            choices: smartphonesIds
        }
    ]).then(
        answer => {
            smartphoneHelper.deleteSmartphoneById(parseInt(answer.id))
        }
    );
}

// Brands prompts
async function createBrandPrompt() {
    await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Brand name:'
        },
        {
            type: 'list',
            name: 'country',
            message: 'Select a country:',
            choices: ['USA', 'Japan', 'Ecuador', 'Colombia']
        },
        {
            type: 'input',
            name: 'established',
            message: 'Brand year:'
        },
        {
            type: 'list',
            name: 'active',
            message: 'Currently active:',
            choices: ['yes', 'no']
        }
    ]).then(
        brand => {
            brand.active = (brand.active === 'yes');
            brand.established = parseInt(brand.established.toString());
            brandHelper.createBrand(brand);
        }
    );
}

async function readBrandsPrompt() {
    await brandHelper.getAllBrands();
}

async function updateBrandPrompt() {
    const brandsIds = await getBrandsIds();
    const answer = await inquirer.prompt(
        {
            type: "list",
            name: "id",
            message: "Brand Id:",
            choices: brandsIds
        }
    );

    await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Brand name:'
        },
        {
            type: 'list',
            name: 'country',
            message: 'Select a country:',
            choices: ['USA', 'Japan', 'Ecuador', 'Colombia']
        },
        {
            type: 'input',
            name: 'established',
            message: 'Brand year:'
        },
        {
            type: 'list',
            name: 'active',
            message: 'Currently active:',
            choices: ['yes', 'no']
        }
    ]).then(
        updatedBrand => {
            updatedBrand.active = (updatedBrand.active === 'yes');
            updatedBrand.established = parseInt(updatedBrand.established);
            brandHelper.updateBrand(parseInt(answer.id), updatedBrand)
        }
    );
}

async function deleteBrandPrompt() {
    const brandsIds = await getBrandsIds();
    await inquirer.prompt(
        {
            type: "list",
            name: "id",
            message: "Brand Id:",
            choices: brandsIds
        }
    ).then(
        answer => {
            brandHelper.deleteBrandById(parseInt(answer.id));
        }
    );
}

// Main menu
async function mainMenu() {
    try {
        while (true) {
            const answers = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'entity',
                    message: 'Select an entity:',
                    choices: ['Smartphone', 'Brand', 'Exit']
                }
            ]);

            if (answers.entity === 'Exit') {
                break;
            }

            const operationsAnswers = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'operation',
                    message: 'Select an operation:',
                    choices: ['Create', 'Read', 'Update', 'Delete']
                }
            ]);

            if (answers.entity === 'Smartphone') {
                switch (operationsAnswers.operation) {
                    case 'Create':
                        await createSmartphonePrompt();
                        break;

                    case 'Read':
                        await readSmartphonesPrompt();
                        break;
                    case 'Update':
                        await updateSmartphonePrompt();
                        break;
                    case 'Delete':
                        await deleteSmartphonePrompt();
                        break;
                }
            } else if (answers.entity === 'Brand') {
                switch (operationsAnswers.operation) {
                    case 'Create':
                        await createBrandPrompt();
                        break;
                    case 'Read':
                        await readBrandsPrompt();
                        break;
                    case 'Update':
                        await updateBrandPrompt();
                        break;
                    case 'Delete':
                        await deleteBrandPrompt();
                        break;
                }
            }
        }
    } catch (error) {
        console.log('Error:', error);
    }
}

mainMenu();
