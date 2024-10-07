import Friend from "../Friend/Friend";
import Spacial from "../Spacial/Spacial";

const Caushin = ({ name, asset }) => {
    return (
        <div>
            <h2>Causin</h2>
            <p>{name}</p>
            <section>
                {asset && <Spacial asset={asset}></Spacial>}
                {name === 'Rubiya' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Caushin;