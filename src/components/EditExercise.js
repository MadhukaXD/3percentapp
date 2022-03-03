import React, { useState, useEffect } from 'react'
import axios from "axios"
import Header from './Header';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Form } from "react-bootstrap";

function EditExercise() {

    let [ExerciseTitle, setExerciseTitle] = useState("");
    let [ExerciseDescription, setExerciseDescription] = useState("");
    let [ExerciseCategory, setExerciseCategory] = useState("");
    let [Type, setType] = useState("");
    let [MainMuscleWorked, setMainMuscleWorked] = useState("");
    let [OtherMuscleWorked, setOtherMuscleWorked] = useState("");
    let [Equipment, setEquipment] = useState("");
    let [MechanicsType, setMechanicsType] = useState("");
    let [Level, setLevel] = useState("");
    let [Sport, setSport] = useState("");
    let [Force, setForce] = useState("");
    let [VideoTitle, setVideoTitle] = useState("");
    let [VideoURL, setVideoURL] = useState("");
    let [isLoad, setIsLoad] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        // alert(ExerciseDescription);
        fetch("https://the3percent-exercises.herokuapp.com/api/exercise", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ExerciseTitle, ExerciseDescription, ExerciseCategory, Type, MainMuscleWorked, OtherMuscleWorked, Equipment, MechanicsType, Level, Sport, Force, VideoTitle, VideoURL }),
        })
            .then(function (response) {
                if (response.status === 200) {
                    Store.addNotification({
                        title: "Success!",
                        message: "Exercise Updated successfully",
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
                return response.text();
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            });
    };

    const [ExerciseList, setExerciseList] = useState([]);

    const queryParams = new URLSearchParams(window.location.search);
    const ExerciseList_id = queryParams.get('ExerciseList_id');

    const apiurl = "https://the3percent-exercises.herokuapp.com/api/exercise/" + ExerciseList_id;

    useState(() => {
        axios
            .get(apiurl, { id: ExerciseList_id })
            .then(res => setExerciseList(res.data))
            .catch(error => console.log(error));
        setIsLoad('0');
    });

    React.useEffect(() => {
        fetch('https://the3percent-exercises.herokuapp.com/api/exercise/' + ExerciseList_id)
            .then(results => results.json())
            .then(data => {
                // console.log(data.Recipe);
                setExerciseTitle(data.ExerciseTitle);
                setExerciseDescription(data.ExerciseDescription);
                setExerciseCategory(data.ExerciseCategory);
                setType(data.Type);
                setMainMuscleWorked(data.MainMuscleWorked);
                setOtherMuscleWorked(data.OtherMuscleWorked);
                setEquipment(data.Equipment);
                setMechanicsType(data.MechanicsType);
                setLevel(data.Level);
                setSport(data.Sport);
                setForce(data.Force);
                setIsLoad('1');
            });
    }, []); // Pass empty array to only run once on mount.


    // const [DeleteExercise, setDeleteExercise] = useState([]);

    // function Delete() {
    //     axios
    //         .delete(apiurl, { id: ExerciseList_id })
    //         .then(res => setDeleteExercise(res.data))
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
                                                                                    readOnly={true}
                                                                                    key={ExerciseList.ExerciseTitle}
                                                                                    defaultValue={ExerciseList.ExerciseTitle}
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
                                                                                        key={ExerciseList.ExerciseDescription}
                                                                                        defaultValue={ExerciseList.ExerciseDescription}
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
                                                                        Breakdown
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
                                                                    Exercise Category* (Barbell /Bodyweight /Cables etc)
                                                                </label>
                                                                <div>
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }} >
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            onChange={(e) => setExerciseCategory(e.target.value)}>
                                                                            <select class="k-input-container d-flex align-center k-input__field k-input__field--active"
                                                                                key={ExerciseList.ExerciseCategory}
                                                                                defaultValue={ExerciseList.ExerciseCategory}>
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

                                                        <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                                                                min="0">
                                                                <label for="object-584956"
                                                                    class="minion k-input__label colorOne--text">
                                                                    Type* (Strength / Powerlifting / Stretching etc)
                                                                </label>
                                                                <div>
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            onChange={(e) => setType(e.target.value)}>
                                                                            <select class="k-input-container d-flex align-center k-input__field k-input__field--active"
                                                                                key={ExerciseList.Type}
                                                                                defaultValue={ExerciseList.Type}>
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

                                                        <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                                                                min="0" >
                                                                <label for="object-582949"
                                                                    class="minion k-input__label colorOne--text">
                                                                    Main Muscle Worked* (Biceps / Shoulders / Chest etc)
                                                                </label>
                                                                <div >
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            onChange={(e) => setMainMuscleWorked(e.target.value)} >
                                                                            <select class="k-input-container d-flex align-center k-input__field k-input__field--active"
                                                                                key={ExerciseList.MainMuscleWorked}
                                                                                defaultValue={ExerciseList.MainMuscleWorked}>
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

                                                        <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                                                                min="0" >
                                                                <label for="object-497406" class="minion k-input__label colorOne--text">
                                                                    Other Muscles Worked
                                                                </label>
                                                                <div class="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input type="text"
                                                                            key={ExerciseList.OtherMuscleWorked}
                                                                            defaultValue={ExerciseList.OtherMuscleWorked}
                                                                            onChange={(e) => setOtherMuscleWorked(e.target.value)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                                                                min="0" >
                                                                <label for="object-537921"
                                                                    class="minion k-input__label colorOne--text">
                                                                    Equipment
                                                                    (Dumbbell / Barbell / Body Only)
                                                                </label>
                                                                <div>
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }} >
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            onChange={(e) => setEquipment(e.target.value)} >
                                                                            <select name="gender" class="k-input-container d-flex align-center k-input__field k-input__field--active"
                                                                                key={ExerciseList.Equipment}
                                                                                defaultValue={ExerciseList.Equipment}>
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

                                                        <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                                                                min="0"  >
                                                                <label for="object-86824"
                                                                    class="minion k-input__label colorOne--text">
                                                                    Mechanics Type ( Isolation / Compound )
                                                                </label>
                                                                <div>
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            onChange={(e) => setMechanicsType(e.target.value)} >
                                                                            <select name="gender" class="k-input-container d-flex align-center k-input__field k-input__field--active"
                                                                                key={ExerciseList.MechanicsType}
                                                                                defaultValue={ExerciseList.MechanicsType}>
                                                                                <option value="Isolation">Isolation</option>
                                                                                <option value="Compound">Compound</option>
                                                                            </select>
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                                                                min="0"  >
                                                                <label for="object-86824"
                                                                    class="minion k-input__label colorOne--text">
                                                                    Level (Beginner / Intermediate / Expert)
                                                                </label>
                                                                <div>
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            onChange={(e) => setLevel(e.target.value)}>
                                                                            <select name="gender" class="k-input-container d-flex align-center k-input__field k-input__field--active"
                                                                                key={ExerciseList.Level}
                                                                                defaultValue={ExerciseList.Level}>
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
                                                                min="0"  >
                                                                <label for="object-86824"
                                                                    class="minion k-input__label colorOne--text">
                                                                    Sport (Yes / No)
                                                                </label>
                                                                <div>
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            onChange={(e) => setSport(e.target.value)}>
                                                                            <select name="gender" class="k-input-container d-flex align-center k-input__field k-input__field--active"
                                                                                key={ExerciseList.Sport}
                                                                                defaultValue={ExerciseList.Sport}>
                                                                                <option value="Yes">Yes</option>
                                                                                <option value="No">No</option>
                                                                            </select>
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                                                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                                                                min="0"  >
                                                                <label for="object-86824"
                                                                    class="minion k-input__label colorOne--text">
                                                                    Force ( Pull / Push / Static)
                                                                </label>
                                                                <div>
                                                                    <div class="pica"
                                                                        style={{
                                                                            "flex-grow": "2",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail"
                                                                            onChange={(e) => setForce(e.target.value)}>
                                                                            <select name="gender" class="k-input-container d-flex align-center k-input__field k-input__field--active"
                                                                                key={ExerciseList.Force}
                                                                                defaultValue={ExerciseList.Force}>
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
                                                                        Exercise Video - will be displayed first
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
                                                                            key={ExerciseList.VideoTitle}
                                                                            defaultValue={ExerciseList.VideoTitle}
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
                                                                            key={ExerciseList.VideoURL}
                                                                            defaultValue={ExerciseList.VideoURL}
                                                                            onChange={(e) => setVideoURL(e.target.value)}
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
                                                <button
                                                    onClick={onSubmit}
                                                    data-v-70fe1976="" to="[object Object]"
                                                    className="k-button medium colorOne">
                                                    <div className="k-button__content"
                                                        style={{ "opacity": 1 }}>
                                                        Update exercise
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

export default EditExercise;
