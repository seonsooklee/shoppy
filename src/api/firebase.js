import {initializeApp} from "firebase/app";
import {getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged} from "firebase/auth";
import {getDatabase, ref, child, get, set} from "firebase/database";
import {v4 as uuid} from 'uuid'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_API_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getDatabase();


export const login = () => {
  signInWithPopup(auth, provider)
    .catch(console.error);
}

export const logout = () => {
  signOut(auth)
    .catch(console.error);
}

export const onUserStateChange = (callback) => {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : user
    console.log(updatedUser)
    callback(updatedUser)
  })
}

const dbRef = ref(getDatabase());
const adminUser = async (user) => {
  return get(child(dbRef, `admins`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid)
        return {...user, isAdmin}
      } else {
        console.log("No data available");
      }
    })
    .catch(console.error);
}

export const uploadProduct = async (product, url) => {
  const id = uuid();
  return set(ref(db, 'products/' + id), {
    ...product,
    price: parseInt(product.price),
    id,
    url
  })
}

export const getProducts = () => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `products/`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val())
    }
    return [];
  })
    .catch((error) => {
    console.error(error);
  });
}

export const getProduct = (id) => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `products/${id}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val()
    } else {
      return []
    }
  }).catch((error) => {
    console.error(error);
  });
}
