const faker = require('faker');

function createUserInfo(){
    return {
        firstName: faker.name.firstName(),
        middleName: faker.name.middleName(),
        lastName: faker.name.lastName(),
        gender: faker.name.gender(),
        job: faker.name.jobTitle(),
        image: faker.image.avatar(),
        age: faker.random.number(max=50),
        address: {
            streetSuffix: faker.address.streetSuffix(),
            streetname: faker.address.streetName(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country(),
            countryCode: faker.address.countryCode()
        }
    }
}

function createFamilyInfo(){
    let randomNumber = faker.random.number(max=3)
    return {
        father: faker.name.findName(),
        mother: faker.name.findName(),
        children: randomNumber,
        childrenNames: (function(count){
            let array = []
            for(let i=0;i<count;i++){
                array.push(faker.name.findName())
            }
            return array
        })(randomNumber)
    }
}

function* generateUsersInfo(count){
    for(let i=0;i<count;i++){
        yield createUserInfo()
    }
}


function* generateFamiliesInfo(count){
    for(let i=0;i<count;i++){
        yield createFamilyInfo()
    }
}

module.exports = {
    generateUsersInfo,
    generateFamiliesInfo
}