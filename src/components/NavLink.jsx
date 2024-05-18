import { useEffect, useState } from 'react';
import { Link } from 'resolvedev-router'

export const NavLink = ({to, children}) => {
    var className;
    // var isActive;

    // const url = new URL(window.location.href)
    // useEffect(() => {

    //     isActive = url.pathname === to;
    //     className = isActive ? 'active' : '';
    //     console.log(url.pathname, isActive, className)
    //     history.pushState({}, "", url.pathname)
    //     console.log(history)
    // }, [url])

    return (
        <Link className={className} to={to}>
            {children}
        </Link>
    )
}