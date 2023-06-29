import inquirer from "inquirer";
import * as smartphoneHelper from "./helper/smartphoneHelper.js";

// Main menu
async function mainMenu() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'entity',
                message: 'Select an entity:',
                choices: ['Smartphone', 'Brand']
            },
            {
                type: 'list',
                name: 'operation',
                message: 'Select an operation:',
                choices: ['Create', 'Read', 'Update', 'Delete']
            }
        ]);

        if (answers.entity === 'Smartphone') {
            switch (answers.operation) {
                case 'Create':
                    // {"id":1,"name":"Phone 1","brandId":1,"color":"Black","price":999}
                    const newSmartphone = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Smartphone name:'
                        },
                        {
                            type: 'list',
                            name: 'brandId',
                            message: 'Select a brand:',
                            choices: [1, 2, 3]
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
                            message: 'Smartphone price:'
                        }
                    ])
                    await smartphoneHelper.createSmartphone(newSmartphone);
                    break;
                case 'Read':
                    await smartphoneHelper.getAllSmartphones();
                    break;
                case 'Update':
                    await updateSmartphonePrompt();
                    break;
                case 'Delete':
                    await deleteSmartphonePrompt();
                    break;
            }
        } else if (answers.entity === 'Brand') {
            switch (answers.operation) {
                case 'Create':
                    await createBrandPrompt();
                    break;
                case 'Read':
                    await getAllBrands();
                    break;
                case 'Update':
                    await updateBrandPrompt();
                    break;
                case 'Delete':
                    await deleteBrandPrompt();
                    break;
            }
        }
    } catch (err) {
        console.log('Error:', err);
    }
}

mainMenu();