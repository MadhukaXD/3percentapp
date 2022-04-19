import React, { useState, useEffect } from 'react'
import axios from "axios"
import Header from './Header';
import { NavLink, Link, useLocation } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import LineDemo from "./ChartMain";


function ClientDashboard() {
    return (
        <div data-app="true" className="k-app light">
            <div className="k-layout-main__wrapper" >
                <Header />
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
                                                                    <div data-v-c9edefc2="" className="k-image__sizer">
                                                                        <img
                                                                            style={{
                                                                                "width": "70px",
                                                                                "height": "70px",
                                                                                "border-radius": "50px",
                                                                                "margin": "auto",
                                                                                "margin-bottom": "20px"
                                                                            }}
                                                                            src="/images/profileimage.png" />
                                                                    </div>
                                                                    <div className="k-row__slot--middle">
                                                                        <div data-v-12e8f0c3="" className="layout row wrap"
                                                                            style={{
                                                                                "margin-top": "40px"
                                                                            }}
                                                                        >

                                                                            <div data-v-12e8f0c3=""
                                                                                className="flex xs12 sm8 md6 lg4 xs4 d-flex align-center pica"
                                                                                style={{
                                                                                    "margin-left": "20px"
                                                                                }}>
                                                                                <div
                                                                                    className="colorOne icon round-icon d-inline-flex align-center justify-center">
                                                                                    <svg data-v-7f8bad2e aria-hidden="true"
                                                                                        focusable="false" data-prefix="fad"
                                                                                        data-icon="comment-alt-dots" role="img"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 512 512"
                                                                                        className="svg-inline--fa fa-comment-alt-dots fa-w-16 k-icon mars noColor--text">
                                                                                        <g data-v-7f8bad2e className="fa-group">
                                                                                            <path data-v-7f8bad2e
                                                                                                fill="currentColor"
                                                                                                d="M448 0H64A64.06 64.06 0 0 0 0 64v288a64.06 64.06 0 0 0 64 64h96v84a12 12 0 0 0 19.1 9.7L304 416h144a64.06 64.06 0 0 0 64-64V64a64.06 64.06 0 0 0-64-64zM128 240a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm128 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm128 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                                                                                                className="fa-secondary"></path>
                                                                                            <path data-v-7f8bad2e
                                                                                                fill="currentColor"
                                                                                                d="M384 176a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm-128 0a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm-128 0a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
                                                                                                className="fa-primary"></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </div>
                                                                                Message
                                                                            </div>

                                                                            <div data-v-12e8f0c3=""
                                                                                className="flex xs12 sm8 md6 lg4 xs4 d-flex align-center pica"
                                                                                style={{
                                                                                    "margin-left": "60px"
                                                                                }}
                                                                            >
                                                                                <div className="colorOne icon round-icon d-inline-flex align-center justify-center" >
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
                                                                                Profile
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                {/* Selection centre */}
                                                <div className="flex xs1">
                                                    <div className="dashboard-action-button k-card raised"
                                                        style={{
                                                            "width": "auto",
                                                            "height": "auto",
                                                            "padding-left": "40px",
                                                            "padding-right": "40px",
                                                        }}>
                                                        <div className="col">
                                                            <NavLink
                                                                strict
                                                                exact
                                                                to={`${process.env.PUBLIC_URL}/clientdashboard`}
                                                                key={`${process.env.PUBLIC_URL}/clientdashboard`}
                                                            >
                                                                <div className="k-card__content">
                                                                    <div className="pica grow">
                                                                        Dashboard
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
                                                            </NavLink>

                                                            <hr />
                                                            <NavLink
                                                                strict
                                                                exact
                                                                to={`${process.env.PUBLIC_URL}/clienttraining`}
                                                                key={`${process.env.PUBLIC_URL}/clienttraining`}
                                                            >
                                                                <div className="k-card__content">
                                                                    <div className="pica grow">
                                                                        Training
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
                                                            </NavLink>

                                                            <hr />

                                                            <NavLink
                                                                strict
                                                                exact
                                                                to={`${process.env.PUBLIC_URL}/clientnutrition`}
                                                                key={`${process.env.PUBLIC_URL}/clientnutrition`}
                                                            >
                                                                <div className="k-card__content">
                                                                    <div className="pica grow">
                                                                        Nutrition
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
                                                            </NavLink>
                                                            <hr />

                                                            <NavLink
                                                                strict
                                                                exact
                                                                to={`${process.env.PUBLIC_URL}/clientphotos`}
                                                                key={`${process.env.PUBLIC_URL}/clientphotos`}
                                                            >
                                                                <div className="k-card__content">
                                                                    <div className="pica grow">
                                                                        Progress Photos
                                                                    </div>
                                                                    <div
                                                                        className="colorOne icon round-icon d-inline-flex align-center justify-center">
                                                                        <svg data-v-7f8bad2e aria-hidden="true"
                                                                            focusable="false" data-prefix="fad"
                                                                            data-icon="file" role="img"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 32"
                                                                            className="svg-inline--fa fa-file fa-w-12 k-icon mars noColor--text">
                                                                            <g data-v-7f8bad2e className="fa-group">
                                                                                <path data-v-7f8bad2e
                                                                                    fill="currentColor"
                                                                                    d="M13.9999 8.49993V-7.15825e-05H1.49988C1.30339 -0.000564657 1.10873 0.0376489 0.927006 0.112387C0.745284 0.187126 0.580062 0.296925 0.440774 0.435517C0.301486 0.574108 0.19086 0.738778 0.115212 0.920123C0.0395633 1.10147 0.000374481 1.29594 -0.000117359 1.49243V30.4999C-0.000610433 30.6964 0.0376032 30.8911 0.112342 31.0728C0.18708 31.2545 0.29688 31.4197 0.435471 31.559C0.574063 31.6983 0.738732 31.8089 0.920077 31.8846C1.10142 31.9602 1.29589 31.9994 1.49238 31.9999H22.4999C22.6964 32.0004 22.891 31.9622 23.0728 31.8875C23.2545 31.8127 23.4197 31.7029 23.559 31.5643C23.6983 31.4257 23.8089 31.2611 23.8846 31.0797C23.9602 30.8984 23.9994 30.7039 23.9999 30.5074V9.99993H15.4999C15.1024 9.99877 14.7216 9.84037 14.4405 9.55931C14.1594 9.27826 14.001 8.8974 13.9999 8.49993Z"
                                                                                    className="fa-secondary">
                                                                                </path>
                                                                                <path data-v-7f8bad2e
                                                                                    fill="currentColor"
                                                                                    d="M23.5625 6.56249L17.4438 0.437489C17.3041 0.298314 17.1384 0.188038 16.9561 0.112968C16.7737 0.0378972 16.5784 -0.000494239 16.3813 -1.07483e-05H16V7.99999H24V7.61874C24 7.42258 23.9614 7.22833 23.8863 7.0471C23.8112 6.86587 23.7012 6.7012 23.5625 6.56249Z"
                                                                                    className="fa-primary">
                                                                                </path>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>



                                                {/* Graph */}
                                                <div data-v-5478fe30 className="flex xs1">
                                                    <div data-v-5478fe30 className="colorTwo pointer k-card raised" style={{
                                                        "width": "295px",
                                                        "height": "171px",
                                                    }}>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Middle section */}
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

                                            </div>
                                            <div data-v-438fd353 className="VueCarousel-pagination" >
                                            </div>
                                        </div>
                                        <div>
                                            {/* client details section */}
                                            <div data-v-5478fe30 className="flex xs1">
                                                <div data-v-5478fe30 className="colorTwo pointer k-card raised" style={{
                                                    "width": "615px",
                                                    "height": "596px",
                                                }}>
                                                    <p className="colorOneText"
                                                        style={{
                                                            "margin-top": "-8px",
                                                            "margin-bottom": "5px",
                                                        }}
                                                    >Dashboard</p>
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
                                                            <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                                <div className="k-row thin">
                                                                    <div className="k-row__slot--middle">
                                                                        <span
                                                                            className="k-title">
                                                                            <div className="d-flex pica">
                                                                                <div className>
                                                                                    <p
                                                                                        className="colorone--text tw-text-xs">
                                                                                        Rachel Anderson completed Day 3 and rated it as RPE 6/10 (somewhat hard). Tamara Shanelle set 1 new personal best.
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
                                                            <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                                <div className="k-row thin">
                                                                    <div className="k-row__slot--middle">
                                                                        <span
                                                                            className="k-title">
                                                                            <div className="d-flex pica">
                                                                                <div className>
                                                                                    <p className="colorone--text tw-text-xs">
                                                                                        Rachel Anderson weighed in at 65.4 kg.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
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
                                                            <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                                <div className="k-row thin">
                                                                    <div className="k-row__slot--middle">
                                                                        <span
                                                                            className="k-title">
                                                                            <div className="d-flex pica">
                                                                                <div className>
                                                                                    <p className="colorone--text tw-text-xs">
                                                                                        Rachel Anderson completed Day 2, rated it as RPE 6/10 (somewhat hard) and added 1 comment.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
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
                                                            <div className="k-card__toolbar double-pica k-card__toolbar double-pica">
                                                                <div className="k-row thin">
                                                                    <div className="k-row__slot--middle">
                                                                        <span
                                                                            className="k-title">
                                                                            <div className="d-flex pica">
                                                                                <div className>
                                                                                    <p className="colorone--text tw-text-xs">
                                                                                        Rachel Anderson just did their 25th workout! Nuwan completed Day 2 - Home Workout and rated it as RPE 7/10 (hard).
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
    )
}


export default ClientDashboard
