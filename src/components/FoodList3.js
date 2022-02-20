import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"


function FoodList() {

    const [Food, setFood] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5002/api/food')
            .then(res => setFood(res.data))
            .catch(error => console.log(error));

    });

    const [query, setquery] = useState("");
    const [recipes, setrecipes] = useState([]);

    const YOUR_APP_ID = "01d8742f";
    const YOUR_APP_KEY = "9e53540443514fc483049039c942aba6";

    var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10`;


    async function getRecipe() {
        var result = await axios.get(url);
        setrecipes(result.data.hits);
        console.log(result);

    };

    const onSubmit = (e) => {
        e.preventDefault();
        getRecipe();
    };

    return (
        <Container>
            <Container1>
                <form className="searchform" onSubmit={onSubmit}>
                    <input className="row"
                        type="text"
                        placeholder="Search your Food"
                        value={query}
                        onChange={(e) => setquery(e.target.value)}
                    />
                    <input className="button" type="submit" value="search"
                    />
                </form>
            </Container1>
            <Container2>
                <div className="row">
                    <div className="col-md-6" >
                        <p>Nutrition Plan Name</p>
                    </div>
                    <div className="col-md-3">
                        <p>Created By</p>
                    </div>
                    <div className="col-md-3">
                        <p>Date Updated</p>
                    </div>
                </div>
                {Food.map((Food, key) => (
                    <a href={"editfoods?Food_id=" + Food._id}>
                        <div className="row" key={key}
                        >
                            <div className="col-md-6">
                                <h6>{Food.FoodName}</h6>
                            </div>
                            <div className="col-md-3">

                            </div>
                            <div className="col-md-3">
                                <h6>{Food.Date}</h6>
                            </div>
                        </div>
                    </a>
                ))}
                {recipes.map((recipe, key) => (
                    <a href={"editfoods?uri=" + recipe["recipe"]["uri"]}>
                        <div className="row" key={key}>
                            <div className="col-md-6">
                                <h6>{recipe["recipe"]["label"]}</h6>
                            </div>
                            <div className="col-md-3">

                            </div>
                            <div className="col-md-3">

                            </div>
                        </div>
                    </a>
                ))}
            </Container2>
        </Container >
    )
}

const Container = styled.div`
`


const Container1 = styled.div`
    .row{    
        position: absolute;
        width: 1081px;
        height: 50px;
        background: #FFFFFF;
        border: 1px solid #FF6600;
        box-sizing: border-box;
        border-radius: 50px;
        margin-left: 101px;
        margin-top: -90px;
        padding-left: 15px;
    }

    .button{
        position: absolute;
        border-radius: 20px;
        border: 1px solid #FF6600;
        margin-left: 1200px;
        margin-top: -80px;
    }

`
const Container2 = styled.div`
    margin-top: 100px;

    .row{
        width: 1273px;
        height: 65px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        margin-left: 100px;
        margin-top: 15px;
        padding-top: 20px;
        cursor: pointer;

        &:hover {
            background-color: #FFF6F0;
            transition: 250ms;
        }
    }



`

<<<<<<< HEAD
export default FoodList
=======
export default FoodList
>>>>>>> f818816dba9a56d297b75ef9145b610b6dae420c
