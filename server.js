const express =require('express');
const app = express();
const bodyParser = require('body-parser');

const mockUserData=[
    {name: 'Mark'},
    {name: 'Jill'}
]
app.get('/users', (req, res)=>{
    res.json({
        success: true,
        message: 'noce try, bro!',
        users: mockUserData
    })
})

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'i got u bro!',
        user: req.params.id
    })
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "minhc";
    const mockPassword = "password";

    if (username===mockUsername && password===mockPassword){
        res.json({
            success: true,
            message: 'user logged in',
            token: 'ccc'
        })
    } else {
        res.json({
            success: false,
            message: 'wrong username or password'
        })
    }
})

app.listen(8000, () =>{
    console.log("Server is running at 3000");
})