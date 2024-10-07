import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption"

const PriceOptionDetali = () => {
    const [price, setPrice] = useState([]);
    useEffect(() => {
        fetch('priceOption.json')
        .then(res=>res.json())
        .then(data=>setPrice(data))
    },[])

    return (
        <div>
            <h2 className="text-5xl">Best Price in the tworn</h2>
            <div className="grid lg:grid-cols-4 gap-4">
            {
               price.map(option => <PriceOption key={option.id} option={option}></PriceOption>) 
            }
            </div>
        </div>
    );
};

export default PriceOptionDetali;