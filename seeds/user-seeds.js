const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: 'username',
        password: '$2b$10$/PdU6oMiHClzUrvunmX8juQAa/iljuSHZR/uSIDRhhcSFWLlOWZoO',
        email: 'alvin@gmail.com',
        bio: 'Notable Life Achievements: Can cook amazing instant noodles, semi-professional bathroom singer and I have never been in jail before (except if you count Monopoly) ',
        first_name: 'Alvin',
        last_name: 'Sandoval',
        date_of_birth: '2022-06-29',
        zip_code: 92065,
        media_id: 1
    },
    {
        id: 2,
        username: 'username2',
        password: '$2b$10$/PdU6oMiHClzUrvunmX8juQAa/iljuSHZR/uSIDRhhcSFWLlOWZoO',
        email: 'lupita@gmail.com',
        bio: 'Notable Life Achievements: Can cook amazing instant noodles, semi-professional bathroom singer and I have never been in jail before (except if you count Monopoly) ',
        first_name: 'Lupita',
        last_name: 'Gomez',
        date_of_birth: '2022-06-20',
        zip_code: 91911,
        media_id: 2
    },
    {
        id: 3,
        username: 'username3',
        password: '$2b$10$/PdU6oMiHClzUrvunmX8juQAa/iljuSHZR/uSIDRhhcSFWLlOWZoO',
        email: 'ross@gmail.com',
        bio: 'Notable Life Achievements: Can cook amazing instant noodles, semi-professional bathroom singer and I have never been in jail before (except if you count Monopoly) ',
        first_name: 'Ross',
        last_name: 'Cohen',
        date_of_birth: '2022-06-15',
        zip_code: 91911,
        media_id: 3
    },
    {
        id: 4,
        username: 'username4',
        password: '$2b$10$/PdU6oMiHClzUrvunmX8juQAa/iljuSHZR/uSIDRhhcSFWLlOWZoO',
        email: 'russell@gmail.com',
        bio: 'Notable Life Achievements: Can cook amazing instant noodles, semi-professional bathroom singer and I have never been in jail before (except if you count Monopoly) ',
        first_name: 'Russell',
        last_name: 'Smalls',
        date_of_birth: '2022-05-22',
        zip_code: 92065,
        media_id: 4
    },
    {
        id: 5,
        username: 'username5',
        password: '$2b$10$/PdU6oMiHClzUrvunmX8juQAa/iljuSHZR/uSIDRhhcSFWLlOWZoO',
        email: 'bobby@gmail.com',
        bio: 'Notable Life Achievements: Can cook amazing instant noodles, semi-professional bathroom singer and I have never been in jail before (except if you count Monopoly) ',
        first_name: 'Bobby',
        last_name: 'Mehelic',
        date_of_birth: '1999-03-23',
        zip_code: 92065,
        media_id: 5
    },
    {
        id: 6,
        username: 'username6',
        password: '$2b$10$/PdU6oMiHClzUrvunmX8juQAa/iljuSHZR/uSIDRhhcSFWLlOWZoO',
        email: 'bryan@gmail.com',
        bio: 'Notable Life Achievements: Can cook amazing instant noodles, semi-professional bathroom singer and I have never been in jail before (except if you count Monopoly) ',
        first_name: 'Bryan',
        last_name: 'Jospeh',
        date_of_birth: '1999-03-23',
        zip_code: 92065,
        media_id: 6
    },
    {
        id: 7,
        username: 'username7',
        password: '$2b$10$/PdU6oMiHClzUrvunmX8juQAa/iljuSHZR/uSIDRhhcSFWLlOWZoO',
        email: 'sara@gmail.com',
        bio: 'Notable Life Achievements: Can cook amazing instant noodles, semi-professional bathroom singer and I have never been in jail before (except if you count Monopoly) ',
        first_name: 'Sara',
        last_name: 'Mehelic',
        date_of_birth: '1999-03-23',
        zip_code: 92065,
        media_id: 7
    },
    {
        id: 8,
        username: 'username8',
        password: '$2b$10$/PdU6oMiHClzUrvunmX8juQAa/iljuSHZR/uSIDRhhcSFWLlOWZoO',
        email: 'kyle@gmail.com',
        bio: 'Notable Life Achievements: Can cook amazing instant noodles, semi-professional bathroom singer and I have never been in jail before (except if you count Monopoly) ',
        first_name: 'Kyle',
        last_name: 'Beals',
        date_of_birth: '2000-10-05',
        zip_code: 92065,
        media_id: 8
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;