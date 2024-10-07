import Caushin from "../Caushin/Caushin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Caushin name={"Rafsan"} asset={asset}></Caushin>
                <Caushin name={"Sohana"}></Caushin>
            </section>
        </div>
    );
};

export default Uncle;