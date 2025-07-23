    // models/product.model.js
    import { db, collection, getDocs, getDoc, addDoc, deleteDoc, doc } from '../config/firebase.config.js';

    const productsCollectionRef = collection(db, 'products');

    export const getProducts = async () => {
      const querySnapshot = await getDocs(productsCollectionRef);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    };

    export const getProductById = async (id) => {
      const productDocRef = doc(db, 'products', id);
      const productDoc = await getDoc(productDocRef);
      if (productDoc.exists()) {
        return { id: productDoc.id, ...productDoc.data() };
      }
      return null;
    };

    export const addProduct = async (productData) => {
      const docRef = await addDoc(productsCollectionRef, productData);
      return { id: docRef.id, ...productData };
    };

    export const deleteProduct = async (id) => {
      const productDocRef = doc(db, 'products', id);
      await deleteDoc(productDocRef);
      return true; // Assuming deletion is successful if no error is thrown
    };
    