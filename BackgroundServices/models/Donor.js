const mongoose = require('mongoose');

const DonorSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    address: { type: String},
    tel:{type:String, require:true},
    bloodgroup: { type: String, require: true },
    weight: { type: Number, require: true },
    date:{type:String},
    diseases: { type: String },
    age: { type: Number, require: true },
    bloodpressure: { type: String, require: true },
    status: { type: Number, default: 0 }
})

module.exports = mongoose.model("Donor", DonorSchema);