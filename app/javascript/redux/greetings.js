const url = 'http://localhost:8000/messages'

export const getGreetings = () => async (dispatch)=>{
    try {
    const res = await fetch(url)
    const data = await res.json()
    dispatch({type:"FETCH_DATA", payload:data})
    }catch (error){
        console.error(error)
    }
}
const initialState ={greetings:''}
export default (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_DATA':
         return {greetings: action.payload.greetings}
        default:
         return state
    }
}