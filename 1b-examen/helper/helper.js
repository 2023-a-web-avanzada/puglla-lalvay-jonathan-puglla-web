import {readFile, writeFile} from "fs";

// Read JSON files
async function readJSONFile(file) {
    return new Promise(
        (resolve, reject) => {
            readFile(file, 'utf-8',
                (readError, data) => {
                    if (readError) {
                        console.error(readError);
                        reject('Error reading JSON file.');
                    } else {
                        resolve(JSON.parse(data));
                    }
                }
            );
        }
    );
}

// Write JSON files
async function writeJSONFile(file, data) {
    return new Promise(
        (resolve, reject) => {
            writeFile(file, data,
                (writeError) => {
                    if(writeError) {
                        console.error(writeError);
                        reject('Error writing JSON file.')
                    } else {
                        resolve(JSON.parse(data));
                    }
                }
            );
        }
    );
}

export {
    readJSONFile,
    writeJSONFile,
};