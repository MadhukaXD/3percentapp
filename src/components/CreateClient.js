import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import Header from './Header';
import { Helmet } from "react-helmet";

function CreateClient() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [AddType, setAddType] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Location, setLocation] = useState("");
  const [Skype, setSkype] = useState("");
  const [Email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("https://immense-brushlands-85194.herokuapp.com/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        FirstName,
        LastName,
        Age,
        Gender,
        AddType,
        PhoneNumber,
        Skype,
        Email,
        Location,
      }),
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
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Create Client - 3%</title>
      </Helmet>
      <div data-app="true" className="k-app light">
        <div className="k-layout-main__wrapper">
          <Header />
          <div className="k-layout-main">
            <div data-v-2913046a className="background-ribbon__container"
              style={{
                "height": "230px",
                "top": "-5rem",
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
                  className="absolute top-0 left-0 tw-w-full tw-h-full bg-white z-10">
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
              </div>
            </div>
            <div class="container px-none pt-none">
              <div class="layout row wrap">
                <div class="flex xs12 pb-none">
                  <div data-v-52fb9f55="" data-v-70fe1976="" class="k-card mb-earth pa-none raised mb-none">
                    <div class="k-card__content">
                      <div data-v-52fb9f55="" class="layout row wrap no-padding">                                                    
                        <div data-v-52fb9f55="" class="flex py-none xs12">
                          <div data-v-52fb9f55="" class="k-select"
                            field="[object Object]">
                            <div class="k-select__input-group">
                              <div class="k-input k-input--has-changed mb-none">
                                <div
                                  class="k-input-container d-flex align-center k-input__field k-input__field--active pa-earth">
                                  <div class="pica largetext">
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
                                      rows="5" data-mask="null"
                                      aria-checked="Grams" readonly="true" />
                                  </div>
                                </div>
                                <div data-v-6b0e4150="" >
                                </div>
                              </div>
                            </div>
                            <div class="k-select__list-container">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex xs12 pa-none">
                  <div class="action-bar-portal v-portal" >
                  </div>
                </div>
              </div>
            </div>
            <div class="container grid-gap-earth">
              <div data-v-158550f2="" class="layout row wrap">
                <div data-v-158550f2="" class="flex xs12">
                  <div data-v-70fe1976="" data-v-158550f2="">
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
                                  Bio
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
                                First Name
                              </label>
                              <div class="k-input-container d-flex align-center k-input__field k-input__field--active">
                                <div class="pica"
                                  style={{
                                    "flex-grow": "2",
                                    "position": "relative"
                                  }} >
                                  <input type="text"
                                    value={FirstName}
                                    onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                              min="0">
                              <label for="object-584956"
                                class="minion k-input__label colorOne--text">
                                Last Name
                              </label>
                              <div class="k-input-container d-flex align-center k-input__field k-input__field--active">
                                <div class="pica"
                                  style={{
                                    "flex-grow": "2",
                                    "position": "relative"
                                  }}>
                                  <input type="text"
                                    value={LastName}
                                    onChange={(e) => setLastName(e.target.value)} />
                                </div>              
                              </div>
                            </div>
                          </div>

                          <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                              min="0" >
                              <label for="object-582949"
                                class="minion k-input__label colorOne--text">
                                Age
                              </label>
                              <div class="k-input-container d-flex align-center k-input__field k-input__field--active">
                                <div class="pica"
                                  style={{
                                    "flex-grow": "2",
                                    "position": "relative"
                                  }}>
                                  <input type="text"
                                    value={Age}
                                    onChange={(e) => setAge(e.target.value)} />
                                </div>
                              </div>
                            </div>
                          </div>
                                                       
                          <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                              min="0" >
                              <label for="object-497406" class="minion k-input__label colorOne--text">
                                Gender
                              </label>
                              <div class="k-input-container d-flex align-center k-input__field k-input__field--active">    
                                <div class="pica"
                                  style={{
                                    "flex-grow": "2",
                                    "position": "relative"
                                  }}>
                                  <input type="text"
                                    value={Gender}
                                    onChange={(e) => setGender(e.target.value)} />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                              min="0" >
                              <label for="object-537921"
                                class="minion k-input__label colorOne--text">
                                AddType
                              </label>
                              <div class="k-input-container d-flex align-center k-input__field k-input__field--active">
                                <div class="pica"
                                  style={{
                                    "flex-grow": "2",
                                    "position": "relative"
                                  }} >
                                  <input type="text"
                                    value={AddType}
                                    onChange={(e) => setAddType(e.target.value)} />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                              min="0"  >
                              <label for="object-86824"
                                class="minion k-input__label colorOne--text">
                                PhoneNumber
                              </label>
                              <div class="k-input-container d-flex align-center k-input__field k-input__field--active">
                                <div class="pica"
                                  style={{
                                    "flex-grow": "2",
                                    "position": "relative"
                                  }}>
                                  <input type="text"
                                    value={PhoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)} />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                              min="0"  >
                              <label for="object-86824"
                                class="minion k-input__label colorOne--text">
                                Skype
                              </label>
                              <div class="k-input-container d-flex align-center k-input__field k-input__field--active">
                                <div class="pica"
                                  style={{
                                    "flex-grow": "2",
                                    "position": "relative"
                                  }}>
                                  <input type="text"
                                    value={Skype}
                                    onChange={(e) => setSkype(e.target.value)} />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                              min="0"  >
                              <label for="object-86824"
                                class="minion k-input__label colorOne--text">
                                Email
                              </label>
                              <div class="k-input-container d-flex align-center k-input__field k-input__field--active">
                                <div class="pica"
                                  style={{
                                    "flex-grow": "2",
                                    "position": "relative"
                                  }}>
                                  <input type="text"
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div data-v-52fb9f55="" class="flex py-none xs4 md4">
                            <div data-v-52fb9f55="" class="k-input k-input--has-changed"
                              min="0"  >
                              <label for="object-86824"
                                class="minion k-input__label colorOne--text">
                                Location
                              </label>
                              <div class="k-input-container d-flex align-center k-input__field k-input__field--active">
                                <div class="pica"
                                  style={{
                                    "flex-grow": "2",
                                    "position": "relative"
                                  }}>
                                  <input type="text"
                                    value={Location}
                                    onChange={(e) => setLocation(e.target.value)} />
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div data-v-70fe1976="" class="d-flex justify-center pa-saturn">
                      <button data-v-70fe1976="" to="[object Object]" class="k-button medium colorOne"
                        onClick={onSubmit}>
                        <div class="k-button__content"
                          style={{ 'opacity': '1' }}
                          onClick={onSubmit}>
                          ADD AND SEND INVITE
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
  );
}

export default CreateClient;
