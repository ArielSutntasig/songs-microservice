const mongoose = require('mongoose');
const Song = require('../models/song');

const initialSongs = [
    {
        name: "Bohemian Rhapsody",
        path: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        plays: 1547823
    },
    {
        name: "Stairway to Heaven",
        path: "https://www.youtube.com/watch?v=QkF3oxziUI4",
        plays: 985632
    },
    {
        name: "Sweet Child O' Mine",
        path: "https://www.youtube.com/watch?v=1w7OgIMMRc4",
        plays: 784521
    },
    {
        name: "Hotel California",
        path: "https://www.youtube.com/watch?v=BciS5krYL80",
        plays: 654789
    },
    {
        name: "Imagine",
        path: "https://www.youtube.com/watch?v=YkgkThdzX-8",
        plays: 458963
    }
];

const initializeDB = async () => {
    try {
        const count = await Song.countDocuments();
        if (count === 0) {
            await Song.insertMany(initialSongs);
            console.log('Datos iniciales insertados correctamente');
        } else {
            console.log('La base de datos ya contiene datos');
        }
    } catch (error) {
        console.error('Error al inicializar la base de datos:', error);
    }
};

module.exports = initializeDB;