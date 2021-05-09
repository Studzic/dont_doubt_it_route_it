const router = require('express').Router();
//es6 module to get id
const { v4: uuid } = require('uuid');
const { createNewNote, deleteNote } = require('../../lib/notes') 
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uuid();
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
);
// BONUS 
router.delete('/notes/:id', (req, res) => {
    const note = deleteNote(req.params.id, notes);
    res.json(note);
})

module.exports = router;