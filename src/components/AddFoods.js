import React, { useState, useEffect } from 'react'
import Header from './Header';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function AddFoods() {

    const [FoodName, setFoodName] = useState("");
    const [Recipe, setRecipe] = useState("");
    const [ServingSize, setServingSize] = useState("");
    const [UnitMeasurement, setUnitMeasurement] = useState("");
    const [Protein, setProtein] = useState("");
    const [Carbs, setCarbs] = useState("");
    const [Fat, setFat] = useState("");
    const [Fibre, setFibre] = useState("");
    const [Sodium, setSodium] = useState("");
    const [Sugar, setSugar] = useState("");
    const [Calories, setCalories] = useState("");
    const [TotalCarbohydrates, setTotalCarbohydrates] = useState("");
    const [SaturatedFat, setSaturatedFat] = useState("");
    const [Cholesterol, setCholesterol] = useState("");
    const [VitaminA, setVitaminA] = useState("");
    const [VitaminC, setVitaminC] = useState("");
    const [Calcium, setCalcium] = useState("");
    const [Iron, setIron] = useState("");
    const [MonosaturatedFat, setMonosaturatedFat] = useState("");
    const [Image, setImage] = useState("");

    const onSubmit = (e) => {

        e.preventDefault();
        fetch("https://the3percent-food.herokuapp.com/api/food", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ FoodName, Recipe, ServingSize, UnitMeasurement, Image, Protein, Carbs, Fat, Fibre, Sodium, Sugar, Calories, TotalCarbohydrates, SaturatedFat, Cholesterol, VitaminA, VitaminC, Calcium, Iron, }),
        })
            .then(function (response) {
                console.log(response.status);
                if (response.status === 200) {
                    Store.addNotification({
                        title: "Success!",
                        message: "New Food added successfully",
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
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

    };

    return (
        <div id="app name" className="grey-background">
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
                                                                                <input type="text"
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
                                                                                    value={FoodName}
                                                                                    onChange={(e) => setFoodName(e.target.value)} />
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
                                                                                        value={Recipe}
                                                                                        onChange={(e) => setRecipe(e.target.value)}>
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
                                                <div data-v-52fb9f55="" data-v-70fe1976="" className="mb-earth k-card raised">
                                                    <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                        <div data-v-52fb9f55=""
                                                            id="k-row-e7998299-5d85-4c87-946a-1a8a341bc050"
                                                            className="k-row thin">

                                                            <div className="k-row__slot--middle"><span data-v-194e1f66=""
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
                                                            <hr />
                                                            <div className="k-row__slot--right">
                                                                <div data-v-52fb9f55="" className="k-toggle">
                                                                    <input
                                                                        id="object-646812" label="" type="checkbox" />
                                                                    <label
                                                                        for="object-646812" />
                                                                </div>
                                                                <div className="k-toggle__track colorOne--text">
                                                                </div>
                                                                <div className="k-toggle__dot"
                                                                    style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="k-card__content">
                                                    <div data-v-52fb9f55="" className="layout row wrap no-padding">
                                                        <div data-v-52fb9f55="" className="flex pb-none xs12">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <label
                                                                    for="object-344170"
                                                                    className="minion k-input__label grey-one--text">
                                                                    Serving Size (g)
                                                                </label>
                                                                <div
                                                                    className="">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": 1,
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="text" data-vv-name="object-344170"
                                                                            data-vv-as="client total daily calorie target"
                                                                            appendcb="function(){}" aria-checked="0"
                                                                            aria-label="Client total daily calorie target"
                                                                            id="object-344170"
                                                                            label="Client total daily calorie target"
                                                                            name="object-344170"
                                                                            className="k-input-container d-flex align-center k-input__field k-input__field--active"
                                                                            prependcb="function(){}" role="number"
                                                                            min="0" rows="5" data-mask="null"
                                                                            value={ServingSize}
                                                                            onChange={(e) => setServingSize(e.target.value)} />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150="" ></div>
                                                            </div>
                                                        </div>
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
                                                                        <div
                                                                            className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                            <div className="pica"
                                                                                style={{
                                                                                    "flex-grow": "1",
                                                                                    "position": "relative"
                                                                                }}>
                                                                                <input type="text"
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
                                                                                    value={UnitMeasurement}
                                                                                    onChange={(e) => setUnitMeasurement(e.target.value)} />
                                                                            </div>
                                                                            <div
                                                                                className="k-input__field-icon pica right colorOne--text">
                                                                                <svg data-v-7f8bad2e=""
                                                                                    aria-hidden="true" focusable="false"
                                                                                    data-prefix="far"
                                                                                    data-icon="chevron-down" role="img"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 448 512"
                                                                                    className="svg-inline--fa fa-chevron-down fa-w-14 k-icon mars grey-one--text">
                                                                                    <path data-v-7f8bad2e=""
                                                                                        fill="currentColor"
                                                                                        d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
                                                                                        className="">
                                                                                    </path>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-6b0e4150="" ></div>
                                                                    </div>
                                                                </div>
                                                                <div className="k-select__list-container"></div>
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
                                                                            value={Protein}
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
                                                                            value={Carbs}
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
                                                                            value={Fat}
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
                                                                            value={Fibre}
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
                                                                            value={Sodium}
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
                                                                            value={Sugar}
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
                                                                    Calories (g)
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
                                                                            value={Calories}
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
                                                                            value={TotalCarbohydrates}
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
                                                                            value={SaturatedFat}
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
                                                                            value={Cholesterol}
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
                                                                            value={VitaminA}
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
                                                                            value={VitaminC}
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
                                                                            value={Calcium}
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
                                                                            value={Iron}
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
                                                                            value={MonosaturatedFat}
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
                                                        <div class="custom-file">
                                                            <input type="file" class="custom-file-input" id="validatedCustomFile" required multiple />
                                                            <label class="custom-file-label" for="validatedCustomFile"></label>
                                                            <div class="invalid-feedback"></div>
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
                                                        Add Meal
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
export default AddFoods;
