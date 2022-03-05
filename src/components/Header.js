import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactNotifications, Store } from 'react-notifications-component'


class Header extends Component {
    state = { isActive: false, isActiveProfile: false };

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
        this.setState({ isActiveProfile: false });

    };
    handleToggleProfile = () => {
        this.setState({ isActiveProfile: !this.state.isActiveProfile });
        this.setState({ isActive: false });

    };
    render() {
        const isActive = this.state.isActive;
        const isActiveProfile = this.state.isActiveProfile;

        const onSubmit = (e) => {
            e.preventDefault();
            window.localStorage.clear();
        };

    return (
        <div
            className="menu-bar--sticky-top"
            style={{ "--menubar-height": "80px" }}
        >
            
            <div className="menu-bar">
                <div data-v-75a3e7a8 className="k-top-bar is-primary has-right">
                    <div data-v-75a3e7a8 className="k-top-bar__container">
                        <div data-v-75a3e7a8 className="k-top-bar__slot--middle">
                            <a
                                data-v-75a3e7a8
                                className="router-link-exact-active router-link-active canon"
                                aria-current="page"
                            >
                                <div className="menu-bar__logo-container">
                                    <NavLink
                                        strict
                                        exact
                                        to={`${process.env.PUBLIC_URL}/dash`}
                                        key={`${process.env.PUBLIC_URL}/dash`}
                                    >
                                        <div data-v-711ca0e8 role="img" className="k-logo-block">
                                            <div
                                                data-v-711ca0e8
                                                className="k-logo-block__image"
                                                style={{
                                                    "backgroundImage": "url(/images/logo3.png)",
                                                }}
                                            ></div>
                                        </div>
                                    </NavLink>
                                </div>
                            </a>
                        </div>
                        <div data-v-75a3e7a8 className="k-top-bar__slot--right">
                            <div data-v-75a3e7a8 className="d-inline-flex align-center">
                                <div
                                    data-v-31b121ea
                                    className="chip-glow k-chip colorOne"
                                    data-v-75a3e7a8
                                    onClick={this.handleToggle}
                                >
                                    <div data-v-31b121ea className="k-chip__content">
                                        ADD NEW
                                        <svg
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            className="ml-moon svg-inline--fa fa-star fa-w-18 k-icon mars noColor--text"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 1L5 5L9 1"
                                                stroke="#FF6600"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className={isActive ? "active dropdownsec k-card raised" : 'dropdownsec k-card raised'}>
                                        {/* <NavLink
                                            strict
                                            exact
                                            to={`${process.env.PUBLIC_URL}/createclient`}
                                            key={`${process.env.PUBLIC_URL}/createclient`}
                                        >
                                            <svg data-v-7f8bad2e="true" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="id-card-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-id-card-alt fa-w-18 k-icon mars noColor--text"><g data-v-7f8bad2e="true" className="fa-group"><path data-v-7f8bad2e="true" fill="currentColor" d="M528 64H352v64h16a16 16 0 0 1 0 32H208a16 16 0 0 1 0-32h16V64H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h480a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zM288 224a64 64 0 1 1-64 64 64 64 0 0 1 64-64zm93.3 224H194.7c-10.4 0-18.8-10-15.6-19.8A64 64 0 0 1 240 384h8.2a103 103 0 0 0 79.6 0h8.2a64.09 64.09 0 0 1 60.9 44.2c3.2 9.8-5.2 19.8-15.6 19.8z" className="fa-secondary"></path><path data-v-7f8bad2e="true" fill="currentColor" d="M352 32a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v96h128zm-64 320a64 64 0 1 0-64-64 64 64 0 0 0 64 64zm108.9 76.2A64.09 64.09 0 0 0 336 384h-8.2a103 103 0 0 1-79.6 0H240a64 64 0 0 0-60.9 44.2c-3.2 9.8 5.2 19.8 15.6 19.8h186.6c10.4 0 18.8-10 15.6-19.8z" className="fa-primary"></path></g></svg>
                                            &nbsp; Client
                                        </NavLink> */}

                                        <NavLink
                                            strict
                                            exact
                                            to={`${process.env.PUBLIC_URL}/addexercises`}
                                            key={`${process.env.PUBLIC_URL}/addexercises`}
                                        >
                                            <svg data-v-7f8bad2e="true" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="fire-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-fire-alt fa-w-14 k-icon mars noColor--text"><g data-v-7f8bad2e="true" className="fa-group"><path data-v-7f8bad2e="true" fill="currentColor" d="M323.56 51.2a597.38 597.38 0 0 0-56.22 60C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 210 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-52-163.14-124.44-230.4zm-1.12 366.87A165.81 165.81 0 0 1 226.86 448c-43.93 0-84.43-14.89-114.06-41.92a146.18 146.18 0 0 1-35.88-50.39C68.35 335.82 64 314 64 290.75c0-59.43 42.8-106.39 104.3-180.12 30 34.59 18.49 19.78 100.7 124.59l62-70.74c24.32 40.25 27.78 45.59 34.84 59.1a157.93 157.93 0 0 1 15 104.62c-7.49 36.85-28.24 68.8-58.4 89.87z" className="fa-secondary"></path><path data-v-7f8bad2e="true" fill="currentColor" d="M304.09 391.85A134.39 134.39 0 0 1 226.86 416C154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 8 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 20 27.35 52.19 15.81 119-33.43 153.42z" className="fa-primary"></path></g></svg> &nbsp;Exercises
                                        </NavLink>

                                        <NavLink
                                            strict
                                            exact
                                            to={`${process.env.PUBLIC_URL}/addfoods`}
                                            key={`${process.env.PUBLIC_URL}/addfoods`}
                                        >
                                            <svg data-v-7f8bad2e="true" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="utensils-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-utensils-alt fa-w-18 k-icon mars noColor--text"><g data-v-7f8bad2e="true" className="fa-group"><path data-v-7f8bad2e="true" fill="currentColor" d="M74.8 424a32 32 0 0 0-1.4 46.6l32 32a32 32 0 0 0 46.6-1.4l117.5-132.7-56.6-66.8zM546.5 94.82L452.7 176c-1.5 1.4-5.9-3-4.6-4.6l78.8-96.9c12.4-15.3-10.4-37.8-25.5-25.5l-96.9 78.8c-1.7 1.4-6-3.1-4.7-4.6L481 29.42c12.8-14.7-8.7-38-24.8-26.2-3.9 2.8-76.9 54.5-98.7 76.2-33.3 33.3-37.5 72.1-16.1 108.4-30.4 26.9-19.6 17.4-48.4 42.9l54 50.1c26.5-30 14.4-16.2 41-46.3 35 20.7 74.3 18.1 108.5-16.2 21.7-21.7 73.4-94.6 76.2-98.6 11.8-16.2-11.5-37.6-26.2-24.9z" className="fa-secondary"></path><path data-v-7f8bad2e="true" fill="currentColor" d="M501.7 424.42a32 32 0 0 1 .8 46.1l-32 32a32.09 32.09 0 0 1-46-.7C405.4 479.22 223.9 265.32 216 256 56 256 0 165.92 0 32.12c0-27.9 33.3-42.5 53.8-23.5z" className="fa-primary"></path></g></svg> &nbsp;
                                            Food
                                        </NavLink>

                                        {/* <NavLink
                                            strict
                                            exact
                                            to={`${process.env.PUBLIC_URL}/createworkouts`}
                                            key={`${process.env.PUBLIC_URL}/createworkouts`}
                                        >
                                            <svg data-v-7f8bad2e="true" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="fire-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-fire-alt fa-w-14 k-icon mars noColor--text"><g data-v-7f8bad2e="true" className="fa-group"><path data-v-7f8bad2e="true" fill="currentColor" d="M323.56 51.2a597.38 597.38 0 0 0-56.22 60C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 210 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-52-163.14-124.44-230.4zm-1.12 366.87A165.81 165.81 0 0 1 226.86 448c-43.93 0-84.43-14.89-114.06-41.92a146.18 146.18 0 0 1-35.88-50.39C68.35 335.82 64 314 64 290.75c0-59.43 42.8-106.39 104.3-180.12 30 34.59 18.49 19.78 100.7 124.59l62-70.74c24.32 40.25 27.78 45.59 34.84 59.1a157.93 157.93 0 0 1 15 104.62c-7.49 36.85-28.24 68.8-58.4 89.87z" className="fa-secondary"></path><path data-v-7f8bad2e="true" fill="currentColor" d="M304.09 391.85A134.39 134.39 0 0 1 226.86 416C154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 8 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 20 27.35 52.19 15.81 119-33.43 153.42z" className="fa-primary"></path></g></svg> &nbsp;
                                            Workout
                                        </NavLink> */}


                                    </div>
                                </div>
                                <div className="rr-icon white--text" data-v-75a3e7a8>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 72 72"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M58.6125 36.8875C59.7125 37.2875 60.9625 37.7375 61.9125 37.875C64.0625 38.225 65.825 37.8125 65.9673 36.9644L65.9675 36.9629C66.0686 36.37 66.129 36.0162 62.1748 34.8844L61.3625 34.65L61.3453 34.6449C59.0573 33.9661 53.0524 32.1845 54.0125 26.0162C54.6375 23.0312 56.85 21.0287 60.005 20.315V19C60.005 17.3438 61.3463 16 63.0025 16C64.6588 16 66.0025 17.3438 66.0025 19V20.4062C66.74 20.5766 67.5298 20.793 68.48 21.1214C70.0464 21.6639 70.8738 23.3716 70.335 24.9376C69.7963 26.5036 68.0863 27.3278 66.52 26.7926C65.485 26.4333 64.681 26.2125 64.0638 26.1149C61.95 25.7812 60.182 26.193 60.0375 27.0387C59.95 27.5525 59.7625 27.955 63.05 28.8875L63.7119 29.1163C66.9031 30.0275 72.8504 31.7288 71.7644 37.985C71.3619 40.9688 69.1606 42.9846 66.0019 43.7V45C66.0019 46.6562 64.6581 48 63.0019 48C61.3456 48 60.0044 46.6562 60.0044 45V43.4635C58.8156 43.1864 57.6414 42.8071 56.5806 42.4245L55.9988 42.2175C54.4401 41.6625 53.625 39.8375 54.175 38.3875C54.725 36.9375 56.4375 36.0125 58 36.675L58.6125 36.8875Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M28 36C36.8375 36 44 28.8363 44 20C44 11.1637 36.8375 4 28 4C19.1625 4 12 11.1637 12 20C12 28.8363 19.1625 36 28 36ZM34.3375 42H21.6625C9.70125 42 0 51.7 0 63.6625C0 66.055 1.94 67.9963 4.3325 67.9963H51.67C54.0625 68 56 66.0625 56 63.6625C56 51.7 46.3 42 34.3375 42Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                                <div data-v-75a3e7a8>
                                    <div
                                        data-v-43a7bf8a
                                        data-v-36bd4c01
                                        className="black--text k-menu-flyout"
                                    >
                                        <div data-v-43a7bf8a className="k-menu-flyout__activator">
                                            <button
                                                data-v-36bd4c01
                                                to="[object Object]"
                                                className="user-avatar-button k-button flat icon-style medium"
                                                data-v-43a7bf8a
                                            >
                                                <div
                                                    className="k-button__content"
                                                    style={{ opacity: 1 }}
                                                    onClick={this.handleToggleProfile}
                                                >
                                                    <div
                                                        data-v-23bc496c
                                                        data-v-36bd4c01
                                                        size="24px"
                                                        className="k-avatar white"
                                                        style={{
                                                            height: "24px",
                                                            width: "24px",
                                                        }}
                                                    >
                                                        <span
                                                            data-v-23bc496c
                                                            className="k-avatar__initials"
                                                            style={{
                                                                "font-size": "12px",
                                                                width: "24px",
                                                            }}
                                                        >
                                                            kd
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>
                                            <div className={isActiveProfile ? "active dropdownsec k-card raised" : 'dropdownsec k-card raised'}
                                                onClick={onSubmit}
                                                style={{
                                                    "marginRight": "400px",
                                                    "width": "85px",
                                                    "height": "46px",
                                                    "padding": "0"
                                                }}>
                                                <NavLink
                                                    strict
                                                    exact
                                                    to={`${process.env.PUBLIC_URL}/loginmain`}
                                                    key={`${process.env.PUBLIC_URL}/loginmain`}
                                                >
                                                    &nbsp; Logout

                                                </NavLink>
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
        );
    }
}

export default Header;
