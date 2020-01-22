export function signup(kimlik) {

    return(dispatch,getState,{getFirebase,getFirestore})=>{

        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(kimlik.email,kimlik.password).then((response)=>{

         return firestore.collection('users').doc(response.user.uid).set({

               name : kimlik.name,
               email : kimlik.email,
               birthday: kimlik.birthday,
               id : response.user.uid,
               tweets : [],
               imageURL : kimlik.image,
               bio: kimlik.bio

           })

        }).then(()=>{

            dispatch({type : 'SIGN_UP_SUCCESS',message : 'KAYIT BAŞARILI'})

        }).catch(err=>{

            console.log(err);

            dispatch({type : 'SIGN_UP_ERROR',payload : err.message})

        })


    }

}

export function signin(kimlik) {

    return(dispatch,getState,{getFirebase})=>{

        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(kimlik.email,kimlik.password).then(()=>{

            dispatch({type : 'SIGN_IN_SUCCESS',payload : 'KAYIT BAŞARILI'})

        }).catch(err=>{

            dispatch({type : 'SIGN_IN_ERROR',payload :err.message})

        })


    }

}

export function signout() {

    return(dispatch,getState,{getFirebase})=>{

        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{

            dispatch({type :'SIGN_OUT'})

        })

    }

}

export default {signup,signin,signout};