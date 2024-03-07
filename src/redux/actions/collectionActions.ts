import { db } from '../../firebase';
import { ICollection } from "../../types"
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getCollections = async () => {
  try {
    const data: ICollection[] = [];

    const q = query(
      collection(db, "collections")
    )

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id})
    });

    return data;
  } catch (err: any) {
    return console.log(err)
  }
}
