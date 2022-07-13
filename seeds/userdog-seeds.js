const { UserDog } = require('../models');

const userDogData = [
    {
        user_id: 1,
        dog_id: 1
    },
    {
        user_id: 2,
        dog_id: 2
    },
    {
        user_id: 3,
        dog_id: 3
    },
    {
        user_id: 4,
        dog_id: 4
    },
    {
        user_id: 5,
        dog_id: 5
    },
    {
        user_id: 6,
        dog_id: 6
    },
    {
        user_id: 7,
        dog_id: 7
    },
    {
        user_id: 8,
        dog_id: 8
    },

];

const seedUserDogs = () => UserDog.bulkCreate(userDogData);

/* module.exports = seedUserDogs; */