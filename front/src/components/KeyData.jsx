import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../mock/UsersData";
import calories from "../assets/calories.svg";
import glucides from "../assets/glucides.svg";
import lipides from "../assets/lipides.svg";
import proteines from "../assets/proteines.svg";
import '../styles/KeyData.css';

function KeyData() {
    const { id } = useParams()
    const userData = users.find(user => user.id === parseInt(id))
    const KeyData = userData.keyData

    return (
        <div className="infos">
            <div className="keyData">
                <img src={calories} alt="calories" />
                <div>
                    <div className="data">{KeyData.calorieCount}kCal</div>
                    <div className="dataName">Calories</div>
                </div>
            </div>
            <div className="keyData">
                <img src={proteines} alt="calories" />
                <div>
                    <div className="data">{KeyData.proteinCount}g</div>
                    <div className="dataName">Proteines</div>
                </div>
            </div>
            <div className="keyData">
                <img src={glucides} alt="calories" />
                <div>
                    <div className="data">{KeyData.carbohydrateCount}g</div>
                    <div className="dataName">Glucides</div>
                </div>
            </div>
            <div className="keyData">
                <img src={lipides} alt="calories" />
                <div>
                    <div className="data">{KeyData.lipidCount}g</div>
                    <div className="dataName">Lipides</div>
                </div>
            </div>
        </div>
    )
}

export default KeyData