const Thought = require('../models/Thoughts');

exports.getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    res.json(thoughts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    res.status(201).json(newThought);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json({ message: 'Thought deleted' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
