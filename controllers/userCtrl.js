const db = require('../database/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
    const q = "SELECT * FROM users where email = ?";
    
    db.query(q, [req?.body?.email], (err, data) => {
        if(err){
            return res.json(err)
        }
        if(data.length){
            return res.status(409).json('User already exists');
        }
       
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req?.body?.password, salt);

        const q = "INSERT INTO users(`userName`, `email`, `password`) VALUES (?)";
        const values = [
            req?.body?.userName,
            req?.body?.email,
            hash
        ]
        db.query(q, [values], (err, data) => {
            if(err) {
                return res.json(err)
            }
            return res.status(200).json('User has been created');
        })
       
});
}
const login = (req, res) => {
    const q = "SELECT * FROM users where email = ?";

    db.query(q, [req?.body?.email], (err, data) => {

        if(err) {
            return res?.json(err);
        }
      
        if(data?.length === 0){
            return res?.status(404).json('User not found');
        }
        const isPassword = bcrypt.compareSync(req?.body?.password, data[0]?.password);

        if(!isPassword){
            return res?.status(400).json('Wrong email or password');
        }
        const token = jwt.sign({id: data[0].id}, 'jwtkey');
            const {password, ...other} = data[0];
    
            res?.cookie('access_token', token, {
                httpOnly: true
            })
            .status(200)
            .json(other)
})


}
const logout = (req, res) => {
        res.clearCookie('access_token', {
            sameSite: 'none',
            secure:true
        }).status(200).json('Logged Out')
}
module.exports = {register, login, logout};
