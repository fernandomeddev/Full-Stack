const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

router.get("/:taskId", async (req, res) => {
    const taskId = req.params.taskId;
    const comments = await Comments.findAll({ where: {TaskId: taskId} })
    res.json(comments);
});

router.post("/", async (req, res) => {
    const comment = req.body;
    await Comments.create(comment);
    res.json(comment);
});

router.delete("/:commentId", async (req, res) => {
    const commentId = req.params.commentId;

    await Comments.destroy({
        where: {
            id:commentId,
        },
    });
    res.json("Delete comment complete")
});

module.exports = router;