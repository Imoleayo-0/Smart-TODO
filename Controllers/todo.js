// TODO - MODEL - CONTROLLER - ROUTER - INDEX

import todoModel from "../models/todo.js";

export async function getTask(req, res) {

    try {
        const tasks = await todoModel.find();
        if (!tasks) {
            return res.status(404).json({
                status: "error",
                message: "Tasks not found"
            });
        }

        res.status(200).json({
            status: "Success",
            message: "Tasks found Successfully",
            tasks
        });

    } catch (error) {
        console.log("error-fetching-tasks", error)
    }
}

export async function createTask(req, res) {
    if (!req.body) {
        return res.status(422).json({
            status: "error",
            message: "All fields are required",
        });
    }
    try {
        const task = await todoModel.create(req.body);
        if (!task) {
            return res.status(400).json({
                status: "error",
                message: "Unable to create task",
            });
        }

        res.status(201).json({
            status: "success",
            message: "Task created successfully",
            data: task,
        });
    } catch (error) {
        console.log("error-creating-task", error);
    }
}


export async function updateTask(req, res) {
    if (!req.body) {
        return res.status(422).json({
            status: "error",
            message: "Update at least one field",
        });
    }
    if (!req.params.id) {
        return res.status(400).json({
            status: "error",
            message: "Please provide a task id",
        });
    }
    try {
        const task = await todoModel.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                status: "error",
                message: "Provided ID is incorrect",
            });
        }

        const updatedTask = await todoModel.findOneAndUpdate(
            { title: task.title },
            req.body,
            { new: true },
        );

        res.status(200).json({
            status: "success",
            message: "Task updated successfully",
            updatedTask,
        });
    } catch (error) {
        console.log("error-updating-task", error);
    }
}

export async function deleteTask(req, res) {

    if (!req.params.id) {
        return res.status(400).json({
            status: "error",
            message: "Please provide a task id",
        });
    }

    try {
        const task = await todoModel.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                status: "error",
                message: "Provided ID is incorrect",
            });
        }

        await todoModel.findByIdAndDelete(task._id)

        res.status(201).json({
            status: "Success",
            message: "Task deleted successfully",
        })

    } catch (error) {
        console.log("error deleting the task", error);
    }
}