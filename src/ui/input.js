import {useEffect, useState} from "react";

const Input = ({type = 'text', setState, state, label, disabled = false}) => {
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        if (state !== null && state !== undefined) {
            setInputValue(state)
        }
    }, [state]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setState(e.target.value)
    }

    return (
        <div className="form-floating" style={{marginBottom: "10px"}}>
            <input
                type={type}
                className="form-control"
                id={`floating${label}`}
                placeholder={label}
                autoComplete={type === 'password' ? 'off' : 'on'}
                value={inputValue}
                onChange={handleInputChange}
                disabled={disabled}
            />
            <label htmlFor="floatingUsername">{label}</label>
        </div>
    );
};

export default Input;