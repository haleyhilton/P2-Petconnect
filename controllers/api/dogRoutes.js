const router = require('express').Router();
const { Dog, User } = require('../../models');
const dogColorList = require('../../public/arrays/dogColors');
const dogBreedList = require('../../public/arrays/dogBreeds');
const dogSizeList = require('../../public/arrays/dogSizes');

router.get('/', async (req, res) => {
    try {
        const allDogData = await Dog.findAll({
            include: [{ model: User }],
        });
        res.status(200).json(allDogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// SEARCH AND FILTER UNDER CONSTRUCTION

router.get('/:age-:breed-:size-:sex-:color', async (req, res) => {
    //define filters manually
    let ageParam = req.params.age;
    let breedParam = req.params.breed;
    let sizeParam = req.params.size;
    let sexParam = req.params.sex;
    let colorParam = req.params.color;
    
    //test for unused filters and update them to show all choices
    if (req.params.age == "all") {
        ageParam = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }; 
    if (req.params.breed == "all") {
        breedParam = dogBreedList;
    };
    if (req.params.size == "all") {
        sizeParam = dogSizeList;
    };
    if (req.params.sex == "all") {
        sexParam = ["male", "female"];
    };
    if (req.params.color == "all") {
        colorParam = dogColorList;
    };
    

    //run request
    try {
        const dogData = await Dog.findAll({
            where: {
                age: ageParam,
                breed: breedParam,
                size: sizeParam,
                sex: sexParam,
                color: colorParam,
                //might want to specify for sale param later
            },
        });
        res.status(200).json(dogData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// END OF CONSTRUCTION

module.exports = router;