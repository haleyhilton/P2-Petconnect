const { Media } = require('../models');

const mediaData = [
    {
        picture_url: './media/womanwithdog.PNG',
        user_id: 1,
        dog_id: null
    },
    {
        picture_url: './media/josh.PNG',
        user_id: 2,
        dog_id: null
    },
    {
        user_id: 3,
        picture_url: './media/trisha.PNG',
        dog_id: null
    },
    {
        picture_url: './media/haley.PNG',
        user_id: 4,
        dog_id: null
    },
    {
        picture_url: './media/haley.PNG',
        user_id: 5,
        dog_id: null
    },
    {
        picture_url: './media/haley.PNG',
        user_id: 6,
        dog_id: null
    },
    {
        picture_url: './media/haley.PNG',
        user_id: 7,
        dog_id: null
    },
    {
        picture_url: './media/haley.PNG',
        user_id: 8,
        dog_id: null
    },
    {
        picture_url: './media/joeydog.PNG',
        user_id: null,
        dog_id: 1
    },
    {
        picture_url: './media/haleydog.PNG',
        user_id: null,
        dog_id: 2
    },
    {
        picture_url: './media/dobie.PNG',
        user_id: null,
        dog_id: 3
    },
    {
        picture_url: './media/corgi.PNG',
        user_id: null,
        dog_id: 4
    },
    {
        picture_url: './media/dog1.PNG',
        user_id: null,
        dog_id: 5
    },
    {
        picture_url: './media/blackdog.PNG',
        user_id: null,
        dog_id: 6
    },
    {
        picture_url: './media/charlesdog.PNG',
        user_id: null,
        dog_id: 7
    },
    {
        picture_url: './media/spike.PNG',
        user_id: null,
        dog_id: 8
    },
];

const seedMedia = () => Media.bulkCreate(mediaData);

module.exports = seedMedia;