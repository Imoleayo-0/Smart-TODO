import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
    },
    description: {
      type: String,
      required: [true, "Task description is required"],
    },
    start_date: {
      type: String,
      default: Date.now(),
    },
    due_date: {
      type: String,
      required: [true, "Task due date is required"],
    },
  },
  { timestamps: true },
);

const todoModel = mongoose.model("tasks", todoSchema);

export default todoModel;
