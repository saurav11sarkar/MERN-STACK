import { useState } from "react"

const useInputState = (defaultValue = null) => {
   const [value, setvalue] = useState(defaultValue); 

    // const heandleChange = val =>{
    //     setvalue(val.target.value);
    // }
    
    const onChange = val =>{
        setvalue(val.target.value);
    }

    // return [value, heandleChange];
    return {
        value,
        onChange
    }
}

export default useInputState;