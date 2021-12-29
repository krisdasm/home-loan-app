const mongoose = require('mongoose');

const LoanSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    emailId: {
        type: String,
        required: true
    },

    panNo: {
        type: String,
        required: true
    },

    loanType: {
        type: String,
        required: true
    },

    loanAmount: {
        type: Number,
        required: true
    },

    existingLoan: {
        type: Boolean,
        required: true
    },

    remark: {
        type: String,
        required: false
    },

    date: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        default: 'In-Progress'
    }
});

module.exports = mongoose.model('Loans', LoanSchema);