const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Question = require('../models/Question');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

// ROUTE 1: Get All the Question using: GET "/api/question/getuser". Login required
router.get('/fetchallquestions', fetchuser, async (req, res) => {
    try {
        const questions = await Question.find({ user: req.user.id });
        res.json(questions)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 5: Get All the teacher Question using: GET "/api/question/getteacheruser". Login required
router.get('/fetchallteacherquestions/:id', async (req, res) => {
try {
    const { id}= req.params
    const questions = await Question.find( {user: id });
    res.json( questions)
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})

// ROUTE 6: Get All the teacher Question using: GET "/api/question/getteacheruser". Login required
router.get('/fetchallteacheroption', async (req, res) => {
    try {
        const questions = await Question.find( {usertype:"Teacher" }).populate(this.name);
        res.json( questions)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    })

// ROUTE 2: Add a new Question using: POST "/api/question/addquestion". Login required
router.post('/addquestion', fetchuser, [
    body('currentquestion', 'Enter a valid title').isLength({ min: 1 }),
    body('option1', 'Description must be atleast 5 characters').isLength({ min: 2 }),
    body('option2', 'Description must be atleast 5 characters').isLength({ min: 2 }),
    body('option3', 'Description must be atleast 5 characters').isLength({ min: 2 }),
    body('option4', 'Description must be atleast 5 characters').isLength({ min: 2 })], async (req, res) => {
        try {
            const {currentquestion, usertype, option1, option2, option3, option4, answer } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const question = new Question({
                currentquestion, usertype, option1, option2, option3, option4, answer, user: req.user.id
            })
            const savedQuestion = await question.save()

            res.json(savedQuestion)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 3: Update an existing Question using: PUT "/api/questions/updatequestion". Login required
router.put('/updatequestion/:id', fetchuser, async (req, res) => {
    const {currentquestion, option1, option2, option3, option4, answer } = req.body;
    try {
        // Create a newQuestion object
        const newQuestion = {};
        if (currentquestion) { newQuestion.currentquestion = currentquestion };
        if (option1) { newQuestion.option1 = option1 };
        if (option2) { newQuestion.option2 = option2 };
        if (option3) { newQuestion.option3 = option3 };
        if (option4) { newQuestion.option4 = option4 };
        if (answer) { newQuestion.answer = answer };

        // Find the question to be updated and update it
        let question = await Question.findById(req.params.id);
        if (!question) { return res.status(404).send("Not Found") }

        if (question.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        question = await Question.findByIdAndUpdate(req.params.id, { $set: newQuestion }, { new: true })
        res.json({ question });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing Question using: DELETE "/api/question/deletequestion". Login required
router.delete('/deletequestion/:id', fetchuser, async (req, res) => {
    try {
        // Find the question to be delete and delete it
        let question = await Question.findById(req.params.id);
        if (!question) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Question
        if (question.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        question = await Question.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Question has been deleted", question: question });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router