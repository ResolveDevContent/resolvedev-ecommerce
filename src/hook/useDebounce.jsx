import { useState, useEffect } from "react"

export const useDebounce = (value) => {
    const [ debounceValue, setDebounceValue ] = useState(value)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, 1000)

        return () => { clearTimeout(timer) } 
    }, [value])

    return debounceValue
}