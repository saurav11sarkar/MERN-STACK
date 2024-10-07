import { useEffect, useState } from "react";
import OurRecipe from "./OurRecipe";
import PropTypes from "prop-types";

const OurRecipes = ({heandlePreparing}) => {
    const [reipe, setReipe] = useState([])
    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setReipe(data))
    }, [])
    return (
        <div>


            <div className="grid lg:grid-cols-2 md:lg:grid-cols-2 gap-2 justify-center items-center">
                {
                    reipe.map(reipe => <OurRecipe  heandlePreparing={heandlePreparing} key={reipe.recipe_id} reipe={reipe}></OurRecipe>)
                }

            </div>

        </div>
    );
};

OurRecipes.propTypes ={
    heandlePreparing: PropTypes.func
    
}

export default OurRecipes;