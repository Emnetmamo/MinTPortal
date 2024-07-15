import express from 'express'
import projectFeedbackModel from '../models/projectFeedback.js';
import UserModel from '../models/users.js';

const router = express.Router();

router.post('/setFeedback', async function(req, res){
    const {id, email, title, feedback} = req.body;
    const user = await UserModel.find({email:email});
    const userId = user[0]._id.toString();
    const name = user[0].fName + user[0].LName;
    await projectFeedbackModel.updateMany( {},{ $set: { userName : "Adam Abera"} }, { multi: true }); 
    console.log(title);
    const previousFeedback = await projectFeedbackModel.find({projectID:id});
    if(previousFeedback.length > 0){
        await projectFeedbackModel.findOneAndUpdate({projectID:id}, {$addToSet:{feedback:[feedback]}})
        .then(result => console.log(result))
        .catch(err=>console.log(err))
    }
    else{
        await projectFeedbackModel.create({
            userID:userId,
            projectID:id,
            projectTitle: title,
            feedback:[feedback],
            userName: name
        })
        .then(result => console.log(result))
        .catch(err=>console.log(err))

        const id2 = new mongoose.Types.ObjectId(id);
        await ProjectModel.findOneAndUpdate({_id:id2}, {currentReviewer: "MinT Research Sector Members"})
        .then(result=>{ 
            console.log(result)})
        .catch(err=> res.json(err))
    }
});

router.get('/getFeedback', async function(req, res){
    await projectFeedbackModel.find({})
    .then((result) => {res.json(result); console.log(result)})
    .catch(err=>console.log(err))
});
router.post('/getField', async function(req, res){
    const email = req.body.email;
    const user = await UserModel.find({email:email});
    res.json({field:user[0].field});
});

export default router;