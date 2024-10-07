const Banner = () => {
    return (
        <div>
            <div className="bg-cover bg-center min-h-96 mt-4 rounded-lg flex flex-col items-center justify-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1593759608363-fde2fa65f5d7?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>

            <div className="text-center px-10">
            <h2 className="text-white font-bold text-3xl">Discover an exceptional cooking class taiored for you!</h2>
            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus temporibus quam praesentium expedita pariatur eveniet ea laborum, nemo corporis. Exercitationem laudantium repellat cum impedit ut sequi sunt sint doloribus dolorum?</p>
            </div>
            

            <div className="mt-4 flex gap-3">
                <button className="bg-green-500 px-4 py-2 rounded-full text-white">Explore Now</button>
                <button className="border-2 border-gray-300 px-4 py-2 rounded-full text-white">Our Feedback</button>
            </div>

            </div>
        </div>
    );
};

export default Banner;