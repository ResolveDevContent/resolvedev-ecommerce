import { ArrowLeft, ArrowRight } from '../icons/Icons'

export const Arrows = ({scrollable}) => {
    
    const handleClick = (e, num) => {
        e.preventDefault()
        scrollable.current.scrollLeft += scrollable.current.clientWidth * Number(num)
    }

    return (
        <nav className='carousel-arrow'>
            <button onClick={(e) => handleClick(e, -1)}>
                <ArrowLeft/>
            </button>
            <button onClick={(e) => handleClick(e, 1)}>
                <ArrowRight/>
            </button>
        </nav>
    )
}