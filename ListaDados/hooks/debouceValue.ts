import { useEffect, useState } from 'react'

export default function useDebounceValue < t = unknown>(value:t, delay:number){
    
    const [debousedValue, setDeboucedValue] = useState(value)

    useEffect(()=>{
        const handler = setTimeout(() => {
            setDeboucedValue(value)            
        }, delay);

        return () =>{
            clearTimeout(handler)
        }

    }, [value,delay])

    return debousedValue

}
