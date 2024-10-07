import { useEffect, useState } from "react"
import Countery from "../Countery/Countery";


const Counteries = () => {
    const [countery, setCountery] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountery(data))
    }, []);

    const [visttedCountery, setVisitedCountery] = useState([]);
    const handeleVisitedCountery = (countery) =>{
        console.log(countery);
        const newVisitiedCountery = [...visttedCountery,countery]
        setVisitedCountery(newVisitiedCountery)
    }

    const [flages, setFlages] = useState([]);
    const handelFlage = (flag) => {
        console.log("flage Add");
        const newflgs = [...flages,flag]
        setFlages(newflgs)
    }

    // remove item form a list an array in a state
    // use filter to select all the 

    return (
        <div>
            <h3>Countery : {countery.length}</h3>

            <div>
                <h4>Visited Countery : {visttedCountery.length}</h4>
                <ul>
                    {
                        visttedCountery.map(cont => <li key={countery.cca3}>{cont.name.common}</li>)
                    }
                </ul>
            </div>
            
            <div>
                <h4>Visited Flage</h4>
                <ul className="flex gap-2">
                    {
                        flages.map((flg,idx) => <img key={idx}  className="w-20" src={flg}></img>)
                    }
                </ul>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center">

                {
                    countery.map(counteryName => <Countery key={countery.cca3} countery={counteryName} handeleVisitedCountery={handeleVisitedCountery} handelFlage={handelFlage}></Countery>)
                }
            </div>

        </div>
    )
}


export default Counteries

