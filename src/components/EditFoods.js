import React, { useState, useEffect, useRef } from 'react'
import axios from "axios"
import Header from './Header';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Form } from "react-bootstrap"

function EditFoods() {

    let [FoodName, setFoodName] = useState("");
    let [Recipe, setRecipe] = useState("");
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
    let [isLoad, setIsLoad] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();
        // alert(Recipe);
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

    const [Food, setFood] = useState([]);

    const queryParams = new URLSearchParams(window.location.search);
    const Food_id = queryParams.get('Food_id');

    const apiurl = "https://the3percent-food.herokuapp.com/api/food/" + Food_id;
    // console.log(apiurl);
    useState(() => {
        axios
            .get(apiurl, { id: Food_id })
            .then(res => setFood(res.data))
            .catch(error => console.log(error));
        setIsLoad('0');
    }, []);


    React.useEffect(() => {
        fetch('https://the3percent-food.herokuapp.com/api/food/' + Food_id)
            .then(results => results.json())
            .then(data => {
                // console.log(data.Recipe);
                setFoodName(data.FoodName);
                setRecipe(data.Recipe);
                setServingSize(data.ServingSize);
                setUnitMeasurement(data.UnitMeasurement);
                setIsLoad('1');
                // console.log(data);
            });
    }, []); // Pass empty array to only run once on mount.

    // console.log(Food.Recipe)
    // const [DeleteFood, setDeleteFood] = useState([]);

    // function Delete() {
    //     axios
    //         .delete(apiurl, { id: Food_id })
    //         .then(res => setDeleteFood(res.data))
    //         .catch(error => console.log(error));
    // }

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
                                                                                    key={Food.FoodName}
                                                                                    defaultValue={Food.FoodName}
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
                                                                                        // onInputChange={(e) => setRecipe(e.target.defaultValue)}
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
                                                    style={{ "paddingBottom": "30px" }}>
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
                                                                            Unit Measurement
                                                                        </label>
                                                                        <div>
                                                                            <div className="pica"
                                                                                style={{
                                                                                    "flex-grow": "1",
                                                                                    "position": "relative"
                                                                                }}>
                                                                                <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                                    onChange={(e) => setUnitMeasurement(e.target.value)}>
                                                                                    <select class="k-input-container d-flex align-center k-input__field k-input__field--active"
                                                                                        key={Food.UnitMeasurement}
                                                                                        defaultValue={Food.UnitMeasurement}>
                                                                                        <option selected>Choose...</option>
                                                                                        <option value="Cup">Cup</option>
                                                                                        <option value="Portion">Portion</option>
                                                                                        <option value="Centilitre">Centilitre</option>
                                                                                        <option value="Gram">Gram</option>
                                                                                        <option value="Gallon">Gallon</option>
                                                                                    </select>
                                                                                </Form.Group>
                                                                                {/* <input type="text"
                                                                                    data-vv-name="object-110314"
                                                                                    data-vv-as="macro type"
                                                                                    appendcb="function(){}"
                                                                                    aria-label="Macro Type"
                                                                                    autocomplete="on" id="object-110314"
                                                                                    label="Macro Type"
                                                                                    name="object-110314"
                                                                                    prependcb="function(){}" role="text"
                                                                                    rows="5" data-mask="null"
                                                                                    aria-checked="Grams"
                                                                                    onInputChange={(e) => setUnitMeasurement(e.target.defaultValue)}
                                                                                /> */}
                                                                            </div>

                                                                        </div>
                                                                        <div data-v-6b0e4150="" ></div>
                                                                    </div>
                                                                </div>
                                                                <div className="k-select__list-container"></div>
                                                            </div>
                                                        </div>
                                                        <div data-v-52fb9f55="" className="flex pb-none xs12">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label
                                                                    for="object-344170"
                                                                    className="minion k-input__label grey-one--text">
                                                                    Serving Size
                                                                </label>
                                                                <div
                                                                    className="">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": 1,
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="number" data-vv-name="object-344170"
                                                                            data-vv-as="client total daily calorie target"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Client total daily calorie target"
                                                                            id="object-344170"
                                                                            label="Client total daily calorie target"
                                                                            name="object-344170"
                                                                            className="k-input-container d-flex align-center k-input__field k-input__field--active"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            key={Food.ServingSize}
                                                                            defaultValue={Food.ServingSize}
                                                                            onChange={(e) => setServingSize(e.target.value)}
                                                                            onInputChange={(e) => setServingSize(e.target.defaultValue)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150="" ></div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md2">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label for="object-640858"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Protein (g)
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
                                                                            key={Number(Food.Protein).toFixed(2)}
                                                                            defaultValue={Number(Food.Protein).toFixed(2)}
                                                                            onChange={(e) => setProtein(e.target.value)} />
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
                                                                    Carbs (g)
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
                                                                            key={Number(Food.Carbs).toFixed(2)}
                                                                            defaultValue={Number(Food.Carbs).toFixed(2)}
                                                                            onChange={(e) => setCarbs(e.target.value)} />
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
                                                                    Fat (g)
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
                                                                            key={Number(Food.Fat).toFixed(2)}
                                                                            defaultValue={Number(Food.Fat).toFixed(2)}
                                                                            onChange={(e) => setFat(e.target.value)} />
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
                                                                    Fibre (g)
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
                                                                            key={Number(Food.Fibre).toFixed(2)}
                                                                            defaultValue={Number(Food.Fibre).toFixed(2)}
                                                                            onChange={(e) => setFibre(e.target.value)} />
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
                                                                    Sodium (mg)
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
                                                                            key={Number(Food.Sodium).toFixed(2)}
                                                                            defaultValue={Number(Food.Sodium).toFixed(2)}
                                                                            onChange={(e) => setSodium(e.target.value)} />
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
                                                                    Sugar (g)
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
                                                                            key={Number(Food.Sugar).toFixed(2)}
                                                                            defaultValue={Number(Food.Sugar).toFixed(2)}
                                                                            onChange={(e) => setSugar(e.target.value)} />
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
                                                                            key={Number(Food.Calories).toFixed(2)}
                                                                            defaultValue={Number(Food.Calories).toFixed(2)}
                                                                            onChange={(e) => setCalories(e.target.value)} />
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
                                                                    Total Carbohydrates (g)
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
                                                                            key={Number(Food.TotalCarbohydrates).toFixed(2)}
                                                                            defaultValue={Number(Food.TotalCarbohydrates).toFixed(2)}
                                                                            onChange={(e) => setTotalCarbohydrates(e.target.value)} />
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
                                                                    Saturated Fat (g)
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
                                                                            key={Number(Food.SaturatedFat).toFixed(2)}
                                                                            defaultValue={Number(Food.SaturatedFat).toFixed(2)}
                                                                            onChange={(e) => setSaturatedFat(e.target.value)} />
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
                                                                    Cholesterol (g)
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
                                                                            key={Number(Food.Cholesterol).toFixed(2)}
                                                                            defaultValue={Number(Food.Cholesterol).toFixed(2)}
                                                                            onChange={(e) => setCholesterol(e.target.value)} />
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
                                                                    Vitamin A (g)
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
                                                                            key={Number(Food.VitaminA).toFixed(2)}
                                                                            defaultValue={Number(Food.VitaminA).toFixed(2)}
                                                                            onChange={(e) => setVitaminA(e.target.value)} />
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
                                                                    Vitamin C (g)
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
                                                                            key={Number(Food.VitaminC).toFixed(2)}
                                                                            defaultValue={Number(Food.VitaminC).toFixed(2)}
                                                                            onChange={(e) => setVitaminC(e.target.value)} />
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
                                                                    Calcium (g)
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
                                                                            key={Number(Food.Calcium).toFixed(2)}
                                                                            defaultValue={Number(Food.Calcium).toFixed(2)}
                                                                            onChange={(e) => setCalcium(e.target.value)} />
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
                                                                    Iron (g)
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
                                                                            key={Number(Food.Iron).toFixed(2)}
                                                                            defaultValue={Number(Food.Iron).toFixed(2)}
                                                                            onChange={(e) => setIron(e.target.value)} />
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
                                                                    Monosaturated Fat (g)
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
                                                                            key={Number(Food.MonosaturatedFat).toFixed(2)}
                                                                            defaultValue={Number(Food.MonosaturatedFat).toFixed(2)}
                                                                            onChange={(e) => setMonosaturatedFat(e.target.value)} />
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
                                                            <img src={Food.Image} />
                                                        </div>
                                                    </div>

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