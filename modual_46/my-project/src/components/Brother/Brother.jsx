import { useContext } from "react";
import { MonyContext } from "../Granpa/Granpa";

const Brother = () => {
    const [mony, setMony] = useContext(MonyContext);
    return (
        <div>
            <h2>Brathor {mony}</h2>
            <button onClick={() => setMony(mony + 500)} className="btn btn-secondary">Add 500 tk</button>
        </div>
    );
};

export default Brother;