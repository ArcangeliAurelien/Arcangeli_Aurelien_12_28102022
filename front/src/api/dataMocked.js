import {users, usersActivities, usersAverage, usersPerformance} from '../mock/UsersData'

/**
 * Get user Infos
 * 
 * @param {number} id User id
 * @returns {object} Response
 */

const getUserInfos = async (id) => {
    try {
        const response = users.find(user => user.id === parseInt(id))
        return {data:response}
    } catch (error) {
        console.log(error);
    }
}

/**
 * Get user activity
 * 
 * @param {number} id User id
 * @returns {object} Response
 */

const getUserActivity = async (id) => {
    try {
        const response = usersActivities.find(user => user.userId === parseInt(id))
        return {data:response}
    } catch (error) {
        console.log(error);
    }
}

/**
 * Get user average session
 * 
 * @param {number} id User id
 * @returns {object} Response
 */

const getUserAverage = async (id) => {
    try {
        const response = usersAverage.find(user => user.userId === parseInt(id))
        return { data: response }
    } catch (error) {
        console.log(error);
    }
}

/**
 * Get user performance
 * 
 * @param {number} id User id
 * @returns {object} Response
 */

const getUserPerformance = async (id) => {
    try {
        const response = usersPerformance.find(user => user.userId === parseInt(id))
        return { data: response }
    } catch (error) {
        console.log(error);
    }
}

export { getUserInfos, getUserActivity, getUserAverage, getUserPerformance }