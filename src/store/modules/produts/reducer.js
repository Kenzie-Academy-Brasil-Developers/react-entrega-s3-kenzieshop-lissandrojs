import { ADD_PRODUCT} from "./actionTypes";

const reducerCard =(state = [],action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            const {shape} = action
            return [...state,shape];
        default:return state


    }


}

export default reducerCard