import React, { useState } from 'react'
import Header from './Header';
import { NavLink, Link, useLocation } from "react-router-dom";
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Form } from "react-bootstrap";
import YoutubeEmbed from './YoutubeEmbed';
import getYouTubeID from 'get-youtube-id';

function AddExercises() {

    const [ExerciseTitle, setExerciseTitle] = useState("");
    const [ExerciseDescription, setExerciseDescription] = useState("");
    const [ExerciseCategory, setExerciseCategory] = useState("");
    const [Type, setType] = useState("");
    const [MainMuscleWorked, setMainMuscleWorked] = useState("");
    const [OtherMuscleWorked, setOtherMuscleWorked] = useState("");
    const [Equipment, setEquipment] = useState("");
    const [MechanicsType, setMechanicsType] = useState("");
    const [Level, setLevel] = useState("");
    const [Sport, setSport] = useState("");
    const [Force, setForce] = useState("");
    const [VideoTitle, setVideoTitle] = useState("");
    const [VideoURL, setVideoURL] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        fetch("https://the3percent-exercises.herokuapp.com/api/exercise", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ExerciseTitle, ExerciseDescription, ExerciseCategory, Type, MainMuscleWorked, OtherMuscleWorked, Equipment, MechanicsType, Level, Sport, Force, VideoTitle, VideoURL }),
        })
            .then(function (response) {
                console.log(response.status);
                if (response.status === 200) {
                    Store.addNotification({
                        title: "Success!",
                        message: "New Exercise added successfully",
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
                    window.location = "/exerciselist";
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
            .catch((error) => {
                console.log(error)
            });
    };

    let id = getYouTubeID(VideoURL);
    // console.log(id);
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
                            <div data-v-2913046a="" className="background-ribbon"
                                style={{ "height": "230px" }}>
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
                                                                                    placeholder="Exercise Title"
                                                                                    rows="5" data-mask="null"
                                                                                    aria-checked="Grams"
                                                                                    value={ExerciseTitle}
                                                                                    onChange={(e) => setExerciseTitle(e.target.value)} />
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
                                                                                Exercise Description
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
                                                                                        value={ExerciseDescription}
                                                                                        onChange={(e) => setExerciseDescription(e.target.value)}>
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

                                            <div data-v-52fb9f55="" data-v-70fe1976="" className="mb-earth k-card raised">
                                                <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                    <div data-v-52fb9f55=""
                                                        id="k-row-e7998299-5d85-4c87-946a-1a8a341bc050"
                                                        className="k-row thin">
                                                        <div className="k-row__slot--middle"><span data-v-194e1f66=""
                                                            className="k-title">
                                                            <div data-v-194e1f66="" className="d-flex pica">
                                                                <span
                                                                    data-v-194e1f66="" data-v-52fb9f55=""
                                                                    className="k-title">
                                                                    <div data-v-194e1f66="" className="d-flex pica">
                                                                        Breakdown
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
                                                    </div>
                                                </div>
                                                <hr /><br />
                                                <div className="k-card__content">
                                                    <div data-v-52fb9f55="" className="layout row wrap no-padding">

                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" >
                                                                <label for="object-640858"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Exercise Category* (Barbell /Bodyweight /Cables etc)
                                                                </label>
                                                                <div >
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }} >
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            value={ExerciseCategory}
                                                                            onChange={(e) => setExerciseCategory(e.target.value)}>
                                                                            <select name="gender" className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <option selected>Choose...</option>
                                                                                <option value="Barbell">Barbell</option>
                                                                                <option value="Bodyweight">Bodyweight</option>
                                                                                <option value="Cables">Cables</option>
                                                                                <option value="Abs">Abs</option>
                                                                            </select>
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0">
                                                                <label for="object-584956"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Type* (Strength / Powerlifting / Stretching etc)
                                                                </label>
                                                                <div >
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            value={Type}
                                                                            onChange={(e) => setType(e.target.value)}>
                                                                            <select name="gender" className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <option selected>Choose...</option>
                                                                                <option value="Strength">Strength</option>
                                                                                <option value="Powerlifting">Powerlifting</option>
                                                                                <option value="Plyometrics">Plyometrics</option>
                                                                                <option value="Stretching">Stretching</option>
                                                                            </select>
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" >
                                                                <label for="object-582949"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Main Muscle Worked* (Biceps / Shoulders / Chest etc)
                                                                </label>
                                                                <div>
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            value={MainMuscleWorked}
                                                                            onChange={(e) => setMainMuscleWorked(e.target.value)}>
                                                                            <select name="gender" className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <option selected>Choose...</option>
                                                                                <option value="Shoulders">Shoulders</option>
                                                                                <option value="Chest">Chest</option>
                                                                                <option value="Biceps">Biceps</option>
                                                                                <option value="Triceps">Triceps</option>
                                                                                <option value="Back">Back</option>
                                                                                <option value="Legs">Legs</option>
                                                                                <option value="Forearm">Forearm</option>
                                                                            </select>
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" >
                                                                <label for="object-497406" className="minion k-input__label colorOne--text">
                                                                    Other Muscles Worked
                                                                </label>
                                                                <div className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input type="text"
                                                                            value={OtherMuscleWorked}
                                                                            onChange={(e) => setOtherMuscleWorked(e.target.value)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0" >
                                                                <label for="object-537921"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Equipment
                                                                    (Dumbbell / Barbell / Body Only)
                                                                </label>
                                                                <div>
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }} >
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            value={Equipment}
                                                                            onChange={(e) => setEquipment(e.target.value)}>
                                                                            <select name="gender" className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <option selected>Choose...</option>
                                                                                <option value="Dumbbell">Dumbbell</option>
                                                                                <option value="Barbell">Barbell</option>
                                                                                <option value="Bars">Bars</option>
                                                                                <option value="Benches">Benches</option>
                                                                                <option value="Cables">Cables</option>
                                                                                <option value="Tredmill">Tredmill</option>
                                                                            </select>
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0"  >
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Mechanics Type ( Isolation / Compound )
                                                                </label>
                                                                <div>
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            value={MechanicsType}
                                                                            onChange={(e) => setMechanicsType(e.target.value)}>
                                                                            <select name="gender" className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <option selected>Choose...</option>
                                                                                <option value="Isolation">Isolation</option>
                                                                                <option value="Compound">Compound</option>
                                                                            </select>
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0"  >
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Level (Beginner / Intermediate / Expert)
                                                                </label>
                                                                <div >
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            value={Level}
                                                                            onChange={(e) => setLevel(e.target.value)}>
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

                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0"  >
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Sport (Yes / No)
                                                                </label>
                                                                <div>
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            value={Sport}
                                                                            onChange={(e) => setSport(e.target.value)}>
                                                                            <select name="gender" className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <option selected>Choose...</option>
                                                                                <option value="Yes">Yes</option>
                                                                                <option value="No">No</option>
                                                                            </select>
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                min="0"  >
                                                                <label for="object-86824"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Force ( Pull / Push / Static)
                                                                </label>
                                                                <div>
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            value={Force}
                                                                            onChange={(e) => setForce(e.target.value)}>
                                                                            <select name="gender" className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <option selected>Choose...</option>
                                                                                <option value="Pull">Pull</option>
                                                                                <option value="Push">Push</option>
                                                                                <option value="Static">Static</option>
                                                                            </select>
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
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
                                                            <div data-v-194e1f66="" className="d-flex pica">
                                                                <span
                                                                    data-v-194e1f66="" data-v-52fb9f55=""
                                                                    className="k-title">
                                                                    <div data-v-194e1f66="" className="d-flex pica">
                                                                        Exercise Video - will be displayed first
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
                                                    </div>
                                                </div>
                                                <hr /><br />

                                                <div className="k-card__content">
                                                    <div data-v-52fb9f55="" className="layout row wrap no-padding">
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
                                                                    Video Title*
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
                                                                            value={VideoTitle}
                                                                            onChange={(e) => setVideoTitle(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150="" ></div>
                                                            </div>
                                                        </div>
                                                        <div className="k-select__list-container"></div>
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
                                                                    Video URL*
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
                                                                            value={VideoURL}
                                                                            onChange={(e) => setVideoURL(e.target.value)}

                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div data-v-6b0e4150="" ></div>
                                                                <YoutubeEmbed embedId={id} />
                                                            </div>
                                                        </div>
                                                        <div className="k-select__list-container"></div>
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
                                                            <div data-v-194e1f66="" className="d-flex pica">
                                                                <span
                                                                    data-v-194e1f66="" data-v-52fb9f55=""
                                                                    className="k-title">
                                                                    <div data-v-194e1f66="" className="d-flex pica">
                                                                        Exercise Image(s) - drag to sort
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
                                                    </div>
                                                </div>
                                                <hr /><br />
                                                <div data-v-52fb9f55="" data-v-70fe1976="" className="mb-earth k-card raised">
                                                    <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                        <div data-v-52fb9f55=""
                                                            id="k-row-e7998299-5d85-4c87-946a-1a8a341bc050"
                                                            className="k-row thin">
                                                            <div className="k-row__slot--middle"><span data-v-194e1f66=""
                                                                className="k-title">
                                                                <div data-v-194e1f66="" className="d-flex pica">
                                                                    <span
                                                                        data-v-194e1f66="" data-v-52fb9f55=""
                                                                        className="k-title">
                                                                        <div data-v-194e1f66="" className="d-flex pica">
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
                                                        </div>
                                                    </div>

                                                    <div className="k-card__content">
                                                        <div data-v-52fb9f55="" className="layout row wrap no-padding">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="k-card__content">
                                                    <div data-v-52fb9f55="" className="layout row wrap no-padding">
                                                    </div>
                                                </div>
                                            </div>



                                            <div data-v-70fe1976="" className="d-flex justify-center pa-saturn">
                                                <button
                                                    onClick={onSubmit}
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


export default AddExercises