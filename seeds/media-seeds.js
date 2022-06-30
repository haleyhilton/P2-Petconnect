const { Media } = require('../models');

const mediaData = [
    {
        picture_url: 'a url',
        user_id: 1,
        dog_id: 1
    },
    {
        picture_url: 'a url',
        user_id: 2,
        dog_id: 2
    },
    {
        picture_url: 'a url',
        user_id: 3,
        dog_id: 3
    },
    {
        picture_url: 'a url',
        user_id: 4,
        dog_id: 4
    },
    {
        picture_url: 'a url',
        user_id: 5,
        dog_id: 5
    },
    {
        picture_url: 'a url',
        user_id: 6,
        dog_id: 6
    },
    {
        picture_url: 'a url',
        user_id: 7,
        dog_id: 7
    },
    {
        picture_url: 'a url',
        user_id: 8,
        dog_id: 8
    },

];

const seedMedia = () => Media.bulkCreate(userMedia);

module.exports = seedMedia;