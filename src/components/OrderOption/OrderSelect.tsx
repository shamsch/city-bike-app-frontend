import { StyledOrderSelect } from "./OrderSelect.styled"
import Select from "react-select"
interface OrderSelectProps {
    options: { value: string; label: string }[];
    onChange: (value: {value: string, label: string}) => void;
    placeholder: string;
    value: {value: string, label: string};
}

export const OrderSelect = ({options, onChange, placeholder, value}: OrderSelectProps) => {
    return (
        <div data-testid="order-select">
            <StyledOrderSelect >
                <Select
                    options={[...options]}
                    onChange={(e) => onChange(e? e : options[0])}
                    placeholder={placeholder}
                    value={value}
                />  
            </StyledOrderSelect>
        </div>
    )
}