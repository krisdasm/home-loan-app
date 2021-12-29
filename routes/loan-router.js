const express = require('express');
const router = express.Router();
const Loan = require('../models/Loans');


router.get('/', async (req, res) => {

    try {
        const loanReqs = await Loan.find();
        res.json(loanReqs);

    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/apply', async (req, res) => {
    const post = new Loan({
        title: req.body.title,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        age: req.body.age,
        emailId: req.body.emailId,
        panNo: req.body.panNo,
        loanType: req.body.loanType,
        loanAmount: req.body.loanAmount,
        existingLoan: req.body.existingLoan,
        remark: req.body.remark
    });

    try {
        const savePost = await post.save();
        res.json(savePost);

    } catch (err) {
        res.json({ message: err });
    }

    // post.save()
    //     .then(data => {
    //         res.json(data);
    //     })
    //     .catch(err => {
    //         res.json({ message: err })
    //     });
});

//find a record with specific id
router.get('/status/:id', async (req, res) => {

    try {
        const loan = await Loan.findById(req.params.id);
        res.json(loan);

    } catch (err) {
        res.json({ message: err });
    }
});

//delete a reord with specific id
router.delete('/:id', async (req, res) => {

    try {
        const loan = await Loan.remove({ _id: req.params.id });
        res.json(loan);

    } catch (err) {
        res.json({ message: err });
    }
});

//update a post

router.patch('/:id', async (req, res) => {

    try {
        const updLoan = await Loan.updateOne({ _id: req.params.id }, {
            $set: {
                loanAmount: req.body.loanAmount,
                remark: req.body.remark
            }
        });
        const loan = await Loan.findById(req.params.id);
        res.json(loan);

    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;