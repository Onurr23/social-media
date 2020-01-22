import initialState from "./initialState";

export function authReducer(state=initialState.message,action) {

    if (action.type === 'SIGN_UP_SUCCESS'){

        return action.message;

    }else if(action.type === 'SIGN_UP_ERROR'){


        return action.payload;

    }else if(action.type === 'SIGN_IN_SUCCESS'){

        return action.payload;

    }else if(action.type === 'SIGN_IN_ERROR'){

        return action.payload;

    }else if(action.type === 'SIGN_OUT'){

        return state;

    }else if(action.type === 'UPDATED'){

        return action.payload;

    }else {

        return state;

    }

}

export default authReducer;