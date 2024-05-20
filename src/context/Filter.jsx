import { createContext } from "react";

export const FilterContext = createContext({
    query: [],
    setQuery: () => {},
})

export const FilterProvider = ({children}) => {
    return (
        <FilterContext.Provider value={{
            query,
            setQuery
        }}>
            {children}
        </FilterContext.Provider>
    )
}