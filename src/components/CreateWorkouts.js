import React, { useState } from 'react'
import styled from "styled-components";
import Header from './Header';
import { NavLink, Link, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";

function CreateWorkouts() {

    const [WorkoutTitle, setWorkoutTitle] = useState("");
    const [Level, setLevel] = useState("");
    const [Location, setLocation] = useState("");
    const [Goal, setGoal] = useState("");
    const [MainMuscleWorked, setMainMuscleWorked] = useState("");
    const [OtherMuscleWorked, setOtherMuscleWorked] = useState("");
    const [Gender, setGender] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5004/api/workout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                WorkoutTitle, Level, Location, Goal, MainMuscleWorked, OtherMuscleWorked, Gender
            }),
        })
            .then(function (response) {
                return response.text();
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            })
    }

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
                                                                                    placeholder="Workout Title"
                                                                                    rows="5" data-mask="null"
                                                                                    aria-checked="Grams"
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
                                            <div className="action-bar-portal v-portal"
                                                style={{ "display": "none" }}></div>
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
                                                                                Workout Description
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
                                                                                    // value={ExerciseDescription}
                                                                                    // onChange={(e) => setExerciseDescription(e.target.value)}
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
                                                                        Details
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
                                                <div class="k-card__content">
                                                    <div data-v-52fb9f55="" class="layout row wrap no-padding">

                                                        <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                                                                min="0" >
                                                                <label for="object-640858"
                                                                    class="minion k-input__label colorOne--text">
                                                                    Level (Beginner / Intermediate / Expert)
                                                                </label>
                                                                <div >
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }} >
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                            <select name="gender" className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <option selected>Choose...</option>
                                                                                <option value="Beginner">Beginner</option>
                                                                                <option value="Intermediate">Intermediate</option>
                                                                                <option value="Expert">Expert</option>
                                                                            </select>
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                                                                min="0">
                                                                <label for="object-584956"
                                                                    class="minion k-input__label colorOne--text">
                                                                    Location (Home / Gym / Park)
                                                                </label>
                                                                <div >
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                            <select name="gender" className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <option selected>Choose...</option>
                                                                                <option value="Home">Home</option>
                                                                                <option value="Gym">Gym</option>
                                                                                <option value="Park">Park</option>
                                                                            </select>
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                                                                min="0" >
                                                                <label for="object-582949"
                                                                    class="minion k-input__label colorOne--text">
                                                                    Goal? (Fat Loss / Muscle gain / etc)
                                                                </label>
                                                                <div class="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input type="text"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                                                                min="0" >
                                                                <label for="object-497406" class="minion k-input__label colorOne--text">
                                                                    Main Muscle Worked* (Biceps / Shoulders / Chest etc)
                                                                </label>
                                                                <div>
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                            <select name="gender" className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <option selected>Choose...</option>
                                                                                <option value="Shoulders">Shoulders</option>
                                                                                <option value="Chest">Chest</option>
                                                                                <option value="Biceps">Biceps</option>
                                                                                <option value="Triceps">Triceps</option>
                                                                                <option value="Back">Back</option>
                                                                                <option value="Legs">Legs</option>
                                                                                <option value="Forearm">Forearm</option>
                                                                                <option value="Abs">Abs</option>
                                                                            </select>
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                                                                min="0" >
                                                                <label for="object-537921"
                                                                    class="minion k-input__label colorOne--text">
                                                                    Other Muscles Worked
                                                                </label>
                                                                <div class="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }} >
                                                                        <input type="text"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                                                                min="0"  >
                                                                <label for="object-86824"
                                                                    class="minion k-input__label colorOne--text">
                                                                    Gender (Male / Female)
                                                                </label>
                                                                <div>
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                            <select name="gender" className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <option selected>Choose...</option>
                                                                                <option value="Male">Male</option>
                                                                                <option value="Female">Female</option>
                                                                            </select>
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
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
                                                                        Add Exercise
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

                                                <div className="row">
                                                    <div data-v-52fb9f55="" class=""
                                                        style={{
                                                            "width": "200px",
                                                            "height": "100px",
                                                            "margin-left": "100px",
                                                            "margin-top": "30px"
                                                        }}>
                                                        <img src="/images/food1.png" />
                                                    </div>
                                                    <div className=""
                                                        style={{
                                                            "margin-top": "30px",
                                                            "margin-bottom": "20px",
                                                            "width": "400px",
                                                            "height": "100px",
                                                        }}>
                                                        <p className="paragon grey-one--text mb-moon" >
                                                            Exercises are empty?
                                                        </p>
                                                        <p className="body-copy grey-one--text">
                                                            Add an item using the button below
                                                        </p>
                                                    </div>
                                                    <div className=""
                                                        style={{
                                                            "margin-left": "90px",
                                                            "margin-top": "30px",
                                                            "margin-bottom": "20px",
                                                            "width": "200px",
                                                            "height": "50px",
                                                        }}>
                                                        <button data-v-70fe1976="" to="[object Object]"
                                                            className="k-button medium colorOne">
                                                            <div className="k-button__content"
                                                                style={{ "opacity": 1 }}>
                                                                ADD EXERCISES
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="k-card raised">
                                                <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                    <div id="k-row-fefb2052-2e02-4b59-ad44-7e262940a7e6" className="k-row">
                                                        <div className="k-row__slot--middle">
                                                            <span data-v-194e1f66=""
                                                                className="k-title">
                                                                <div data-v-194e1f66="" className="d-flex pica">
                                                                    <span
                                                                        data-v-194e1f66="" className="k-title">
                                                                        <div data-v-194e1f66=""
                                                                            className="d-flex double-pica">
                                                                            Add Exercise
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
                                                        <div className="k-row__slot--right">
                                                            <svg data-v-7f8bad2e=""
                                                                aria-hidden="true" focusable="false" data-prefix="far"
                                                                data-icon="times" role="img"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                                                                className="svg-inline--fa fa-times fa-w-10 k-icon mars colorOne--text">
                                                                <path data-v-7f8bad2e="" fill="currentColor"
                                                                    d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                                                                    className="">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="k-card__content">
                                                    <div data-v-f1ccee7a=""
                                                        className="k-overflow-scroll">
                                                        <div data-v-f1ccee7a="" className="k-overflow-scroll__container">
                                                            <div data-v-f1ccee7a=""
                                                                class="d-flex pt-moon pb-mars tab-header">
                                                                <p data-v-f1ccee7a=""
                                                                    class="tab-header--item long-primer mr-earth pb-moon colorOne--text tab-header--item__active">
                                                                    Search
                                                                </p>
                                                                <p data-v-f1ccee7a=""
                                                                    class="tab-header--item long-primer mr-earth pb-moon grey-one--text">
                                                                    Recently Used
                                                                </p>
                                                                <p data-v-f1ccee7a=""
                                                                    class="tab-header--item long-primer mr-earth pb-moon grey-one--text">
                                                                    Frequently Used
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div data-v-1b4e9c52="" class="pb-mars">
                                                            <div data-v-1b4e9c52="" class="layout row wrap">
                                                                <div data-v-1b4e9c52="" class="flex xs12 md11">
                                                                    <div data-v-1b4e9c52=""
                                                                        class="action-toolbar__input k-input"
                                                                        style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                        <div
                                                                            class="k-input-container d-flex align-center k-input__field">
                                                                            <div
                                                                                class="k-input__field-icon pica left colorOne--text">
                                                                                <svg data-v-7f8bad2e=""
                                                                                    data-v-1b4e9c52=""
                                                                                    aria-hidden="true" focusable="false"
                                                                                    data-prefix="far" data-icon="search"
                                                                                    role="img"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 512 512"
                                                                                    class="svg-inline--fa fa-search fa-w-16 k-icon mars colorOne--text">
                                                                                    <path data-v-7f8bad2e=""
                                                                                        fill="currentColor"
                                                                                        d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                                                                                        class="">
                                                                                    </path>
                                                                                </svg>
                                                                            </div>
                                                                            <div class="pica"
                                                                                style={{
                                                                                    "flex-grow": "1",
                                                                                    "position": "relative"
                                                                                }}>
                                                                                <input type="text"
                                                                                    data-vv-name="object-199005"
                                                                                    appendcb="function(){}"
                                                                                    aria-checked="" autocomplete="on"
                                                                                    id="object-199005"
                                                                                    name="object-199005"
                                                                                    placeholder="Search"
                                                                                    prependcb="function(){}" role="text"
                                                                                    rows="5" data-mask="null" />
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-6b0e4150="" >
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div data-v-1b4e9c52=""
                                                                    class="flex d-flex justify-end align-center xs12 md1">
                                                                    <div data-v-5b87c31b="" data-v-1b4e9c52=""
                                                                        class="k-badge">
                                                                        <div data-v-5b87c31b="" class="k-badge__overlay"
                                                                            style={{
                                                                                "top": "5px",
                                                                                "right": "5px"
                                                                            }}>
                                                                            <div data-v-62035167="" data-v-1b4e9c52=""
                                                                                class="k-counter brevier"
                                                                                data-v-5b87c31b="">
                                                                                <div data-v-62035167=""
                                                                                    class="k-counter__value colorTwo">1
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <button data-v-1b4e9c52=""
                                                                            to="[object Object]"
                                                                            class="action-toolbar__icon k-button flat icon medium colorOne--text"
                                                                            data-v-5b87c31b="">
                                                                            <div class="k-button__content"
                                                                                style={{ "opacity": "1" }}>
                                                                                <svg
                                                                                    data-v-7f8bad2e=""
                                                                                    aria-hidden="true" focusable="false"
                                                                                    data-prefix="far" data-icon="filter"
                                                                                    role="img"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 512 512"
                                                                                    class="svg-inline--fa fa-filter fa-w-16 k-icon earth colorOne--text">
                                                                                    <path data-v-7f8bad2e=""
                                                                                        fill="currentColor"
                                                                                        d="M463.952 0H48.057C5.419 0-16.094 51.731 14.116 81.941L176 243.882V416c0 15.108 7.113 29.335 19.2 40l64 47.066c31.273 21.855 76.8 1.538 76.8-38.4V243.882L497.893 81.941C528.042 51.792 506.675 0 463.952 0zM288 224v240l-64-48V224L48 48h416L288 224z"
                                                                                        class="">
                                                                                    </path>
                                                                                </svg>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="workout-tabs__search-results"
                                                            style={{
                                                                "max-height": "400px",
                                                                "overflow-y": "auto"
                                                            }}>
                                                            <div id="k-row-a487c088-7e5b-480a-869b-cf42efe7933d"
                                                                class="k-exercises__exercise-row k-row clickable standalone no-shadow no-margin-bottom">
                                                                <div class="k-row__slot--left">
                                                                    <div class="d-flex align-center">

                                                                        <div>
                                                                            <div id="checkbox-undefined"
                                                                                class="k-checkbox">
                                                                                <input
                                                                                    id="object-924033" type="checkbox"
                                                                                    data-vv-name="object-924033"
                                                                                    data-vv-as="" role="checkbox"
                                                                                    class="k-checkbox__input"
                                                                                    value="false" />
                                                                                <div class="k-checkbox__wrapper">
                                                                                    <svg
                                                                                        data-v-7f8bad2e=""
                                                                                        aria-hidden="true"
                                                                                        focusable="false"
                                                                                        data-prefix="far"
                                                                                        data-icon="check" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 512 512"
                                                                                        class="k-checkbox__check svg-inline--fa fa-check fa-w-16 k-icon mars white--text">
                                                                                        <path data-v-7f8bad2e=""
                                                                                            fill="currentColor"
                                                                                            d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                                                                                            class="">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                                <label
                                                                                    for="object-924033"
                                                                                    class="k-checkbox__label">
                                                                                    <span>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-c9edefc2=""
                                                                            class="k-image colorOne">
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__sizer"
                                                                                style={{ "padding-bottom": "100%" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__image"
                                                                                style={{ "background-image": "url(https://img.youtube.com/vi/AFWRIzDA5zI/hqdefault.jpg)" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__content"
                                                                                style={{ "display": "none" }}>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="k-row__slot--middle"><span
                                                                    data-v-194e1f66="" class="k-title">
                                                                    <div data-v-194e1f66="" class="d-flex pica">
                                                                        Seated Alternating Hammer Curls
                                                                    </div>
                                                                    <div data-v-194e1f66=""
                                                                        class="k-title__subtitle-wrapper long-primer">
                                                                        <div data-v-194e1f66=""
                                                                            class="grey-one--text mt-moon">
                                                                            Biceps
                                                                        </div>
                                                                    </div>
                                                                </span></div>

                                                            </div>
                                                            <div id="k-row-126b0ad4-34e3-4829-9322-997323fb7648"
                                                                class="k-exercises__exercise-row k-row clickable standalone no-shadow no-margin-bottom">
                                                                <div class="k-row__slot--left">
                                                                    <div class="d-flex align-center">

                                                                        <div>
                                                                            <div id="checkbox-undefined"
                                                                                class="k-checkbox">
                                                                                <input
                                                                                    id="object-392113" type="checkbox"
                                                                                    data-vv-name="object-392113"
                                                                                    data-vv-as="" role="checkbox"
                                                                                    class="k-checkbox__input"
                                                                                    value="false" />
                                                                                <div class="k-checkbox__wrapper">
                                                                                    <svg
                                                                                        data-v-7f8bad2e=""
                                                                                        aria-hidden="true"
                                                                                        focusable="false"
                                                                                        data-prefix="far"
                                                                                        data-icon="check" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 512 512"
                                                                                        class="k-checkbox__check svg-inline--fa fa-check fa-w-16 k-icon mars white--text">
                                                                                        <path data-v-7f8bad2e=""
                                                                                            fill="currentColor"
                                                                                            d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                                                                                            class="">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                                <label
                                                                                    for="object-392113"
                                                                                    class="k-checkbox__label">
                                                                                    <span>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-c9edefc2=""
                                                                            class="k-image colorOne">
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__sizer"
                                                                                style={{ "padding-bottom": "100%" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__image"
                                                                                style={{ "background-image": "url(https://img.youtube.com/vi/KM5Y9GBTcyU/hqdefault.jpg)" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__content"
                                                                                style={{ "display": "none" }}>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="k-row__slot--middle"><span
                                                                    data-v-194e1f66="" class="k-title">
                                                                    <div data-v-194e1f66="" class="d-flex pica">
                                                                        Rotating Alternate Incline Bicep Curls
                                                                    </div>
                                                                    <div data-v-194e1f66=""
                                                                        class="k-title__subtitle-wrapper long-primer">
                                                                        <div data-v-194e1f66=""
                                                                            class="grey-one--text mt-moon">
                                                                            Biceps
                                                                        </div>
                                                                    </div>
                                                                </span></div>

                                                            </div>
                                                            <div id="k-row-baa8a2ff-1f77-4038-9362-6f29db5daa9b"
                                                                class="k-exercises__exercise-row k-row clickable standalone no-shadow no-margin-bottom">
                                                                <div class="k-row__slot--left">
                                                                    <div class="d-flex align-center">

                                                                        <div>
                                                                            <div id="checkbox-undefined"
                                                                                class="k-checkbox">
                                                                                <input
                                                                                    id="object-100439" type="checkbox"
                                                                                    data-vv-name="object-100439"
                                                                                    data-vv-as="" role="checkbox"
                                                                                    class="k-checkbox__input"
                                                                                    value="false" />
                                                                                <div class="k-checkbox__wrapper">
                                                                                    <svg
                                                                                        data-v-7f8bad2e=""
                                                                                        aria-hidden="true"
                                                                                        focusable="false"
                                                                                        data-prefix="far"
                                                                                        data-icon="check" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 512 512"
                                                                                        class="k-checkbox__check svg-inline--fa fa-check fa-w-16 k-icon mars white--text">
                                                                                        <path data-v-7f8bad2e=""
                                                                                            fill="currentColor"
                                                                                            d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                                                                                            class="">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                                <label
                                                                                    for="object-100439"
                                                                                    class="k-checkbox__label">
                                                                                    <span>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-c9edefc2=""
                                                                            class="k-image colorOne">
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__sizer"
                                                                                style={{ "padding-bottom": "100%" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__image"
                                                                                style={{ "background-image": "url(https://img.youtube.com/vi/pZVm-ZlyPoI/hqdefault.jpg)" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__content"
                                                                                style={{ "display": "none" }}>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="k-row__slot--middle">
                                                                    <span
                                                                        data-v-194e1f66="" class="k-title">
                                                                        <div data-v-194e1f66="" class="d-flex pica">
                                                                            Alternating Deltoid Raise
                                                                        </div>
                                                                        <div data-v-194e1f66=""
                                                                            class="k-title__subtitle-wrapper long-primer">
                                                                            <div data-v-194e1f66=""
                                                                                class="grey-one--text mt-moon">
                                                                                Shoulders
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div id="k-row-81b15211-cc98-49b6-8a6d-3eadc60150e4"
                                                                class="k-exercises__exercise-row k-row clickable standalone no-shadow no-margin-bottom">
                                                                <div class="k-row__slot--left">
                                                                    <div class="d-flex align-center">
                                                                        <div>
                                                                            <div id="checkbox-undefined"
                                                                                class="k-checkbox">
                                                                                <input
                                                                                    id="object-977488" type="checkbox"
                                                                                    data-vv-name="object-977488"
                                                                                    data-vv-as="" role="checkbox"
                                                                                    class="k-checkbox__input"
                                                                                    value="false" />
                                                                                <div class="k-checkbox__wrapper">
                                                                                    <svg
                                                                                        data-v-7f8bad2e=""
                                                                                        aria-hidden="true"
                                                                                        focusable="false"
                                                                                        data-prefix="far"
                                                                                        data-icon="check" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 512 512"
                                                                                        class="k-checkbox__check svg-inline--fa fa-check fa-w-16 k-icon mars white--text">
                                                                                        <path data-v-7f8bad2e=""
                                                                                            fill="currentColor"
                                                                                            d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                                                                                            class="">

                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                                <label
                                                                                    for="object-977488"
                                                                                    class="k-checkbox__label">
                                                                                    <span>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-c9edefc2=""
                                                                            class="k-image colorOne">
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__sizer"
                                                                                style={{ "padding-bottom": "100%" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__image"
                                                                                style={{ "background-image": "url(https://img.youtube.com/vi/YRjr7sYGEyA/hqdefault.jpg)" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__content"
                                                                                style={{ "display": "none" }}>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="k-row__slot--middle">
                                                                    <span
                                                                        data-v-194e1f66="" class="k-title">
                                                                        <div data-v-194e1f66="" class="d-flex pica">
                                                                            Standing Alternate Rotating Bicep
                                                                            Curls&nbsp;
                                                                        </div>
                                                                        <div data-v-194e1f66=""
                                                                            class="k-title__subtitle-wrapper long-primer">
                                                                            <div data-v-194e1f66=""
                                                                                class="grey-one--text mt-moon">
                                                                                Biceps
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div id="k-row-c1185dbd-e56b-45c7-87c8-14d5bada6b46"
                                                                class="k-exercises__exercise-row k-row clickable standalone no-shadow no-margin-bottom">
                                                                <div class="k-row__slot--left">
                                                                    <div class="d-flex align-center">
                                                                        <div>
                                                                            <div id="checkbox-undefined"
                                                                                class="k-checkbox">
                                                                                <input
                                                                                    id="object-929153" type="checkbox"
                                                                                    data-vv-name="object-929153"
                                                                                    data-vv-as="" role="checkbox"
                                                                                    class="k-checkbox__input"
                                                                                    value="false" />
                                                                                <div class="k-checkbox__wrapper">
                                                                                    <svg
                                                                                        data-v-7f8bad2e=""
                                                                                        aria-hidden="true"
                                                                                        focusable="false"
                                                                                        data-prefix="far"
                                                                                        data-icon="check" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 512 512"
                                                                                        class="k-checkbox__check svg-inline--fa fa-check fa-w-16 k-icon mars white--text">
                                                                                        <path data-v-7f8bad2e=""
                                                                                            fill="currentColor"
                                                                                            d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                                                                                            class="">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                                <label
                                                                                    for="object-929153"
                                                                                    class="k-checkbox__label">
                                                                                    <span>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-c9edefc2=""
                                                                            class="k-image colorOne">
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__sizer"
                                                                                style={{ "padding-bottom": "100%" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__image"
                                                                                style={{ "background-image": "url(https://img.youtube.com/vi/0twaGpAcghQ/hqdefault.jpg)" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__content"
                                                                                style={{ "display": "none" }}>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="k-row__slot--middle">
                                                                    <span
                                                                        data-v-194e1f66="" class="k-title">
                                                                        <div data-v-194e1f66="" class="d-flex pica">
                                                                            Alternating Dumbbell Floor Press&nbsp;
                                                                        </div>
                                                                        <div data-v-194e1f66=""
                                                                            class="k-title__subtitle-wrapper long-primer">
                                                                            <div data-v-194e1f66=""
                                                                                class="grey-one--text mt-moon">
                                                                                Chest
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div id="k-row-537e8c0e-e25a-426a-8fee-06730360e6c0"
                                                                class="k-exercises__exercise-row k-row clickable standalone no-shadow no-margin-bottom">
                                                                <div class="k-row__slot--left">
                                                                    <div class="d-flex align-center">
                                                                        <div>
                                                                            <div id="checkbox-undefined"
                                                                                class="k-checkbox">
                                                                                <input
                                                                                    id="object-644890" type="checkbox"
                                                                                    data-vv-name="object-644890"
                                                                                    data-vv-as="" role="checkbox"
                                                                                    class="k-checkbox__input"
                                                                                    value="false" />
                                                                                <div class="k-checkbox__wrapper">
                                                                                    <svg
                                                                                        data-v-7f8bad2e=""
                                                                                        aria-hidden="true"
                                                                                        focusable="false"
                                                                                        data-prefix="far"
                                                                                        data-icon="check" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 512 512"
                                                                                        class="k-checkbox__check svg-inline--fa fa-check fa-w-16 k-icon mars white--text">
                                                                                        <path data-v-7f8bad2e=""
                                                                                            fill="currentColor"
                                                                                            d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                                                                                            class="">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                                <label
                                                                                    for="object-644890"
                                                                                    class="k-checkbox__label">
                                                                                    <span>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-c9edefc2=""
                                                                            class="k-image colorOne">
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__sizer"
                                                                                style={{ "padding-bottom": "100%" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__image"
                                                                                style={{ "background-image": "url(https://img.youtube.com/vi/CI_BzDmlte4/hqdefault.jpg)" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__content"
                                                                                style={{ "display": "none" }}>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="k-row__slot--middle">
                                                                    <span
                                                                        data-v-194e1f66="" class="k-title">
                                                                        <div data-v-194e1f66="" class="d-flex pica">
                                                                            Alternating Front Raise
                                                                        </div>
                                                                        <div data-v-194e1f66=""
                                                                            class="k-title__subtitle-wrapper long-primer">
                                                                            <div data-v-194e1f66=""
                                                                                class="grey-one--text mt-moon">
                                                                                Shoulders
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div id="k-row-9e3fc95e-280c-44df-beaa-69351c663790"
                                                                class="k-exercises__exercise-row k-row clickable standalone no-shadow no-margin-bottom">
                                                                <div class="k-row__slot--left">
                                                                    <div class="d-flex align-center">
                                                                        <div>
                                                                            <div id="checkbox-undefined"
                                                                                class="k-checkbox">
                                                                                <input
                                                                                    id="object-230532" type="checkbox"
                                                                                    data-vv-name="object-230532"
                                                                                    data-vv-as="" role="checkbox"
                                                                                    class="k-checkbox__input"
                                                                                    value="false" />
                                                                                <div class="k-checkbox__wrapper">
                                                                                    <svg
                                                                                        data-v-7f8bad2e=""
                                                                                        aria-hidden="true"
                                                                                        focusable="false"
                                                                                        data-prefix="far"
                                                                                        data-icon="check" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 512 512"
                                                                                        class="k-checkbox__check svg-inline--fa fa-check fa-w-16 k-icon mars white--text">
                                                                                        <path data-v-7f8bad2e=""
                                                                                            fill="currentColor"
                                                                                            d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                                                                                            class="">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                                <label
                                                                                    for="object-230532"
                                                                                    class="k-checkbox__label">
                                                                                    <span>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-c9edefc2=""
                                                                            class="k-image colorOne">
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__sizer"
                                                                                style={{ "padding-bottom": "100%" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__image"
                                                                                style={{ "background-image": "url(https://img.youtube.com/vi/GxCV58Dnj34/hqdefault.jpg)" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__content"
                                                                                style={{ "display": "none" }}>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="k-row__slot--middle"><span
                                                                    data-v-194e1f66="" class="k-title">
                                                                    <div data-v-194e1f66="" class="d-flex pica">
                                                                        Alternating Preacher Curl
                                                                    </div>
                                                                    <div data-v-194e1f66=""
                                                                        class="k-title__subtitle-wrapper long-primer">
                                                                        <div data-v-194e1f66=""
                                                                            class="grey-one--text mt-moon">
                                                                            Biceps
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                                </div>
                                                            </div>
                                                            <div id="k-row-42e12995-1362-4065-9e3a-17fe584afaab"
                                                                class="k-exercises__exercise-row k-row clickable standalone no-shadow no-margin-bottom">
                                                                <div class="k-row__slot--left">
                                                                    <div class="d-flex align-center">
                                                                        <div>
                                                                            <div id="checkbox-undefined"
                                                                                class="k-checkbox">
                                                                                <input
                                                                                    id="object-1294" type="checkbox"
                                                                                    data-vv-name="object-1294"
                                                                                    data-vv-as="" role="checkbox"
                                                                                    class="k-checkbox__input"
                                                                                    value="false" />
                                                                                <div class="k-checkbox__wrapper">
                                                                                    <svg
                                                                                        data-v-7f8bad2e=""
                                                                                        aria-hidden="true"
                                                                                        focusable="false"
                                                                                        data-prefix="far"
                                                                                        data-icon="check" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 512 512"
                                                                                        class="k-checkbox__check svg-inline--fa fa-check fa-w-16 k-icon mars white--text">
                                                                                        <path data-v-7f8bad2e=""
                                                                                            fill="currentColor"
                                                                                            d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                                                                                            class="">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                                <label
                                                                                    for="object-1294"
                                                                                    class="k-checkbox__label">
                                                                                    <span>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-c9edefc2=""
                                                                            class="k-image colorOne">
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__sizer"
                                                                                style={{ "padding-bottom": "100%" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__image"
                                                                                style={{ "background-image": "url(https://img.youtube.com/vi/HS5j_dSjysQ/hqdefault.jpg)" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__content"
                                                                                style={{ "display": "none" }}>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="k-row__slot--middle">
                                                                    <span
                                                                        data-v-194e1f66="" class="k-title">
                                                                        <div data-v-194e1f66="" class="d-flex pica">
                                                                            Seated Arnold Press
                                                                        </div>
                                                                        <div data-v-194e1f66=""
                                                                            class="k-title__subtitle-wrapper long-primer">
                                                                            <div data-v-194e1f66=""
                                                                                class="grey-one--text mt-moon">
                                                                                Shoulders
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div id="k-row-64c69827-b62a-4c52-ab7c-e4fb7f570123"
                                                                class="k-exercises__exercise-row k-row clickable standalone no-shadow no-margin-bottom">
                                                                <div class="k-row__slot--left">
                                                                    <div class="d-flex align-center">
                                                                        <div>
                                                                            <div id="checkbox-undefined"
                                                                                class="k-checkbox">
                                                                                <input
                                                                                    id="object-412286" type="checkbox"
                                                                                    data-vv-name="object-412286"
                                                                                    data-vv-as="" role="checkbox"
                                                                                    class="k-checkbox__input"
                                                                                    value="false" />
                                                                                <div class="k-checkbox__wrapper">
                                                                                    <svg
                                                                                        data-v-7f8bad2e=""
                                                                                        aria-hidden="true"
                                                                                        focusable="false"
                                                                                        data-prefix="far"
                                                                                        data-icon="check" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 512 512"
                                                                                        class="k-checkbox__check svg-inline--fa fa-check fa-w-16 k-icon mars white--text">
                                                                                        <path data-v-7f8bad2e=""
                                                                                            fill="currentColor"
                                                                                            d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                                                                                            class="">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                                <label
                                                                                    for="object-412286"
                                                                                    class="k-checkbox__label">
                                                                                    <span>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-c9edefc2=""
                                                                            class="k-image colorOne">
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__sizer"
                                                                                style={{ "padding-bottom": "100%" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__image"
                                                                                style={{ "background-image": "url(https://img.youtube.com/vi/FsoM2-NOkkw/hqdefault.jpg)" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__content"
                                                                                style={{ "display": "none" }}>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="k-row__slot--middle"><span
                                                                    data-v-194e1f66="" class="k-title">
                                                                    <div data-v-194e1f66="" class="d-flex pica">
                                                                        Around The Worlds&nbsp;
                                                                    </div>
                                                                    <div data-v-194e1f66=""
                                                                        class="k-title__subtitle-wrapper long-primer">
                                                                        <div data-v-194e1f66=""
                                                                            class="grey-one--text mt-moon">
                                                                            Chest
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                                </div>
                                                            </div>
                                                            <div id="k-row-c52f1d5d-d7fa-4cf6-b369-9633b2e21884"
                                                                class="k-exercises__exercise-row k-row clickable standalone no-shadow no-margin-bottom">
                                                                <div class="k-row__slot--left">
                                                                    <div class="d-flex align-center">
                                                                        <div>
                                                                            <div id="checkbox-undefined"
                                                                                class="k-checkbox">
                                                                                <input
                                                                                    id="object-411252" type="checkbox"
                                                                                    data-vv-name="object-411252"
                                                                                    data-vv-as="" role="checkbox"
                                                                                    class="k-checkbox__input"
                                                                                    value="false" />
                                                                                <div class="k-checkbox__wrapper">
                                                                                    <svg
                                                                                        data-v-7f8bad2e=""
                                                                                        aria-hidden="true"
                                                                                        focusable="false"
                                                                                        data-prefix="far"
                                                                                        data-icon="check" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 512 512"
                                                                                        class="k-checkbox__check svg-inline--fa fa-check fa-w-16 k-icon mars white--text">
                                                                                        <path data-v-7f8bad2e=""
                                                                                            fill="currentColor"
                                                                                            d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                                                                                            class="">
                                                                                        </path>
                                                                                    </svg>
                                                                                </div>
                                                                                <label
                                                                                    for="object-411252"
                                                                                    class="k-checkbox__label">
                                                                                    <span>
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div data-v-c9edefc2=""
                                                                            class="k-image colorOne">
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__sizer"
                                                                                style={{ "padding-bottom": "100%" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__image"
                                                                                style={{ "background-image": "url(https://img.youtube.com/vi/QI2wOrMCzwc/hqdefault.jpg)" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2=""
                                                                                class="k-image__content"
                                                                                style={{ "display": "none" }}>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="k-row__slot--middle">
                                                                    <span
                                                                        data-v-194e1f66="" class="k-title">
                                                                        <div data-v-194e1f66="" class="d-flex pica">
                                                                            Bent-Arm Dumbbell Pullover
                                                                        </div>
                                                                        <div data-v-194e1f66=""
                                                                            class="k-title__subtitle-wrapper long-primer">
                                                                            <div data-v-194e1f66=""
                                                                                class="grey-one--text mt-moon">
                                                                                Chest
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex justify-center mt-earth footer">
                                                        <button
                                                            to="[object Object]"
                                                            class="k-button disabled no-shadow medium">
                                                            <div class="k-button__content"
                                                                style={{ "opacity": "1" }}>
                                                                Add Exercises to Workout
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>






                                            <div data-v-70fe1976="" className="d-flex justify-center pa-saturn">
                                                <button
                                                    data-v-70fe1976="" to="[object Object]"
                                                    className="k-button medium colorOne">
                                                    <div className="k-button__content"
                                                        style={{ "opacity": 1 }}>
                                                        Save exercise
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

export default CreateWorkouts
