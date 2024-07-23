const Notification = require('../models/Notification');

// Create a new notification
const createNotification = async (userId, message) => {
    const notification = new Notification({ user: userId, message });
    await notification.save();
};

// Get notifications for a user
const getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ user: req.user.id });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createNotification, getNotifications };
