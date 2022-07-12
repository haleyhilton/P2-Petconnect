const router = require('express').Router();


//Haley landing.handlebars routes for testing purposes
router.get('/', async(req, res) => {
    const icons = [
        {image: "/images/beagle.png", modal: "modal1"},
        {image: "/images/bulldog.png", modal: "modal2"},
        {image: "/images/corgi.png", modal: "modal3"},
        {image: "/images/frenchy.png", modal: "modal4"},
        {image: "/images/german-s.png", modal: "modal5"},
        {image: "/images/golden.png", modal: "modal6"},
        {image: "/images/lab.png", modal: "modal7"},
        {image: "/images/poodle.png", modal: "modal8"},
        {image: "/images/rotty.png", modal: "modal9"},
        ]
    res.render('landing', {
        icons,
        logged_in: req.session.logged_in,
        user_id: req.session.user_id,
    });
})

module.exports = router;