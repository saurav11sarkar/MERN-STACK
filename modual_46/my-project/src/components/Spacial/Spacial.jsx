import { useContext } from "react";
import { AssetContext } from "../Granpa/Granpa";

const Spacial = ({asset}) => {
    const grift = useContext(AssetContext)
    return (
        <div>
            <h2>Spacial person: {asset}</h2>
            <h2>Also has: {grift}</h2>
        </div>
    );
};

export default Spacial;