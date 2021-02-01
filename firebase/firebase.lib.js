const firebase = require("firebase/app");
const {firebaseConfig} = require("./firebase.config")
require('firebase/firestore');

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

//  console.log(firebaseConfig)


 const firestore = firebase.firestore();


 const createCollectionWithData = async (collectionKey, collectionData) => {

    try{
        const collectionRef = firestore.collection(collectionKey);

        const batch = firestore.batch();
        collectionData.forEach((collectionItem)=>{
            const docRef = collectionRef.doc();
            batch.set(docRef, collectionItem)
        })

        const result = await batch.commit()
        return result
    }
    catch(err){
        console.error("Error occured while fetching data :", err.message)
    }
    
 }

 const doesCollectionExists = async (collectionKey) => {

    // console.log({key})
     try{
        const collectionRef = firestore.collection(collectionKey)
        console.log({collectionKey})

        let atleastOneItem = await collectionRef.limit(1).get();
        // console.log(atleastOneItem)
        
        return atleastOneItem.find((doc) => doc.exists)
        // return atleastOneItem.exists
     }
     catch(err){
         console.error("Error occured while retrieving collection existance :", err.message)
         return false
     }
     
 }


 module.exports = {
     firestore,
     createCollectionWithData,
     doesCollectionExists
 }