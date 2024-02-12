import React from "react";
import {House} from './House';
import { housesApi } from "../rest/HousesApi.js";

export default class HousesList extends React.Component {
    state = {
        houses: []

    };

    componentDidMount() {
        this.fetchHouses();
    };

    fetchHouses = async () => {
        const houses = await housesApi.get(); //calling get from HousesAPI
        this.setState({houses});
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse); // place new house
        this.fetchHouses(); //calling fetchHouses method again, then updates the state with new house after the current house is update (line above)
    };

    render () {
        return (
            <div className="house-list">
                {this.state.houses.map((house) => (
                    <House  //house props
                        house={house} //all the data from this itteration of house
                        key={house._id}
                        updateHouse={this.updateHouse} //method called from child
                        />
                ))}
            </div>
        )
    }

};