const {
    collection, doc, setDoc, addDoc, getDocs, query, where, updateDoc,deleteDoc
    } = require('firebase/firestore');
const {app,db, auth} = require('../firebase/config');

const collectionName="products";
const itemName="Product";


    /**Create */
    async function addProduct(data){
        const newProductRef = doc(collection(db, collectionName));

        await setDoc(newProductRef, data);
        return {
            success:1,
            message:`${itemName} added successfully`
        }
    }
    /**Read */
    //all products
    async function getProducts(){
        let data = [];
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            data.push({
                id:doc.id,
                ...doc.data()
                })
        });
    
        return data;
    }

    //single product
    async function getProduct(id){
        let data = [];
        const q = query(collection(db, "products"), where("id", "==", id));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push({
                id:doc.id,
                ...doc.data()
                })
        });

        return
    }
    /**Update */
    async function updateProduct(id,data){
        const productRef = doc(db, collectionName, id);

        await updateDoc(productRef,data);

        return {
            success:1,
            message:`${itemName} information updated successfully`
        }
    }
    /**Delete */
    async function deleteProduct(id){
        await deleteDoc(doc(db, collectionName,id));
        
        return {
            success:1,
            message:`${itemName} deleted successfully`
        }
    }



module.exports={
    addProduct, getProduct, getProducts,updateProduct,deleteProduct
}