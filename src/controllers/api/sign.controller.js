const { showAllSigns, addSign } = require("../CRUD/sign")

const getListSign = async (req, res) => {
    try {
        const listSign = await showAllSigns()
        console.log("List Sign:", listSign)
        res.status(200).json({
            listSign: listSign
        })
    } catch (error) {
        // In ra lỗi từ Sequelize
        if (error.errors) {
            error.errors.forEach((err) => {
                console.error(err.message);
            });
        }

        res.status(400).json({
            message: "Error Show List Sign!!!",
            error: error.message,
        });
    }
}


module.exports = getListSign