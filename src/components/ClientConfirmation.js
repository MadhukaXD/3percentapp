import React from 'react';
import '../App.css';
import { NavLink, Link, useLocation } from "react-router-dom";

function ClientConfirmation() {
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
                                                <div data-v-43a7bf8a data-v-36bd4c01
                                                    className="black--text k-menu-flyout">
                                                    <div data-v-43a7bf8a className="k-menu-flyout__activator">
                                                        <button
                                                            data-v-36bd4c01 to="[object Object]"
                                                            className="user-avatar-button k-button flat icon-style medium"
                                                            data-v-43a7bf8a>
                                                            <div className="k-button__content" style={{ "opacity": "1" }}>
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
                                                        </button>
                                                    </div>
                                                    {/* <!----> */}
                                                    {/* <!----> */}
                                                </div>
                                            </div>
                                            <div data-v-b021fc42 className="black--text k-menu" data-v-75a3e7a8><button
                                                data-v-b021fc42 to="[object Object]"
                                                className="k-menu__activator k-button flat icon medium white--text">
                                                <div className="k-button__content" style={{ "opacity": "1" }}>
                                                    <svg
                                                        data-v-7f8bad2e aria-hidden="true" focusable="false"
                                                        data-prefix="fas" data-icon="menu" role="img"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"
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
                                "top": "-5rem",
                            }}>
                            <div data-v-2913046a="" className="background-ribbon"
                                style={{
                                    "height": "230px",

                                }}>
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
                                {/* <!----> */}
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
                                                                                    label="Macro Type"
                                                                                    name="object-110314"
                                                                                    prependcb="function(){}" role="text"
                                                                                    placeholder="Client Name"
                                                                                    value="Welcome client"
                                                                                    rows="5" data-mask="null"
                                                                                    aria-checked="Grams" readonly />
                                                                            </div>
                                                                            {/* <!----> */}
                                                                        </div>
                                                                        <div data-v-6b0e4150="" style={{}}>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="k-select__list-container">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex xs12 pa-none">
                                            <div className="action-bar-portal v-portal" style={{ "display": "none" }}>
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
                                                                                Login Credentials
                                                                            </div>
                                                                            {/* <!----> */}
                                                                        </span>
                                                                    </div>
                                                                    <div data-v-194e1f66=""
                                                                        className="k-title__subtitle-wrapper long-primer"><span
                                                                            data-v-194e1f66="" className="">
                                                                            {/* <!----> */}
                                                                        </span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr /><br />
                                                    <div className="k-card__content">
                                                        <div data-v-52fb9f55="" className="layout row wrap no-padding">
                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md6">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <label for="object-640858"
                                                                        className="minion k-input__label colorOne--text">
                                                                        Password
                                                                    </label>
                                                                    <div className="k-input-container d-flex align-center k-input__field k-input__field--active">
                                                                        <div className="pica" style={{
                                                                            "flex-grow": "1",
                                                                            "position": "relative"
                                                                        }}>
                                                                            <input type="text" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-v-52fb9f55="" className="flex py-none xs4 md6">
                                                                <div data-v-52fb9f55="" className="k-input k-input--has-changed"
                                                                    min="0" style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                                    <label for="object-584956"
                                                                        className="minion k-input__label colorOne--text">
                                                                        Confirm Password
                                                                    </label>
                                                                    <div className="k-input-container d-flex align-center k-input__field k-input__field--active">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container grid-gap-earth">
                                    <div data-v-158550f2="" className="layout row wrap">
                                        <div data-v-158550f2="" className="flex xs12">
                                            <div data-v-70fe1976="" data-v-158550f2="">
                                                <div data-v-52fb9f55="" data-v-70fe1976="" className="mb-none k-card raised">
                                                    <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                        <div data-v-52fb9f55=""
                                                            id="k-row-e7998299-5d85-4c87-946a-1a8a341bc050"
                                                            className="k-row thin">
                                                            {/* <!----> */}
                                                            <div className="k-row__slot--middle">
                                                                <span className="k-title">
                                                                    <p className="d-flex py-sun justify-center">
                                                                        <span className="k-title">
                                                                            <span className="d-flex ">
                                                                                We have few questions to ask from you which will take few minutes.
                                                                            </span>
                                                                        </span>
                                                                    </p>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!----> */}
                                    </div>
                                </div>

                                <NavLink
                                    strict
                                    exact
                                    to={`${process.env.PUBLIC_URL}/questions`}
                                    key={`${process.env.PUBLIC_URL}/questions`}>
                                    <div data-v-70fe1976="" className="d-flex justify-center pa-saturn">
                                        <button
                                            data-v-70fe1976="" to="[object Object]"
                                            className="k-button medium colorOne">
                                            <div className="k-button__content text-uppercase"
                                                style={{ "opacity": "1" }}>
                                                take the questionnaires
                                            </div>
                                        </button>
                                    </div>
                                </NavLink>

                            </div>
                        </div>
                    </div>
                </div>
                <div tabindex="0" className="vuedals" style={{ "display": "none" }}>
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
                        "transition": "opacity 0.6s ease 0s "
                    }}>
                </div>
                <div data-v-3bd2e235="" className="notify notify-bottom-full"
                    style={{ "width": "auto" }}>
                    <div data-v-3bd2e235="">
                    </div>
                </div>
            </div>
        </div >
    )
}


export default ClientConfirmation;