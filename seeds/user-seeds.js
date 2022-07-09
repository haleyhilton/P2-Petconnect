const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: 'alvindogs',
        password: 'alvinpass',
        email: 'alvin@gmail.com',
        first_name: 'Alvin',
        last_name: 'Sandoval',
        date_of_birth: '2022-06-29',
        zip_code: 92065,
        media_id: 1
    },
    {
        id: 2,
        username: 'lupitadogs',
        password: 'lupitapass',
        email: 'lupita@gmail.com',
        first_name: 'Lupita',
        last_name: 'Gomez',
        date_of_birth: '2022-06-20',
        zip_code: 91911,
        media_id: 2
    },
    {
        id: 3,
        username: 'rossdogs',
        password: 'rosspass',
        email: 'ross@gmail.com',
        first_name: 'Ross',
        last_name: 'Cohen',
        date_of_birth: '2022-06-15',
        zip_code: 91911,
        media_id: 3
    },
    {
        id: 4,
        username: 'russelldogs',
        password: 'russelpass',
        email: 'russell@gmail.com',
        first_name: 'Russell',
        last_name: 'Smalls',
        date_of_birth: '2022-05-22',
        zip_code: 92065,
        media_id: 4
    },
    {
        id: 5,
        username: 'bobbydogs',
        password: 'bobbypass',
        email: 'bobby@gmail.com',
        first_name: 'Bobby',
        last_name: 'Mehelic',
        date_of_birth: '1999-03-23',
        zip_code: 92065,
        media_id: 5
    },
    {
        id: 6,
        username: 'bryandogs',
        password: 'bryanpass',
        email: 'bryan@gmail.com',
        first_name: 'Bryan',
        last_name: 'Jospeh',
        date_of_birth: '1999-03-23',
        zip_code: 92065,
        media_id: 6
    },
    {
        id: 7,
        username: 'cookydoedogs',
        password: 'sarapass',
        email: 'sara@gmail.com',
        first_name: 'Sara',
        last_name: 'Mehelic',
        date_of_birth: '1999-03-23',
        zip_code: 92065,
        media_id: 7
    },
    {
        id: 8,
        username: 'kyledogs',
        password: 'kylepass',
        email: 'kyle@gmail.com',
        first_name: 'Kyle',
        last_name: 'Beals',
        date_of_birth: '2000-10-05',
        zip_code: 92065,
        media_id: 8
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;