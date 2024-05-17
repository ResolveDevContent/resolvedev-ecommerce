import { useEffect, useState } from 'react';
import { Link } from 'resolvedev-router'

export const NavLink = ({to, children}) => {

    const [ pathname, setPathname ] = useState("")
    var isActive;
    var className;

    useEffect(() => {
        const url = new URL(window.location.href)

        setPathname(url.pathname)
        isActive = url.pathname === to;
        className = isActive ? 'active' : '';
        console.log(pathname, url, isActive, className)
    }, [pathname])

    return (
        <Link className={className} to={to}>
            {children}
        </Link>
    )
}