const models = require('../../models');
const { get } = require('../../routes/auth.route');
//const { Op } = require("sequelize");

const create = async (newUser) => {
    try {
        await models.User.create(newUser);
    } catch (error) {
        console.log("create user's error: ", error)
    }
}

const getUserByUsername = async (username) => {
    try {
        return models.User.findOne({
            where: { username: username },
            attributes: [
                'id',
                'username',
                'password',
                'name',
                'phone',
                'email',
                'address',
                'avatar'
            ]
        })
    } catch (error) {
        console.log("get user by username's error: ", error)
    }
}

const showAllUser = async () => {
    try {
        return await models.User.findAll({
            where: { deletedAt: null },
            attributes: [
                'id',
                'username',
                'password',
                'name',
                'phone',
                'email',
                'address',
                'avatar'
            ]
        })
    } catch (error) {
        console.log("get all user's error: ", error)
    }
}

const showUserById = async (id) => {
    try {
        return models.User.findByPk(id, {
            attributes: {
                exclude: ["password", "deletedAt", "createdAt", "updatedAt"],
            }
        })
    } catch (error) {
        console.log("get user by id's error: ", error)
    }
}

module.exports = {
    addUser: create,
    getUserByUsername: getUserByUsername,
    showAllUser: showAllUser,
    showUserById: showUserById
}