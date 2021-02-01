const faker = require('faker');

const {generateUsersInfo, generateFamiliesInfo} = require("../lib/generators")


const users = generateUsersInfo(20)
const families = generateFamiliesInfo(30)

for(let family of families){
    console.log(family)
}