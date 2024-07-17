const User = require('../models/person')


const signUpWare = async (req, res, next) => {
    const { name, emaiId, num, password1, password2 } = req.body;
    console.log(req.body);
    if (num.length !== 10) {
        console.log('Phone number must contain 10 digits');
        return res.status(400).send('Phone number must contain 10 digits');
    }

    if (password1 !== password2) {
        console.log('Please confirm that both the passwords are same');
        return res.status(400).send('Passwords do not match');
    }

    const user = new User({ name, emaiId, num, password1, password2 })
    try {
        const results = await user.save();
        res.send('Done').status(205)
        console.log(results)
    } catch (error) {
        res.send('fuck you').status(405)
    }
}

module.exports = {
    signUpWare
}