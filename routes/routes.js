const express = require('express');
const Model = require('../models/model');
const {github, instagram} = require('../getfollowers')
const router = express.Router();

//Create user
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        password: req.body.password
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// update Usernames and fetch followers
router.post('/updateuser/:id', async (req, res) => {
    let { name, IgTag, TwTag, GitTag } = req.body
    var gitFollowers = await github(GitTag);
    var igFollowers = await instagram(IgTag)

    try{
        const data = await Model.findByIdAndUpdate(req.params.id, {
            $set: {
                name,
                'instagram.tag': IgTag,
                'instagram.followers': igFollowers,
                'twitter.tag': TwTag,
                'twitter.followers': ["test1", "test2"],
                'github.tag': GitTag,
                'github.followers': gitFollowers,
            },
        }, { new: true })

        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;