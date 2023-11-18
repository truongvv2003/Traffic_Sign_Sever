const { showAllUser, showUserById } = require('../CRUD/user')

const getListUser = async (req, res) => {
    try {
        const listUser = await showAllUser()
        res.status(200).json({
            message: "This is All User!!",
            listUser: listUser
        })
    } catch (error) {
        console.error(error);

        // In ra lỗi từ Sequelize
        if (error.errors) {
            error.errors.forEach((err) => {
                console.error(err.message);
            });
        }

        res.status(400).json({
            message: "Error Show List User!!!",
            error: error.message,
        });
    }
}

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await showUserById(userId);
        return res.status(200).json({
            message: "Success get user",
            user: user
        });
    } catch (error) {
        console.error(error);

        // In ra lỗi từ Sequelize
        if (error.errors) {
            error.errors.forEach((err) => {
                console.error(err.message);
            });
        }

        res.status(400).json({
            message: "Error Show User By Id!!!",
            error: error.message,
        });
    }
}

module.exports = {
    getListUser: getListUser,
    getUserById: getUserById
}