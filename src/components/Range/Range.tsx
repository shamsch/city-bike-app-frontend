import { useState } from "react";
import { Range as ReactRange } from "react-range"
import { StyledRange } from "./Range.styled";
interface RangeProps {
    title: string;
    min: number;
    max: number;
    step: number;
    onSubmit: (value: number[]) => void;
}

export const Range = ({ min, max, step, title, onSubmit }: RangeProps) => {
    const [rangeValue, setRangeValue] = useState([min, max]);

    return (
        <StyledRange>
            <p>{title}</p>
            <div className="range">
                <ReactRange
                    min={min}
                    max={max}
                    step={step}
                    values={rangeValue}
                    onChange={(value) => setRangeValue(value)}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '6px',
                                width: '100%',
                                backgroundColor: '#ccc'
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '42px',
                                width: '42px',
                                backgroundColor: '#999'
                            }}
                        />
                    )}
                />
            </div>
            <p>{rangeValue[0]}-{rangeValue[1]}</p>
            <button onClick={() => onSubmit(rangeValue)}>Apply filter</button>
        </StyledRange>
    )
}
