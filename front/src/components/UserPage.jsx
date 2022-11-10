import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../mock/UsersData";
import '../styles/App.css';
import ActivitiesChart from "./chart/BarChart";
import AverageChart from "./chart/AreaChart";
import ScoreChart from "./chart/PieChart";
import RadarPerfChart from "./chart/RadarChart";
import KeyData from "./KeyData";

function UserPage() {
    const { id } = useParams()
    const userData = users.find(user => user.id === parseInt(id))
    const userName = userData.userInfos.firstName

    return (
        <div className="blocText">
            <div>
                <h1 className="welcome">
                    Bonjour <span className="userName">{userName}</span>
                </h1>
                <div className="felicitation">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </div>
            </div>
            <div className="blocData">
                <div className="AllCharts">
                    <ActivitiesChart />
                    <div className="charts">
                        <AverageChart />
                        <RadarPerfChart />
                        <ScoreChart />
                    </div>
                </div>
                <KeyData />
            </div>
        </div>
    )
}

export default UserPage