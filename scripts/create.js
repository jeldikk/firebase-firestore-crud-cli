const {firestore, createCollectionWithData, doesCollectionExists} = require("../firebase/firebase.lib")
const {generateUsersInfo, generateFamiliesInfo} = require("../lib/generators")


console.log("Preparing to create data")
const users = generateUsersInfo(50);
const families = generateFamiliesInfo(100)

const itemList = [];

for(let item of families){
    itemList.push(item)
}
console.log("Done creating data")

// createCollectionWithData('users', userList)
createCollectionWithData('families', itemList)

