import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Granpa.css';

export const AssetContext = createContext("Goled");
export const MonyContext = createContext(1000);

const Granpa = () => {
    const [mony, setMony] = useState(1000)
    const asset = 'diamond';
    return (
        <div className="grandpa ">
            <p>Net Money: {mony}</p>
            <h3>Grandpa</h3>
            <MonyContext.Provider value={[mony,setMony]}>
                <AssetContext.Provider value="Goled">
                    <section className="flex justify-center items-center">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MonyContext.Provider>
        </div>
    );
};

export default Granpa;