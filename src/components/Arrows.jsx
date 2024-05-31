import { useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight } from '../icons/Icons'

export const Arrows = ({scrollable}) => {
    const arrows = useRef()
    
    const handleClick = (e, num) => {
        e.preventDefault()

        scrollable.current.scrollLeft += scrollable.current.clientWidth * Number(num)
    }

    useEffect(() => {
        if(scrollable.current.querySelectorAll(".producto").length > 0) {
            const ul = Array.from(scrollable.current.querySelectorAll(".producto"))
            
            if(ul.length <= 3) {
                arrows.current.style.display = "none"
            }
        }

    }, [scrollable.current])

    return (
        <nav className='carousel-arrow' ref={arrows}>
            <button onClick={(e) => handleClick(e, -1)}>
                <ArrowLeft/>
            </button>
            <button onClick={(e) => handleClick(e, 1)}>
                <ArrowRight/>
            </button>
        </nav>
    )
}