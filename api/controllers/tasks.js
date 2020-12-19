const Task = require('../models/task');
const User = require('../models/user');


exports.index = async (req, res, next) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  };

  exports.show = async (req, res, next) => {
    try {
      const task = await Task.findById(req.params.id);
  
      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }

  exports.create = async (req, res, next) => {
    try {
      const { owner, description, category, date } = req.body;
  
      const user = await User.findById(req.user._id);
  
      const tsk = await Task.create({
        owner: user.name,
        description: description,
        category: category,
        date: new Date(date)
      });
  
      res.status(200).json({ message: "Task was created successfully", task: tsk });
    } catch (error) {
      next(error);
    }
  };

  exports.update = async (req, res, next) => {
    try {
      const { _id, description, category, date } = req.body;
      
      const tk = await Task.findOneAndUpdate({ _id }, {
        description,
        category,
        date: new Date(date)
      });
  
      res.status(200).json({ message: "Task was updated successfully", task: tk });
    } catch (error) {
      next(error);
    }
  };

  exports.destroy = async (req, res, next) => {
    try {
      const { _id } = req.body;
      await Task.findOneAndDelete({ _id: _id });
  
      res.status(200).json({ message: "Task was deleted successfully" });
    } catch (error) {
      next(error);
    }
  };