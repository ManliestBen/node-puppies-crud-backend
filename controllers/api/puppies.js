const Puppy =require('../../models/puppy');

module.exports = {
    index,
    create,
    show,
    update,
    deleteOne

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

function show(req, res) {
    Puppy.findById(req.params.id)
    .then (puppy => res.json(puppy))
    .catch(err => res.status(500).json(err))
}

// async function show(req, res) {
//     const puppy = await Puppy.findById(req.params.id)
//     .then (puppy => res.json(puppy))
//     .catch(err => res.status(500).json(err))
// }

function update(req, res) {
    Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then (puppy => res.json(puppy))
    .catch(err => res.status(500).json(err))
}

// async function update(req, res) {
//     const puppy = await Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     .then (puppy => res.json(puppy))
//     .catch(err => res.status(500).json(err))
// }

function deleteOne(req, res) {
    Puppy.findByIdAndDelete(req.params.id)
    .then (puppy => res.json(puppy))
    .catch(err => res.status(500).json(err))
}

// async function deleteOne(req, res) {
//     const puppy = await Puppy.findByIdAndDelete(req.params.id)
//     .then (puppy => res.json(puppy))
//     .catch(err => res.status(500).json(err))
// }

