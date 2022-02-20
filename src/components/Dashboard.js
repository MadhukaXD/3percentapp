import React from 'react'
import styled from "styled-components";
import { NavLink, Link, useLocation } from "react-router-dom";

function Dashboard() {

    return (
        <Container>
            <Layout>
                <LeftSideBar>
                    <WelcomeText>Welcome to the3percent, Gayan!</WelcomeText>
                    <Create>
                        <AddFoods>
                        <NavLink
                    strict
                    exact
                    to={`${process.env.PUBLIC_URL}/addfoods`}
                    key={`${process.env.PUBLIC_URL}/addfoods`}
                    className="button button--filled w-100 screen__link"
                   style={{'lineHeight' :'70px'}}>
                    Contact us

               </NavLink>
                            <a href="addfoods">
                                <p>Add Foods</p>
                            </a>
                        </AddFoods>
                        <AddExercises>
                            <a href="addexercises">
                                <p>Add Exercises</p>
                            </a>
                        </AddExercises>
                        <CreateWorkouts>
                            <a href="createworkouts">
                                <p>Create Workouts</p>
                            </a>
                        </CreateWorkouts>
                        <CreateProgramme>
                            <a href="createprogrammes">
                                <p>Create Programme</p>
                            </a>
                        </CreateProgramme>
                        <AddClients>
                            <a href="createclient">
                                <p>Add Clients</p>
                            </a>
                        </AddClients>
                    </Create>
                </LeftSideBar>
                <Middlebar></Middlebar>
                <NotificationBar></NotificationBar>
            </Layout>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;

`

const Layout = styled.div`
    background-color: #FFFFFF;
    display: grid;
    grid-template-areas: "LeftSideBar Middlebar NotificationBar";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 35px;
    row-gap: 25px;
    /* grid-template-row: auto; */
    margin: 25px 0;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
  }
`

const LeftSideBar = styled.div`
    margin-top: -50px;
    margin-left: 30px;  
`

const Middlebar = styled.div`
    width: 620px;
    height: 100vh;
    margin-left: 80px;
    margin-right: 30px;
    margin-top: -50px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    
`


const NotificationBar = styled.div`
    width: 310px;
    height: 100vh;
    margin-left: 30px;
    margin-right: 100px;
    margin-top: -50px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

const WelcomeText = styled.div`
    width: 280px;
    height: 121px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-weight: bold;
    padding: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
`
const Create = styled.div`
    margin-top: 20px;
    display: grid;  
    grid-gap: 25px;
    border-radius: 5px;
    grid-template-columns: repeat(2, minmax(0, 5fr));
    font-size: 13px;
    column-gap: 50px;
    row-gap: 20px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`

const AddFoods = styled.div`
    width: 135px;
    height: 60px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: transform 450ms;

    p{
        position: absolute;
        align-items: center;
        padding-left: 27px;
        padding-top: 10px;
    }
    
    &:hover {
        background-color: #FFF6F0;
    }
`
const AddExercises = styled.div`
    width: 135px;
    height: 60px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    cursor: pointer;

    p{
        position: absolute;
        align-items: center;
        padding-left: 27px;
        padding-top: 10px;
    }
    &:hover {
        background-color: #FFF6F0;
    }
    
`
const CreateWorkouts = styled.div`
    width: 135px;
    height: 60px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    cursor: pointer;

    p{
        position: absolute;
        align-items: center;
        padding-left: 14px;
        padding-top: 10px;
    }
    
    &:hover {
        background-color: #FFF6F0;
    }
`
const CreateProgramme = styled.div`
    width: 135px;
    height: 60px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    cursor: pointer;

    p{
        position: absolute;
        align-items: center;
        padding-left: 10px;
        padding-top: 10px;
    }
    
    &:hover {
        background-color: #FFF6F0;
    }
`
const AddClients = styled.div`
    width: 135px;
    height: 60px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    cursor: pointer;

    p{
        position: absolute;
        align-items: center;
        padding-left: 27px;
        padding-top: 10px;
    }
    
    &:hover {
        background-color: #FFF6F0;
    }
`


export default Dashboard
