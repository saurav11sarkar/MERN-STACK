import CounteryData from "../counteryData/CounteryData";

export default function CounteryDetaile(props) {
    // const { countery, handeleVisitedCountery, handelFlage } = props;
    return (
        <div>
            <h4>Countery Detail : </h4>
            <br />
            <hr />
            <br />
            {/* <CounteryData countery={countery} handeleVisitedCountery={handeleVisitedCountery} handelFlage={handelFlage}></CounteryData> */}
            <CounteryData {...props}></CounteryData>
        </div>
    )
}