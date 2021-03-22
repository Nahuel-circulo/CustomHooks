import { useState } from "react";

const useForm = (initialState = {}) => {
    const [values, setvalues] = useState(initialState);

    const reset= ()=>{
        setvalues(initialState);
    }

    const handleInputChange = ({ target }) => {
        setvalues({
            ...values,
            [target.name]: target.value,
        });
    };

    return [values, handleInputChange,reset];
};

export default useForm;
