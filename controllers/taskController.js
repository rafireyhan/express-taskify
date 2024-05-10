const { response } = require("express");
const taskmodel = require("../models/taskModel");

const createTask = async (req,res)=>{
    try {
        const newTask = new taskmodel({
            title: req.body.title,
            description: req.body.description,
            status: 'pending',
            updatedAt: Date.now()
        });

        await newTask.save();

        return res.status(201).json({
            message: "Task berhasil dibuat!",
            code: 201,
            data: newTask
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
            code: 500,
        })
    }
}

const getTask = async (req,res)=>{
    try {
        const taskId = req.query._id;
        let findTask = await taskmodel.find();
        if (taskId){
            findTask = await taskmodel.find({_id: taskId});
        }
        return res.status(200).json({
            message:"Success",
            code: 200,
            data: findTask
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
            code: 500,
        })
    }
}

const updateTask = async (req,res)=>{
    try {
        const taskId = req.body._id;
        const findTask = await taskmodel.findById({_id: taskId});
        if (!findTask){
            return res.status(404).json({
                message: "Task tidak ditemukan!",
                code: 404,
                data: findTask
            })
        }

        await taskmodel.updateOne(
            {_id: taskId},
            {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                updatedAt: Date.now()
        });

        return res.status(200).json({
            message: "Task berhasil di-update!",
            code: 200,
        })

    } catch (error) {
        return res.status(500).json({
            message: error,
            code: 500,
        })
    }
}

const deleteTask = async(req,res)=>{
    try {
        const taskId = req.body._id;
        const findTask = await taskmodel.findById({_id: taskId});

        if(!findTask){
            return res.status(404).json({
                message: "Task tidak ditemukan!",
                code: 404,
                data: findTask
            })
        }

        await taskmodel.deleteOne({_id: taskId});
        return res.status(200).json({
            message: "Task berhasil di-hapus!",
            code: 200
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
            code: 500,
        })
    }
}

module.exports = {
    createTask,
    getTask,
    updateTask,
    deleteTask
}