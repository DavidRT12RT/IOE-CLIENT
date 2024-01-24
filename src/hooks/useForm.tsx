import { ChangeEvent, useState } from "react";

export function useForm<T>(initialState:T) {
    const [ values,setValues ] = useState(initialState);

    const handleChange = ({target}:ChangeEvent<HTMLInputElement>) => {
        const { name,value } = target;
        setValues({
            ...values,
            [name]:value
        });
    }

    return {
        values,
        handleChange
    }

}