const User = require('../models/User')

class UserController{

    addUser(body) {
        const user = new User(body)
        return user.save()
    }

    getUsers(){
        return User.find()
    }

    getUserById(id){
        return User.findById(id)
    }

    getUserByEmail(email){
        return User.findOne({ email: email})
    }

    login(email, password){
        return User.findOne({ email: email, password: password })
    }

}

module.exports = UserController