import { db } from '../../firebase';
import { IQuestion } from "../../types"
import { collection, query, getDocs } from 'firebase/firestore';

export const getQuestions = async () => {
  try {
    const data: IQuestion[] = [];

    const q = query(
      collection(db, "questions")
    )

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id})
    });

    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};