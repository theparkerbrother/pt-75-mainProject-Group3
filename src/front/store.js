import { faLeaf } from "@fortawesome/free-solid-svg-icons";

export const initialStore=()=>{
  return{
    message: null,
    user: {"isAuthenticated": true},
    session: null
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_hello':
      return {
        ...store,
        message: action.payload
      };
      
    case "SET_SESSION":
        return { ...store, user: action.payload.user, session: action.payload.session };

    case "LOGOUT":
        return { ...store, user: null, session: null };

    default:
      throw Error('Unknown action.');
  }    
}
