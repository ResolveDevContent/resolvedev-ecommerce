import { useState, createContext } from "react";
 
export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [query, setQuery] = useState("");
 
    return (
        <FilterContext.Provider value={{ query, setQuery }}>
            {children}
        </FilterContext.Provider>
    );
};