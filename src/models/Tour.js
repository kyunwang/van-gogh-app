const mongoose = require('mongoose');
const Schema = mongoos.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Tour = new Schema({
	deviceId: {
		type: String,
		isRequired: 'device needs an id',
	},
	startTime: String,
	endTime: String,
	date: {
		type: Date,
		default: Date.now(),
	},
	origin: [
		{
			id: {
				type: Number,
				isRequired: 'device needs an id',
			},
			startTime: String,
			endTime: String,
			attr: String,
		},
	],
	went: [],
	buffer: [],
});

module.exports = mongoose.model('Tour', Tour);
