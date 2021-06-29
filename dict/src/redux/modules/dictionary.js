// dictionary.js

// Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";

const initialState = {
    word: ["ㅎ1ㅎ1","ㅋ1ㅋ1","ㅌ1ㅌ1"],
    desc: ["히히를 변형한 단어.숫자 1을 'l'로 쓴다.", "두번째 예시","세번째 예시"],
    example: ["저 친구가 초콜릿을 줬어. ㅎ1ㅎ1","두번째 예시2","세번째 예시2"]
}
// Action Creators
export const loadDict = (dictionary) => {
    return {type:LOAD, dictionary};
}

export const createDict = (dictionary) => {
    return {type: CREATE, dictionary};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "dictionary/LOAD": {
            return state;
        }
        
        case "dictionary/CREATE": {
            const new_dict_list = [...state.list, action.bucket];
            return {list: new_dict_list};
        }
        default: return state;
    }
}