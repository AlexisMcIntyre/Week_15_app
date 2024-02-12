import React, {useState} from "react";

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');  //these are the hooks
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {  //this is user validation stuff to make sure the user has entered a number
        const int = parseInt(e.target.value, 10); //10 means round to the 10th
        setArea(int >= 0? int: ''); //no negative numbers
    }

    const onSubmit = (e) => { //what happens when the form is submitted
        e.preventDefault();
        if (name && area) {  //make sure user entered values for both
            props.addNewRoom({name,area}); //new object passed in
            setName(''); //resetting name and back to a blank string
            setArea('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        //call onsubmit method created above
        <div>
            <h4>Add New Room</h4>            
            <form onSubmit={onSubmit} > 
                <input
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)} //when the text in input changes we are calling setName method an setting it to target value, and the name value in the state /updates changes with it
                    value={name}
                    />
                <input
                    type='text'
                    placeholder='area'
                    onChange={handleAreaInput}
                    value={area} //this is tying the state variable onto the input value, onChange always updates the state value and the state value updates the value in the input
                    //the above "inputs" show 2 different ways to to the onChange, either inline like the first, or defined above and called in later {handleAreaInput}
                   />
                <button type='submit'>Add Room</button> 
            </form>
        </div>
    )
};