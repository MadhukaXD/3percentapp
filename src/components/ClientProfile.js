import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { Form } from "react-bootstrap"
import axios from "axios"

function ClientProfile() {

    const [ClientList, setClientList] = useState([]);

    const queryParams = new URLSearchParams(window.location.search);
    const ClientList_id = queryParams.get('ClientList_id');

    const apiurl = "http://localhost:5001/api/profile/user/" + ClientList_id;

    useState((id) => {
        axios
            .get(apiurl, { id: ClientList_id })
            .then(res => setClientList(res.data))
            .catch(error => console.log(error));
        console.log(id);
    });

    return (
        <Container>
            <LeftSection>
                <Container1>

                </Container1>
                <Container2>
                    <a href="clientdashboard">
                        <p>Dashboard</p>
                    </a>
                    <HorizontalRule />
                    <a href="clienttraining">
                        <p>Training</p>
                    </a>
                    <HorizontalRule />
                    <a href="clientnutrition">
                        <p>Nutrition</p>
                    </a>
                    <HorizontalRule />
                    <a href="clientphotos">
                        <p>Progress Photos</p>
                    </a>
                </Container2>
                <Container3></Container3>
            </LeftSection>
            <MiddleSection>
                <Container4>
                    <p>Full Name : {ClientList.FirstName}{ClientList.LastName}</p>
                    <p>Age : {ClientList.Age}</p>
                    <p>Current Body Weight : {ClientList.CurrentBodyWeight} </p>
                    <p>Height in CM : {ClientList.HeightInCM}</p>
                    <p>Email Address : {ClientList.FirstName}</p>
                    <p>Phone Number : {ClientList.PhoneNumber}</p>
                    <p>Location : {ClientList.Country}</p>
                    <p>Body Temperature : {ClientList.BodyTemperatureInCelsius}</p>
                </Container4>
                <Container5></Container5>
                <Container6>
                    <p>Do you have any of the Following</p>

                    <div class='grid-container'>

                        <div class='grid-item'>
                            <p>
                                <input
                                    name="1"
                                    className="react-switch-checkbox"
                                    id={`react-switch-new1`}
                                    type="checkbox"
                                    value={"Any Major Injuries"}

                                />

                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new1`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Any Major Injuries
                            </p>
                        </div>

                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new2`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new2`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Any Heart Condition
                            </p>
                        </div>

                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new3`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new3`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Any Operations
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new4`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new4`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Arthritis
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new5`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new5`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Asthma
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new6`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new6`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Dizziness or Fainting
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new7`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new7`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Elevated Glucose Levels
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new8`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new8`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Are you currently Fasting?
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new9`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new9`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Epilepsy
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new10`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new10`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                High Blood Pressure
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new11`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new11`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                High Cholesterol
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new12`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new12`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                High Triglycerides
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new13`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new13`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Kidney Condition
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new14`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new14`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Liver Condition
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new15`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new15`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Muscular Pain or Cramps
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new16`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new16`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Stroke
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new17`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new17`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Gout
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new18`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new18`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Hernia
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new19`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new19`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Thyroid Condition
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new20`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new20`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Rheumatic Fever
                            </p>
                        </div>
                    </div>

                    <p>Please Describe If you have selected one or more:</p>
                    <textarea class="textarea1"></textarea>

                    <p>Do you have or have you ever had any pain or major injuries in the following areas: </p>
                    <div class='grid-container'>

                        <div class='grid-item'>
                            <p>
                                <input
                                    name="1"
                                    className="react-switch-checkbox"
                                    id={`react-switch-new21`}
                                    type="checkbox"
                                    value={"Any Major Injuries"}

                                />

                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new21`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Feet
                            </p>
                        </div>

                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new22`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new22`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Hips
                            </p>
                        </div>

                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new23`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new23`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Shoulders
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new24`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new24`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Ankles
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new25`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new25`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Wrists
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new26`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new26`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Back
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new27`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new27`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Knees
                            </p>
                        </div>
                        <div class='grid-item'>
                            <p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new28`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new28`}
                                >
                                    <span className={`react-switch-button`} />
                                </label>
                                Neck
                            </p>
                        </div>
                    </div>
                    <p>Please Describe If you have selected one or more:</p>
                    <textarea class="textarea1"></textarea>
                </Container6>
            </MiddleSection>
            <RightSection>
                <Container7></Container7>
            </RightSection>
        </Container>
    )
}

const Container = styled.div`

`
const LeftSection = styled.div`

`

const MiddleSection = styled.div`

`

const RightSection = styled.div``

const Container1 = styled.div`
    width: 289px;
    height: 161px;
    margin-left: 69px;
    margin-top: -16px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
`

const Container2 = styled.div`
    width: 289px;
    height: 248px;
    margin-left: 69px;
    margin-top: 29px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    cursor: pointer;

    p{
        padding-top: 20px;
        margin-left: 30px;
    }
`

const HorizontalRule = styled.div`
    position: absolute;
    width: 289px;
    height: 0px;
    border: 1px solid #ffe4d1;
`

const Container3 = styled.div`
    width: 289px;
    height: 171px;
    margin-left: 69px;
    margin-top: 29px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
`

const Container4 = styled.div`
    width: 680px;
    height: 260px;
    margin-left: 379px;
    margin-top: -638px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 5px;

    p{
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 14px;
        padding-left: 19px;
        padding-top: 15px;
    }
`

const Container5 = styled.div`
    width: 680px;
    height: 40px;
    margin-left: 379px;
    margin-top: 70px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
`

const Container6 = styled.div`
    width: 680px;
    height: 919px;
    margin-left: 379px;
    margin-top: px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 5px;

    p {
        padding-left: 29px;
        padding-top: 13px;
        font-size: 14px;
    }

    .textarea1 {
        height: 104px;
        width: 642px;
        border-color: #FFE4D1;
        background: #FFFFFF;
        border: 2px solid #FFE4D1;
        box-sizing: border-box;
        border-radius: 4px;
        margin-left: 23px;
        font-size: 20px;
    }
    .grid-container {
        display: grid;
        grid-gap: 12px 9px;
        grid-template-columns: auto auto auto;
        padding: 3px 23px;
        margin-top: 6px;
      }
    
      .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid #ffe4d1;
        font-size: 30px;
        text-align: center;
        width: 207px;
        height: 39px;
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

`
const Container7 = styled.div`
    width: 274px;
    height: 795px;
    margin-left: 1092px;
    margin-top: -1291px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
`



export default ClientProfile
