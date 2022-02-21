import React from 'react';
import '../App.css';
import { NavLink, Link, useLocation } from "react-router-dom";

function LoginMain() {
    return (
        <div id="app" className="grey-background">
            <div data-app="true" className="k-app light">
                <div className="k-layout-main__wrapper">
                    <div className="menu-bar--sticky-top click-through"
                        style={{
                            "--menubar-height": "80px",
                            "display": "none"
                        }}>
                        <div className="menu-bar">
                            <div data-v-75a3e7a8="" className="tw-container mx-auto k-top-bar is-primary has-right">
                                <div data-v-75a3e7a8="" className="k-top-bar__container">
                                    {/* <!----> */}
                                    <div data-v-75a3e7a8="" className="k-top-bar__slot--middle">
                                        <a data-v-75a3e7a8=""
                                            className="router-link-active canon">
                                            <div className="menu-bar__logo-container">
                                                <svg data-v-7f8bad2e="" aria-hidden="true"
                                                    focusable="false" data-prefix="fad" data-icon="mpth" role="img"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                                    className="logo svg-inline--fa fa-mpth fa-w-16 k-icon sun noColor--text">
                                                    <g data-v-7f8bad2e="" className="fa-group">
                                                        <path data-v-7f8bad2e="" fill="currentColor"
                                                            d="M16 32L32 16L16 20.2584V32Z" className="fa-secondary">
                                                        </path>
                                                        <path data-v-7f8bad2e="" fill="currentColor"
                                                            d="M15.9999 0L0 16H15.9999H32L15.9999 0Z" className="fa-primary">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div data-v-75a3e7a8="" className="k-top-bar__slot--right">
                                        <div data-v-75a3e7a8="" className=""><button to="[object Object]"
                                            className="k-button flat medium white--text" data-v-75a3e7a8="">
                                            <div className="k-button__content" style={{ "opacity": 1 }}>
                                                Store
                                                {/* <!----> */}
                                            </div>
                                            {/* <!----> */}
                                        </button><button to="[object Object]" className="k-button flat medium white--text"
                                            data-v-75a3e7a8="">
                                                <div className="k-button__content" style={{ "opacity": 1 }}>
                                                    Events
                                                    {/* <!----> */}
                                                </div>
                                                {/* <!----> */}
                                            </button><button to="[object Object]" className="k-button flat medium white--text"
                                                data-v-75a3e7a8="">
                                                <div className="k-button__content" style={{ "opacity": 1 }}>
                                                    Contact
                                                    {/* <!----> */}
                                                </div>
                                                {/* <!----> */}
                                            </button><button to="[object Object]"
                                                className="k-button outline medium white--text" data-v-75a3e7a8="">
                                                <div className="k-button__content" style={{ "opacity": 1 }}>
                                                    Log In
                                                    {/* <!----> */}
                                                </div>
                                                {/* <!----> */}
                                            </button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tooltip-boundary" className="tooltip-boundary"></div>
                    <div className="k-layout-main">
                        <div data-v-2913046a="" className="background-ribbon__container"
                            style={{
                                "height": "230px",
                                "top": "0rem"
                            }}>
                            <div data-v-2913046a="" className="background-ribbon"
                                style={{ "height": "230px" }}>
                                <div data-v-2913046a="" className="header-image-background background-ribbon__old"
                                    style={{
                                        "background-color": "#FF6600",
                                        "background-position-y": "0%"
                                    }}>
                                </div>
                                <div data-v-2913046a="" id="background-filter"
                                    className="absolute top-0 left-0 tw-w-full tw-h-full bg-white z-10"></div>
                                <div data-v-2913046a="" className="background-ribbon__cutout"></div>
                            </div>
                        </div>
                        <div className="auth-full-height d-flex flex-column justify-space-between px-mars pb-earth"
                            style={{ "--menubar-height": "80px" }}>
                            <div className="auth-topbar">
                                <div className="ribbon-logo pa-earth mx-auto">
                                    <img src="images/logo3.png" width="200"></img>
                                </div>
                            </div>
                            <div data-v-0cf3cda2="" className="page-wrapper grow">
                                <div data-v-f3fcb000="" data-v-0cf3cda2=""
                                    className="container no-padding container-auth login grid-gap-mars fill-height"
                                    share-actions="">
                                    <div data-v-f3fcb000="" className="layout row wrap align-start">
                                        <div data-v-f3fcb000=""
                                            className="flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 pa-earth k-card raised">
                                            <div data-v-f3fcb000="" className="form-generator">
                                                <div raised="" className="mb-earth">
                                                    {/* <!----> */}
                                                    <form data-v-66e8aa00="" id="login" data-vv-scope="login" name="login"
                                                        novalidate="novalidate" />
                                                    <div data-v-66e8aa00="" className="layout row wrap">
                                                        <div data-v-66e8aa00="" className="flex xs12">
                                                            <div className="k-input" data-vv-as="Username"
                                                                data-vv-name="Username"
                                                                style={{ "--componentThemeColor": "var(--null)" }}><label
                                                                    for="object-300916"
                                                                    className="minion k-input__label colorOne--text">
                                                                    Username*
                                                                    {/* <!----> */}
                                                                </label>
                                                                {/* <!----> */}
                                                                <div
                                                                    className="k-input-container d-flex align-center k-input__field">
                                                                    {/* <!----> */}
                                                                    <div className="pica"
                                                                        style={{
                                                                            "flex-grow": "1",
                                                                            "position": "relative"
                                                                        }}>
                                                                        <input
                                                                            type="email" data-vv-name="object-300916"
                                                                            data-vv-as="username*" data-vv-scope="login"
                                                                            appendcb="function(){}" aria-checked=""
                                                                            aria-label="Username*"
                                                                            autocomplete="username email"
                                                                            id="object-300916" label="Username*"
                                                                            name="object-300916"
                                                                            prependcb="function(){}" required="required"
                                                                            role="email" rows="5" data-mask="null"
                                                                            value="madhukaperera1996@gmail.com" />
                                                                        <div data-lastpass="true" className="css-6lfyyy">
                                                                            <div data-lastpass-icon="true"
                                                                                className="css-1fnz74y">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!----> */}
                                                                {/* <!----> */}
                                                            </div>
                                                            <div data-v-6b0e4150=""></div>
                                                        </div>
                                                    </div>
                                                    <div data-v-66e8aa00="" className="flex xs12">
                                                        <div className="k-input" data-vv-as="Password"
                                                            data-vv-name="Password"
                                                            style={{ "--componentThemeColor": "var(--colorOne)" }}>
                                                            <label
                                                                for="object-506487"
                                                                className="minion k-input__label colorOne--text">
                                                                Password*
                                                                {/* <!----> */}
                                                            </label>
                                                            {/* <!----> */}
                                                            <div
                                                                className="k-input-container d-flex align-center k-input__field">
                                                                {/* <!----> */}
                                                                <div className="pica"
                                                                    style={{
                                                                        "flex-grow": "1",
                                                                        "position": "relative"
                                                                    }}>
                                                                    <input
                                                                        type="password" data-vv-name="object-506487"
                                                                        data-vv-as="password*" data-vv-scope="login"
                                                                        appendicon="fas,eye"
                                                                        appendcb="()=>{this.showPassword=!this.showPassword}"
                                                                        aria-checked="" aria-label="Password*"
                                                                        autocomplete="current-password"
                                                                        id="object-506487" form="login"
                                                                        label="Password*" name="object-506487"
                                                                        prependcb="function(){}" required="required"
                                                                        role="password" rows="5" data-mask="null"
                                                                        value="12345678" />
                                                                    <div data-lastpass="true" className="css-6lfyyy">
                                                                        <div data-lastpass-icon="true"
                                                                            className="css-cajv7m">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="k-input__field-icon pica right"><svg
                                                                    data-v-7f8bad2e="" aria-hidden="true"
                                                                    focusable="false" data-prefix="fas"
                                                                    data-icon="eye" role="img"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 576 512"
                                                                    className="svg-inline--fa fa-eye fa-w-18 k-icon mars grey-one--text">
                                                                    <path data-v-7f8bad2e="" fill="currentColor"
                                                                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                                                        className=""></path>
                                                                </svg>
                                                                    {/* <!----> */}
                                                                </div>
                                                                {/* <!----> */}
                                                            </div>
                                                            <div data-v-6b0e4150=""></div>
                                                        </div>
                                                    </div>
                                                    <div data-v-66e8aa00="" className="flex xs12">
                                                        <div className="k-toggle" data-vv-as="Remember Me?"
                                                            data-vv-name="Remember Me?" data-vv-scope="login"
                                                            validationerrors="">
                                                            <input id="object-113153"
                                                                label="Remember Me?" type="checkbox" />
                                                            <label
                                                                for="object-113153">
                                                                Remember Me?
                                                                {/* <!----> */}
                                                            </label>
                                                            <div className="k-toggle__track colorOne--text"></div>
                                                            <div className="k-toggle__dot"
                                                                style={{ "background-color": "rgb(255, 255, 255)" }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <input data-v-66e8aa00="" type="submit" value="Submit"
                                                    className="hidden">
                                                </input>
                                            </div>
                                      
                                            <NavLink
                                                strict
                                                exact
                                                to={`${process.env.PUBLIC_URL}/dash`}
                                                key={`${process.env.PUBLIC_URL}/dash`}
                                            className="k-button no-shadow medium noColor block"
                                            style={{
                                                "background-color": "rgb(255 102 0)",
                                                "color": "rgb(255 255 255)"
                                            }}>
                                                <div className="k-button__content"
                                                    style={{ "opacity": "1" }}>
                                                Login
                                                {/* <!----> */}
                                            </div>
                                            {/* <!----> */}
                                            </NavLink>

                                            <button
                                            className="mt-moon k-button block flat medium colorOne--text">
                                                <div className="k-button__content"
                                                    style={{ "opacity": "1" }}>
                                                I Forgot!
                                                {/* <!----> */}
                                            </div>
                                            {/* <!----> */}
                                        </button>

                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs-center long-primer grey-one--text pt-sun">
                            Copyright © 2022
                        </div>
                    </div>
                </div>
                {/* <!----> */}
            </div>
            <div tabindex="0" className="vuedals" style={{ "display": "none" }}></div>
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
            <div data-v-3bd2e235="" className="notify notify-bottom-full" style={{ "width": "auto" }}>
                <div data-v-3bd2e235=""></div>
            </div>
        </div >
    )
}

export default LoginMain;
