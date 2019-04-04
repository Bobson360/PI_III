import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "",
    authDomain: "vuejs-8061f.firebaseapp.com",
    databaseURL: "https://vuejs-8061f.firebaseio.com",
    projectId: "vuejs-8061f",
    storageBucket: "vuejs-8061f.appspot.com",
    messagingSenderId: "S"
})

export const db = app.database()
export const productRef = db.ref('product')