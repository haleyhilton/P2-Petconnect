const router = require('express').Router();


//Haley landing.handlebars routes for testing purposes
router.get('/', async(req, res) => {
    const icons = [
        {image: "/images/bulldog.png", modal: "modal2", name: "Bulldog"},
        {image: "/images/corgi.png", modal: "modal3", name: "Corgi"},
        {image: "/images/frenchy.png", modal: "modal4", name: "French Bulldog"},
        {image: "/images/german-s.png", modal: "modal5", name: "German Shepherd"},
        {image: "/images/golden.png", modal: "modal6", name: "Golden Retriever"},
        {image: "/images/lab.png", modal: "modal7", name: "Labrador Retriever"},
        {image: "/images/poodle.png", modal: "modal8", name: "Poodle"},
        {image: "/images/rotty.png", modal: "modal9", name: "Rottweiler"},
        ]
    res.render('landing', {
        icons,
        logged_in: req.session.logged_in,
        user_id: req.session.user_id,
    });
})

module.exports = router;