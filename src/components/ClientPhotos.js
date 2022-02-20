import React from 'react'
import styled from "styled-components";

function ClientPhotos() {
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
const Container7 = styled.div`
    width: 274px;
    height: 795px;
    margin-left: 1092px;
    margin-top: -640px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
`


export default ClientPhotos
