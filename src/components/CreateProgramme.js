import React from 'react'
import styled from "styled-components";
import { Form } from "react-bootstrap";

function CreateProgramme() {
    return (
        <Container>
            <ProgrammeTitle>
                <p><h1>Programme Title</h1></p>
            </ProgrammeTitle>
            <Container1>
                <p>Clients</p>
                <HorizontalRule1 />
            </Container1>
            <Container2>
                <p>Details</p>
                <HorizontalRule2 />
                <FormDetails>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><p>Level (Beginner / Intermediate / Expert)</p></Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Expert">Expert</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><p>Location (Home / Gym / Park) </p></Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="Home">Home</option>
                            <option value="Gym">Gym</option>
                            <option value="Park">Park</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><p>Goal? (Fat Loss / Muscle Gain / etc)</p></Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="Fat Loss">Fat Loss</option>
                            <option value="Muscle Gain">Muscle Gain</option>
                            <option value="Lean Muscle">Lean Muscle</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><p>Main Muscle Gain (Chest / Biceps / Shoulders / etc)</p></Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="Chest">Chest</option>
                            <option value="Biceps">Biceps</option>
                            <option value="Shoulders">Shoulders</option>
                            <option value="Back">Back</option>
                            <option value="Legs">Legs</option>
                            <option value="Triceps">Triceps</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Other Muscle Worked</Form.Label>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><p>Gender</p></Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>
                    </Form.Group>
                </FormDetails>
            </Container2>
            <Container3>
                <p>Week 1-4 (4 Weeks)</p>
                <HorizontalRule3 />
                <p>Summery</p>
                <InlineBox1 />
                <Button1>ADD WORKOUT</Button1>
            </Container3>
            <Container4>
                <p>Week 5-8 (4 Weeks)</p>
                <HorizontalRule4 />
                <p>Summery</p>
                <InlineBox2 />
                <Button2>ADD WORKOUT</Button2>
            </Container4>
            <Button3>SAVE PROGRAM</Button3>
        </Container>
    )
}

const Container = styled.div`

`

const ProgrammeTitle = styled.div`
    margin-left: 75px;
    margin-top: -50px;
    width: 1271px;
    height: 100px;
    background-color: #FFFFFF;
    border-radius: 5px; 
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

    p{
        padding-left: 15px;
        padding-top: 3px
    }
`
const Container1 = styled.div`
    margin-left: 75px;
    margin-top: 30px;
    width: 1271px;
    height: 194px;
    background-color: #FFFFFF;
    border-radius: 5px; 
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

    p{
        padding-left: 28px;
        padding-top: 13px;
        font-size: 14px;
    }
`
const HorizontalRule1 = styled.div`
    position: absolute;
    width: 1219px;
    height: 0px;
    border: 1px solid #FFE4D1;
    left: 103px;
    top: 276px;
`
const Container2 = styled.div`
    margin-left: 75px;
    margin-top: 30px;
    width: 1271px;
    height: 342px;
    background-color: #FFFFFF;
    border-radius: 5px; 
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

    p{
        padding-left: 28px;
        padding-top: 13px;
        font-size: 14px;
    }
    
`
const HorizontalRule2 = styled.div`
    position: absolute;
    width: 1219px;
    height: 0px;
    border: 1px solid #FFE4D1;
    left: 103px;
    top: 500px; 
`
const FormDetails = styled.div`
    padding-top: 20px;
    padding-left: 20px;
    display: grid;
    grid-template-columns: minmax(0, 8fr) minmax(0, 8fr) minmax(300px, 8fr);
    column-gap: 10px;
    row-gap: 2px;

    p{
        font-size: 14px;
    }

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

`
const Container3 = styled.div`
    margin-left: 75px;
    margin-top: 30px;
    width: 1271px;
    height: 383px;
    background-color: #FFFFFF;
    border-radius: 5px; 
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

    p{
        padding-left: 28px;
        padding-top: 14px;
        font-size: 14px;
    }

`

const HorizontalRule3 = styled.div`
    position: absolute;
    width: 1219px;
    height: 0px;
    border: 1px solid #FFE4D1;
    left: 103px;
    top: 872px;
`
const InlineBox1 = styled.div`
    position: absolute;
    width: 1206px;
    height: 96px;
    left: 110px;
    top: 930px;
    background: #FFFFFF;
    border: 2px solid #FFE4D1;
    box-sizing: border-box;
    border-radius: 4px;
`
const Button1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    position: absolute;
    width: 179px;
    height: 39px;
    left: 1100px;
    top: 1100px;
    background: #FF6600;
    border-radius: 8px;
    cursor: pointer;
`
const Container4 = styled.div`
    margin-left: 75px;
    margin-top: 30px;
    width: 1271px;
    height: 383px;
    background-color: #FFFFFF;
    border-radius: 5px; 
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

    p{
        padding-left: 28px;
        padding-top: 16px;
        font-size: 14px;
    }
`
const HorizontalRule4 = styled.div`
    position: absolute;
    width: 1219px;
    height: 0px;
    border: 1px solid #FFE4D1;
    left: 103px;
    top: 1290px;
`
const InlineBox2 = styled.div`
    position: absolute;
    width: 1206px;
    height: 96px;
    left: 110px;
    top: 1350px;
    background: #FFFFFF;
    border: 2px solid #FFE4D1;
    box-sizing: border-box;
    border-radius: 4px;
`
const Button2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    position: absolute;
    width: 179px;
    height: 39px;
    left: 1100px;
    top: 1530px;
    background: #FF6600;
    border-radius: 8px;
    cursor: pointer;
`
const Button3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    position: absolute;
    width: 179px;
    height: 39px;
    left: 570px;
    top: 1667px;
    background: #FF6600;
    border-radius: 8px;
    cursor: pointer;
`


export default CreateProgramme
