import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { play, exit } from './components/Timelines/Timelines'
import LoginScreen from './components/LoginScreen'
import Dashboard from './components/Dashboard'
import CreateClient from './components/CreateClient'
import AddFoods from './components/AddFoods'
import AddExercises from './components/AddExercises'
import CreateWorkouts from './components/CreateWorkouts'
import CreateProgramme from './components/CreateProgramme'
import Questions from './components/Questions'
import FoodList from './components/FoodList'
import ExerciseList from './components/ExerciseList'
import WorkoutsList from './components/WorkoutsList'
import ProgrammeList from './components/ProgrammeList'
import CourseList from './components/CourseList'
import ClientList from './components/ClientList'
import ClientProfile from './components/ClientProfile'
import ClientDashboard from './components/ClientDashboard';
import ClientNutrition from './components/ClientNutrition';
import ClientTraining from './components/ClientTraining';
import ClientPhotos from './components/ClientPhotos';
import EditFoods from './components/EditFoods';
import EditExercise from './components/EditExercise';
import Dash from './components/Dash';
import LoginMain from './components/LoginMain';
import ClientConfirmation from './components/ClientConfirmation';

class Routes extends Component {

    render() {
        return (
            <Route render={({ location }) => {
                const { pathname, key } = location;



                const onEnter = node => {


                };

                const onExit = node => {


                };

                return (

                    <Router>

                        <Switch>
                            <Route path="/login">
                                <LoginScreen />
                            </Route>
                            <Route path="/dashboard">
                                <Dashboard />
                            </Route>
                            <Route path="/createclient">
                                <CreateClient />
                            </Route>
                            <Route path="/addexercises">
                                <AddExercises />
                            </Route>
                            <Route path="/addfoods">
                                <AddFoods />
                            </Route>
                            <Route path="/createworkouts">
                                <CreateWorkouts />
                            </Route>
                            <Route path="/createprogrammes">
                                <CreateProgramme />
                            </Route>
                            <Route path="/questions">
                                <Questions />
                            </Route>
                            <Route path="/foodlist">
                                <FoodList />
                            </Route>
                            <Route path="/exerciselist">
                                <ExerciseList />
                            </Route>
                            <Route path="/workoutslist">
                                <WorkoutsList />
                            </Route>
                            <Route path="/programmelist">
                                <ProgrammeList />
                            </Route>
                            <Route path="/courselist">
                                <CourseList />
                            </Route>
                            <Route path="/clientlist">
                                <ClientList />
                            </Route>
                            <Route path="/clientprofile">
                                <ClientProfile />
                            </Route>
                            <Route path="/clientdashboard">
                                <ClientDashboard />
                            </Route>
                            <Route path="/clientnutrition">
                                <ClientNutrition />
                            </Route>
                            <Route path="/clienttraining">
                                <ClientTraining />
                            </Route>
                            <Route path="/clientphotos">
                                <ClientPhotos />
                            </Route>
                            <Route path="/editfoods">
                                <EditFoods />
                            </Route>
                            <Route path="/editexercise">
                                <EditExercise />
                            </Route>
                            <Route path="/dash">
                                <Dash />
                            </Route>
                            <Route path="/clientconfirmation">
                                <ClientConfirmation />
                            </Route>
                            <Route path="/">
                                <Dash />
                            </Route>

                        </Switch>
                    </Router>


                )
            }} />

        )

    }
}
export default Routes;



