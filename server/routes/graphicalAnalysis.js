import express from "express";
import UserModel from "../models/users.js";

const router = express.Router();

// GET User Info
router.get('/graphicalAnalysis', async (req, res) => {
  try {
    const usersData = await UserModel.find();

    // Calculate the count of males and females
    let malesCount = 0;
    let femalesCount = 0;

    usersData.forEach(user => {
      if (user.sex === 'Male') {
        malesCount++;
      } else if (user.sex === 'Female') {
        femalesCount++;
      }
    });

    res.json({ males: malesCount, females: femalesCount });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;