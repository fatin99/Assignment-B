let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ModuleSchema = new Schema(
  {
    code: { type: String, required: true },
    title: { type: String, required: true },
    department: { type: String, required: true },
    credits: { type: Number, required: true, min: 1 },
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
    collection: 'module'
  }
);

ModuleSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

module.exports = mongoose.model('module', ModuleSchema);