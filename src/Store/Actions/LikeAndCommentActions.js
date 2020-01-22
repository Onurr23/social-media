export function like(like,id) {

    return(dispatch,getState,{getFirestore})=>{

        const firestore = getFirestore();

        firestore.collection('tweets').doc(id).update({

            like :like

        }).then(()=>{

            dispatch({type :'LIKED',payload:like})

        })

    }

}
export function comment(comment,id,count) {

    return(dispatch,getState,{getFirestore})=>{

        const firestore = getFirestore();
        const user = getState().firebase.profile;


        firestore.collection('comments').add({

            comment,
            user,
            replyTo : id,
            date : new Date()


        }).then(()=>{

            return firestore.collection('tweets').doc(id).update({

                comment : count

            })

        }).then(()=>{

            dispatch({type :'COMMENTED',payload:comment})

        })

    }

}

export function createComment(create,id) {

    return(dispatch,getState,{getFirestore})=>{

        const firestore = getFirestore();

        firestore.collection('tweets').doc(id).update({

            createComment : create

        }).then(()=>{

            dispatch({type :'CHANGED',payload:create})

        })

    }
}

export default {like,comment,createComment};