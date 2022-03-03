import React from 'react';
import '../App.css';
import Header from './Header';
import {Helmet} from "react-helmet";
import LineDemo from "./ChartMain";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

function Dash() {
    return (
        <div id="app" className="grey-background">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard - 3%</title>
            </Helmet>

            <div data-app="true" className="k-app light">
                <div className="k-layout-main__wrapper" >
                    <Header/>
                    <div className="k-layout-main" >
                        <div data-v-2913046a className="background-ribbon__container"
                            style={{
                                "height": "230px",
                                "top": "-5rem"
                            }}>
                            <div data-v-2913046a className="background-ribbon"
                                style={{ "height": "230px" }}>
                                <div data-v-2913046a className="header-image-background background-ribbon__old"
                                    style={{
                                        "background-color": "#FF6600",
                                        "background-position-y": "0%",
                                    }}>
                                </div>
                                <div data-v-2913046a id="background-filter"
                                    className="absolute top-0 left-0 tw-w-full tw-h-full bg-white z-10" >
                                </div>
                                <div data-v-2913046a className="background-ribbon__cutout">
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="container px-none pt-none">
                                <div className="layout row wrap">
                                    <div className="flex xs12 pa-none">
                                        <div className="action-bar-portal v-portal"
                                            style={{ "display": "none" }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container grid-gap-earth">
                                <div className="layout row wrap mt-earth">
                                    <div className="flex xs12 md3 order-xs1 order-md1">
                                    <div data-v-525699db className="sticky-wrapper">
                                            <div data-v-525699db className="sticky-content"
                                                style={{ "top": "96px" }}>
                                            <div data-v-525699db className="layout row wrap cols-1">
                                                <div data-v-5478fe30 className="flex xs1">
                                                        <div data-v-5478fe30 className="colorTwo pointer k-card raised">
                                                        <div className="k-card__content">
                                                                <div data-v-5478fe30 className="align-center xs12">
                                                                <p data-v-5478fe30
                                                                    className="pica mb-mars colorOneText">
                                                                        Welcome to the3percent, Gayan !
                                                                </p>
                                                                    <p className="colorOneText">Welcome to our group! We hope for a long and successful journey with you.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div data-v-525699db className="flex xs1"
                                                        style={{ "display": "none" }}>
                                                    </div>
                                                <div data-v-525699db className="flex xs1">
                                                    <div className="dashboard-quick-actions" data-v-525699db>
                                                            <Row className="">
                                                                {/* <Col md={6} className="pb-3">
                                                                <NavLink
                                                                    strict
                                                                    exact
                                                                    to={`${process.env.PUBLIC_URL}/clientlist`}
                                                                    key={`${process.env.PUBLIC_URL}/clientlist`}>
                                                                    <div className="flex xs1">
                                                                        <div className="dashboard-action-button k-card raised">
                                                                            <div className="k-card__content">
                                                                                <div className="pica grow">
                                                                                    View<br />
                                                                                    Clients
                                                                                </div>
                                                                                <div
                                                                                    className="colorOne icon round-icon d-inline-flex align-center justify-center">
                                                                                    <svg data-v-7f8bad2e aria-hidden="true"
                                                                                        focusable="false" data-prefix="fad"
                                                                                        data-icon="id-card-alt" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 576 512"
                                                                                        className="svg-inline--fa fa-id-card-alt fa-w-18 k-icon mars noColor--text">
                                                                                        <g data-v-7f8bad2e className="fa-group">
                                                                                            <path data-v-7f8bad2e
                                                                                                fill="currentColor"
                                                                                                d="M528 64H352v64h16a16 16 0 0 1 0 32H208a16 16 0 0 1 0-32h16V64H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h480a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zM288 224a64 64 0 1 1-64 64 64 64 0 0 1 64-64zm93.3 224H194.7c-10.4 0-18.8-10-15.6-19.8A64 64 0 0 1 240 384h8.2a103 103 0 0 0 79.6 0h8.2a64.09 64.09 0 0 1 60.9 44.2c3.2 9.8-5.2 19.8-15.6 19.8z"
                                                                                                className="fa-secondary">
                                                                                            </path>
                                                                                            <path data-v-7f8bad2e
                                                                                                fill="currentColor"
                                                                                                d="M352 32a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v96h128zm-64 320a64 64 0 1 0-64-64 64 64 0 0 0 64 64zm108.9 76.2A64.09 64.09 0 0 0 336 384h-8.2a103 103 0 0 1-79.6 0H240a64 64 0 0 0-60.9 44.2c-3.2 9.8 5.2 19.8 15.6 19.8h186.6c10.4 0 18.8-10 15.6-19.8z"
                                                                                                className="fa-primary">
                                                                                            </path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </NavLink>
                                                                </Col> */}
                                                                <Col md={6} className="pb-3">
                                                                <NavLink
                                                                    strict
                                                                    exact
                                                                    to={`${process.env.PUBLIC_URL}/exerciselist`}
                                                                    key={`${process.env.PUBLIC_URL}/exerciselist`}>
                                                                    <div className="flex xs1">
                                                                        <div className="dashboard-action-button k-card raised">
                                                                            <div className="k-card__content">
                                                                                <div className="pica grow">
                                                                                    View<br />
                                                                                    Exercises
                                                                                </div>
                                                                                <div
                                                                                    className="colorOne icon round-icon d-inline-flex align-center justify-center">
                                                                                    <svg data-v-7f8bad2e aria-hidden="true"
                                                                                        focusable="false" data-prefix="fad"
                                                                                        data-icon="fire-alt" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 448 512"
                                                                                        className="svg-inline--fa fa-fire-alt fa-w-14 k-icon mars noColor--text">
                                                                                        <g data-v-7f8bad2e className="fa-group">
                                                                                            <path data-v-7f8bad2e
                                                                                                fill="currentColor"
                                                                                                d="M323.56 51.2a597.38 597.38 0 0 0-56.22 60C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 210 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-52-163.14-124.44-230.4zm-1.12 366.87A165.81 165.81 0 0 1 226.86 448c-43.93 0-84.43-14.89-114.06-41.92a146.18 146.18 0 0 1-35.88-50.39C68.35 335.82 64 314 64 290.75c0-59.43 42.8-106.39 104.3-180.12 30 34.59 18.49 19.78 100.7 124.59l62-70.74c24.32 40.25 27.78 45.59 34.84 59.1a157.93 157.93 0 0 1 15 104.62c-7.49 36.85-28.24 68.8-58.4 89.87z"
                                                                                                className="fa-secondary">
                                                                                            </path>
                                                                                            <path data-v-7f8bad2e
                                                                                                fill="currentColor"
                                                                                                d="M304.09 391.85A134.39 134.39 0 0 1 226.86 416C154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 8 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 20 27.35 52.19 15.81 119-33.43 153.42z"
                                                                                                className="fa-primary">
                                                                                            </path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </NavLink>
                                                                </Col>
                                                                <Col md={6} className="pb-3">
                                                                <NavLink
                                                                    strict
                                                                    exact
                                                                    to={`${process.env.PUBLIC_URL}/foodlist`}
                                                                    key={`${process.env.PUBLIC_URL}/foodlist`}>
                                                                    <div className="flex xs1">
                                                                        <div className="dashboard-action-button k-card raised">
                                                                            <div className="k-card__content">
                                                                                <div className="pica grow">
                                                                                    View<br />
                                                                                    Foods
                                                                                </div>
                                                                                <div
                                                                                    className="colorOne icon round-icon d-inline-flex align-center justify-center">
                                                                                    <svg data-v-7f8bad2e aria-hidden="true"
                                                                                        focusable="false" data-prefix="fad"
                                                                                        data-icon="utensils-alt" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 576 512"
                                                                                        className="svg-inline--fa fa-utensils-alt fa-w-18 k-icon mars noColor--text">
                                                                                        <g data-v-7f8bad2e className="fa-group">
                                                                                            <path data-v-7f8bad2e
                                                                                                fill="currentColor"
                                                                                                d="M74.8 424a32 32 0 0 0-1.4 46.6l32 32a32 32 0 0 0 46.6-1.4l117.5-132.7-56.6-66.8zM546.5 94.82L452.7 176c-1.5 1.4-5.9-3-4.6-4.6l78.8-96.9c12.4-15.3-10.4-37.8-25.5-25.5l-96.9 78.8c-1.7 1.4-6-3.1-4.7-4.6L481 29.42c12.8-14.7-8.7-38-24.8-26.2-3.9 2.8-76.9 54.5-98.7 76.2-33.3 33.3-37.5 72.1-16.1 108.4-30.4 26.9-19.6 17.4-48.4 42.9l54 50.1c26.5-30 14.4-16.2 41-46.3 35 20.7 74.3 18.1 108.5-16.2 21.7-21.7 73.4-94.6 76.2-98.6 11.8-16.2-11.5-37.6-26.2-24.9z"
                                                                                                className="fa-secondary">
                                                                                            </path>
                                                                                            <path data-v-7f8bad2e
                                                                                                fill="currentColor"
                                                                                                d="M501.7 424.42a32 32 0 0 1 .8 46.1l-32 32a32.09 32.09 0 0 1-46-.7C405.4 479.22 223.9 265.32 216 256 56 256 0 165.92 0 32.12c0-27.9 33.3-42.5 53.8-23.5z"
                                                                                                className="fa-primary">
                                                                                            </path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </NavLink>
                                                                </Col>


                                                            </Row>
                                                        </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className="flex xs12 md6 order-xs3 order-md2">
                                        <div data-v-81efa066 className="VueCarousel">
                                        <div className="VueCarousel-wrapper">
                                            <div className="VueCarousel-inner"
                                                style={{
                                                    "transform": "translate(-1576px, 0px)",
                                                    "transition": "transform 0.5s ease 0s",
                                                    "flex-basis": "788px",
                                                    "visibility": "visible",
                                                    "height": "auto"
                                                }}>
                                                <div data-v-81efa066 tabindex="-1" role="tabpanel"
                                                    className="VueCarousel-slide" aria-hidden="true">
                                                    <div data-v-81efa066 className="cta-container center-cta"
                                                        style={{
                                                            "background": "url(&quot;/3/img/banner-bg.c88963b3.png&quot;) right center / cover no-repeat rgb(255, 255, 255)",
                                                            "height": "100%"
                                                        }}>
                                                        <div className="background-image hidden-xs-only">
                                                        </div>
                                                        <div className="background-image hidden-sm-and-up"
                                                            style={{
                                                                "background-image": "url(&quot;/3/img/banner-bg.0df7fa89.png&quot)",
                                                                "background-repeat": "no-repeat",
                                                                "background-position": "center center ",
                                                                "background-size": "cover"
                                                            }}>
                                                        </div>
                                                        <div className="layout main-content pa-saturn row wrap">
                                                                <div className="">

                                                                    <div className="cta-content">
                                                                    <div className="content-container mb-earth">
                                                                            <p className="mb-moon great-primer">
                                                                            </p>
                                                                        </div>
                                                                        <button to="[object Object]"
                                                                        className="k-button no-shadow medium noColor"
                                                                        style={{
                                                                            "background-color": "rgb(255, 6, 102)",
                                                                            "color": "rgb(255, 255, 255)",
                                                                            "font-weight": "bold"
                                                                        }}>
                                                                        <div className="k-button__content"
                                                                            style={{ "opacity": "1" }}>
                                                                            START EARNING
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="flex text-md-right d-flex align-center xs6 hidden-xs-only"
                                                                style={{ "justify-content": "flex-end" }}>
                                                                <span>
                                                                    <img style={{
                                                                        "max-width": "100%",
                                                                        "height": "auto"
                                                                    }} />
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="flex content-center-container text-xs-center xs12 hidden-sm-and-up">
                                                                <img src="/3/img/headline-subhead.a1487a86.png"
                                                                    style={{
                                                                        "max-width": "100%",
                                                                        "height": "auto"
                                                                    }} />
                                                                <div className="cta-content">
                                                                    <button to="[object Object]"
                                                                        className="k-button no-shadow medium noColor"
                                                                        style={{
                                                                            "background-color": "rgb(255, 6, 102)",
                                                                            "color": "rgb(255, 255, 255)",
                                                                            "font-weight": "bold"
                                                                        }}>
                                                                        <div className="k-button__content"
                                                                            style={{ "opacity": "1" }}>
                                                                            START EARNING
                                                                        </div>
                                                                    </button>
                                                                    <div
                                                                        className="flex tw-flex tw-justify-center text-xs-center pt-earth xs12 hidden-sm-and-up">
                                                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACxSURBVHgB7cABAQAAAIIg/69uSFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8GceYAATcTxP0AAAAASUVORK5CYII="
                                                                            style={{
                                                                                "max-width": "100%",
                                                                                "height": "auto"
                                                                            }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-81efa066 tabindex="-1" role="tabpanel"
                                                    className="VueCarousel-slide" aria-hidden="true">
                                                    <div data-v-81efa066 className="cta-container center-cta"
                                                        style={{ "background": "rgb(255, 255, 255)" }}>
                                                        <div className="background-image hidden-xs-only"
                                                            style={{
                                                                "background-image": "url(&quot;/3/img/foods.ea4e1e32.png&quot)",
                                                                "background-repeat": "no-repeat",
                                                                "background-position": "right center",
                                                                "background-size": "contain"
                                                            }}>
                                                        </div>
                                                        <div className="background-image hidden-sm-and-up"
                                                            style={{
                                                                "background-image": "url(&quot;/3/img/mfpMobile.13e7b8ef.png&quot;)",
                                                                "background-repeat": "no-repeat",
                                                                "background-position": "center bottom",
                                                                "background-size": "contain"
                                                            }}>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div data-v-81efa066 tabindex="-1" role="tabpanel"
                                                    className="VueCarousel-slide VueCarousel-slide-active VueCarousel-slide-center">
                                                    <div data-v-81efa066 className="cta-container center-cta"
                                                        style={{ "background": "#fff" }}>

                                                            <div className="layout main-content pa-saturn row wrap d-block">
                                                                <div className="flex tw-flex flex-column xs6 ">
                                                                    <LineDemo></LineDemo>
                                                            </div>
                                                            <div className="flex text-md-right d-flex align-center xs6 hidden-xs-only"
                                                                style={{ "justify-content": "flex-end" }}>
                                                                <span>
                                                                    <img
                                                                        style={{
                                                                            "max-width": "100%",
                                                                            "height": "auto"
                                                                        }} />
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="flex content-center-container text-xs-center xs12 hidden-sm-and-up">
                                                                <img src="/3/img/title_blueprint.7debcb7e.png"
                                                                    style={{
                                                                        "max-width": "100%",
                                                                        "height": "auto"
                                                                    }} />
                                                                    <div className="cta-content">
                                                                    <div className="content-container mb-earth">
                                                                        <p className="mb-earth great-primer white--text">An
                                                                            in-depth look at topics designed to help
                                                                                take your business to the next level</p>
                                                                        </div>
                                                                        <button to="[object Object]"
                                                                        className="k-button no-shadow medium noColor"
                                                                        style={{
                                                                            "background-color": "rgb(255, 247, 53)",
                                                                            "color": "rgb(0, 0, 0)"
                                                                        }}>
                                                                        <div className="k-button__content"
                                                                            style={{
                                                                                "opacity": 1
                                                                            }}>
                                                                            WATCH NOW
                                                                        </div>
                                                                    </button>
                                                                    <div
                                                                        className="flex tw-flex tw-justify-center text-xs-center pt-earth xs12 hidden-sm-and-up">
                                                                        <img style={{
                                                                            "max-width": "100%",
                                                                            "height": "auto"
                                                                        }} />
                                                                    </div>
                                                                </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-438fd353 className="VueCarousel-pagination" >
                                        </div>
                                    </div>
                                    <div>

                                        <div className="k-empty-state__block-box py-sun">
                                            <div className="k-empty-state__block-box--icon mb-mars has-fa icon-shadow"><svg
                                                data-v-7f8bad2e aria-hidden="true" focusable="false"
                                                data-prefix="fad" data-icon="tachometer-alt" role="img"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                                className="svg-inline--fa fa-tachometer-alt fa-w-18 k-icon mars noColor--text">
                                                <g data-v-7f8bad2e className="fa-group">
                                                    <path data-v-7f8bad2e fill="currentColor"
                                                        d="M288 32C128.94 32 0 160.94 0 320a286.5 286.5 0 0 0 39.06 144.8c5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2A286.5 286.5 0 0 0 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67L305.65 154c-5.13 3.49-11 6-17.64 6a32 32 0 0 1 0-64zM96 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-160a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm246.77-72.41l-61.33 184A62.8 62.8 0 0 1 343.12 416H232.88a63.34 63.34 0 0 1 51-95.59l61.34-184a24 24 0 0 1 45.53 15.19zm14.66 57.2L421 162.24a31.54 31.54 0 0 1 11-2.24 32 32 0 0 1 0 64c-11.38 0-20.89-6.27-26.57-15.21zM480 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                                                        className="fa-secondary">
                                                    </path>
                                                    <path data-v-7f8bad2e fill="currentColor"
                                                        d="M283.9 320.41l61.34-184a24 24 0 0 1 45.53 15.19l-61.33 184a62.8 62.8 0 0 1 13.68 80.4H232.88a63.34 63.34 0 0 1 51-95.59z"
                                                        className="fa-primary">
                                                    </path>
                                                </g>
                                            </svg></div>
                                            <div className="k-empty-state__block-box--text">
                                                <p className="paragon grey-one--text mb-moon">No
                                                    Activities yet</p>
                                                <p className="body-copy grey-one--text">
                                                    You currently haven't had any activity
                                                </p>
                                            </div>
                                        </div>
                                        <div data-v-644ea9c9 className="infinite-loading-container">
                                            <div data-v-644ea9c9 className="infinite-status-prompt"
                                                style={{ "display": "none" }}>
                                                <div data-v-1faf422c data-v-46b20d22 data-v-644ea9c9
                                                    className="pa-mars k-loading colorOne--text" data-v-3b32196a>
                                                    {/* <svg
                                                        data-v-1faf422c xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                        x="0px"
                                                        y="0px"
                                                        viewBox="0 0 30 30"
                                                        style={{
                                                            "width": "36px",
                                                            "height": "36px",
                                                          "fill": "currentcolor"}}>
                                                        <rect data-v-1faf422c x="0" y="0" width="4" height="10"
                                                            style={{"animation-duration": "0.4s", "animation-delay": "-0.266667s"}}>
                                                        </rect>
                                                        <rect data-v-1faf422c x="10" y="0" width="4" height="10"
                                                            style={{"animation-duration": "0.4s"; "animation-delay": "-0.133333s"}}>
                                                        </rect>
                                                        <rect data-v-1faf422c x="20" y="0" width="4" height="10"
                                                            style={{"animation-duration": "0.4s", "animation-delay": "0s"}}>
                                                        </rect>
                                                    </svg> */}
                                                </div>
                                            </div>
                                            <div data-v-644ea9c9 className="infinite-status-prompt"
                                                style={{
                                                    "color": "rgb(102, 102, 102)",
                                                    "font-size": "14px",
                                                    "padding": "10px 0px"
                                                }}>
                                            </div>
                                            <div data-v-644ea9c9 className="infinite-status-prompt"
                                                style={{
                                                    "color": "rgb(102, 102, 102)",
                                                    "font-size": "14px",
                                                    "padding": "10px 0px",
                                                    "display": "none"
                                                }}>
                                            </div>
                                            <div data-v-644ea9c9 className="infinite-status-prompt"
                                                style={{
                                                    "color": "rgb(102, 102, 102)",
                                                    "font-size": "14px",
                                                    "padding": "10px 0px",
                                                    "display": "none"
                                                }}>

                                                <br data-v-644ea9c9 /> <button data-v-644ea9c9
                                                    className="btn-try-infinite">Retry</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="flex xs12 md3 order-xs2 order-md3">
                                    <div data-v-525699db className="sticky-wrapper">
                                            <div data-v-525699db className="sticky-content"
                                                style={{ "top": "96px" }}>
                                                <div data-v-525699db className="layout row wrap cols-1">
                                                <div data-v-525699db className="flex xs1">
                                                    <div className="dashboard-programs-ending k-card raised"
                                                        data-v-525699db>
                                                            <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                                <div className="k-row thin">
                                                                    <div className="k-row__slot--middle">
                                                                        <span
                                                                    className="k-title">
                                                                    <div className="d-flex pica">
                                                                                RECENT ACTIVITIES
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                    <div className="k-row__slot--right">
                                                                        <button
                                                                    to="[object Object]"
                                                                    className="k-button flat icon small black--text">
                                                                    <div className="k-button__content"
                                                                        style={{ "opacity": 1 }}> <svg data-v-7f8bad2e
                                                                            aria-hidden="true" focusable="false"
                                                                            data-prefix="far"
                                                                            data-icon="chevron-right" role="img"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 256 512"
                                                                            className="svg-inline--fa fa-chevron-right fa-w-8 k-icon mars black--text">
                                                                            <path data-v-7f8bad2e
                                                                                fill="currentColor"
                                                                                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                                                                                        className>
                                                                                    </path>
                                                                                </svg>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                        <div>
                                                            <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                                <div className="k-row thin">
                                                                    <div data-v-36bd4c01
                                                                        id="k-row-6061e6f3-6285-4347-a593-3019630c00a4"
                                                                        className="px-moon account-swapper-item k-row active">
                                                                        <div className="k-row__slot--left">
                                                                            <div data-v-23bc496c size="40px"
                                                                                className="k-avatar colorOneLight"
                                                                                style={{
                                                                                    "height": "40px",
                                                                                    "width": "40px"
                                                                                }}>
                                                                                <span data-v-23bc496c
                                                                                    className="k-avatar__initials"
                                                                                    style={{
                                                                                        "font-size": "16px",
                                                                                        "width": "40px"
                                                                                    }}>kd</span>

                                                                            </div>
                                                                        </div>
                                                                            <div className="k-row__slot--middle">
                                                                                <span
                                                                            className="k-title">
                                                                            <div className="d-flex pica">
                                                                                <div className="layout column">
                                                                                    <div
                                                                                        className="flex grey-one--text xs12 long-primer">
                                                                                        11 minutes ago
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                                <div className="k-row thin">
                                                                        <div className="k-row__slot--middle">
                                                                            <span
                                                                        className="k-title">
                                                                        <div className="d-flex pica">
                                                                                    <div className>
                                                                                <p
                                                                                            className="colorone--text tw-text-xs">
                                                                                    Tamara Shanelle Makalanda completed
                                                                                    Day 3 and rated it as RPE 6/10
                                                                                    (somewhat hard). Tamara Shanelle set
                                                                                    1 new personal best.
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            </div>
                                                        <div>
                                                            <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                                <div className="k-row thin">
                                                                    <div data-v-36bd4c01
                                                                        id="k-row-6061e6f3-6285-4347-a593-3019630c00a4"
                                                                        className="px-moon account-swapper-item k-row active">
                                                                        <div className="k-row__slot--left">
                                                                            <div data-v-23bc496c size="40px"
                                                                                className="k-avatar colorOneLight"
                                                                                style={{
                                                                                    "height": "40px",
                                                                                    "width": "40px"
                                                                                }}>
                                                                                <span data-v-23bc496c
                                                                                    className="k-avatar__initials"
                                                                                    style={{
                                                                                        "font-size": "16px",
                                                                                        "width": "40px"
                                                                                        }}>kd</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="k-row__slot--middle"><span
                                                                            className="k-title">
                                                                            <div className="d-flex pica">
                                                                                <div className="layout column">
                                                                                    <div
                                                                                        className="flex grey-one--text xs12 long-primer">
                                                                                            11 minutes ago
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </span>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                                    <div className="k-row thin">
                                                                        <div className="k-row__slot--middle">
                                                                            <span
                                                                        className="k-title">
                                                                        <div className="d-flex pica">
                                                                                    <div className>
                                                                                        <p className="colorone--text tw-text-xs">
                                                                                    Sanduni Nilusha Ubeyratne weighed in at 65.4 kg.
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </span>
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
                            </div>
                </div >
                    </div >
                </div >

            </div >
            <div tabindex="0" className="vuedals" style={{ "display": "none" }}></div>
            <div data-v-2211593a className="__cov-progress"
                style={{
                    "background-color": "rgb(66, 90, 247)",
                    "opacity": 0,
                    "position": "fixed",
                    "top": "0px",
                    "left": "0px",
                    "width": "0%",
                    "height": "2px",
                    "transition": "opacity 0.6s ease 0s"
                }}>
            </div>
            <div data-v-3bd2e235 className="notify notify-bottom-full"
                style={{ "width": "auto" }}>
                <div data-v-3bd2e235></div>
            </div>
        </div >
    )
}

export default Dash;