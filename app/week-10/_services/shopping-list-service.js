import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

const getItems = async (userId) => {
  const items = [];
  const docref = query(collection(db, `users/${userId}/items`));
  const docsnap = await getDocs(docref);
  docsnap.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
};

const addItem = async (userId, item) => {
  const docref = await addDoc(collection(db, `users/${userId}/items`), item);
  return docref.id;
};

export { getItems, addItem };
