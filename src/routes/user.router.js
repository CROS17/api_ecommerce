const express = require('express');
const router = express.Router();

    const {
        allUser,
        createUser,
        oneUser,
        updateUser,
        deleteUser
    } = require('../services/user.service');

    // Retrieve Users
    router.get('/', async(req, res, next) =>{
        try
        {
            const users =  await allUser()
            res.json(users);
        }catch (error) {
            next(error);
        }
    });

    //create a new User
    router.post('/', async(req, res, next) =>{
        try
        {
            const data ={
                username: req.body.users.username,
                email: req.body.users.email,
                password: req.body.users.password
            }
            const newUser = await createUser(data);
            res.json(newUser);
        }catch (error) {
            next(error);
        }
    });

    // Retrieve one user
    router.param('userId', async(req, res, next, userId) => {
        try
        {
            const user = await oneUser(userId);
            req.user = user;
            next();
        }catch(error) {
            next(error);
        }
    });
    router.get('/:userId', async(req,res,next) =>{
        try
        {
            res.status(200).json({user: req.user});
        }catch(error) {
            next(error);
        }
    })

    //Update user where id
    router.put('/:userId', async(req, res, next)=>{
            try {
                const data = {
                    userId: req.params.userId,
                    username: req.body.users.username,
                    email: req.body.users.email,
                    password: req.body.users.password
                }
                const editUser = await updateUser(data)
                    .then(()=>{
                        return oneUser(data.userId);
                    });
                res.json({editUser: editUser});
            } catch (error) {
                next(error);
            }
        }
    );

    //delete a user
    router.delete('/:userId',async(req,res,next)=>{
        try
        {
            const userId = req.params.userId;
            const response = await deleteUser(userId);
            return res.sendStatus(204);
        }catch(error) {
            next(error);
        }
    });

module.exports = router;