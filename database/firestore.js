import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../auth/firebase";

 async function addMissingPerson (db, firstName, surname, age, gender, eyeColor, hairColor, height, weight, missingFrom, missingSince, identityMark, description){
    try {
        const docRef = await addDoc(collection(db, "missingPeople"), {
          firstName: firstName,
          surname: surname,
          age: age,
          gender: gender,
          eyeColor: eyeColor,
          hairColor: hairColor,
          height: height,
          weight: weight,
          missingFrom: missingFrom,
          missingSince: missingSince,
          identityMark: identityMark,
          description: description,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}

async function getMissingPerson (db){
    const querySnapshot = await getDocs(collection(db, "missingPeople"));
    querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
}


export {addMissingPerson, getMissingPerson}