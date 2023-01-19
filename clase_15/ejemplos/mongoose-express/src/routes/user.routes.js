import { Router } from "express";
import { userModel } from "../models/user.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.json({ user });
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    // const body = req.body
    // const user = await userModel.create(body);
    const user = new userModel(req.body);
    await user.save();
    res.json({ info: "User Created", user });
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ info: "User Updated", user });
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    res.json({ info: "User deleted", user });
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default router;
