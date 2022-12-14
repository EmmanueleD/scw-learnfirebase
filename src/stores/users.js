import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import router from '../router'

export const useUsersStore = defineStore('userStore', {
  state: () => ({
    userData: null,
    loadingUser: false,
    loadingSession: false
  }),
  actions: {
    async registerUser(email, password){
      this.loadingUser = true
      try{
        const { user } = await createUserWithEmailAndPassword(
          auth, 
          email, 
          password
        )
        this.userData = {
          email: user.email,
          uid: user.uid
        }
        console.log('registered: ', user.email);
        router.push('/')
      }catch(error){
        console.log("UsersStore - Register User error: ", error)      
      }finally{
        this.loadingUser = false
      }
    },
    async loginUser(email, password){
      this.loadingUser = true
      try{
        const {user} = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
        this.userData = {
          email: user.email,
          uid: user.uid
        }
        console.log('logged in: ', user.email);
        router.push('/')
      }catch(error){
        console.log("UsersStore - Login User error: ", error)
      }finally{
        this.loadingUser = false
      }
    },
    async logoutUser(){
      try{
        const response = await signOut(auth)
        this.userData = null
        router.push('/login')
      }catch(error){
        console.log("UsersStore - Logout User error: ", error)
      }
    },
    currentUser(){
      return new Promise((res, rej)=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
          if(user){
            this.userData = {
              email: user.email,
              uid: user.uid
            }
          }else{
            this.userData = null
          }
          res(user)
        }, 
        e => rej(e))
        unsubscribe()
      })
    }
  }
})