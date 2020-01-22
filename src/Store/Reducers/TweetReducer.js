import initialState from "./initialState";

export function tweetReducer(state=initialState.tweets,action) {

    if(action.type === 'TWEETED'){

        return state

    }else {

        return state;
    }

}

export default tweetReducer;