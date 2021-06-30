// dictionary.js
import { firestore } from "../../firebase";

const dict_db = firestore.collection("dict");
// Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";

const initialState = {
    // word: ["ㅎ1ㅎ1", "ㅋ1ㅋ1", "ㅌ1ㅌ1"],
    // desc: ["히히를 변형한 단어.숫자 1을 'l'로 쓴다.", "두번째 예시", "세번째 예시"],
    // example: ["저 친구가 초콜릿을 줬어. ㅎ1ㅎ1", "두번째 예시", "세번째 예시"]

    list: [
        {
            word: "ㅎ1ㅎ1",
            desc: "히히를 변형한 단어.숫자 1을 'l'로 쓴다.",
            example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
        },
        {
            word: "ㅋ1ㅋ1",
            desc: "키키를 변형한 단어. 숫자1을 'l'로 쓴다.",
            example: "저 친구가 사탕을 줬어. ㅋ1ㅋ1",
        }
    ]
}
// Action Creators
export const loadDict = (dictionary) => {
    return { type: LOAD, dictionary };
}

export const createDict = (dictionary) => {
    return { type: CREATE, dictionary };
}

export const loadDictFB = () => {
    return function(dispatch) {
        
        dict_db.get().then((docs)=>{
            let dict_data = [];

            docs.forEach((doc)=>{
                if(doc.exists){
                    dict_data = [...dict_data, {id: doc.id, ...doc.data()}];
                }
            })

            console.log(dict_data);
        });
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "dictionary/LOAD": {
            console.log(state, action);
            return state;
        }

        case "dictionary/CREATE": {
            console.log(state, action);
            // return [...state, {word: action.word, desc: action.desc, example: action.example}];
            const new_dict_list = [
                ...state.list, action.dictionary,
            ]
            return {list: new_dict_list}
        }
        default:
            return state;

    }
}