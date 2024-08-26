
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where
} from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyAxv6TvKkeEp5C0v-mt0RMY-OL3T7jPSRY",
    authDomain: "vanlife-fb1f9.firebaseapp.com",
    projectId: "vanlife-fb1f9",
    storageBucket: "vanlife-fb1f9.appspot.com",
    messagingSenderId: "223082959475",
    appId: "1:223082959475:web:4bfc647a2ebded4ad39006"
  };
  


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getVansbyID(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}
export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}
export async function getHostVansbyID(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

////Mirag api
// export async function getVans() {
//     const res = await fetch("/api/vans")
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export async function getVansbyID(id) {
//     const res = await fetch(`/api/vans/${id}`)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch van informantion", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }
// export async function getHostVans() {
//     const res = await fetch("/api/host/vans")
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch host vans informantion", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export async function getHostVansbyID(id) {
//     const res = await fetch(`/api/host/vans/${id}`)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch host van informantion", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }


export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}