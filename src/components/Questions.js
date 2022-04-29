import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";

function Questions() {

    const [toggled, setToggled] = useState(false);


    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Age, setAge] = useState("");
    const [Gender, setGender] = useState("");
    const [CurrentBodyWeight, setCurrentBodyWeight] = useState("");
    const [HeightInCM, setHeightInCM] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Country, setCountry] = useState("");
    const [BodyTemperatureInCelsius, setBodyTemperatureInCelsius] = useState("");
    const [Q1, setQ1] = useState("");
    const [PleaseDescribeIfyouhaveselectedoneormore, setPleaseDescribeIfyouhaveselectedoneormore] = useState("");
    const [PleaseDescribeIfyouhaveselectedoneormore1, setPleaseDescribeIfyouhaveselectedoneormore1] = useState("");

    const onSubmit = (e) => {

        e.preventDefault();
        fetch("http://localhost:5001/api/profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ FirstName, LastName, Age, Gender, CurrentBodyWeight, HeightInCM, PhoneNumber, Country, BodyTemperatureInCelsius, Q1, PleaseDescribeIfyouhaveselectedoneormore })
        })

            .then(function (response) {
                return response.text();
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

    };

    return (

        <div id="app" className="grey-background">
            <div data-app="true" className="k-app light">
                <div className="k-layout-main__wrapper">
                    <div className="menu-bar--sticky-top"
                        style={{ "--menubar-height": "80px" }}>
                        <div className="menu-bar">
                            <div data-v-75a3e7a8 className="k-top-bar is-primary has-right">
                                <div data-v-75a3e7a8 className="k-top-bar__container">
                                    {/* <!----> */}
                                    <div data-v-75a3e7a8 className="k-top-bar__slot--middle">
                                        <a data-v-75a3e7a8
                                            className="router-link-exact-active router-link-active canon" aria-current="page">
                                            <div className="menu-bar__logo-container">
                                                <div data-v-711ca0e8 role="img" className="k-logo-block">
                                                    <div data-v-711ca0e8 className="k-logo-block__image"
                                                        style={{ "background-image": "url(/images/logo3.png)" }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div data-v-75a3e7a8 className="k-top-bar__slot--right">
                                        <div data-v-75a3e7a8 className="d-inline-flex align-center">
                                            <div data-v-31b121ea className="chip-glow k-chip colorOne" data-v-75a3e7a8>
                                                <div data-v-31b121ea className="k-chip__content">
                                                    ADD NEW
                                                    <svg width="10" height="6" viewBox="0 0 10 6"
                                                        className="ml-moon svg-inline--fa fa-star fa-w-18 k-icon mars noColor--text"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L5 5L9 1" stroke="#FF6600" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                {/* <!----> */}
                                            </div>
                                            <div className="rr-icon white--text" data-v-75a3e7a8>
                                                <svg width="24" height="24"
                                                    viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M58.6125 36.8875C59.7125 37.2875 60.9625 37.7375 61.9125 37.875C64.0625 38.225 65.825 37.8125 65.9673 36.9644L65.9675 36.9629C66.0686 36.37 66.129 36.0162 62.1748 34.8844L61.3625 34.65L61.3453 34.6449C59.0573 33.9661 53.0524 32.1845 54.0125 26.0162C54.6375 23.0312 56.85 21.0287 60.005 20.315V19C60.005 17.3438 61.3463 16 63.0025 16C64.6588 16 66.0025 17.3438 66.0025 19V20.4062C66.74 20.5766 67.5298 20.793 68.48 21.1214C70.0464 21.6639 70.8738 23.3716 70.335 24.9376C69.7963 26.5036 68.0863 27.3278 66.52 26.7926C65.485 26.4333 64.681 26.2125 64.0638 26.1149C61.95 25.7812 60.182 26.193 60.0375 27.0387C59.95 27.5525 59.7625 27.955 63.05 28.8875L63.7119 29.1163C66.9031 30.0275 72.8504 31.7288 71.7644 37.985C71.3619 40.9688 69.1606 42.9846 66.0019 43.7V45C66.0019 46.6562 64.6581 48 63.0019 48C61.3456 48 60.0044 46.6562 60.0044 45V43.4635C58.8156 43.1864 57.6414 42.8071 56.5806 42.4245L55.9988 42.2175C54.4401 41.6625 53.625 39.8375 54.175 38.3875C54.725 36.9375 56.4375 36.0125 58 36.675L58.6125 36.8875Z"
                                                        fill="currentColor">
                                                    </path>
                                                    <path
                                                        d="M28 36C36.8375 36 44 28.8363 44 20C44 11.1637 36.8375 4 28 4C19.1625 4 12 11.1637 12 20C12 28.8363 19.1625 36 28 36ZM34.3375 42H21.6625C9.70125 42 0 51.7 0 63.6625C0 66.055 1.94 67.9963 4.3325 67.9963H51.67C54.0625 68 56 66.0625 56 63.6625C56 51.7 46.3 42 34.3375 42Z"
                                                        fill="currentColor">
                                                    </path>
                                                </svg>
                                            </div>

                                            <div data-v-75a3e7a8>
                                                <div data-v-43a7bf8a data-v-36bd4c01 className="black--text k-menu-flyout">
                                                    <div data-v-43a7bf8a className="k-menu-flyout__activator"><button
                                                        data-v-36bd4c01 to="[object Object]"
                                                        className="user-avatar-button k-button flat icon-style medium"
                                                        data-v-43a7bf8a>
                                                        <div className="k-button__content"
                                                            style={{ "opacity": "1" }}>
                                                            <div data-v-23bc496c data-v-36bd4c01 size="24px"
                                                                className="k-avatar white"
                                                                style={{
                                                                    "height": "24px !important",
                                                                    "width": "24px !important"
                                                                }}>
                                                                <span data-v-23bc496c className="k-avatar__initials"
                                                                    style={{
                                                                        "font-size": "12px",
                                                                        "width": "24px"
                                                                    }}>kd</span>
                                                                {/* <!----> */}
                                                                {/* <!----> */}
                                                            </div>
                                                            {/* <!----> */}
                                                        </div>
                                                        {/* <!----> */}
                                                    </button></div>
                                                    {/* <!----> */}
                                                    {/* <!----> */}
                                                </div>
                                            </div>
                                            <div data-v-b021fc42 className="black--text k-menu" data-v-75a3e7a8><button
                                                data-v-b021fc42 to="[object Object]"
                                                className="k-menu__activator k-button flat icon medium white--text">
                                                <div className="k-button__content"
                                                    style={{ "opacity": "1" }}>
                                                    <svg data-v-7f8bad2e
                                                        aria-hidden="true" focusable="false" data-prefix="fas"
                                                        data-icon="menu" role="img" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 40 40"
                                                        className="svg-inline--fa fa-menu fa-w-16 k-icon earth white--text">
                                                        <g data-v-7f8bad2e className="fa-group">
                                                            <path data-v-7f8bad2e fill="currentColor" d
                                                                className="fa-secondary">
                                                            </path>
                                                            <path data-v-7f8bad2e fill="currentColor"
                                                                d="M7.45161 4C5.54534 4 4 5.54534 4 7.45161C4 9.35789 5.54534 10.9032 7.45161 10.9032C9.35789 10.9032 10.9032 9.35789 10.9032 7.45161C10.9032 5.54534 9.35789 4 7.45161 4ZM20.0323 4C18.126 4 16.5806 5.54534 16.5806 7.45161C16.5806 9.35789 18.126 10.9032 20.0323 10.9032C21.9385 10.9032 23.4839 9.35789 23.4839 7.45161C23.4839 5.54534 21.9385 4 20.0323 4ZM32.5484 4C30.6421 4 29.0968 5.54534 29.0968 7.45161C29.0968 9.35789 30.6421 10.9032 32.5484 10.9032C34.4547 10.9032 36 9.35789 36 7.45161C36 5.54534 34.4547 4 32.5484 4ZM7.45161 16.5806C5.54534 16.5806 4 18.126 4 20.0323C4 21.9385 5.54534 23.4839 7.45161 23.4839C9.35789 23.4839 10.9032 21.9385 10.9032 20.0323C10.9032 18.126 9.35789 16.5806 7.45161 16.5806ZM20.0323 16.5806C18.126 16.5806 16.5806 18.126 16.5806 20.0323C16.5806 21.9385 18.126 23.4839 20.0323 23.4839C21.9385 23.4839 23.4839 21.9385 23.4839 20.0323C23.4839 18.126 21.9385 16.5806 20.0323 16.5806ZM32.5484 16.1935C30.6421 16.1935 29.0968 17.7389 29.0968 19.6452C29.0968 21.5514 30.6421 23.0968 32.5484 23.0968C34.4547 23.0968 36 21.5514 36 19.6452C36 17.7389 34.4547 16.1935 32.5484 16.1935ZM7.45161 29.0968C5.54534 29.0968 4 30.6421 4 32.5484C4 34.4547 5.54534 36 7.45161 36C9.35789 36 10.9032 34.4547 10.9032 32.5484C10.9032 30.6421 9.35789 29.0968 7.45161 29.0968ZM20.0323 29.0968C18.126 29.0968 16.5806 30.6421 16.5806 32.5484C16.5806 34.4547 18.126 36 20.0323 36C21.9385 36 23.4839 34.4547 23.4839 32.5484C23.4839 30.6421 21.9385 29.0968 20.0323 29.0968ZM32.5484 29.0968C30.6421 29.0968 29.0968 30.6421 29.0968 32.5484C29.0968 34.4547 30.6421 36 32.5484 36C34.4547 36 36 34.4547 36 32.5484C36 30.6421 34.4547 29.0968 32.5484 29.0968Z"
                                                                className="fa-primary">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                {/* <!----> */}
                                            </button>
                                                {/* <!----> */}
                                                {/* <!----> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tooltip-boundary" className="tooltip-boundary">
                    </div>
                    <div className="k-layout-main">
                        <div data-v-2913046a="" className="background-ribbon__container"
                            style={{
                                "height": "230px",
                                "top": "-5rem"
                            }}>
                            <div data-v-2913046a="" className="background-ribbon"
                                style={{ "height": "230px" }}>
                                <div data-v-2913046a=""
                                    className="header-image-background background-ribbon__old"
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
                                {/* <!----> */}
                                <div className="container px-none pt-none">
                                    <div className="layout row wrap">
                                        <div className="flex py-saturn xs12 mt-saturn pb-none">
                                            <div data-v-52fb9f55="" data-v-70fe1976=""
                                                className="k-card mb-earth pa-none raised mb-none">
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
                                                                            {/* <!----> */}
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
                                                                                    label="Macro Type" name="object-110314"
                                                                                    prependcb="function(){}" role="text"
                                                                                    placeholder="Client Name"
                                                                                    value="PRE – EXERCISE QUESTIONAIRE"
                                                                                    rows="5" data-mask="null"
                                                                                    aria-checked="Grams" readonly />
                                                                            </div>
                                                                            {/* <!----> */}
                                                                        </div>
                                                                        <div data-v-6b0e4150=""
                                                                            style={{}}>
                                                                        </div>
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
                                                style={{ "display": "none" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container grid-gap-earth">
                                    <div data-v-158550f2="" className="layout row wrap">
                                        <div data-v-158550f2="" className="flex xs12">
                                            <div data-v-70fe1976="" data-v-158550f2="">
                                                <div data-v-52fb9f55="" data-v-70fe1976="" className="mb-earth k-card raised">
                                                    <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                        <div data-v-52fb9f55=""
                                                            id="k-row-e7998299-5d85-4c87-946a-1a8a341bc050"
                                                            className="k-row thin">
                                                            {/* <!----> */}
                                                            <div className="k-row__slot--middle">
                                                                <span data-v-194e1f66=""
                                                                    className="k-title">
                                                                    <div data-v-194e1f66="" className="d-flex pica">
                                                                        <span
                                                                            data-v-194e1f66="" data-v-52fb9f55=""
                                                                            className="k-title">
                                                                            <div data-v-194e1f66="" className="d-flex pica">
                                                                                Personal Details
                                                                            </div>
                                                                            {/* <!----> */}
                                                                        </span> </div>
                                                                    <div data-v-194e1f66=""
                                                                        className="k-title__subtitle-wrapper long-primer">
                                                                        <span
                                                                            data-v-194e1f66="" className="">
                                                                            {/* <!----> */}
                                                                        </span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <br />

                                                    <div className="k-card__content">
                                                        <div data-v-52fb9f55="" className="layout row wrap no-padding">

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <label for="object-640858"
                                                                        className="minion k-input__label colorOne--text">
                                                                        First Name
                                                                    </label>
                                                                    <div
                                                                        className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                        <div className="pica"
                                                                            style={{
                                                                                "flex-grow": "1",
                                                                                "position": "relative"
                                                                            }}>
                                                                            <input type="text" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <label for="object-584956"
                                                                        className="minion k-input__label colorOne--text">
                                                                        Last Name
                                                                    </label>
                                                                    <div
                                                                        className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                        <div className="pica"
                                                                            style={{
                                                                                "flex-grow": "1",
                                                                                "position": "relative"
                                                                            }}>
                                                                            <input type="text" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <label for="object-582949"
                                                                        className="minion k-input__label colorOne--text">
                                                                        Age
                                                                    </label>
                                                                    <div
                                                                        className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                        <div className="pica"
                                                                            style={{
                                                                                "flex-grow": "1",
                                                                                "position": "relative"
                                                                            }}>
                                                                            <input type="text" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <label for="object-497406"
                                                                        className="minion k-input__label colorOne--text">
                                                                        Gender (Male / Female)
                                                                    </label>
                                                                    <div
                                                                        className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                        <div className="pica"
                                                                            style={{
                                                                                "flex-grow": "1",
                                                                                "position": "relative"
                                                                            }}>
                                                                            <input type="text" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <label for="object-537921"
                                                                        className="minion k-input__label colorOne--text">
                                                                        Current Body Weight
                                                                    </label>
                                                                    <div
                                                                        className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                        <div className="pica"
                                                                            style={{
                                                                                "flex-grow": "1",
                                                                                "position": "relative"
                                                                            }}>
                                                                            <input type="number" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <label for="object-86824"
                                                                        className="minion k-input__label colorOne--text">
                                                                        Height in CM
                                                                    </label>
                                                                    <div
                                                                        className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                        <div className="pica"
                                                                            style={{
                                                                                "flex-grow": "1",
                                                                                "position": "relative"
                                                                            }}>
                                                                            <input type="number" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne);" }}>
                                                                    <label for="object-86824"
                                                                        className="minion k-input__label colorOne--text">
                                                                        Phone Number
                                                                    </label>
                                                                    <div
                                                                        className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                        <div className="pica"
                                                                            style={{
                                                                                "flex-grow": "1",
                                                                                "position": "relative"
                                                                            }}>
                                                                            <input type="number" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <label for="object-86824"
                                                                        className="minion k-input__label colorOne--text">
                                                                        Country
                                                                    </label>
                                                                    <div
                                                                        className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                        <div className="pica"
                                                                            style={{
                                                                                "flex-grow": "1",
                                                                                "position": "relative"
                                                                            }}>
                                                                            <input type="text" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <label for="object-86824"
                                                                        className="minion k-input__label colorOne--text">
                                                                        Body Temperature in Celsius
                                                                    </label>
                                                                    <div
                                                                        className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                        <div className="pica"
                                                                            style={{
                                                                                "flex-grow": "1",
                                                                                "position": "relative"
                                                                            }}>
                                                                            <input type="number" />
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
                                                            {/* <!----> */}
                                                            <div className="k-row__slot--middle">
                                                                <span data-v-194e1f66=""
                                                                    className="k-title">
                                                                    <div data-v-194e1f66="" className="d-flex pica">
                                                                        <span
                                                                            data-v-194e1f66="" data-v-52fb9f55=""
                                                                            className="k-title">
                                                                            <div data-v-194e1f66="" className="d-flex pica">
                                                                                Do you have any of the Following?
                                                                            </div>
                                                                            {/* <!----> */}
                                                                        </span>
                                                                    </div>
                                                                    <div data-v-194e1f66=""
                                                                        className="k-title__subtitle-wrapper long-primer">
                                                                        <span
                                                                            data-v-194e1f66="" className="">
                                                                            {/* <!----> */}
                                                                        </span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <br />

                                                    <div className="k-card__content">
                                                        <div data-v-52fb9f55="" className="layout row wrap no-padding">

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-11" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-11">Any Major
                                                                                        Injuries</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-12" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-12">Any Heart
                                                                                        Condition</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-13" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-13">Any Operations</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-14" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-14">Arthritis</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-15" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-15">Asthma</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-16" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-16">
                                                                                        Dizziness or Fainting</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-17" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-17">
                                                                                        Elevated Glucose Levels</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-18" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-18">
                                                                                        Are you currently Fasting?</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-19" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-19">
                                                                                        Epilepsy</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-20" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-20">
                                                                                        High Blood Pressure</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-21" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-21">
                                                                                        High Cholesterol</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-22" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-22">
                                                                                        High Triglycerides</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-23" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-23">
                                                                                        Kidney Condition</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-24" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-24">
                                                                                        Liver Condition</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-25" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-25">
                                                                                        Muscular Pain or Cramps</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-26" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-26">
                                                                                        Stroke</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-27" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-27">
                                                                                        Gout</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-28" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-28">
                                                                                        Hernia</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-29" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-29">
                                                                                        Thyroid Condition</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-30" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-30">
                                                                                        Rheumatic Fever</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="k-card__content pt-mars">
                                                        <div data-v-52fb9f55="" className="layout row wrap no-padding">
                                                            <div data-v-52fb9f55="" className="flex py-none xs12">
                                                                <div data-v-52fb9f55="" className="k-select"
                                                                    field="[object Object]">
                                                                    <div className="k-select__input-group">
                                                                        <div className="k-input k-input--has-changed"
                                                                            style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                            <label for="object-110314"
                                                                                className="minion k-input__label colorOne--text">
                                                                                Please Describe If you have selected one or more:
                                                                            </label>
                                                                            <div
                                                                                className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <div className="pica"
                                                                                    style={{
                                                                                        "flex-grow": "1",
                                                                                        "position": "relative"
                                                                                    }}>
                                                                                    <textarea type="text"
                                                                                        data-vv-name="object-110314"
                                                                                        data-vv-as="macro type"
                                                                                        appendcb="function(){}"
                                                                                        aria-label="Macro Type"
                                                                                        autocomplete="on"
                                                                                        id="object-110314"
                                                                                        label="Macro Type"
                                                                                        name="object-110314"
                                                                                        prependcb="function(){}"
                                                                                        role="text" rows="5"
                                                                                        data-mask="null"
                                                                                        aria-checked="Grams">
                                                                                    </textarea>
                                                                                </div>
                                                                            </div>
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
                                                            {/* <!----> */}
                                                            <div className="k-row__slot--middle">
                                                                <span data-v-194e1f66=""
                                                                    className="k-title">
                                                                    <div data-v-194e1f66="" className="d-flex pica">
                                                                        <span
                                                                            data-v-194e1f66="" data-v-52fb9f55=""
                                                                            className="k-title">
                                                                            <div data-v-194e1f66="" className="d-flex pica">
                                                                                Do you have or have you ever had any pain or major injuries in the following areas:
                                                                            </div>
                                                                            {/* <!----> */}
                                                                        </span>
                                                                    </div>
                                                                    <div data-v-194e1f66=""
                                                                        className="k-title__subtitle-wrapper long-primer">
                                                                        <span
                                                                            data-v-194e1f66="" className="">
                                                                            {/* <!----> */}
                                                                        </span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <br />

                                                    <div className="k-card__content">
                                                        <div data-v-52fb9f55="" className="layout row wrap no-padding">

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-31" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-31">Feet</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-32" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-32">Hips</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-33" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-33">Shoulders</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-34" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-34">Ankles</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-35" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-35">Wrists</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-36" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-36">
                                                                                        Back</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-37" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-37">
                                                                                        Knees</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-38" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-38">
                                                                                        Neck</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>

                                                    <div className="k-card__content pt-mars">
                                                        <div data-v-52fb9f55="" className="layout row wrap no-padding">
                                                            <div data-v-52fb9f55="" className="flex py-none xs12">
                                                                <div data-v-52fb9f55="" className="k-select"
                                                                    field="[object Object]">
                                                                    <div className="k-select__input-group">
                                                                        <div className="k-input k-input--has-changed"
                                                                            style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                            <label for="object-110314"
                                                                                className="minion k-input__label colorOne--text">
                                                                                Please Describe If you have selected one or more:
                                                                            </label>
                                                                            <div
                                                                                className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <div className="pica"
                                                                                    style={{
                                                                                        "flex-grow": "1",
                                                                                        "position": "relative"
                                                                                    }}>
                                                                                    <textarea type="text"
                                                                                        data-vv-name="object-110314"
                                                                                        data-vv-as="macro type"
                                                                                        appendcb="function(){}"
                                                                                        aria-label="Macro Type"
                                                                                        autocomplete="on"
                                                                                        id="object-110314"
                                                                                        label="Macro Type"
                                                                                        name="object-110314"
                                                                                        prependcb="function(){}"
                                                                                        role="text" rows="5"
                                                                                        data-mask="null"
                                                                                        aria-checked="Grams">
                                                                                    </textarea>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-52fb9f55="" data-v-70fe1976="" className="mb-earth k-card raised"
                                                    style={{ "background-color": "#FFEDFA" }}
                                                >
                                                    <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                        <div data-v-52fb9f55=""
                                                            id="k-row-e7998299-5d85-4c87-946a-1a8a341bc050"
                                                            className="k-row thin">
                                                            {/* <!----> */}
                                                            <div className="k-row__slot--middle">
                                                                <span data-v-194e1f66=""
                                                                    className="k-title">
                                                                    <div data-v-194e1f66="" className="d-flex pica">
                                                                        <span
                                                                            data-v-194e1f66="" data-v-52fb9f55=""
                                                                            className="k-title">
                                                                            <div data-v-194e1f66="" className="d-flex pica">
                                                                                Females Only
                                                                            </div>
                                                                            {/* <!----> */}
                                                                        </span>
                                                                    </div>
                                                                    <div data-v-194e1f66=""
                                                                        className="k-title__subtitle-wrapper long-primer">
                                                                        <span
                                                                            data-v-194e1f66="" className="">
                                                                            {/* <!----> */}
                                                                        </span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <br />

                                                    <div className="k-card__content">
                                                        <div data-v-52fb9f55="" className="layout row wrap no-padding">

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-39" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-39">Children</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-40" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-40">Irregular Periods</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-41" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-41">Painful Intercourse</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-42" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-42">Endometriosis</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-43" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-43">Loss of Libido</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-44" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-44">
                                                                                        Painful Periods</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-45" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-45">
                                                                                        Menopause</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-46" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-46">
                                                                                        PMS</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-47" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-47">
                                                                                        Hysterectomy</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-48" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-48">
                                                                                        Osteoporosis</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-49" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-49">
                                                                                        Poly-Cystic Ovarian Syndrome</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>

                                                    <div className="k-card__content pt-mars">
                                                        <div data-v-52fb9f55="" className="layout row wrap no-padding">
                                                            <div data-v-52fb9f55="" className="flex py-none xs12">
                                                                <div data-v-52fb9f55="" className="k-select"
                                                                    field="[object Object]">
                                                                    <div className="k-select__input-group">
                                                                        <div className="k-input k-input--has-changed"
                                                                            style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                            <label for="object-110314"
                                                                                className="minion k-input__label colorOne--text">
                                                                                Please Describe If you have selected one or more:
                                                                            </label>
                                                                            <div
                                                                                className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <div className="pica"
                                                                                    style={{
                                                                                        "flex-grow": "1",
                                                                                        "position": "relative"
                                                                                    }}>
                                                                                    <textarea type="text"
                                                                                        data-vv-name="object-110314"
                                                                                        data-vv-as="macro type"
                                                                                        appendcb="function(){}"
                                                                                        aria-label="Macro Type"
                                                                                        autocomplete="on"
                                                                                        id="object-110314"
                                                                                        label="Macro Type"
                                                                                        name="object-110314"
                                                                                        prependcb="function(){}"
                                                                                        role="text" rows="5"
                                                                                        data-mask="null"
                                                                                        aria-checked="Grams">
                                                                                    </textarea>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="k-card__content pt-mars">
                                                        <div data-v-52fb9f55="" className="layout row wrap no-padding">
                                                            <div data-v-52fb9f55="" className="flex py-none xs12">
                                                                <div data-v-52fb9f55="" className="k-select"
                                                                    field="[object Object]">
                                                                    <div className="k-select__input-group">
                                                                        <div className="k-input k-input--has-changed"
                                                                            style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                            <label for="object-110314"
                                                                                className="minion k-input__label colorOne--text">
                                                                                Please detail information relating to menstrual cycle length, frequency or if you are postmenapausal:
                                                                            </label>
                                                                            <div
                                                                                className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <div className="pica"
                                                                                    style={{
                                                                                        "flex-grow": "1",
                                                                                        "position": "relative"
                                                                                    }}>
                                                                                    <textarea type="text"
                                                                                        data-vv-name="object-110314"
                                                                                        data-vv-as="macro type"
                                                                                        appendcb="function(){}"
                                                                                        aria-label="Macro Type"
                                                                                        autocomplete="on"
                                                                                        id="object-110314"
                                                                                        label="Macro Type"
                                                                                        name="object-110314"
                                                                                        prependcb="function(){}"
                                                                                        role="text" rows="5"
                                                                                        data-mask="null"
                                                                                        aria-checked="Grams">
                                                                                    </textarea>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-52fb9f55="" data-v-70fe1976="" className="mb-earth k-card raised"
                                                    style={{ "background-color": "#EDF1FF" }}
                                                >
                                                    <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                        <div data-v-52fb9f55=""
                                                            id="k-row-e7998299-5d85-4c87-946a-1a8a341bc050"
                                                            className="k-row thin">
                                                            {/* <!----> */}
                                                            <div className="k-row__slot--middle">
                                                                <span data-v-194e1f66=""
                                                                    className="k-title">
                                                                    <div data-v-194e1f66="" className="d-flex pica">
                                                                        <span
                                                                            data-v-194e1f66="" data-v-52fb9f55=""
                                                                            className="k-title">
                                                                            <div data-v-194e1f66="" className="d-flex pica">
                                                                                Males Only
                                                                            </div>
                                                                            {/* <!----> */}
                                                                        </span>
                                                                    </div>
                                                                    <div data-v-194e1f66=""
                                                                        className="k-title__subtitle-wrapper long-primer">
                                                                        <span
                                                                            data-v-194e1f66="" className="">
                                                                            {/* <!----> */}
                                                                        </span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <br />

                                                    <div className="k-card__content">
                                                        <div data-v-52fb9f55="" className="layout row wrap no-padding">

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-50" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-50">Difficulty Urinating</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-51" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-51">Prostate Enlargement</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-52" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-52">
                                                                                        Difficulty with Erection</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-53" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-53">Loss of Libido</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md4">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0"
                                                                    style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <div
                                                                        className="k-input-container align-center k-input__field k-input__field--active">
                                                                        <div className=" row wrap no-padding">
                                                                            <div data-v-52fb9f55=""
                                                                                className="flex md4 py-none text-xs-right xs4">
                                                                                <div className=" k-toggle ma-auto">
                                                                                    <input id="object-54" label=""
                                                                                        type="checkbox" />
                                                                                    <label for="object-54">Tender or Puffy Nipples</label>
                                                                                    <div
                                                                                        className="k-toggle__track colorOne--text">
                                                                                    </div>
                                                                                    <div className="k-toggle__dot"
                                                                                        style={{ "background-color": "rgb(255, 255, 255)" }}>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="k-card__content pt-mars">
                                                        <div data-v-52fb9f55="" className="layout row wrap no-padding">
                                                            <div data-v-52fb9f55="" className="flex py-none xs12">
                                                                <div data-v-52fb9f55="" className="k-select"
                                                                    field="[object Object]">
                                                                    <div className="k-select__input-group">
                                                                        <div className="k-input k-input--has-changed"
                                                                            style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                            <label for="object-110314"
                                                                                className="minion k-input__label colorOne--text">
                                                                                Please Describe If you have selected one or more:
                                                                            </label>
                                                                            <div
                                                                                className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                                <div className="pica"
                                                                                    style={{
                                                                                        "flex-grow": "1",
                                                                                        "position": "relative"
                                                                                    }}>
                                                                                    <textarea type="text"
                                                                                        data-vv-name="object-110314"
                                                                                        data-vv-as="macro type"
                                                                                        appendcb="function(){}"
                                                                                        aria-label="Macro Type"
                                                                                        autocomplete="on"
                                                                                        id="object-110314"
                                                                                        label="Macro Type"
                                                                                        name="object-110314"
                                                                                        prependcb="function(){}"
                                                                                        role="text" rows="5"
                                                                                        data-mask="null"
                                                                                        aria-checked="Grams">
                                                                                    </textarea>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div data-v-70fe1976="" className="d-flex justify-center pa-saturn">
                                                    <button
                                                        data-v-70fe1976=""
                                                        to="[object Object]"
                                                        className="k-button medium colorOne">
                                                    <div className="k-button__content"
                                                        style={{ "opacity": "1" }}>
                                                        Submit
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
            </div>
        </div>

        // <Container>
        //     <Container1>
        //         <p>
        //             <h1>PRE – EXERCISE QUESTIONAIRE</h1>
        //         </p>
        //     </Container1>
        //     <Container2>
        //         <p>Personal Details</p>
        //         <HorizontalRule />
        //         <FormDetails>
        //             <Form.Group className='mb-3' controlId='formBasicEmail'
        //                 value={FirstName}
        //                 onChange={(e) => setFirstName(e.target.value)}
        //             >
        //                 <Form.Label>First Name</Form.Label>
        //                 <Form.Control type='text' placeholder='Enter Your First Name' />
        //             </Form.Group>

        //             <Form.Group className='mb-3' controlId='formBasicEmail'
        //                 value={LastName}
        //                 onChange={(e) => setLastName(e.target.value)}
        //             >
        //                 <Form.Label>Last Name</Form.Label>
        //                 <Form.Control type='text' placeholder='Enter Your Last Name' />
        //             </Form.Group>

        //             <Form.Group className='mb-3' controlId='formBasicEmail'
        //                 value={Age}
        //                 onChange={(e) => setAge(e.target.value)}
        //             >
        //                 <Form.Label>Age</Form.Label>
        //                 <Form.Control type='number' placeholder='Enter Your Age' />
        //             </Form.Group>

        //             <Form.Group className='mb-3' controlId='formBasicEmail'
        //                 value={CurrentBodyWeight}
        //                 onChange={(e) => setCurrentBodyWeight(e.target.value)}
        //             >
        //                 <Form.Label>Current Body Weight</Form.Label>
        //                 <Form.Control type='number' placeholder='Body weight in KG' />
        //             </Form.Group>

        //             <Form.Group className='mb-3' controlId='formBasicEmail'
        //                 value={HeightInCM}
        //                 onChange={(e) => setHeightInCM(e.target.value)}
        //             >
        //                 <Form.Label>Height in CM</Form.Label>
        //                 <Form.Control type='number' placeholder='Height in CM' />
        //             </Form.Group>

        //             <Form.Group className='mb-3' controlId='formBasicEmail'
        //                 value={Gender}
        //                 onChange={(e) => setGender(e.target.value)}
        //             >
        //                 <Form.Label>Gender</Form.Label>
        //                 <Form.Select className="form-control" aria-label='Default select example'>
        //                     <option selected>Choose...</option>
        //                     <option value='Male'>Male</option>
        //                     <option value='Female'>Female</option>
        //                 </Form.Select>
        //             </Form.Group>

        //             <Form.Group className='mb-3' controlId='formBasicEmail'
        //                 value={PhoneNumber}
        //                 onChange={(e) => setPhoneNumber(e.target.value)}
        //             >
        //                 <Form.Label>Phone Number</Form.Label>
        //                 <Form.Control type='text' placeholder='Enter you Contact Number' />
        //             </Form.Group>

        //             <Form.Group className='mb-3' controlId='formBasicEmail'
        //                 value={Country}
        //                 onChange={(e) => setCountry(e.target.value)}
        //             >
        //                 <Form.Label>Country</Form.Label>
        //                 <Form.Control type='email' placeholder='Enter Your Country' />
        //             </Form.Group>

        //             <Form.Group className='mb-3' controlId='formBasicEmail'
        //                 value={BodyTemperatureInCelsius}
        //                 onChange={(e) => setBodyTemperatureInCelsius(e.target.value)}
        //             >
        //                 <Form.Label>Body Temperature in Celsius </Form.Label
        //                 >
        //                 <Form.Control
        //                     type='number'
        //                     placeholder='Body Temperature in Celsius '
        //                 />
        //             </Form.Group>

        //         </FormDetails>
        //     </Container2>
        //     <Container3>
        //         <p>Do you have any of the Following</p>
        //         <HorizontalRule />
        //         <DetailBox1>
        //             <div className='grid-container'>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             onChange={(event) => setToggled(event.target.checked)}
        //                             name="1"
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new1`}
        //                             type="checkbox"
        //                             value={"Any Major Injuries"}

        //                         />

        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new1`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Any Major Injuries
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new2`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new2`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Any Heart Condition
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new3`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new3`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Any Operations
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new4`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new4`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Arthritis
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new5`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new5`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Asthma
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new6`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new6`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Dizziness or Fainting
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new7`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new7`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Elevated Glucose Levels
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new8`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new8`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Are you currently Fasting?
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new9`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new9`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Epilepsy
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new10`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new10`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         High Blood Pressure
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new11`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new11`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         High Cholesterol
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new12`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new12`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         High Triglycerides
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new13`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new13`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Kidney Condition
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new14`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new14`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Liver Condition
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new15`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new15`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Muscular Pain or Cramps
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new16`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new16`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Stroke
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new17`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new17`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Gout
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new18`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new18`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Hernia
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new19`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new19`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Thyroid Condition
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new20`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new20`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Rheumatic Fever
        //                     </p>
        //                 </div>
        //             </div>
        //         </DetailBox1>
        //         <p>Please Describe If you have selected one or more:</p>
        //         <textarea class="textarea1"
        //             value={Q1}
        //             onChange={(e) => setQ1(e.target.value)}
        //         ></textarea>

        //     </Container3>

        //     <Container4>
        //         <p>Do you have or have you ever had any pain or major injuries in the following areas:</p>
        //         <HorizontalRule />
        //         <DetailBox3>
        //             <div class='grid-container'>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             name="1"
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new21`}
        //                             type="checkbox"
        //                             value={"Any Major Injuries"}
        //                         />

        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new21`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Feet
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             name="1"
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new22`}
        //                             type="checkbox"
        //                             value={"Any Major Injuries"}
        //                         />

        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new22`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Hips
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             name="1"
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new23`}
        //                             type="checkbox"
        //                             value={"Any Major Injuries"}
        //                         />

        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new23`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Shoulders
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             name="1"
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new24`}
        //                             type="checkbox"
        //                             value={"Any Major Injuries"}
        //                         />

        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new24`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Ankles
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             name="1"
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new25`}
        //                             type="checkbox"
        //                             value={"Any Major Injuries"}
        //                         />

        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new25`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Wrists
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             name="1"
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new26`}
        //                             type="checkbox"
        //                             value={"Any Major Injuries"}
        //                         />

        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new26`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Back
        //                     </p>

        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             name="1"
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new27`}
        //                             type="checkbox"
        //                             value={"Any Major Injuries"}
        //                         />

        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new27`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Knees
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             name="1"
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new29`}
        //                             type="checkbox"
        //                             value={"Any Major Injuries"}
        //                         />

        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new29`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Neck
        //                     </p>
        //                 </div>

        //             </div>
        //         </DetailBox3>
        //         <p>Please Describe If you have selected one or more:</p>
        //         <textarea class="textarea1"
        //             value={PleaseDescribeIfyouhaveselectedoneormore1}
        //             onChange={(e) => setPleaseDescribeIfyouhaveselectedoneormore1(e.target.value)}
        //         ></textarea>
        //     </Container4>
        //     <Container5>
        //         <p>Females Only</p>
        //         <HorizontalRule />
        //         <DetailBox5>
        //             <div class='grid-container'>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new30`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new30`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Children
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new31`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new31`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Irregular Periods
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new32`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new32`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Painful Intercourse
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new33`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new33`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Endometriosis
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new34`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new34`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Loss of Libido
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new35`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new35`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Painful Periods
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new36`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new36`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Painful Periods
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new37`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new37`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Menopause
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new38`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new38`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         PMS
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new39`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new39`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Hysterectomy
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new40`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new40`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Osteoporosis
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new41`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new41`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Poly-Cystic Ovarian Syndrome
        //                     </p>
        //                 </div>

        //             </div>
        //         </DetailBox5>
        //         <p>Please Describe If you have selected one or more:</p>
        //         <textarea class="textarea1"></textarea>
        //         <BottomSection1>
        //             <p>Please detail information relating to menstrual cycle length, frequency or if you are postmenapausal:</p>
        //             <textarea class="textarea1"></textarea>
        //         </BottomSection1>
        //     </Container5>
        //     <Container6>
        //         <p>Males Only</p>
        //         <HorizontalRule />
        //         <DetailBox8>
        //             <div class='grid-container'>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new42`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new42`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Difficulty Urinating
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new43`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new43`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Prostate Enlargement
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new44`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new44`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Difficulty with Erection
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new45`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new45`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Loss of Libido</p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new46`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new46`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Tender or Puffy Nipples
        //                     </p>
        //                 </div>
        //             </div>
        //         </DetailBox8>
        //         <p>Please Describe If you have selected one or more:</p>
        //         <textarea class="textarea1"></textarea>
        //     </Container6>
        //     <Container7>
        //         <p>List your usual daily routine (day to day activities except training sessions)</p>
        //         <HorizontalRule />
        //         <div className="grid">
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Mon
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Tue
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Wed
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Thu
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Fri
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Sat
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Sun
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //         </div>
        //     </Container7>
        //     <Container8>
        //         <p>What do you do for work & how active you are during the job?</p>
        //         <HorizontalRule />
        //         <textarea class="textarea1"></textarea>
        //     </Container8>
        //     <Container9>
        //         <p>Do you currently track your step count? </p>
        //         <HorizontalRule />
        //         <p>How many steps do you get per day on average?</p>
        //         <textarea class="textarea1"></textarea>
        //     </Container9>
        //     <Container10>
        //         <p>What is most important to you right now from the list?</p>
        //         <HorizontalRule />
        //         <div className="grid-item">
        //             <div className="row">
        //                 Lose body-fat
        //             </div>
        //             <div className="row">
        //                 Build muscle
        //             </div>
        //             <div className="row">
        //                 Get Stonger
        //             </div>
        //             <div className="row">
        //                 Get fitter
        //             </div>
        //             <div className="row">
        //                 Sports Performance
        //             </div>
        //             <div className="row">
        //                 Improve health
        //             </div>
        //         </div>
        //     </Container10>
        //     <Container11>
        //         <p>What is your next 12-24 weeks’ fitness goal</p>
        //         <HorizontalRule />
        //         <p>(Please provide as much details as possible)</p>
        //         <textarea class="textarea1"></textarea>
        //     </Container11>
        //     <Container12>
        //         <p>What are Your long-term fitness goals?</p>
        //         <HorizontalRule />
        //         <textarea class="textarea1"></textarea>
        //     </Container12>
        //     <Container13>
        //         <p>Please select the most suitable statement represent your goals and commitment level.</p>
        //         <HorizontalRule />
        //         <Form.Group className="mb-3" controlId="formBasicEmail"
        //         >
        //             <Form.Label></Form.Label>
        //             <Form.Select className="form-control" aria-label="Default select example">
        //                 <option selected>Choose...</option>
        //                 <option value="I want some results for the minimum amount of effort. ">I want some results for the minimum amount of effort. </option>
        //                 <option value="Option 1">Option 1</option>
        //                 <option value="Option 2">Option 2</option>
        //                 <option value="Option 3">Option 3</option>
        //             </Form.Select>
        //         </Form.Group>

        //     </Container13>
        //     <Container14>
        //         <p>How are you realistically preparing yourself in order to achieve these goals?</p>
        //         <HorizontalRule />
        //         <textarea class="textarea1"></textarea>
        //     </Container14>
        //     <Container15>
        //         <p>What time do you go to bed?</p>
        //         <HorizontalRule />
        //         <Form.Group className="mb-3" controlId="formBasicEmail"
        //         >
        //             <Form.Label></Form.Label>
        //             <Form.Select className="form-control" aria-label="Default select example">
        //                 <option selected>Choose...</option>
        //                 <option value="09:00 PM">09:00 PM</option>
        //                 <option value="10:00 PM">10:00  PM</option>
        //                 <option value="11:00 PM">11:00  PM</option>
        //                 <option value="12:00 AM">12:00  AM</option>
        //             </Form.Select>
        //         </Form.Group>
        //     </Container15>
        //     <Container16>
        //         <p>What time you wake up?</p>
        //         <HorizontalRule />
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label></Form.Label>
        //             <Form.Select className="form-control" aria-label="Default select example">
        //                 <option selected>Choose...</option>
        //                 <option value="05:00 AM">05:00 AM</option>
        //                 <option value="06:00 AM">06:00 AM</option>
        //                 <option value="07:00 AM">07:00 AM</option>
        //                 <option value="08:00 AM">08:00 AM</option>
        //             </Form.Select>
        //         </Form.Group>
        //     </Container16>
        //     <Container17>
        //         <p>Rate your sleep</p>
        //         <HorizontalRule />
        //         <p>Sleep</p>
        //         <p>Please describe your usual sleeping patterns</p>
        //         <textarea class="textarea1"></textarea>
        //     </Container17>
        //     <Container18>
        //         <p>Overall energy levels </p>
        //         <HorizontalRule />
        //         <p>Energy levels</p>
        //         <p>Please describe your usual energy levels</p>
        //         <textarea class="textarea1"></textarea>
        //     </Container18>
        //     <Container19>
        //         <p>Overall  stress levels </p>
        //         <HorizontalRule />
        //         <p>Stress levels</p>
        //         <p>Please describe your usual stress levels</p>
        //         <textarea class="textarea1"></textarea>
        //     </Container19>
        //     <Container20>
        //         <p>Where do you store the majority of your body fat, where do you need to lose it most? Ex (Stomach, Thighs etc.)</p>
        //         <HorizontalRule />
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label></Form.Label>
        //             <Form.Select className="form-control" aria-label="Default select example">
        //                 <option selected>Choose...</option>
        //                 <option value="Stomach">Stomach</option>
        //                 <option value="Thighs">Thighs</option>
        //                 <option value="Option 3">Option 3</option>
        //                 <option value="Option 4">Option 4</option>
        //             </Form.Select>
        //         </Form.Group>
        //     </Container20>
        //     <Container21>
        //         <p>Regarding specific hypertrophy, what parts of the body do feel needs the most attention to improve balance and symmetry? </p>
        //         <HorizontalRule />
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label></Form.Label>
        //             <Form.Select className="form-control" aria-label="Default select example">
        //                 <option selected>Choose...</option>
        //                 <option value="Stomach">Stomach</option>
        //                 <option value="Thighs">Thighs</option>
        //                 <option value="Option 3">Option 3</option>
        //                 <option value="Option 4">Option 4</option>
        //             </Form.Select>
        //         </Form.Group>
        //     </Container21>
        //     <Container22>
        //         <p>Do you currently take any supplements? </p>
        //         <HorizontalRule />
        //         <div className="row">
        //             <div className="col-md-3" >
        //                 <p>Supplement</p>
        //             </div>
        //             <div className="col-md-3">
        //                 <p>Why are you taking it?</p>
        //             </div>
        //             <div className="col-md-3">
        //                 <p>Dosage</p>
        //             </div>
        //             <div className="col-md-3">
        //                 <p>Duration</p>
        //             </div>
        //         </div>
        //         <div className="row-grid">
        //             <textarea className="col-md-3 box1">

        //             </textarea>
        //             <textarea className="col-md-3 box2">

        //             </textarea>
        //             <textarea className="col-md-3 box3">

        //             </textarea>
        //             <textarea className="col-md-3 box4">

        //             </textarea>
        //         </div>
        //     </Container22>
        //     <Container23>
        //         <p>Do you currently take any prescription medication?</p>
        //         <HorizontalRule />
        //         <div className="row">
        //             <div className="col-md-3" >
        //                 <p>Medication</p>
        //             </div>
        //             <div className="col-md-3">
        //                 <p>Why are you taking it?</p>
        //             </div>
        //             <div className="col-md-3">
        //                 <p>Dosage</p>
        //             </div>
        //             <div className="col-md-3">
        //                 <p>Duration</p>
        //             </div>
        //         </div>
        //         <div className="row-grid">
        //             <textarea className="col-md-3 box1">

        //             </textarea>
        //             <textarea className="col-md-3 box2">

        //             </textarea>
        //             <textarea className="col-md-3 box3">

        //             </textarea>
        //             <textarea className="col-md-3 box4">

        //             </textarea>
        //         </div>
        //     </Container23>
        //     <Container24>
        //         <p>Do you currently play any sport or participate in any recreational activities on regular basis?</p>
        //         <HorizontalRule />
        //         <div className="grid">
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Mon
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Tue
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Wed
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Thu
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Fri
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Sat
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Sun
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //         </div>
        //     </Container24>
        //     <Container25>
        //         <p>Are there any sports or activities you would like to incorporate into the training regime as an alternative to regular cardio (if needed)?</p>
        //         <HorizontalRule />
        //         <textarea class="textarea1"></textarea>
        //     </Container25>
        //     <NutririonText>
        //         <p>Nutrition Information </p>
        //     </NutririonText>
        //     <Container26>
        //         <p>The following section is a record of your daily food and fluid intake for a 3 day period (fill them for past 3 day period as per your memory). <br />
        //             List all foods and fluids you consume- include training day if applicable.</p>
        //         <HorizontalRule />
        //     </Container26>
        //     <Container27>
        //         <p>Is the above 3-day period a typical representation of your current nutrition habits? How long has this been the case?</p>
        //         <HorizontalRule />
        //         <textarea class="textarea1"></textarea>
        //     </Container27>
        //     <Container28>
        //         <p>Do you suffer from any of the following symptoms</p>
        //         <HorizontalRule />
        //         <DetailBox18>
        //             <div class='grid-container'>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new47`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new47`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Stomach bloating
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new48`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new48`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Crampings
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new49`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new49`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Headaches
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new50`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new50`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Fatigue
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new51`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new51`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Skin irritation
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new52`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new52`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         GERD
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new53`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new53`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Poor memory
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new54`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new54`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Depression
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new55`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new55`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Slow bowel transit time
        //                     </p>
        //                 </div>

        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new56`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new56`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Diarrhea
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new57`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new57`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Irregular stool consistency
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new58`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new58`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Hunger pangs
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new59`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new59`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Other gut related symptoms
        //                     </p>
        //                 </div>
        //             </div>
        //         </DetailBox18>
        //         <p>Please Describe If you have selected one or more:</p>
        //         <textarea class="textarea1"></textarea>
        //     </Container28>
        //     <Container29>
        //         <p>Have you ever experienced any type of eating disorders</p>
        //         <HorizontalRule />
        //         <textarea class="textarea1"></textarea>
        //     </Container29>
        //     <Container30>
        //         <p>What are your favorite and least favorite foods (Rank in order of your preference)</p>
        //         <HorizontalRule />
        //         <div className="grid">
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Proteins
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Carbohydrates
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Fats
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Dairy
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Fruits
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Deserts
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //                 <textarea className="col-md-4">

        //                 </textarea>
        //             </div>
        //         </div>
        //         <HorizontalRule />
        //         <p>Are you aware of any food allergies, restrictions or sensitivities that you may have? (E.g. gluten, wheat, nuts, seafood or lactose)</p>
        //         <textarea class="textarea">

        //         </textarea>
        //     </Container30>
        //     <Container31>
        //         <p>What are your favorite foods in general?</p>
        //         <HorizontalRule />
        //         <textarea class="textarea"></textarea>
        //     </Container31>
        //     <Container32>
        //         <p>What are your least favorite Foods in general?</p>
        //         <HorizontalRule />
        //         <textarea class="textarea"></textarea>
        //     </Container32>
        //     <Container33>
        //         <p>How many meals can you eat in a day? (3-5 meals are ideal)</p>
        //         <HorizontalRule />
        //         <textarea class="textarea"></textarea>
        //     </Container33>
        //     <Container34>
        //         <p>How would you rate your cooking skills?</p>
        //         <HorizontalRule />
        //         <DetailBox24>
        //             <div class='grid-container'>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new60`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new60`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Very Basic
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new61`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new61`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Good
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new62`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new62`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Excellent
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new63`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new63`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Pro
        //                     </p>
        //                 </div>
        //             </div>
        //         </DetailBox24>
        //     </Container34>
        //     <Container35>
        //         <p>In simple practical terms what type of meal plan or what food need to be included in the plan for it to be enjoyable for you?</p>
        //         <HorizontalRule />
        //         <HorizontalRule />
        //         <textarea class="textarea"></textarea>
        //     </Container35>
        //     <Container36>
        //         <p>Hypothetically if you were to plan the most enjoyable meal plan for yourself for Breakfast, Lunch, Dinner & Snack; which food you will include in meals? </p>
        //         <HorizontalRule />
        //         <div className="grid">
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Breakfast
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Lunch
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Dinner
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Snack
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //             </div>
        //         </div>
        //     </Container36>
        //     <TrainingText>
        //         <p>Training Information </p>
        //     </TrainingText>
        //     <Container37>
        //         <p>Do you train hard </p>
        //         <HorizontalRule />
        //         <DetailBox26>
        //             <div class='grid-container'>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new64`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new64`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Yes
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new65`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new65`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         No
        //                     </p>
        //                 </div>
        //             </div>
        //         </DetailBox26>
        //         <p>Explain</p>
        //         <textarea className="textarea"></textarea>
        //     </Container37>
        //     <Container38>
        //         <p>What is your training age; how long have you been training consistently?</p>
        //         <HorizontalRule />
        //         <textarea className="textarea"></textarea>
        //     </Container38>
        //     <Container39>
        //         <p>What is your current training program and how long have you been following it? </p>
        //         <HorizontalRule />
        //     </Container39>
        //     <Container40>
        //         <p>What days and time of day do you prefer to train at the moment and are there any days you can’t train? <br />
        //             (this information allows me to design training split)</p>
        //         <HorizontalRule />
        //         <textarea className="textarea"></textarea>
        //     </Container40>
        //     <Container41>
        //         <p>What time do you usually train?</p>
        //         <HorizontalRule />
        //         <textarea className="textarea"></textarea>
        //     </Container41>
        //     <Container42>
        //         <p>How many total days in a week you can train? And How long you can spend in the gym per day?</p>
        //         <HorizontalRule />
        //         <textarea className="textarea"></textarea>
        //     </Container42>
        //     <Container43>
        //         <p>Does your gym has following equipment’s?</p>
        //         <HorizontalRule />
        //         <DetailBox32>
        //             <div class='grid-container'>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new66`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new66`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         45 Degree Back Extension
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new67`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new67`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         45 Degree Leg Press
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new68`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new68`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Sissy Squat machine
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new69`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new69`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Smith Machine
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new70`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new70`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Lying Leg Curl Machine
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new71`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new71`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Seated Leg Curl Machine
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new72`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new72`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Leg Extension
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new73`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new73`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Hex Bar or Trap Bar
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new74`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new74`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Squat Rack/Power Rack
        //                     </p>
        //                 </div>
        //                 <div class='grid-item'>
        //                     <p>
        //                         <input
        //                             className="react-switch-checkbox"
        //                             id={`react-switch-new75`}
        //                             type="checkbox"
        //                         />
        //                         <label
        //                             className="react-switch-label"
        //                             htmlFor={`react-switch-new75`}
        //                         >
        //                             <span className={`react-switch-button`} />
        //                         </label>
        //                         Cable Station
        //                     </p>
        //                 </div>
        //             </div>
        //         </DetailBox32>
        //     </Container43>
        //     <Container44>
        //         <p>Do you have any exercise equipment at home? </p>
        //         <HorizontalRule />
        //         <textarea className="textarea"></textarea>
        //     </Container44>
        //     <Container45>
        //         <p>How much total time per day can you spend each day towards workout, cardio & steps (walking)</p>
        //         <HorizontalRule />
        //         <div className="grid">
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Mon
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Tue
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Wed
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Thu
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Fri
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Sat
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //             </div>
        //             <div className="row">
        //                 <div className="col-md-3">
        //                     Sun
        //                 </div>
        //                 <textarea className="col-md-5">

        //                 </textarea>
        //             </div>
        //         </div>
        //     </Container45>
        //     <ExtraText>
        //         <p>Extra Information </p>
        //     </ExtraText>
        //     <Container46>
        //         <p>How Motivated are you to achieve your fitness goals? </p>
        //         <HorizontalRule />
        //         <p>How Motivated are you</p>
        //         <p>Please describe</p>
        //         <textarea className="textarea"></textarea>
        //     </Container46>
        //     <Container47>
        //         <p>In simple practical terms in which other areas you need Gayan’s help </p>
        //         <HorizontalRule />
        //         <textarea className="textarea"></textarea>
        //     </Container47>
        //     <Container48>
        //         <p> Is there anything that you can think of may prevent you from achieving your goal?</p>
        //         <HorizontalRule />
        //         <textarea className="textarea"></textarea>
        //     </Container48>
        //     <Button
        //         type="text" placeholder="SUBMIT"
        //         onClick={onSubmit}
        //     >
        //         SUBMIT
        //     </Button>
        // </Container >
    );
}

const Container = styled.div``;

const Container1 = styled.div`
    margin-left: 75px;
    margin-top: -50px;
    width: 1271px;
    height: 100px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

    p {
        padding-left: 15px;
        padding-top: 3px;
    }
`;
const Container2 = styled.div`
    margin-left: 75px;
    margin-top: 30px;
    width: 1271px;
    height: 497px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    p {
        padding-left: 29px;
        padding-top: 16px;
        font-size: 14px;
    }
`;

const HorizontalRule = styled.div`
    position: absolute;
    width: 1219px;
    height: 0px;
    border: 1px solid #ffe4d1;
    left: 103px;
    top: px;
`;

const FormDetails = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 8fr) minmax(0, 8fr) minmax(300px, 8fr);
    column-gap: 11px;
    row-gap: 30px;
    margin-top: 50px;
    margin-right: 50px;
    margin-left: 50px;

    .mb-3 {
        display : grid;
        column-gap: 90px;
        row-gap: px;
    }

    .form-control {
        width: 381px;
        height: 48px;
        border-radius: 4px;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        
    }
    
    .form-label {
        padding-bottom: 15px
    }

`;
const Container3 = styled.div`
    margin-left: 75px;
    margin-top: 45px;
    width: 1271px;
    height: 835px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    p {
        padding-left: 29px;
        padding-top: 19px;
        font-size: 14px;
    }

    .textarea1 {
        height: 177px;
        width: 1224px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 23px;
        font-size: 20px;
    }
`;

const DetailBox1 = styled.div`
    .grid-container {
        display: grid;
        grid-gap: 12px 11px;
        grid-template-columns: auto auto auto;
        padding: 23px 23px;
        margin-top: 40px;
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid #ffe4d1;
        font-size: 30px;
        text-align: center;
        width: 402px;
        height: 48px;
        border-radius: 4px;
    }

    p {
        display: flex;
        position: relative;
        padding-left: px;
        padding-top: 11px;
        padding-bottom: px;
        margin-left: 12px;
    }
`;

const Container4 = styled.div`
    margin-left: 75px;
    margin-top: 45px;
    width: 1271px;
    height: 604px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    p {
        padding-left: 29px;
        padding-top: 19px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea1 {
        height: 177px;
        width: 1224px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 23px;
        font-size: 20px;
    }
    
`

const DetailBox3 = styled.div`
    .grid-container {
        display: grid;
        grid-gap: 12px 11px;
        grid-template-columns: auto auto auto;
        padding: 23px 23px;     
        margin-top: 40px;
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid #ffe4d1;
        font-size: 30px;
        text-align: center;
        width: 402px;
        height: 48px;
        border-radius: 4px;
    }
    
    p {
        display: flex;
        padding-left: 10px;
        padding-top: 0px;
        align-items: center;
    }


`

const Container5 = styled.div`
    margin-left: 75px;
    margin-top: 45px;
    width: 1271px;
    height: 952px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: #FFEDFA;

    p {
        padding-left: 29px;
        padding-top: 19px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea1 {
        height: 177px;
        width: 1224px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 23px;
        font-size: 20px;
    }
`


const DetailBox5 = styled.div`
    .grid-container {
        display: grid;
        grid-gap: 12px 11px;
        grid-template-columns: auto auto auto;
        padding: 23px 23px;
        margin-top: 40px;
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid #ffe4d1;
        font-size: 30px;
        text-align: center;
        width: 402px;
        height: 48px;
        border-radius: 4px;
    }

    p {
        display: flex;
        padding-left: 10px;
        padding-top: 0px;
        align-items: center;
    }
`

const BottomSection1 = styled.div`
    .textarea1 {
        height: 177px;
        width: 1224px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 23px;
        margin-top: 18px;
        font-size: 20px;
    }
`



const Container6 = styled.div`
    margin-left: 75px;
    margin-top: 45px;
    width: 1271px;
    height: 532px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: #EDF1FF;

    p {
        padding-left: 29px;
        padding-top: 19px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea1 {
        height: 177px;
        width: 1224px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 23px;
        margin-top: 15px;
        font-size: 20px;
        }
`

const DetailBox8 = styled.div`
.grid-container {
    display: grid;
    grid-gap: 12px 11px;
    grid-template-columns: auto auto auto;
    padding: 23px 23px;
    margin-top: 40px;
  }

  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #ffe4d1;
    font-size: 30px;
    text-align: center;
    width: 402px;
    height: 48px;
    border-radius: 4px;
    
  }
  p {
    display: flex;
    padding-left: 10px;
    padding-top: 0px;
    align-items: center;
  }
`

const Container7 = styled.div`
    margin-left: 75px;
    margin-top: 45px;
    width: 1271px;
    height: 673px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }
    
    .grid{
        margin-top: 100px;
    }

    .row{
        margin-bottom: 21px;
    }

    .col-md-3{
        margin-left: 47px;
        width: 176px;
        height: 48px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .col-md-5{
        margin-left: 19px;
        width: 588px;
        height: 49px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .col-md-4{
        margin-left: 25px;
        width: 381px;
        height: 48px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`

const Container8 = styled.div`
    margin-left: 75px;
    margin-top: 45px;
    width: 1271px;
    height: 401px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

.textarea1 {
        height: 234px;
        width: 1198px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 37px;
        margin-top: 40px;
        font-size: 20px;
    }

`
const Container9 = styled.div`
    margin-left: 75px;
    margin-top: 45px;
    width: 1271px;
    height: 227px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

.textarea1 {
        height: 44px;
        width: 1224px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 26px;
        margin-top: px;
        font-size: 20px;
    }
`

const Container10 = styled.div`
    margin-left: 75px;
    margin-top: 42px;
    width: 1271px;
    height: 503px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .grid-item{
        margin-top: 70px;
        margin-bottom: 44px;
    }

    .row{
        margin-top: 16px;
        margin-bottom: 16px;
        margin-left: 86px;
        width: 1170px;
        height: 44px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        padding-left: 18px;
        padding-top: 5px;
    }


`

const Container11 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 331px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea1 {
        height: 183px;
        width: 1224px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 26px;
        margin-top: px;
        font-size: 20px;
        }
`
const Container12 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 331px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea1 {
        height: 208px;
        width: 1224px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 24px;
        margin-top: 23px;
        font-size: 20px;
        }   
`

const Container13 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 215px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .form-control {
        width: 1217px;
        height: 69px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 28px;
    }
`

const Container14 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 331px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea1 {
        height: 208px;
        width: 1224px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 24px;
        margin-top: 27px;
        font-size: 20px;
        }  
`

const Container15 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 217px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .form-control {
        width: 1224px;
        height: 59px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 24px;
        margin-top: 20px;
    }
`

const Container16 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 217px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .form-control {
        width: 1224px;
        height: 59px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 24px;
        margin-top: 20px;
    }
`

const Container17 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 436px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea1 {
        height: 161px;
        width: 1211px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 34px;
        margin-top: 27px;
        font-size: 20px;
        } 
`

const Container18 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 436px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea1 {
        height: 161px;
        width: 1211px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 34px;
        margin-top: 27px;
        font-size: 20px;
        } 
`

const Container19 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 436px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea1 {
        height: 161px;
        width: 1211px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 34px;
        margin-top: 27px;
        font-size: 20px;
        } 
`

const Container20 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 217px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .form-control {
        width: 1224px;
        height: 59px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 24px;
        margin-top: 20px;
    }
`
const Container21 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 217px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .form-control {
        width: 1224px;
        height: 59px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 24px;
        margin-top: 20px;
    }
`

const Container22 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 274px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .box1{
        margin-left: 25px;
        width: 179px;
        height: 57px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .box2{
        margin-left: 21px;
        width: 421px;
        height: 57px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .box3{
        margin-left: 19px;
        width: 282px;
        height: 57px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .box4{
        margin-left: 18px;
        width: 190px;
        height: 57px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`

const Container23 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 274px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .box1{
        margin-left: 25px;
        width: 179px;
        height: 57px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .box2{
        margin-left: 21px;
        width: 421px;
        height: 57px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .box3{
        margin-left: 19px;
        width: 282px;
        height: 57px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .box4{
        margin-left: 18px;
        width: 190px;
        height: 57px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`
const Container24 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 673px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .grid{
        margin-top: 100px;
    }

    .row{
        margin-bottom: 21px;
    }

    .col-md-3{
        padding-top: 10px;
        margin-left: 47px;
        width: 176px;
        height: 48px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .col-md-5{
        margin-left: 19px;
        width: 588px;
        height: 49px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .col-md-4{
        margin-left: 25px;
        width: 381px;
        height: 48px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`
const Container25 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 331px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea1 {
        height: 208px;
        width: 1224px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 26px;
        margin-top: 27px;
        font-size: 20px;
        } 
`


const NutririonText = styled.div`
    position: absolute;
    padding-left: 550px;
    margin-top: 70px;
    align-items: center;
    p{
        font-weight: bold;
        font-size: 30px;
        line-height: 16px;
    }
`
const Container26 = styled.div`
    margin-left: 75px;
    margin-top: 187px;
    width: 1271px;
    height: 1220px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;
    

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }
`

const Container27 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 331px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea1 {
        height: 208px;
        width: 1224px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 26px;
        margin-top: 27px;
        font-size: 20px;
        } 
`

const Container28 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 738px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea1 {
        height: 161px;
        width: 1211px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 26px;
        margin-top: 27px;
        font-size: 20px;
    } 
`

const DetailBox18 = styled.div`
    .grid-container {
        display: grid;
        grid-gap: 12px 11px;
        grid-template-columns: auto auto auto;
        padding: 23px 23px;
        margin-top: 39px;
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid #ffe4d1;
        font-size: 30px;
        text-align: center;
        width: 402px;
        height: 48px;
        border-radius: 4px;
    }

    p {
        display: flex;
        padding-left: 10px;
        padding-top: 1px;
        align-items: center;
    }
`

const Container29 = styled.div`
    margin-left: 75px;
    margin-top: 55px;
    width: 1271px;
    height: 331px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea1 {
        height: 208px;
        width: 1224px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 26px;
        margin-top: 27px;
        font-size: 20px;
    }   
`

const Container30 = styled.div`
    margin-left: 75px;
    margin-top: 49px;
    width: 1271px;
    height: 828px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .grid{
        margin-top: 80px;
    }

    .row{
        margin-bottom: 21px;
    }

    .col-md-3{
        padding-top: 10px;
        margin-left: 47px;
        width: 176px;
        height: 48px;
    }

    .col-md-5{
        margin-left: 19px;
        width: 588px;
        height: 49px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .col-md-4{
        margin-left: 25px;
        width: 381px;
        height: 48px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .textarea{
        margin-left: 52px;
        margin-top: 52px;
        width: 1184px;
        height: 124px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`

const Container31 = styled.div`
    margin-left: 75px;
    margin-top: 49px;
    width: 1271px;
    height: 331px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea{
        margin-left: 24px;
        margin-top: 24px;
        width: 1224px;
        height: 208px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`

const Container32 = styled.div`
    margin-left: 75px;
    margin-top: 32px;
    width: 1271px;
    height: 331px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea{
        margin-left: 24px;
        margin-top: 24px;
        width: 1224px;
        height: 208px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`

const Container33 = styled.div`
    margin-left: 75px;
    margin-top: 45px;
    width: 1271px;
    height: 331px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea{
        margin-left: 24px;
        margin-top: 24px;
        width: 1224px;
        height: 208px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`

const Container34 = styled.div`
    margin-left: 75px;
    margin-top: 41px;
    width: 1271px;
    height: 192px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }
`
const DetailBox24 = styled.div`
    .grid-container {
        display: grid;
        grid-gap: 6px;
        grid-template-columns: auto auto auto auto;
        padding: 23px 23px;
        margin-top: 39px;
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid #ffe4d1;
        font-size: 30px;
        text-align: center;
        width: 301px;
        height: 48px;
        border-radius: 4px;
    }

    p {
        display: flex;
        padding-left: 10px;
        padding-top: 1px;
        align-items: center;
  }
`
const Container35 = styled.div`
    margin-left: 75px;
    margin-top: 41px;
    width: 1271px;
    height: 331px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea{
        margin-left: 24px;
        margin-top: 24px;
        width: 1224px;
        height: 208px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`

const Container36 = styled.div`
    margin-left: 75px;
    margin-top: 51px;
    width: 1271px;
    height: 460px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .grid{
        margin-top: 80px;
    }

    .row{
        margin-bottom: 21px;
    }

    .col-md-3{
        padding-top: 10px;
        margin-left: 47px;
        width: 176px;
        height: 48px;
    }

    .col-md-5{
        margin-left: 19px;
        width: 997px;
        height: 49px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`
const TrainingText = styled.div`
    position: absolute;
    padding-left: 550px;
    margin-top: 70px;
    align-items: center;

    p{
        font-weight: bold;
        font-size: 30px;
        line-height: 16px;
    }
`
const Container37 = styled.div` 
    margin-left: 75px;
    margin-top: 187px;
    width: 1271px;
    height: 460px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea{
        margin-left: 24px;
        width: 1222px;
        height: 161px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`
const DetailBox26 = styled.div` 
    .grid-container {
        display: grid;
        grid-gap: 6px;
        grid-template-columns: auto auto auto auto;
        padding: 23px 23px;
        margin-top: 39px;
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid #ffe4d1;
        font-size: 30px;
        text-align: center;
        width: 609px;
        height: 48px;
        border-radius: 4px;
    }

    p {
        display: flex;
        padding-left: 10px;
        padding-top: 1px;
        align-items: center;
    }
`

const Container38 = styled.div`
    margin-left: 75px;
    margin-top: 46px;
    width: 1271px;
    height: 331px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea{
        margin-top: 24px;
        margin-left: 24px;
        width: 1222px;
        height: 188px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`


const Container39 = styled.div`
    margin-left: 75px;
    margin-top: 46px;
    width: 1271px;
    height: 331px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }
`

const Container40 = styled.div`
    margin-left: 75px;
    margin-top: 46px;
    width: 1271px;
    height: 356px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
        margin-bottom: 35px;
    }

    .textarea{
        margin-top: 24px;
        margin-left: 24px;
        width: 1222px;
        height: 188px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`

const Container41 = styled.div`
    margin-left: 75px;
    margin-top: 46px;
    width: 1271px;
    height: 256px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea{
        margin-top: 44px;
        margin-left: 24px;
        width: 1222px;
        height: 115px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }   
`

const Container42 = styled.div`
    margin-left: 75px;
    margin-top: 47px;
    width: 1271px;
    height: 256px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }

    .textarea{
        margin-top: 44px;
        margin-left: 24px;
        width: 1222px;
        height: 115px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    } 
`

const Container43 = styled.div`
    margin-left: 75px;
    margin-top: 47px;
    width: 1271px;
    height: 400px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-top: 24px;
    }
`

const DetailBox32 = styled.div`
    .grid-container {
        display: grid;
        grid-gap: 12px 11px;
        grid-template-columns: auto auto auto;
        padding: 23px 23px;
        margin-top: 39px;
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid #ffe4d1;
        font-size: 30px;
        text-align: center;
        width: 402px;
        height: 48px;
        border-radius: 4px;
    }

    p {
        display: flex;
        padding-left: 10px;
        padding-top: 1px;
        align-items: center;
    }
`
const Container44 = styled.div`
    margin-left: 75px;
    margin-top: 49px;
    width: 1271px;
    height: 256px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
    }

    .textarea{
        margin-top: 44px;
        margin-left: 24px;
        width: 1222px;
        height: 115px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    } 
`

const Container45 = styled.div`
    margin-left: 75px;
    margin-top: 49px;
    width: 1271px;
    height: 673px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
    }

    .grid{
        margin-top: 100px;
    }

    .row{
        margin-bottom: 21px;
    }

    .col-md-3{
        margin-left: 47px;
        width: 176px;
        height: 48px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .col-md-5{
        margin-left: 19px;
        width: 997px;
        height: 49px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    }
`
const ExtraText = styled.div`
    position: absolute;
    padding-left: 550px;
    margin-top: 50px;
    align-items: center;

    p{
        font-weight: bold;
        font-size: 30px;
        line-height: 16px;
    }
`
const Container46 = styled.div`
    margin-left: 75px;
    margin-top: 158px;
    width: 1271px;
    height: 436px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
    }

    .textarea{
        margin-top: 44px;
        margin-left: 24px;
        width: 1211px;
        height: 161px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    } 
`

const Container47 = styled.div`
    margin-left: 75px;
    margin-top: 34px;
    width: 1271px;
    height: 303px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-bottom: 24px;
    }

    .textarea{
        margin-top: 44px;
        margin-left: 24px;
        width: 1211px;
        height: 161px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    } 
`

const Container48 = styled.div`
    margin-left: 75px;
    margin-top: 36px;
    width: 1271px;
    height: 303px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ;

    p {
        padding-left: 29px;
        padding-top: 25px;
        font-size: 14px;
        margin-bottom: 24px;
    }

    .textarea{
        margin-top: 44px;
        margin-left: 24px;
        width: 1211px;
        height: 161px;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
    } 
`

const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    cursor: pointer;

    position: absolute;
    width: 265px;
    height: 39px;
    left: 575px;
    margin-top: 20px;

    background: #FF6600;
    border-radius: 8px;
`



export default Questions;
