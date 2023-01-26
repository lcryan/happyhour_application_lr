import React from 'react';
import Button from "./Button";
import './Bartender.css'
import PartyButton from '../../src/assets/buttonPictures/PartyButton.png'

function Bartender(props) {
    return (


        <div>

            <div className="button-select-group">
                <Button
                    type={"button"} //TODO check which kind of button this has to be ? In all cases!
                    className="party-drink"
                    disabled={false}
                    children="Party-Drink"
                    style={{backgroundImage: PartyButton}}
                    //TODO onlick functionality still has to be added and has to iterate through

                />

                <Button
                    type={"button"}
                    className="shot"
                    disabled={false}
                    children="Shot"
                />
                <Button
                    type={"button"}
                    className="cocktail"
                    disabled={false}
                    children="Cocktail"
                />
                <Button
                    type={"button"}
                    className="no-preference"
                    disabled={false}
                    children="No Preference"
                />
            </div>
        </div>
    );
}

export default Bartender;