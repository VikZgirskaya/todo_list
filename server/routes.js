const express = require("express");
const router = express.Router();
const { ToDoItem } = require("./database");

//GET /todo/list
router.get("/todo/list", async (req, res) => {
    const items = await ToDoItem.findAll();
    res.status(200).json({msg: "Get ToDo list", items: items})
})

//POST /todo/item
router.post("/todo/item", async (req, res) => {
    const item = await ToDoItem.create(req.body);
    res.status(201).json({msg: "Create ToDo item", item: item})
})

//PUT /todo/item/:id
router.put("/todo/item/:id", async (req, res) => {
    const item = await ToDoItem.findByPk(req.params.id);
    if (item) {
        await item.update(req.body);
        res.status(200).json({msg: "Update ToDo item", item: item})
    } else {
        res.status(404).json({ message: 'ToDo Item not found' });
    }
})

//DELETE /todo/item/:id
router.delete("/todo/item/:id", async (req, res) => {
    const item = await ToDoItem.findByPk(req.params.id);
    if (item) {
        await item.destroy();
        res.status(200).json({msg: "Delete ToDo item", item: item})
    } else {
        res.status(404).json({ message: 'ToDo Item not found' });
    }
})

module.exports = router;
