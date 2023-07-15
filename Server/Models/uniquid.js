// utils.js
const Sequence = require('./sequence.model');
const getNextSequenceValue = async (sequenceName) => {
    const sequenceDoc = await Sequence.findByIdAndUpdate(
      sequenceName,
      { $inc: { sequence_value: 1 } },
      { new: true, upsert: true }
    );
    return sequenceDoc.sequence_value;
  };
  
  module.exports = { getNextSequenceValue };
  