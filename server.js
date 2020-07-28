const express =require('express');
const app = express();

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

app.listen(8000, () =>{
    console.log("Server is running at 3000");
})