export function tweet(tweet) {

    return(dispatch,getState,{getFirebase,getFirestore})=>{

        const firestore = getFirestore();
        const user = getState().firebase.profile;

        firestore.collection('tweets').add({

            content : tweet.content,
            user,
            date : new Date(),
            comments : [],
            like : [],
            createComment : false,
            comment : 0



        }).then(()=>{

            dispatch({type :'TWEETED',payload : 'Tweeted !'})

        }).catch(err=>{

            dispatch({type :'NOT_TWEETED',payload: err})

        })

    }

}

export default tweet;