const {firestore} = require("../firebase/firebase.lib")


const asyncWhere = async (property, operator, value) => {

    let mainDatalist = []

    try{
        let userCollectionRef = firestore.collection('users');

        let usersSnapshot = await userCollectionRef.where(property, operator, value).get();
        // console.log(usersSnapshot.exists)
        usersSnapshot.forEach((doc) => {
            // console.log("pushing data to array")
            mainDatalist.push(doc.data())
        })

        return mainDatalist
    }
    catch(err){
        console.error(err.message)
    }
    

}

const asyncDocumentRead = async (collectionKey, docId) => {
    try{
        let documentRef = firestore.collection(collectionKey).doc(docId);
        
        let docSnapshot = await documentRef.get();

        return docSnapshot.data()
    }
    catch(err){
        console.log("Error occured while reading single document :", err.message)
    }

}

// asyncWhere('age','>', 30)
//     .then((array) =>{
//         console.log(JSON.stringify(array, null, 2))
//     })



// 1c9P1yF8uPCuoRos1dj6 
// 219b314vPTFNLOpL8zzW 
asyncDocumentRead('users','1c9P1yF8uPCuoRos1dj6')
    .then((result)=>{
        console.log(JSON.stringify(result, null, 2))
    })
    .catch(err => console.log(err.message))
