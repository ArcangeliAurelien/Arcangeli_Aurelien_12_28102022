# Prerequisite

- [NodeJS (**version 18.2**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

# Dependencies

- [React](https://reactjs.org/)
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
- [Recharts](https://recharts.org/en-US/)
- [styled-components](https://styled-components.com/)
- Recommended text editor: [Visual Studio Code](https://code.visualstudio.com/)

# Installation

## Launching Back-End

1. Clone the repo of the back-end:
    `git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git`

2. Install the dependencies by running the command 
    `yarn install` or `npm install`

3. Lauch the back-end on port 3000 ([http://localhost:3000](http://localhost:3000)) by running the command
    `yarn dev` or `npm run:dev`

## Endpoints

### 1. Possible endpoints

This project includes four endpoints that you will be able to use: 

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### 2. Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.

## Launching Front-End

1. Clone the repo of the front-end:
    `git clone https://github.com/ArcangeliAurelien/Arcangeli_Aurelien_12_28102022.git`

2. Install the dependencies by running the command 
    `yarn install` or `npm install`

3. Lauch the back-end on port 3001 ([http://localhost:3001](http://localhost:3001)) by running the command
    `yarn start` or `npm start`