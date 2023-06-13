const { Router } = require('express');
const Admins = require('../models/admin.model')
const router = Router()


router.post('/deleteAdmin', async (req, res) => {
    
    try {
        const {admin} = req.body;
       const found=await Admins.findOne({})
       found.admin.splice(found.admin.indexOf(admin), 1)
       found.save()
    }
    catch (e) {
        res.status(500).json({ message: `${e}` })
    }
})



router.post('/addAdmin', async (req, res) => {

    try {
        const { admin } = req.body;
        const found = await Admins.findOne({})
        found.admin.push(admin)
        await found.save();
    }
    catch (e) {
        res.status(500).json({ message: `${e}` })
    }
})

router.get('/', async (req, res) => {
    try {
        const user = await Admins.find({});
        res.json({ data: user })
    }
    catch (e) {
        res.status(500).json({ message: 'pizdec' })
    }
})





module.exports = router