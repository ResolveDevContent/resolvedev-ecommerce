import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const NavLink = ({to, children}) => {
    const [ className, setClassName] = useState("")
    const location = useLocation()

    useEffect(() => {
        if(location.pathname == to) {
            setClassName("active")
        } else {
            setClassName("")
        }

    }, [location])

    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    )
}