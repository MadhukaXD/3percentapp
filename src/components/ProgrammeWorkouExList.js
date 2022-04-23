import React, { useState, useEffect } from 'react'
import axios from "axios"
import Header from './Header';
import { NavLink, Link, useLocation } from "react-router-dom";

function ProgrammeWorkouExList() {

    let [isLoad, setIsLoad] = useState("0");



    const [ProgrammeList, setProgrammeList] = useState([]);
    const [ProgrammeWoList, setProgrammeWoList] = useState([]);


    const queryParams = new URLSearchParams(window.location.search);
    const ProgrammeList_id = queryParams.get('ProgrammeList_id');
    const [ProgrammeWoExList, setProgrammeWoExList] = useState([]);
    const ProgrammeWoList_id = queryParams.get('ProgrammeWoList_id');
    const apiurl = "http://localhost:5005/api/programme/" + ProgrammeList_id;

    React.useEffect(() => {
        fetch(apiurl)
            .then(results => results.json())
            .then(data => {
                // console.log(data.Recipe);
                setProgrammeList(data);
                setProgrammeWoList(data.Workout);

                for (let i = 0; i < data.Workout.length; i++) {
                    if (data.Workout[i]['_id'] === ProgrammeWoList_id) {
                        console.log("fhgfhg");
                        setProgrammeWoExList(data.Workout[i]['Exercise']);
                        break;
                        //break;
                    }
                }
                // consolesetProgrammeWoExList(data.Workout.Exercise);
                //console.log(data.Workout);
                setIsLoad('1');
            });
    }, []);
    // console.log(ProgrammeWoExList['Exercise']);

    // const a = [];
    // const ProgrammeWoList_id = queryParams.get('ProgrammeWoList_id');
    // const [ProgrammeWoExList, setProgrammeWoExList] = useState([]);
    // for (let i = 0; i < ProgrammeWoList.length; i++) {
    //     if (ProgrammeWoList[i]['_id'] === ProgrammeWoList_id) {
    //         a=ProgrammeWoList[i]['Exercise'];
    //         console.log();
    //         break;
    //         //break;
    //     }
    // }

    // console.log(ProgrammeWoExList);


    let [ShowDeleteHover, setShowDeleteHover] = useState(false);

    const onClink = (e) => {
        e.preventDefault();
        setShowDeleteHover(!ShowDeleteHover);
    };


    return (
        <div id="app" className="grey-background" >
            <div data-app="true" className="k-app light" >
                <div className="k-layout-main__wrapper" >
                    <Header />
                    <div id="tooltip-boundary" className="tooltip-boundary"></div>
                    <div className="k-layout-main" >
                        <div data-v-2913046a="" className="background-ribbon__container"
                            style={{
                                "height": "300px",
                                "top": "-5rem",
                            }}>
                            <div data-v-2913046a="" className="background-ribbon"
                                style={{ "height": "300px" }}>
                                <div data-v-2913046a="" className="header-image-background background-ribbon__old"
                                    style={{
                                        "background-color": "rgb(20, 10, 37)",
                                        "background-position-y": "0%"
                                    }}>
                                </div>
                                <div data-v-2913046a="" id="
                            background-filter"
                                    className="absolute top-0 left-0 tw-w-full tw-h-full bg-white z-10"></div>
                                <div data-v-2913046a="" className="background-ribbon__cutout"></div>
                            </div>
                        </div>
                        <div data-v-0cf3cda2="" className="page-wrapper">
                            <div data-v-5a98f47a="" data-v-0cf3cda2="" share-actions="">
                                <div className="container py-none grid-gap-earth">
                                    <div className="layout row wrap">
                                        <div className="flex pt-earth xs12">
                                            <div data-v-194e1f66="" className="d-flex canon" >
                                                <div data-v-194e1f66="" className="colorTwo--text tw-text-2xl" >
                                                    Programme Workout Exercise List </div>
                                            </div>
                                        </div>
                                        <div className="flex pt-earth xs12 pt-none">
                                            <div className="vue-portal-target">
                                                <div data-v-1b4e9c52="">
                                                    <div data-v-1b4e9c52="" className="layout row wrap">
                                                        <div data-v-1b4e9c52="" className="flex xs12 md9">
                                                            <div data-v-1b4e9c52="" className="action-toolbar__input k-input mb-none"
                                                                style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field">
                                                                    <div
                                                                        className="k-input__field-icon pica left colorOne--text">
                                                                    </div>
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "1",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="text"
                                                                            data-vv-name="object-898551"
                                                                            appendcb="function(){}"
                                                                            aria-checked=""
                                                                            autocomplete="on"
                                                                            id="object-898551"
                                                                            name="object-898551"
                                                                            placeholder="Programme Title"
                                                                            prependcb="function(){}"
                                                                            role="text" rows="5"
                                                                            data-mask="null"
                                                                            readOnly={true}
                                                                        // value={ProgrammeWoList.WorkoutTitle}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-1b4e9c52=""
                                                            className="flex d-flex justify-end align-center xs12 md3">

                                                            <hr data-v-2c4f5d45="" data-v-1b4e9c52=""
                                                                className="action-toolbar__divider mx-earth k-divider--vertical grey-two--text none"
                                                                style={{
                                                                    "border-top-width": "0px",
                                                                    "border-left-width": "1px"
                                                                }} />
                                                            <div data-v-1b4e9c52="" className="k-flyout">
                                                                <div className="k-flyout__activator"><button data-v-1b4e9c52=""
                                                                    to="[object Object]"
                                                                    className="action-toolbar__icon k-button flat icon medium colorOne--text">
                                                                    <div className="k-button__content"
                                                                        style={{ "opacity": 1 }}>
                                                                        <svg data-v-7f8bad2e="" aria-hidden="true"
                                                                            focusable="false" data-prefix="far"
                                                                            data-icon="sort" role="img"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 320 512"
                                                                            className="svg-inline--fa fa-sort fa-w-10 k-icon earth colortwotranslucent colorTwo--text">
                                                                            <path data-v-7f8bad2e="" fill="currentColor"
                                                                                d="M272 288H48.1c-42.6 0-64.2 51.7-33.9 81.9l111.9 112c18.7 18.7 49.1 18.7 67.9 0l112-112c30-30.1 8.7-81.9-34-81.9zM160 448L48 336h224L160 448zM48 224h223.9c42.6 0 64.2-51.7 33.9-81.9l-111.9-112c-18.7-18.7-49.1-18.7-67.9 0l-112 112C-16 172.2 5.3 224 48 224zM160 64l112 112H48L160 64z"
                                                                                className="">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </button>
                                                                </div>
                                                                <div id="k-flyout-block-f7d9aca3-ab7c-401c-852c-b4807329c373"
                                                                    className="k-flyout__block pica"
                                                                    style={{ "min-width": "200px" }}>
                                                                    <div data-v-1b4e9c52="" className="px-mars">
                                                                        <div data-v-2b88e628="" data-v-1b4e9c52=""
                                                                            className="text-xs-left">
                                                                            <div data-v-2b88e628="" className="k-radio my-moon">
                                                                                <input data-v-2b88e628=""
                                                                                    id="object-458054-0" type="radio"
                                                                                    name="sortOptions" role="radio"
                                                                                    className="k-radio__input" value="titleAsc" />
                                                                                <div data-v-2b88e628=""
                                                                                    className="k-radio__wrapper checked">
                                                                                    <span
                                                                                        data-v-2b88e628=""
                                                                                        className="k-radio__check k-radio__check--checked">
                                                                                    </span>
                                                                                </div>
                                                                                <label data-v-2b88e628=""
                                                                                    for="object-458054-0"
                                                                                    className="k-radio__label"><span
                                                                                        data-v-2b88e628=""
                                                                                        className="k-label-content">
                                                                                        A-Z
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div data-v-2b88e628="" className="k-radio my-moon">
                                                                                <input data-v-2b88e628=""
                                                                                    id="object-458054-1" type="radio"
                                                                                    name="sortOptions" role="radio"
                                                                                    className="k-radio__input"
                                                                                    value="titleDesc" />
                                                                                <div data-v-2b88e628=""
                                                                                    className="k-radio__wrapper">
                                                                                    <span
                                                                                        data-v-2b88e628=""
                                                                                        className="k-radio__check">
                                                                                    </span>
                                                                                </div>
                                                                                <label data-v-2b88e628=""
                                                                                    for="object-458054-1"
                                                                                    className="k-radio__label"><span
                                                                                        data-v-2b88e628=""
                                                                                        className="k-label-content">
                                                                                        Z-A
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div data-v-2b88e628="" className="k-radio my-moon">
                                                                                <input data-v-2b88e628=""
                                                                                    id="object-458054-2" type="radio"
                                                                                    name="sortOptions" role="radio"
                                                                                    className="k-radio__input"
                                                                                    value="createdDesc" />
                                                                                <div data-v-2b88e628=""
                                                                                    className="k-radio__wrapper">
                                                                                    <span
                                                                                        data-v-2b88e628=""
                                                                                        className="k-radio__check">
                                                                                    </span>
                                                                                </div>
                                                                                <label data-v-2b88e628=""
                                                                                    for="object-458054-2"
                                                                                    className="k-radio__label">
                                                                                    <span
                                                                                        data-v-2b88e628=""
                                                                                        className="k-label-content">
                                                                                        Most Recent
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                            <div data-v-2b88e628="" className="k-radio my-moon">
                                                                                <input data-v-2b88e628=""
                                                                                    id="object-458054-3" type="radio"
                                                                                    name="sortOptions" role="radio"
                                                                                    className="k-radio__input"
                                                                                    value="createdAsc" />
                                                                                <div data-v-2b88e628=""
                                                                                    className="k-radio__wrapper">
                                                                                    <span
                                                                                        data-v-2b88e628=""
                                                                                        className="k-radio__check">
                                                                                    </span>
                                                                                </div>
                                                                                <label data-v-2b88e628=""
                                                                                    for="object-458054-3"
                                                                                    className="k-radio__label">
                                                                                    <span
                                                                                        data-v-2b88e628=""
                                                                                        className="k-label-content">
                                                                                        Oldest first
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div data-v-5b87c31b="" data-v-1b4e9c52="" className="k-badge">
                                                                <div data-v-5b87c31b="" className="k-badge__overlay"
                                                                    style={{
                                                                        "top": "5px",
                                                                        "right": "5px"
                                                                    }}>
                                                                    <div data-v-62035167="" data-v-1b4e9c52=""
                                                                        className="k-counter brevier show" data-v-5b87c31b="">
                                                                        <div data-v-62035167=""
                                                                            className="k-counter__value colorTwo">1</div>
                                                                    </div>
                                                                </div>
                                                                <button data-v-1b4e9c52="" to="[object Object]"
                                                                    className="action-toolbar__icon k-button flat icon medium colorOne--text"
                                                                    data-v-5b87c31b="">
                                                                    <div className="k-button__content"
                                                                        style={{ "opacity": 1 }}>
                                                                        <svg
                                                                            data-v-7f8bad2e="" aria-hidden="true"
                                                                            focusable="false" data-prefix="far"
                                                                            data-icon="filter" role="img"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 512 512"
                                                                            className="svg-inline--fa fa-filter fa-w-16 k-icon earth colortwotranslucent colorTwo--text">
                                                                            <path data-v-7f8bad2e="" fill="currentColor"
                                                                                d="M463.952 0H48.057C5.419 0-16.094 51.731 14.116 81.941L176 243.882V416c0 15.108 7.113 29.335 19.2 40l64 47.066c31.273 21.855 76.8 1.538 76.8-38.4V243.882L497.893 81.941C528.042 51.792 506.675 0 463.952 0zM288 224v240l-64-48V224L48 48h416L288 224z"
                                                                                className="">
                                                                            </path>
                                                                        </svg>
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

                                {ShowDeleteHover ? <div>
                                    <div >
                                        <div className=""
                                            style={{
                                                "background-color": "#FF6600",
                                                "width": "400px",
                                                "height": "130px",
                                                "margin-left": "510px",
                                                "margin-top": "130px",
                                                "position": "absolute",
                                                "border-radius": "8px",
                                                "z-index": "5",
                                            }}>
                                            <div className="col"
                                                style={{
                                                    "padding-top": "20px",
                                                    "padding-bottom": "10px",
                                                    "padding-left": "auto",
                                                    "padding-right": "auto",
                                                }}
                                            >
                                                <div className="pica grow"
                                                    style={{
                                                        "padding-left": "18px",
                                                        "padding-right": "auto",
                                                        "padding-bottom": "25px",
                                                        "padding-top": "10px",
                                                    }}
                                                >
                                                    Are you sure you want to Delete this Workout?
                                                </div>
                                                <div className="row"
                                                    style={{
                                                        "margin-left": "30px",
                                                        "margin-right": "20px",
                                                    }}
                                                >
                                                    <button type="button" class="btn btn-danger"
                                                        style={{
                                                            "width": "150px",
                                                            "height": "auto",
                                                            "margin-right": "20px",

                                                        }}>Delete</button>
                                                    <button type="button" class="btn btn-primary"
                                                        style={{
                                                            "width": "150px",
                                                            "height": "auto",
                                                            "margin-left": "20px",
                                                        }}>Cancel</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div> : null}

                                <div className="container grid-gap-earth">
                                    <div data-v-5a98f47a="" className="layout row wrap">
                                        {isLoad == '0' ? (
                                            <div class='loader'><div class=''></div></div>
                                        ) : (
                                            <div></div>
                                        )}

                                        <div data-v-5a98f47a="" className="flex xs12">
                                            <div data-v-19d24620="" data-v-5a98f47a="" macro-type="grams">
                                                <div data-v-19d24620="">
                                                    <div data-v-19d24620="" className="v-portal"
                                                        style={{ "display": "none" }}>
                                                    </div>
                                                    <div data-v-19d24620="" className="action-bar-portal v-portal"
                                                        style={{ "display": "none" }}>
                                                    </div>
                                                    {/* Description */}
                                                    <div data-v-52fb9f55="" data-v-70fe1976="" className="mb-earth k-card raised"
                                                        style={{
                                                            "margin-top": "20px",
                                                            "margin-bottom": "20px",
                                                        }}
                                                    >
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
                                                                                    Programme Description
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
                                                                                        // value={ProgrammeList.ProgrammeDescription}
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

                                                    <div data-v-19d24620="" id="k-row-6dba366e-f496-4c5d-ac70-1e83a1f76ec0"
                                                        className="list-table-header k-row pl-mars pt-sun"
                                                        style={{
                                                            "margin-top": "-28px"
                                                        }}
                                                    >
                                                        <div className="k-row__slot--left">
                                                            <div style={{ "width": "24px" }}>
                                                                <div>
                                                                    <div id="checkbox-undefined" className="k-checkbox">
                                                                        <input
                                                                            id="object-743436" type="checkbox"
                                                                            data-vv-name="object-743436" data-vv-as=""
                                                                            role="checkbox" className="k-checkbox__input"
                                                                            value="false" />
                                                                        <div className="k-checkbox__wrapper">
                                                                            <svg
                                                                                data-v-7f8bad2e="" aria-hidden="true"
                                                                                focusable="false" data-prefix="far"
                                                                                data-icon="check" role="img"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 512 512"
                                                                                className="k-checkbox__check svg-inline--fa fa-check fa-w-16 k-icon mars white--text">
                                                                                <path data-v-7f8bad2e="" fill="currentColor"
                                                                                    d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                                                                                    className="">
                                                                                </path>
                                                                            </svg>
                                                                        </div>
                                                                        <label for="object-743436"
                                                                            className="k-checkbox__label">
                                                                            <span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="k-row__slot--middle">
                                                            <div className="brevier grey-one--text">
                                                                <div data-v-19d24620="" className="layout row wrap">
                                                                    <div data-v-19d24620="" className="flex xs12 sm8 md6 lg4"
                                                                        style={{ "paddingLeft": "92px" }}>
                                                                        Workout Title
                                                                    </div>
                                                                    <div data-v-19d24620="" className="flex sm2 hidden-xs-only">

                                                                    </div>
                                                                    <div data-v-19d24620="" className="flex sm2 hidden-xs-only"
                                                                        style={{ "paddingLeft": "17px" }}>
                                                                        Type
                                                                    </div>
                                                                    <div data-v-19d24620=""
                                                                        className="flex xs2 hidden-md-and-down"
                                                                        style={{ "paddingLeft": "40px" }}>
                                                                        Added by
                                                                    </div>
                                                                    <div data-v-19d24620=""
                                                                        className="flex md2 hidden-sm-and-down"
                                                                        style={{ "paddingLeft": "17px" }}>
                                                                        Date Updated
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="k-row__slot--right">
                                                            <div style={{ "width": "60px" }}></div>
                                                        </div>
                                                    </div>
                                                    {ProgrammeWoExList.map((ProgrammeWoExList, key) => (
                                                        <div data-v-12e8f0c3="" data-v-19d24620=""
                                                            id="k-row-e02c9d68-bf46-4c60-aacb-9f41ee3fec08"
                                                            className="k-row clickable standalone image-middle">
                                                            <div className="k-row__slot--left">
                                                                <div data-v-12e8f0c3="" className="d-flex align-center pl-moon">
                                                                    <div data-v-12e8f0c3="">
                                                                        <div id="checkbox-undefined" className="k-checkbox">
                                                                            <input
                                                                                id="object-456304" type="checkbox"
                                                                                data-vv-name="object-456304" data-vv-as=""
                                                                                role="checkbox" className="k-checkbox__input"
                                                                                value="false" />
                                                                            <div className="k-checkbox__wrapper"><svg
                                                                                data-v-7f8bad2e="" aria-hidden="true"
                                                                                focusable="false" data-prefix="far"
                                                                                data-icon="check" role="img"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 512 512"
                                                                                className="k-checkbox__check svg-inline--fa fa-check fa-w-16 k-icon mars white--text">
                                                                                <path data-v-7f8bad2e="" fill="currentColor"
                                                                                    d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
                                                                                    className="">
                                                                                </path>
                                                                            </svg>
                                                                            </div>
                                                                            <label for="object-456304"
                                                                                className="k-checkbox__label">
                                                                                <span>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="k-row__slot--middle">
                                                                {/* <NavLink
                                                                    strict
                                                                    exact
                                                                    to={"editworkoutexercise?ExList_id=" + ExList._id + "&WorkoutList_id=" + WorkoutList_id}
                                                                > */}
                                                                <div data-v-12e8f0c3="" className="layout row wrap">
                                                                    <div data-v-12e8f0c3=""
                                                                        className="flex xs12 sm8 md6 lg4 xs4 d-flex align-center pica">
                                                                        <div data-v-c9edefc2="" data-v-12e8f0c3=""
                                                                            className="k-image colorTwo">
                                                                            <div data-v-c9edefc2="" className="k-image__sizer"
                                                                                style={{ "padding-bottom": "100%" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2="" className="k-image__image"
                                                                                style={{ "background-image": "url(&quot;/3/img/14.1ac5241b.png&quot;)" }}>
                                                                            </div>
                                                                            <div data-v-c9edefc2="" className="k-image__content"
                                                                                style={{ "display": "none" }}>
                                                                            </div>
                                                                        </div>
                                                                        {/* {WorkoutExList.Exercise["ExerciseTitle"]} */}
                                                                        <ul> {ProgrammeWoExList.ExerciseTitle}</ul>
                                                                    </div>
                                                                    <div data-v-12e8f0c3=""
                                                                        className="flex sm2 hidden-xs-only d-flex align-center">
                                                                        <div data-v-f1ed5950="" data-v-12e8f0c3=""
                                                                            className="k-avatar__row"
                                                                            style={{ "height": "32px" }}>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-12e8f0c3=""
                                                                        className="flex sm2 hidden-xs-only d-flex align-center">
                                                                        <div data-v-62035167="" data-v-12e8f0c3=""
                                                                            className="k-counter brevier show">
                                                                            <div data-v-62035167=""
                                                                                className="k-counter__value colorOne">
                                                                                {/* <ul>{ProgrammeWoList.Type}</ul> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="k-row__slot--left">
                                                                        <div data-v-23bc496c size="40px"
                                                                            className="k-avatar colorOneLight"
                                                                            style={{
                                                                                "height": "60px",
                                                                                "width": "60px",
                                                                                "margin-left": "-0px",
                                                                            }}>
                                                                            <img
                                                                                src="/images/logonew.png" />
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-12e8f0c3=""
                                                                        className="flex hidden-sm-and-down md2 d-flex align-center"
                                                                        style={{
                                                                            "margin-left": "100px",
                                                                        }}>
                                                                        {/* Date */}
                                                                        {/* {ProgrammeWoList.Date} */}
                                                                    </div>
                                                                </div>
                                                                {/* </NavLink> */}
                                                            </div>
                                                            <form className="deletebutton" id="deletebutton" onClick={onClink}>
                                                                <button
                                                                    data-v-1b4e9c52="" to="[object Object]"
                                                                    className="action-toolbar__icon k-button  flat icon medium ">
                                                                    <div className="k-button__content"
                                                                        style={{ "opacity": "1" }}>
                                                                        <svg
                                                                            data-v-7f8bad2e="" aria-hidden="true"
                                                                            focusable="false" data-prefix="fas"
                                                                            data-icon="trash-alt" role="img"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 448 512"
                                                                            className="svg-inline--fa fa-trash-alt fa-w-14 k-icon earth colortwotranslucent">
                                                                            <path data-v-7f8bad2e="" fill="currentColor"
                                                                                d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                                                                                className="">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </button>
                                                            </form>
                                                        </div>
                                                    ))}
                                                    <div data-v-644ea9c9="" data-v-19d24620=""
                                                        className="infinite-loading-container">
                                                        <div data-v-644ea9c9="" className="infinite-status-prompt"
                                                            style={{ "display": "none" }}>
                                                            <div data-v-1faf422c="" data-v-46b20d22="" data-v-644ea9c9=""
                                                                className="pa-mars k-loading colorOne--text" data-v-3b32196a="">
                                                                {/* <svg data-v-1faf422c="" xmlns="http://www.w3.org/2000/svg"
                                                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                                                y="0px" viewBox="0 0 30 30"
                                                                style="width: 36px; height: 36px; fill: currentcolor;">
                                                                <rect data-v-1faf422c="" x="0" y="0" width="4"
                                                                    height="10"
                                                                    style="animation-duration: 0.4s; animation-delay: -0.266667s;">
                                                                </rect>
                                                                <rect data-v-1faf422c="" x="10" y="0" width="4"
                                                                    height="10"
                                                                    style="animation-duration: 0.4s; animation-delay: -0.133333s;">
                                                                </rect>
                                                                <rect data-v-1faf422c="" x="20" y="0" width="4"
                                                                    height="10"
                                                                    style="animation-duration: 0.4s; animation-delay: 0s;">
                                                                </rect>
                                                            </svg> */}
                                                            </div>
                                                        </div>
                                                        <div data-v-644ea9c9="" className="infinite-status-prompt"
                                                            style={{
                                                                "color": "rgb(102, 102, 102)",
                                                                "font-size": "14px",
                                                                "padding": "10px 0px"
                                                            }}>
                                                        </div>
                                                        <div data-v-644ea9c9="" className="infinite-status-prompt"
                                                            style={{
                                                                "color": "rgb(102, 102, 102)",
                                                                "font-size": "14px",
                                                                "padding": "10px 0px",
                                                                "display": "none"
                                                            }}>
                                                        </div>
                                                        <div data-v-644ea9c9="" className="infinite-status-prompt"
                                                            style={{
                                                                "color": "rgb(102, 102, 102)",
                                                                "font-size": "14px",
                                                                "padding": "10px 0px",
                                                                "display": "none"
                                                            }}>
                                                            <br data-v-644ea9c9="" />
                                                            <button data-v-644ea9c9=""
                                                                className="btn-try-infinite">Retry</button>
                                                        </div>
                                                    </div>
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
                    <div data-v-3bd2e235=""></div>
                </div>
            </div >
        </div >
    )
}

export default ProgrammeWorkouExList