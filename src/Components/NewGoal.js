import React,{useState} from "react";

const NewGoal = props => {
    const [enteredText,setEnteredText] = useState('');//state for two way binding

    const addGoalHandler = event =>{
        event.preventDefault();
        const newGoal ={
            id: Math.random().toString(),
            text: enteredText
        }
        setEnteredText('');//if add button clicked make it as empty
        props.onAddGoal(newGoal);
        
    };

    const textChangeHandler = event =>{
        setEnteredText(event.target.value);//track the changes
    };
    return <form action="" onSubmit={addGoalHandler}> 
        <input type="text" value={enteredText} onChange={textChangeHandler}/>
        //bind the entered text
        <br/>
        <button type="submit">Add Goal</button>
    </form>
};

export default NewGoal;