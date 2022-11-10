import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { usersPerformance } from "../../mock/UsersData";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

const xAxisFormatter = (kind) => {
    switch (kind) {
        case 1: return 'Cardio';
        case 2: return 'Energie';
        case 3: return 'Endurance';
        case 4: return 'Force';
        case 5: return 'Vitesse';
        case 6: return 'Intensité';
        default: return null;
    }
}

const Container = styled.div`
    position: relative;
	max-width: 250px;
    width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #282D30;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	border-radius: 5px;
`

function RadarPerfChart() {
    const { id } = useParams()
    const userPerfData = usersPerformance.find(user => user.userId === parseInt(id))
    const userPerf = userPerfData.data

    return (
        <Container>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={userPerf} outerRadius={80} >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey='kind'
                        tickLine={false}
                        tick={{ fontSize: 12, fontWeight: 500 }}
                        stroke="#FFFFFF"
                        tickFormatter={xAxisFormatter} />
                    <Radar dataKey='value' fill="#FF0101B2" />
                </RadarChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default RadarPerfChart