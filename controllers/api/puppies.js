const Puppy =require('../../models/puppy');

module.exports = {
    index,
    create,

};

function index(req, res) {
    Puppy.find({})
        .then(puppies => res.json({puppies}))
        .catch(err => res.status(500).json(err))
}

// async function index(req, res) {
//     const puppies = await Puppy.find({})
//         .then(puppies => res.json(puppies))
//         .catch(err => res.status(500).json(err))
// }

function create(req, res) {
    Puppy.create(req.body)
        .then(puppy => res.json(puppy))
        .catch(err => res.status(500).json(err))
}

// async function create(req, res) {
//     const puppy = await Puppy.create(req.body)
//         .then(puppy => res.json(puppy))
//         .catch(err => res.status(500).json(err))
// }