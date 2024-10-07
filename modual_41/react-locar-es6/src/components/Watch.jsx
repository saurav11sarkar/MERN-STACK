const Watch = ({ watch }) => {
    return (
        <div>
            <div className="border-2 border-sky-300 m-2 p-2 rounded-lg text-center">
                <h2 className={`${watch.price < 300 ? 'text-red-600' : ''}`}>
                    Watch name: {watch.model}
                </h2>
                <p>Price: {watch.price}</p>
            </div>
        </div>
    );
};


export default Watch;