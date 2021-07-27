const express = require("express");
const router = express.Router();
const { Tasks } = require("../models");

router.get('/', async (req, res) =>{
    const listOfTasks = await Tasks.findAll()
    res.json(listOfTasks);
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const task = await Tasks.findByPk(id);
    res.json(task);
  });

router.post("/", async (req, res) => {
    const task = req.body
    await Tasks.create(task)
    res.json(task);
});

router.delete("/:taskId", async (req, res) =>{
    const taskId = req.params.taskId
    await Tasks.destroy({
        where: {
            id:taskId,
        },
    });
    res.json("Delete task complete");
});

module.exports = router;