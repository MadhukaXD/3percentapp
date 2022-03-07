import React, { useState, useEffect, useRef } from 'react'
import axios from "axios"
import Header from './Header';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Form } from "react-bootstrap"

function EditFoods() {

    let [FoodName, setFoodName] = useState("");
    let [Recipe, setRecipe] = useState([]);
    let [ServingSize, setServingSize] = useState("");
    let [UnitMeasurement, setUnitMeasurement] = useState("");
    let [Protein, setProtein] = useState("");
    let [Carbs, setCarbs] = useState("");
    let [Fat, setFat] = useState("");
    let [Fibre, setFibre] = useState("");
    let [Sodium, setSodium] = useState("");
    let [Sugar, setSugar] = useState("");
    let [Calories, setCalories] = useState("");
    let [TotalCarbohydrates, setTotalCarbohydrates] = useState("");
    let [SaturatedFat, setSaturatedFat] = useState("");
    let [Cholesterol, setCholesterol] = useState("");
    let [VitaminA, setVitaminA] = useState("");
    let [VitaminC, setVitaminC] = useState("");
    let [Calcium, setCalcium] = useState("");
    let [Iron, setIron] = useState("");
    let [MonosaturatedFat, setMonosaturatedFat] = useState("");
    let [Image, setImage] = useState("");
    let [isLoad, setIsLoad] = useState("0");


    const onSubmit = (e) => {
        e.preventDefault();
        // alert(Sodium);
        fetch("https://the3percent-food.herokuapp.com/api/food", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ FoodName, Recipe, ServingSize, UnitMeasurement, Image, Protein, Carbs, Fat, Fibre, Sodium, Sugar, Calories, TotalCarbohydrates, SaturatedFat, Cholesterol, VitaminA, VitaminC, Calcium, Iron, MonosaturatedFat }),
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    Store.addNotification({
                        title: "Success!",
                        message: "Food Updated successfully",
                        type: "success",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });
                    window.location = "/foodlist";
                }
                else {
                    Store.addNotification({
                        title: "Failure!",
                        message: "Please fill required fields",
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                    });
                }
                return response.text();
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // const [Food, setFood] = useState([]);

    // const queryParams = new URLSearchParams(window.location.search);
    // const Food_id = queryParams.get('Food_id');

    // const apiurl = "https://the3percent-food.herokuapp.com/api/food/" + Food_id;
    // console.log(apiurl);
    // useState(() => {
    //     axios
    //         .get(apiurl, { id: Food_id })
    //         .then(res => setFood(res.data))
    //         .catch(error => console.log(error));
    //     setIsLoad('0');
    // }, []);

    const YOUR_APP_ID = "01d8742f";
    const YOUR_APP_KEY = "9e53540443514fc483049039c942aba6";

    let [Thirdpartyfood, setThirdpartyfood] = useState([]);
    let [digest, setdigest] = useState([""]);

    let [protein1, setprotein1] = useState([]);
    let [Carbs1, setCarbs1] = useState("");
    let [Fat1, setFat1] = useState("");
    let [Fibre1, setFibre1] = useState("");
    let [Sodium1, setSodium1] = useState("");
    let [Sugar1, setSugar1] = useState("");
    let [Calories1, setCalories1] = useState("");
    let [TotalCarbohydrates1, setTotalCarbohydrates1] = useState("");
    let [SaturatedFat1, setSaturatedFat1] = useState("");
    let [Cholesterol1, setCholesterol1] = useState("");
    let [VitaminA1, setVitaminA1] = useState("");
    let [VitaminC1, setVitaminC1] = useState("");
    let [Calcium1, setCalcium1] = useState("");
    let [Iron1, setIron1] = useState("");
    let [MonosaturatedFat1, setMonosaturatedFat1] = useState("");

    const queryParams2 = new URLSearchParams(window.location.search);
    const uri = queryParams2.get('uri');

    // var url = `https://api.edamam.com/api/recipes/v2/` + uri + `?type=public&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;


    // useState(() => {
    //     axios
    //         .get(url, { id: uri })
    //         .then(res => setThirdpartyfood(res.data.recipe))
    //         .catch(error => console.log(error));

    // }, []);

    React.useEffect(() => {
        fetch(`https://api.edamam.com/api/recipes/v2/` + uri + `?type=public&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
            .then(results => results.json())
            .then(data => {
                setThirdpartyfood(data.recipe);
                setFoodName(data.recipe.label);
                setCalories(data.recipe.calories)

                setprotein1(data.recipe.totalNutrients.PROCNT);
                setProtein(data.recipe.totalNutrients.PROCNT.quantity);

                setCarbs1(data.recipe.totalNutrients.CHOCDF);
                setCarbs(data.recipe.totalNutrients.CHOCDF.quantity);

                setFat1(data.recipe.totalNutrients.FAT);
                setFat(data.recipe.totalNutrients.FAT.quantity);

                setFibre1(data.recipe.totalNutrients.FIBTG);
                setFibre(data.recipe.totalNutrients.FIBTG.quantity);

                setSodium1(data.recipe.totalNutrients.NA);
                setSodium(data.recipe.totalNutrients.NA.quantity);

                setSugar1(data.recipe.totalNutrients.SUGAR);
                setSugar(data.recipe.totalNutrients.SUGAR.quantity);

                setTotalCarbohydrates1(data.recipe.totalNutrients['CHOCDF.net']);
                setTotalCarbohydrates(data.recipe.totalNutrients['CHOCDF.net'].quantity);

                setSaturatedFat1(data.recipe.totalNutrients.FASAT);
                setSaturatedFat(data.recipe.totalNutrients.FASAT.quantity);

                setCholesterol1(data.recipe.totalNutrients.CHOLE);
                setCholesterol(data.recipe.totalNutrients.CHOLE.quantity);

                setVitaminA1(data.recipe.totalNutrients.VITA_RAE);
                setVitaminA(data.recipe.totalNutrients.VITA_RAE.quantity);

                setVitaminC1(data.recipe.totalNutrients.VITC);
                setVitaminC(data.recipe.totalNutrients.VITC.quantity);

                setCalcium1(data.recipe.totalNutrients.CA);
                setCalcium(data.recipe.totalNutrients.CA.quantity);

                setIron1(data.recipe.totalNutrients.FE);
                setIron(data.recipe.totalNutrients.FE.quantity);

                setMonosaturatedFat1(data.recipe.totalNutrients.FAMS);
                setMonosaturatedFat(data.recipe.totalNutrients.FAMS.quantity);


                let recp = '';
                for (let i = 0; i < data.recipe.ingredientLines.length; i++) {

                    recp += data.recipe.ingredientLines[i] + ',';
                }
                setRecipe(recp);
                // console.log(recp);
                // setdigest(data.recipe.digest);
                // setFoodName(data.FoodName);
                // setRecipe(data.Recipe);
                // console.log(data.recipe);
                // // setFoodName(data.FoodName);
                // setRecipe(data.Recipe);
                // setServingSize(data.ServingSize);
                // setUnitMeasurement(data.UnitMeasurement);
                setIsLoad('1');
                console.log(data.recipe);
            });
    }, []); // Pass empty array to only run once on mount.

    // console.log(Thirdpartyfood["ingredientLines"])
    // console.log(JSON.stringify(Thirdpartyfood["ingredientLines"]))

    return (
        <div id="app name" className="grey-background">
            {isLoad == '0' ? (
                <div class='loader'><div class=''></div></div>
            ) : (
                <div></div>
            )}
            <div data-app="true" className="k-app light">
                <div className="k-layout-main__wrapper">
                    <Header />
                    <div id="tooltip-boundary" className="tooltip-boundary"></div>
                    <div className="k-layout-main">
                        <div data-v-2913046a="" className="background-ribbon__container"
                            style={{
                                "height": "230px",
                                "top": "-5rem"
                            }}>
                            <div data-v-2913046a="" className="background-ribbon" style={{ "height": "230px" }}>
                                <div data-v-2913046a="" className="header-image-background background-ribbon__old"
                                    style={{
                                        "background-color": "rgb(20, 10, 37)",
                                        "background-position-y": "0%"
                                    }}>
                                </div>
                                <div data-v-2913046a="" id="background-filter"
                                    className="absolute top-0 left-0 tw-w-full tw-h-full bg-white z-10">
                                </div>
                                <div data-v-2913046a="" className="background-ribbon__cutout">
                                </div>
                            </div>
                        </div>
                        <div data-v-0cf3cda2="" className="page-wrapper">
                            <div data-v-158550f2="" data-v-0cf3cda2="" flyout-items="[object Object]">
                                <div className="container px-none pt-none">
                                    <div className="layout row wrap">
                                        <div className="flex py-saturn xs12 mt-saturn pb-none">
                                            <div data-v-52fb9f55="" data-v-70fe1976="" className="k-card mb-earth pa-none raised mb-none">
                                                <div className="k-card__content">
                                                    <div data-v-52fb9f55="" className="layout row wrap no-padding">
                                                        <div data-v-52fb9f55="" className="flex py-none xs12">
                                                            <div data-v-52fb9f55="" className="k-select"
                                                                field="[object Object]">
                                                                <div className="k-select__input-group">
                                                                    <div className="k-input k-input--has-changed mb-none"
                                                                        style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                        <div
                                                                            className="k-input-container d-flex align-center k-input__field k-input__field--active pa-earth">
                                                                            <div className="pica largetext"
                                                                                style={{
                                                                                    "flex-grow": "1",
                                                                                    "position": "relative"
                                                                                }}>
                                                                                <input
                                                                                    type="text"
                                                                                    data-vv-name="object-110314"
                                                                                    data-vv-as="macro type"
                                                                                    appendcb="function(){}"
                                                                                    aria-label="Macro Type"
                                                                                    autocomplete="on" id="object-110314"
                                                                                    label="Macro Type"
                                                                                    name="object-110314"
                                                                                    prependcb="function(){}" role="text"
                                                                                    placeholder="Food Name"
                                                                                    rows="5" data-mask="null"
                                                                                    aria-checked="Grams"
                                                                                    readOnly={true}
                                                                                    key={Thirdpartyfood["label"]}
                                                                                    defaultValue={Thirdpartyfood["label"]}
                                                                                    onChange={(e) => setFoodName(e.target.value)}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-6b0e4150="" ></div>
                                                                    </div>
                                                                </div>
                                                                <div className="k-select__list-container"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex xs12 pa-none">
                                            <div className="action-bar-portal v-portal" style={{ "display": "none" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container grid-gap-earth">
                                    <div data-v-158550f2="" className="layout row wrap">
                                        <div data-v-158550f2="" className="flex xs12">
                                            <div data-v-70fe1976="" data-v-158550f2="">
                                                <div data-v-52fb9f55="" data-v-70fe1976="" className="mb-earth k-card raised">
                                                    <div className="k-card__content">
                                                        <div data-v-52fb9f55="" className="layout row wrap no-padding">
                                                            <div data-v-52fb9f55="" className="flex py-none xs12">
                                                                <div data-v-52fb9f55="" className="k-select"
                                                                    field="[object Object]">
                                                                    <div className="k-select__input-group">
                                                                        <div className="k-input k-input--has-changed"
                                                                            style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                            <label for="object-110314"
                                                                                className="minion k-input__label colorOne--text">
                                                                                Recipe
                                                                            </label>
                                                                            <div
                                                                                className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <div className="pica"
                                                                                    style={{
                                                                                        "flex-grow": "2",
                                                                                        "position": "relative"
                                                                                    }}>
                                                                                    <textarea type="text"
                                                                                        data-vv-name="object-110314"
                                                                                        data-vv-as="macro type"
                                                                                        appendcb="function(){}"
                                                                                        aria-label="Macro Type"
                                                                                        autocomplete="on" id="object-110314"
                                                                                        label="Macro Type"
                                                                                        name="object-110314"
                                                                                        prependcb="function(){}"
                                                                                        role="text"
                                                                                        rows="5" data-mask="null"
                                                                                        aria-checked="Grams"
                                                                                        key={Recipe}
                                                                                        defaultValue={Recipe}
                                                                                        onChange={(e) => setRecipe(e.target.value)}
                                                                                        onInputChange={(e) => setRecipe(e.target.value)}
                                                                                    >
                                                                                    </textarea>
                                                                                </div>
                                                                            </div>
                                                                            <div data-v-6b0e4150="" ></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="k-select__list-container"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="k-row__slot--middle"
                                                    style={{
                                                        "paddingBottom": "40px",
                                                        "paddingTop": "30px",
                                                    }}>
                                                    <span data-v-194e1f66=""
                                                        className="k-title">
                                                        <div data-v-194e1f66="" className="d-flex pica"><span
                                                            data-v-194e1f66="" data-v-52fb9f55=""
                                                            className="k-title">
                                                            <div data-v-194e1f66="" className="d-flex pica">
                                                                Macronutrients
                                                            </div>
                                                        </span>
                                                        </div>
                                                        <div data-v-194e1f66=""
                                                            className="k-title__subtitle-wrapper long-primer">
                                                            <span
                                                                data-v-194e1f66="" className="">
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="k-card__content" style={{
                                                    "paddingBottom": "30px"
                                                }}>
                                                    <div data-v-52fb9f55="" className="layout row wrap no-padding">

                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-640858"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Protein ({protein1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-640858"
                                                                            data-vv-as="protein (g)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Protein (g)" id="object-640858"
                                                                            label="Protein (g)" name="object-640858"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(protein1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(protein1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setProtein(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-584956"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Carbs ({Carbs1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">

                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-584956"
                                                                            data-vv-as="carbs (g)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Carbs (g)" id="object-584956"
                                                                            label="Carbs (g)" name="object-584956"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(Carbs1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(Carbs1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setCarbs(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne);" }}>
                                                                <label for="object-582949"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Fat ({Fat1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": 1,
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-582949"
                                                                            data-vv-as="fat (g)" appendcb="function(){}"
                                                                            aria-checked="0" aria-label="Fat (g)"
                                                                            id="object-582949" label="Fat (g)"
                                                                            name="object-582949"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(Fat1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(Fat1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setFat(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-497406"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Fibre ({Fibre1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "1",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-497406"
                                                                            data-vv-as="fibre (g)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Fibre (g)" id="object-497406"
                                                                            label="Fibre (g)" name="object-497406"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(Fibre1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(Fibre1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setFibre(e.target.value)} 
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-537921"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Sodium ({Sodium1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-537921"
                                                                            data-vv-as="sodium (mg)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Sodium (mg)" id="object-537921"
                                                                            label="Sodium (mg)" name="object-537921"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(Sodium1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(Sodium1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setSodium(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Sugar ({Sugar1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-86824"
                                                                            data-vv-as="sugar (g)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Sugar (g)" id="object-86824"
                                                                            label="Sugar (g)" name="object-86824"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(Sugar1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(Sugar1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setSugar(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Calories 
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-86824"
                                                                            data-vv-as="sugar (g)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Sugar (g)" id="object-86824"
                                                                            label="Sugar (g)" name="object-86824"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(Thirdpartyfood["calories"]).toFixed(2)}
                                                                            defaultValue={Number(Thirdpartyfood["calories"]).toFixed(2)}
                                                                            onChange={(e) => setCalories(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Total Carbohydrates ({TotalCarbohydrates1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-86824"
                                                                            data-vv-as="sugar (g)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Sugar (g)" id="object-86824"
                                                                            label="Sugar (g)" name="object-86824"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(TotalCarbohydrates1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(TotalCarbohydrates1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setTotalCarbohydrates(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Saturated Fat ({SaturatedFat1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-86824"
                                                                            data-vv-as="sugar (g)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Sugar (g)" id="object-86824"
                                                                            label="Sugar (g)" name="object-86824"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(SaturatedFat1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(SaturatedFat1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setSaturatedFat(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Cholesterol ({Cholesterol1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-86824"
                                                                            data-vv-as="sugar (g)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Sugar (g)" id="object-86824"
                                                                            label="Sugar (g)" name="object-86824"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(Cholesterol1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(Cholesterol1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setCholesterol(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Vitamin A ({VitaminA1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-86824"
                                                                            data-vv-as="sugar (g)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Sugar (g)" id="object-86824"
                                                                            label="Sugar (g)" name="object-86824"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(VitaminA1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(VitaminA1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setVitaminA(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Vitamin C ({VitaminC1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-86824"
                                                                            data-vv-as="sugar (g)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Sugar (g)" id="object-86824"
                                                                            label="Sugar (g)" name="object-86824"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(VitaminC1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(VitaminC1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setVitaminC(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Calcium ({Calcium1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-86824"
                                                                            data-vv-as="sugar (g)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Sugar (g)" id="object-86824"
                                                                            label="Sugar (g)" name="object-86824"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(Calcium1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(Calcium1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setCalcium(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Iron ({Iron1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-86824"
                                                                            data-vv-as="sugar (g)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Sugar (g)" id="object-86824"
                                                                            label="Sugar (g)" name="object-86824"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(Iron1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(Iron1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setIron(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Monosaturated Fat ({MonosaturatedFat1["unit"]})
                                                                </label>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-86824"
                                                                            data-vv-as="sugar (g)"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Sugar (g)" id="object-86824"
                                                                            label="Sugar (g)" name="object-86824"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Number(MonosaturatedFat1["quantity"]).toFixed(2)}
                                                                            defaultValue={Number(MonosaturatedFat1["quantity"]).toFixed(2)}
                                                                            onChange={(e) => setMonosaturatedFat(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150=""></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-52fb9f55="" data-v-70fe1976="" class="mb-earth k-card raised">
                                                <div class="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                    <div data-v-52fb9f55=""
                                                        id="k-row-e7998299-5d85-4c87-946a-1a8a341bc050"
                                                        class="k-row thin">
                                                        <div class="k-row__slot--middle"><span data-v-194e1f66=""
                                                            class="k-title">
                                                            <div data-v-194e1f66="" class="d-flex pica">
                                                                <span
                                                                    data-v-194e1f66="" data-v-52fb9f55=""
                                                                    class="k-title">
                                                                    <div data-v-194e1f66="" class="d-flex pica">
                                                                        Exercise Image(s) - drag to sort

                                                                    </div>
                                                                </span>
                                                            </div>
                                                            <div data-v-194e1f66=""
                                                                class="k-title__subtitle-wrapper long-primer">
                                                                <span
                                                                    data-v-194e1f66="" class="">
                                                                </span>
                                                            </div>
                                                        </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr /><br />
                                                <div data-v-52fb9f55="" data-v-70fe1976="" class="mb-earth k-card raised">
                                                    <div class="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                        <div data-v-52fb9f55=""
                                                            id="k-row-e7998299-5d85-4c87-946a-1a8a341bc050"
                                                            class="k-row thin">
                                                            <div class="k-row__slot--middle"><span data-v-194e1f66=""
                                                                class="k-title">
                                                                <div data-v-194e1f66="" class="d-flex pica">
                                                                    <span
                                                                        data-v-194e1f66="" data-v-52fb9f55=""
                                                                        class="k-title">
                                                                        <div data-v-194e1f66="" class="d-flex pica">


                                                                        </div>
                                                                    </span>
                                                                </div>
                                                                <div data-v-194e1f66=""
                                                                    class="k-title__subtitle-wrapper long-primer">
                                                                    <span
                                                                        data-v-194e1f66="" class="">
                                                                    </span>
                                                                </div>
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div data-v-70fe1976="" className="d-flex justify-center pa-saturn">
                                                        <div data-v-70fe1976="" className="d-flex justify-center pa-saturn">
                                                            <div class="custom-file">
                                                                <input type="file" class="custom-file-input" id="validatedCustomFile" required />
                                                                <label class="custom-file-label" for="validatedCustomFile"></label>
                                                                <div class="invalid-feedback"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img src={Thirdpartyfood["image"]}
                                                    />

                                                    <div class="k-card__content">
                                                        <div data-v-52fb9f55="" class="layout row wrap no-padding">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="k-card__content">
                                                    <div data-v-52fb9f55="" class="layout row wrap no-padding">
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-v-70fe1976="" className="d-flex justify-center pa-saturn">
                                                <button onClick={onSubmit}
                                                    data-v-70fe1976="" to="[object Object]"
                                                    className="k-button medium colorOne">
                                                    <div className="k-button__content"
                                                        style={{ "opacity": 1 }}>
                                                        Update Food
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div tabindex="0" className="vuedals"
                style={{ "display": "none" }}>
            </div>
            <div data-v-2211593a="" className="__cov-progress"
                style={{
                    "background-color": "rgb(66, 90, 247)",
                    "opacity": "0",
                    "position": "fixed",
                    "top": "0px",
                    "left": "0px",
                    "width": "0%",
                    "height": "2px",
                    "transition": "opacity 0.6s ease 0s"
                }}>
            </div>
            <div data-v-3bd2e235="" className="notify notify-bottom-full"
                style={{ "width": "auto" }}>
                <div data-v-3bd2e235="">
                </div>
            </div>
        </div >

    )
}

export default EditFoods;