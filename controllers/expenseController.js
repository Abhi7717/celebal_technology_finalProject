const Expense = require('../models/expense');

const createExpense = async (req, res) => {
    const { amount, category, description, date } = req.body;
    try {
        const expense = await Expense.create({
            amount,
            category,
            description,
            date,
            user: req.user.id,
        });
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.id });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createExpense, getExpenses };
