import { add, multipation } from "./calcuter";

const Sunglash = () => {
    let first = 10;
    let secend = 20;
    const sum = add(first, secend);
    const mult = multipation(first, secend);
    return (
        <div>
            <h2>Sum : {sum}</h2>
            <h2>Multication : {mult}</h2>
        </div>
    );
};

export default Sunglash;