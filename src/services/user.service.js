const db = require('../models');
const User = db.users;
const bcrypt = require('bcryptjs');

    module.exports ={
        allUser,
        createUser,
        oneUser,
        updateUser,
        deleteUser
    };

    async function allUser()
    {
        return await User.findAll();
    }

    async function createUser(data)
    {
        // console.log(data);
        if (await User.findOne({ where: { email: data.email } }))
        {
            throw 'Correo: ' + data.email + ' se encuentra registrado.';
        }

        let passwordHash = await bcrypt.hash(data.password, 12);

        await User.create({
            username: data.username,
            email: data.email,
            password: passwordHash
        });

    }

    async function oneUser(id)
    {
        return user = await User.findByPk(id);
    }

    async function updateUser(data){

        let passwordHash = await bcrypt.hash(data.password, 12);

        await User.update({
            username: data.username,
            email: data.email,
            password: passwordHash
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
