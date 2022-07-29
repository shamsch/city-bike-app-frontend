import { useState } from "react";
import { StyledSearchbar } from "./Searchbar.styled";

interface SearchbarProps {
    onChange: (value: string) => void;
    placeholder?: string;
}


export const Searchbar = ({ onChange, placeholder }: SearchbarProps) => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <>
            <StyledSearchbar>
                <input type="text"
                    placeholder={placeholder ? placeholder : "Search here"}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)} 
                />
                <button
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
