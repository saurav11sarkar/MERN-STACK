import { useContext } from "react";
import { AssetContext } from "../Granpa/Granpa";

const Friend = () => {
    const gifts = useContext(AssetContext)
    return (
        <div>
            <h2>Frind</h2>
            <p>Has: {gifts}</p>
        </div>
    );
};

export default Friend;