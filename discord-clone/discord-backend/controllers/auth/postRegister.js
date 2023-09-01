const User = require('../../models/user');
const bcrypt = require('bcryptjs');

const postRegister = async (req, res) => {
    try {
        const { username, mail, password } = req.body;
        const userExists = await User.exists({ mail: mail.toLowerCase() });
        if (userExists) {
            return res.status(409).send("Email already registered");
        }

        const encrypedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            mail: mail.toLowerCase(),
            password: encrypedPassword
        })

        const token = "JWT token"
        res.status(201).json({
            userDetails: {
                mail: user.mail,
                token: token,
                username: user.username
            }
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
}

module.exports = postRegister