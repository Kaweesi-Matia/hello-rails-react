import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getGreetings} from  '../redux/greetings'

function Greeting() {
    const ans = useSelector((state)=>state.greetings)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getGreetings())
    },[])
  return (
    <div>{ans.greetings}</div>
  )
}

export default Greeting