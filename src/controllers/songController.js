const Song = require('../models/song');

// Crear una nueva canción
exports.createSong = async (req, res) => {
    try {
        const song = await Song.create(req.body);
        res.status(201).json({
            success: true,
            data: song
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// Obtener todas las canciones
exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json({
            success: true,
            count: songs.length,
            data: songs
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// Obtener una canción por ID
exports.getSongById = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) {
            return res.status(404).json({
                success: false,
                error: 'Canción no encontrada'
            });
        }
        res.status(200).json({
            success: true,
            data: song
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// Actualizar una canción
exports.updateSong = async (req, res) => {
    try {
        const song = await Song.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!song) {
            return res.status(404).json({
                success: false,
                error: 'Canción no encontrada'
            });
        }
        res.status(200).json({
            success: true,
            data: song
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// Eliminar una canción
exports.deleteSong = async (req, res) => {
    try {
        const song = await Song.findByIdAndDelete(req.params.id);
        if (!song) {
            return res.status(404).json({
                success: false,
                error: 'Canción no encontrada'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Canción eliminada exitosamente'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};
