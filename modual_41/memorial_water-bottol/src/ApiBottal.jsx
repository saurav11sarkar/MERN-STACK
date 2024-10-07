import { useEffect, useState } from "react";
import Bottols from "./Bottols";
import { addToLS, getStore, removeStro } from "./localStores";
import Cart from "./Cart";


const ApiBottal = () => {
    const [bottals, setBottals] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
            .then(res => res.json())
            .then(data => setBottals(data))
    }, [])

    // load cart for local strose
    useEffect(()=>{     
        if(bottals.length > 0){
            const storeCart = getStore();
            const seveCard = [];
            for(let id of storeCart){
                const findBottol = bottals.find(bottle => bottle.id === id);
                if(findBottol){
                    seveCard.push(findBottol) 
                }
            }
            setCard(seveCard);
        }
    },[bottals])


    const [card, setCard] = useState([])
    const handleAdd = (bottle) =>{
        const newCard = [...card, bottle]
        setCard(newCard)
        addToLS(bottle.id)
    }

    // remove
    const handleRemoveToCart = id => {
        // visual cart remove
        const remaningCart = card.filter(bottole => bottole.id !== id);
        setCard(remaningCart);
        // remove from Ls
        removeStro(id)
    }

    return (
        <div>
            {/* <h4>Bottal: {bottals.length}</h4> */}
            <h2><center>Bottle Avilable</center></h2>
            
            <Cart cart={card} handleRemoveToCart={handleRemoveToCart}></Cart>
            <br />
            <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">

            {
                bottals.map((bottol) => <Bottols handleAdd={handleAdd} key={bottol.id} bottol={bottol}></Bottols>)
            }
            </div>
        </div>
    )
}

export default ApiBottal;