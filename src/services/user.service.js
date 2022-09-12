const db = require('../models');
const User = db.users;

    module.exports ={
        allUser,
        createUser,
        oneUser,
        updateUser,
        deleteUser
    };

    async function allUser()
    {
        return users = await User.findAll();
    }

    async function createUser(data)
    {
        await User.create({
            username: data.username,
            email: data.email,
            password: data.password
        });
    }

    async function oneUser(id)
    {
        return user = await User.findByPk(id);
    }

    async function updateUser(data){
        await User.update({
            username: data.username,
            email: data.email,
            password: data.password
        },{
            where: {
                id: data.userId
            },
        });
    }

    async function deleteUser(id){
        const user = await oneUser(id);
        await user.destroy();
    }
