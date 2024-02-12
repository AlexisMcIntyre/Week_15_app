import React from "react";
import {NewRoomForm} from './NewRoomForm';

//functional component -  the component house IS a function, so any function below can be used and it will be returned

export const House = (props) => {
    const {house, updateHouse} = props; //house is all data passed in for house, updateHouse is the method being passed in (called from child class component)

    const deleteRoom = (roomId) => {  //going to filter out room for deletion by matching the id & removing room fom array (using filter method)
        const updatedHouse = { //assigning a new variable the value of the new object
            ...house, //spread the house that is passed in, which will use all the data from the house object EXCEPT the data we are changing below --the rooms
            rooms: house.rooms.filter((x) => x._id !== roomId)  //rooms will be updated to a different value (which is basically the same value MINUS the id of the room being deleted)
    };
    updateHouse(updatedHouse); //doing to pass updated house into the update house method that was passed down (will call the put method on the houses API, thus it will call the HTTP request to update)
}

const addNewRoom = (room) => updateHouse ({...house, rooms: [...house.rooms, room]}); //when updating props or state you should add a new object or array value, you don't modify an existing one, so here we are using the old array (using spread) and adding a new value to it to create a new array


// this could also be written like this because it is one line and will automatically be returned: const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});

const rooms = () => (  //rooms (the collection of rooms) will create an instance of each room as an li
    <ul>
        {house.rooms.map((room, index) => (
        <li key={index}>
            <label> {`${room.name} Area: ${room.area}`}</label>
            <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
        </li>
        ))}
    </ul>
);

return (
    <div>
        <h1>{house.name}</h1>
        {
            rooms({rooms, houseId: house._id, deleteRoom})  //rooms is a function, and takes in the props (rooms, and delte room method)
        }
        <NewRoomForm addNewRoom={addNewRoom} />
    </div>
);

};