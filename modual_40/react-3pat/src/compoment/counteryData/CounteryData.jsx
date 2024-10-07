const CounteryData = ({countery, handeleVisitedCountery, handelFlage}) => {
    console.log("inside", handeleVisitedCountery,handelFlage);
    return ( 
        <div>
            <p><small>Countery Data : {countery.name.common} </small></p>
        </div>
    )
}

export default CounteryData;