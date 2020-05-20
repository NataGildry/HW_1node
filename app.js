const path = require('path');

const fs = require('fs').promises;
//---------------------1st method to change files----------------------
// async function swap(folderFrom, folderTo) {
//     const directoryFrom = path.join(__dirname, folderFrom);
//     const directoryTo = path.join(__dirname, folderTo);
//     const directorySwapFolder = path.join(__dirname, 'swapfolder');
//
//     await fs.mkdir(directorySwapFolder);
//     await copyFile(directoryFrom, directorySwapFolder);
//     await copyFile(directoryTo, directoryFrom);
//     await copyFile(directorySwapFolder, directoryTo);
//     await fs.rmdir(directorySwapFolder)
// }
// async function copyFile(directoryFrom, directoryTo) {
//     const files = await fs.readdir(directoryFrom);
//     for (const file of files) {
//         await fs.rename(
//             path.join(directoryFrom, file),
//             path.join(directoryTo, file),
//         )
//     }
// }
//
// swap('folder1', 'folder2');

//---------------------2nd method to change files----------------------
// const fs = require('fs');
//
// function swap(folderFrom, folderTo) {
//     const directoryFrom = path.join(__dirname, folderFrom);
//     const directoryTo = path.join(__dirname, folderTo);
//     const directorySwapFolder = path.join(__dirname, 'swapfolder');
//
//     createDirectory(directorySwapFolder)
//         .then(() => copyFile(directoryFrom, directorySwapFolder))
//         .then(() => copyFile(directoryTo, directoryFrom))
//         .then(() => copyFile(directorySwapFolder, directoryTo))
//         .then(() => deleteDirectory(directorySwapFolder))
//         .catch(err => console.log(err));
// }
//
// const createDirectory = (directorySwapFolder) => new Promise( (resolve, reject) => {
//     fs.mkdir(directorySwapFolder, err => {
//         if (err) reject(err);
//         resolve()
//     })
// });
//
// const deleteDirectory = (directorySwapFolder) => new Promise( (resolve, reject) => {
//     fs.rmdir(directorySwapFolder, err => {
//         if (err) reject(err);
//         resolve()
//     })
// });
// const copyFile = (directoryFrom, directoryTo) => new Promise( (resolve, reject) => {
//     fs.readdir(directoryFrom, (err, files) => {
//         if (err) reject(err);
//         resolve(files);
//     })
// }).then (files => new Promise((resolve, reject) => {
//     for (const file of files) {
//         fs.rename(
//             path.join(directoryFrom, file),
//             path.join(directoryTo, file),
//             err => {
//                 if (err) reject(err)
//             }
//         )
//     }
//     resolve ();
// }));
//
// swap('folder1', 'folder2');

const axios = require('axios').default;
const fetch = require("axios");
const api = `https://jsonplaceholder.typicode.com/users`;
const fileName = 'text.json';
//---------------------1st method to get data with axios----------------------
// const getData = async api => {
//     try {
//         const response = await axios.get(api);
//         const data = response.data;
//         console.log(data);
//     }
//     catch (err) {
//         console.log(err);
//     }
// };
// getData(api);

//---------------------2nd method to get data with axios----------------------
 axios(api)
    .then (({data}) => fs.writeFile(fileName, JSON.stringify(data)))
    .then(() => fs.readFile(fileName))
    .then(usersFromFile => console.log(JSON.parse(usersFromFile.toString())))
    .catch(err => console.log(err));
