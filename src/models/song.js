const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la canción es requerido'],
        trim: true
    },
    path: {
        type: String,
        required: [true, 'La ruta de la canción es requerida'],
        trim: true
    },
    plays: {
        type: Number,
        default: 0,
        min: [0, 'El número de reproducciones no puede ser negativo']
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Song', songSchema);