import {combineReducers} from "redux";
import tweetReducer from "./TweetReducer";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";
import authReducer from "./authReducer";
import likeAndCommentReducer from "./LikeAndCommentReducer";

const rootReducer = combineReducers({

    tweetReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer,
    auth : authReducer,
    likeComment : likeAndCommentReducer

})

export default rootReducer;