import { useState } from "react";
import { StyledSearchbar } from "./Searchbar.styled";

interface SearchbarProps {
    onChange: (value: string) => void;
    placeholder?: string;
    initialValue: string;
}


export const Searchbar = ({ onChange, placeholder, initialValue }: SearchbarProps) => {
    const [searchValue, setSearchValue] = useState(initialValue);
    return (
        <>
            <StyledSearchbar data-testid="searchbar">
                <input type="text"
                    data-testid="searchbar-input"
                    placeholder={placeholder ? placeholder : "Search here"}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)} 
                />
                <button
                    data-testid="searchbar-button"
                    onClick={() => {
                        onChange(searchValue);
                        setSearchValue("");
                    }
                    }
                >
                    Search 
                </button>
           </StyledSearchbar>
        </>
    )
}
