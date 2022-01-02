import { useEffect, useState, SetStopTime  } from "react"

export default function Timer({ SetStopTime, questionNumber }) {

const [timer, setTimer] = useState(30);
    
    useEffect (() => {
        if(timer === 0) return SetStopTime(true) 
        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [SetStopTime, timer])

    useEffect(() => {
       setTimer(30);
    }, [questionNumber])

    return timer
}
