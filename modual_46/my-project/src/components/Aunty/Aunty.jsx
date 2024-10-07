import { useContext } from "react";
import Caushin from "../Caushin/Caushin";
import { MonyContext } from "../Granpa/Granpa";

const Aunty = () => {
    const [mony, setMony] = useContext(MonyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Caushin name={'Mamshad'}></Caushin>
                <Caushin name={'Rubiya'}></Caushin>
            </section>
            <p>Money: {mony}</p>
            <button onClick={()=> setMony(mony + 1000)} className="btn btn-success">Add 1000 tk</button>
        </div>
    );
};

export default Aunty;