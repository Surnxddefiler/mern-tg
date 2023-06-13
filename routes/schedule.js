const {Router}= require('express');
const User=require('../models/schedule.model')
const router=Router()

router.post('/deleteGroup', async (req, res) => {
    
    try {
        const {group} = req.body;
       await User.deleteOne({group})
    }
    catch (e) {
        res.status(500).json({ message: `${e}` })
    }
})

router.post('/changeGroup', async (req, res) => {
    
    try {
        const {group, data} = req.body;
       const found = await User.findOne({group})
       found.schedule=data
       await found.save();
    }
    catch (e) {
        res.status(500).json({ message: `${e}` })
    }
})

router.post('/addGroup', async (req, res) => {
    
    try {
        const {group} = req.body;
        const existingRecord = await User.findOne({});
        const newGroup= new User({
            group,
            schedule: {
                Monday: [{ course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }],
                Tuesday: [{ course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }],
                Wednesday: [{ course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }],
                Thursday: [{ course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }],
                Friday: [{ course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }, { course: "", room: "", teacher: "" }]
            }
        })
        await newGroup.save();
    }
    catch (e) {
        res.status(500).json({ message: `${e}` })
    }
})

router.get('/',async (req, res)=>{
    try{
        const user= await User.find({});
        console.log(user)
        res.json({data:user})
    }
    catch(e){
        res.status(500).json({message: 'pizdec'})
    }
})


module.exports= router