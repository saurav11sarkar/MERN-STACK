import { useState } from "react";
import CounteryDetaile from "../counteryDetaile/CounteryDetaile";

const Countery = ({ countery, handeleVisitedCountery, handelFlage }) => {
    // console.log(countery)
    const counerysClass = {
        border: '2px solid steelblue',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px',
    }

    const [visited, setVisited] = useState(false);

    const handeleVisited = () => {
        setVisited(prevVisited => !prevVisited)
    }

    // console.log(handeleVisitedCountery);

    const { name, flags, area, currencies, languages, population, cca3 } = countery;
    return (
        <div style={counerysClass} className={visited ? `bg-slate-200 text-black` : `bg-slate-800`}>
            <p style={{ color: visited && 'red' }}>Name : {name.common}</p>

            <img src={flags.png} alt="" />

            <p>Area : {area}</p>

            <p>Currencies : {currencies ? Object.values(currencies).map(currency => currency.name).join(', ') : 'Currency information not available'}</p>

            <p>Language : {languages ? Object.values(languages).join(", ") : 'no information'}</p>

            <p>Population : {population}</p>
            <p><small>Code : {cca3}</small></p>
            <br />
            <button onClick={() => handeleVisitedCountery(countery)} className="btn btn-active btn-accent rounded-full mx-2">{'Marks'}</button>

            <button onClick={() => handelFlage(countery.flags.png)} className="btn btn-active btn-accent rounded-full mx-2">{'Flage'}</button>

            <button onClick={handeleVisited} className="btn btn-active btn-primary rounded-full">{visited ? "Visited" : "Going"}</button>
            <br />
            {
                visited && "I have visited this countery"
            }
            <br />
            <hr />
            <br />
            <CounteryDetaile
                countery={countery}
                handeleVisitedCountery={handeleVisitedCountery}
                handelFlage={handelFlage}
            ></CounteryDetaile>
        </div>
    )
}

export default Countery