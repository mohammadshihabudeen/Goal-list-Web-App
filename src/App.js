import React, {useState} from 'react';//import
import './App.css';
import GoalList from './Components/GoalList';//import component
import NewGoal from './Components/NewGoal';//import component
function App() {
  const [courseGoals, setCourseGoals] =useState ([
    {id: 'cg1',text: "Eat"},
    {id: 'cg2',text: "Code"},
    {id: 'cg3',text: "Sleep"}
      ]);//firstelement default,second is a function
  const addNewGoalHandler = NewGoal =>{
    //setCourseGoals(courseGoals.concat(NewGoal));//not best way
    //update internally stored data,execute all jsx code
    setCourseGoals((prevCourseGoals)=> {
      return prevCourseGoals.concat(NewGoal)//if data depend on previous 
    });
  };
  return (
    <div className="goals">
      <h3>Goals</h3>
      <NewGoal onAddGoal = {addNewGoalHandler}/>
      <GoalList goals = {courseGoals}/>
    </div>
  );
}
export default App;
