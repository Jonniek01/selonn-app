const {
    collection, doc, setDoc, addDoc, getDocs, query, where, updateDoc,deleteDoc
    } = require('firebase/firestore');
const {app,db, auth} = require('../firebase/config');

const collectionName="users";
const itemName="User";

     /**Create */
     async function addUser(data){
        const newProductRef = doc(collection(db, collectionName));

        await setDoc(newProductRef, data);
        return {
            success:1,
            message:`${itemName} added successfully`
        }
    }
    /**Read */
    //all users
    async function getUsers(){
        let data = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            data.push({
                id:doc.id,
                ...doc.data()
                })
        });
    
        return data;
    }

    //single user
    async function getUser(id){
        let data = [];
        const q = query(collection(db, "users"), where("id", "==", id));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push({
                id:doc.id,
                ...doc.data()
                })
        });

        return data;
    }
    /**Update */
    async function updateUser(id,data){
        const productRef = doc(db, collectionName, id);

        await updateDoc(productRef,data);

        return {
            success:1,
            message:`${itemName} information updated successfully`
        }
    }
    /**Delete */
    async function deleteUser(id){
        await deleteDoc(doc(db, collectionName,id));
        
        return {
            success:1,
            message:`${itemName} deleted successfully`
        }
    }



module.exports={
    addUser, getUser,getUsers,updateUser,deleteUser
}