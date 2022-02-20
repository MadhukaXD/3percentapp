import React, { useState } from 'react'
import styled from "styled-components"
import { Form } from "react-bootstrap"


function AddFoods2() {

    const [FoodName, setFoodName] = useState("");
    const [Recipe, setRecipe] = useState("");
    const [ServingSize, setServingSize] = useState("");
    const [UnitMeasurement, setUnitMeasurement] = useState("");
    const [Protein, setProtein] = useState("");
    const [Carbs, setCarbs] = useState("");
    const [Fat, setFat] = useState("");
    const [Fibre, setFibre] = useState("");
    const [Sodium, setSodium] = useState("");
    const [Sugar, setSugar] = useState("");
    const [Calories, setCalories] = useState("");
    const [TotalCarbohydrates, setTotalCarbohydrates] = useState("");
    const [SaturatedFat, setSaturatedFat] = useState("");
    const [Cholesterol, setCholesterol] = useState("");
    const [VitaminA, setVitaminA] = useState("");
    const [VitaminC, setVitaminC] = useState("");
    const [Calcium, setCalcium] = useState("");
    const [Iron, setIron] = useState("");
    const [MonosaturatedFat, setMonosaturatedFat] = useState("");
    const [Image, setImage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5002/api/food", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ FoodName, Recipe, ServingSize, UnitMeasurement, Image, Protein, Carbs, Fat, Fibre, Sodium, Sugar, Calories, TotalCarbohydrates, SaturatedFat, Cholesterol, VitaminA, VitaminC, Calcium, Iron, MonosaturatedFat }),
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
        <Container>
            <Container1>
                <textarea class="textarea1"
                    value={FoodName}
                    onChange={(e) => setFoodName(e.target.value)}
                ></textarea>
            </Container1>
            <Container2>
                <p>Recipe</p>
                <textarea class="textarea2"
                    value={Recipe}
                    onChange={(e) => setRecipe(e.target.value)}
                ></textarea>
            </Container2>
            <Container3>
                <p>Macronutrients</p>
                <HorizontalRule />
                <FormDetails>
                    <Form.Group className="mb-3" controlId="formBasicEmail"
                        value={ServingSize}
                        onChange={(e) => setServingSize(e.target.value)}
                    >
                        <Form.Label>Serving Size</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail"
                        value={UnitMeasurement}
                        onChange={(e) => setUnitMeasurement(e.target.value)}
                    >
                        <Form.Label>Unit Measurement </Form.Label>
                        <Form.Select class="form-control" aria-label="Default select example">
                            <option selected>Choose...</option>
                            <option value="Cup">Cup</option>
                            <option value="Centilitre">Centilitre</option>
                            <option value="Gram">Gram</option>
                            <option value="Gallon">Gallon</option>
                        </Form.Select>
                    </Form.Group>
                </FormDetails>
                <FormDetails2>
                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setProtein(e.target.value)}
                    >
                        <Form.Label>Protein (g)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={Protein} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'

                        onChange={(e) => setCarbs(e.target.value)}
                    >
                        <Form.Label>Carbs (g)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={Carbs} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setFat(e.target.value)}
                    >
                        <Form.Label>Fat (g)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={Fat} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setFibre(e.target.value)}
                    >
                        <Form.Label>Fibre (g)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={Fibre} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setSodium(e.target.value)}
                    >
                        <Form.Label>Sodium (mg)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={Sodium} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setSugar(e.target.value)}
                    >
                        <Form.Label>Sugar (mg)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={Sugar} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setCalories(e.target.value)}
                    >
                        <Form.Label>Calories</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={Calories} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setTotalCarbohydrates(e.target.value)}
                    >
                        <Form.Label>Total Carbohydrates (g)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={TotalCarbohydrates} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setSaturatedFat(e.target.value)}
                    >
                        <Form.Label>Saturated Fat (g)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={SaturatedFat} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setCholesterol(e.target.value)}
                    >
                        <Form.Label>Cholesterol (g)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={Cholesterol} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setVitaminA(e.target.value)}
                    >
                        <Form.Label>Vitamin A (%)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={VitaminA} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setVitaminC(e.target.value)}
                    >
                        <Form.Label>Vitamin C (%)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={VitaminC} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setCalcium(e.target.value)}
                    >
                        <Form.Label>Calcium (%)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={Calcium} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setIron(e.target.value)}
                    >
                        <Form.Label>Iron (%)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={Iron} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'
                        onChange={(e) => setMonosaturatedFat(e.target.value)}
                    >
                        <Form.Label>Monosaturated Fat (g)</Form.Label>
                        <Form.Control type='text' placeholder=''
                            value={MonosaturatedFat} />
                    </Form.Group>
                </FormDetails2>
            </Container3>
            <Container4>
                <p>Media</p>
                <HorizontalRule />
                <InlineBox>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="validatedCustomFile" required multiple />
                        <label class="custom-file-label" for="validatedCustomFile"></label>
                        <div class="invalid-feedback"></div>
                    </div>
                </InlineBox>
                <Button1
                    value={Image}
                    onChange={(e) => setImage(e.target.value)}
                >
                    UPLOAD HERE
                </Button1>
            </Container4>
            <Button2
                type="text" placeholder=""
                onClick={onSubmit}
            >SAVE FOOD</Button2>
        </Container>
    )
}

const Container = styled.div`
`

const Container1 = styled.div`
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

  
    .textarea1 {
        height: 100px;
        width: 1271px;
        background: #FFFFFF;
        border: 2px solid ;
        box-sizing: border-box;
        border-radius: 4px;
        border-color: #FFFFFF;
        font-size: 35px;
    }

`

const Container2 = styled.div`
    margin-left: 75px;
    margin-top: 30px;
    width: 1271px;
    height: 207px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    p{
        padding-left: 36px;
        padding-top: 20px;
    }

    .textarea2 {
        height: 109px;
        width: 1198px;
        background: #FFFFFF;
        border: 2px solid ;
        box-sizing: border-box;
        border-radius: 4px;
        border-color: #FFFFFF;
        font-size: 35px;
        border: 2px solid #FFE4D1;
        margin-left: 38px;
    }
`
const Container3 = styled.div`
    margin-left: 75px;
    margin-top: 30px;
    width: 1271px;
    height: 763px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    p{
        padding-left: 28px;
        padding-top: 13px;
        font-size: 14px;
    }

`
const FormDetails = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 8fr) minmax(0, 8fr) minmax(300px, 8fr);
    column-gap: 11px;
    row-gap: 30px;
    margin-top: 49px;
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
        box-sizing: border-box
    }

    .form-label {
        padding-bottom: 10px
    }

`
const FormDetails2 = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 8fr) minmax(0, 8fr) minmax(300px, 8fr);
    column-gap: 9px;
    row-gap: 5px;
    margin-top: 0px;
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
        box-sizing: border-box
    }

    .form-label {
        padding-bottom: 15px
    }
`

const HorizontalRule = styled.div`
    position: absolute;
    width: 1219px;
    height: 0px;
    border: 1px solid #FFE4D1;
    left: 103px;
    top: ;
`
const Container4 = styled.div`
    margin-left: 75px;
    margin-top: 30px;
    width: 1271px;
    height: 424px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    p{
        padding-left: 28px;
        padding-top: 13px;
        font-size: 14px;
    }
`


const InlineBox = styled.div`
    position: absolute;
    width: 1171px;
    height: 212px;
    margin-top: 39px;
    margin-left: 49px;
    border: 1px dashed #7A7A7A;
    box-sizing: border-box;

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
    margin-left: 525px;
    margin-top: 280px;
    background: #FF6600;
    border-radius: 8px;
    cursor: pointer;
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
    margin-left: 600px;
    margin-top: 20px;
    background: #FF6600;
    border-radius: 8px;
    cursor: pointer;
`


<<<<<<< HEAD
export default AddFoods2
=======
export default AddFoods2
>>>>>>> f818816dba9a56d297b75ef9145b610b6dae420c
