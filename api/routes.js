const express = require('express');
const router = express.Router();

let animals = {
    'Cows': '50',
    'Dogs': '1',
    'Pigs': '100',
    'Sheep': '20'
}

router.get('/return_crew', (req, res) => {
    res.status(200).send(animals);
});

router.get('/return_number_of_animals_per_category/:category', (req, res) => {
    let category = req.params.category;
    if (!animals[category]) {
        res.status(404).send({status: 404, error: 'Category not found'});
    } else {
        res.status(200).send({status: 200, number: animals[category]});
    }
});

router.put('/update_number_of_animals/:category', (req, res) => {
    let category = req.params.category;
    let number = req.query.number;
    if (!animals[category]) {
        res.status(404).send({status: 404, error: 'Category not found'});
    } else {
        animals[category] = number;
        res.status(200).send({status: 200, number: animals[category]});
    }
});

router.delete('/delete_animal_category/:category', (req, res) => {
    let category = req.params.category;
    if (!animals[category]) {
        res.status(404).send({status: 404, error: 'Category not found'});
    } else {
        delete animals[category];
        res.status(200).send({status: 200, animals});
    }
});

module.exports = router;