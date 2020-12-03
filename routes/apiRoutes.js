const router = require("express").Router();
const store = require("../db/store");

// GET "/api/notes" responds with all notes from the database
router.get("/notes", (req, res) => {
  console.log("I am inside getNote()");
  store
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// POST "/api/notes" 
// Use addNote in the store object
// YOUR CODE HERE

router.post("/notes", (req, res) => {
  console.log("I am inside addNote()");
  store
    .addNote(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
// Use removeNote method in the store object
// YOUR CODE HERE

router.delete("/notes/:id", (req, res) => {
  console.log("I am inside removeNote()");
  id = req.params.id;
  store
    .removeNote(id)
    .then(() => res.json({
      ok: true
    }))
});


module.exports = router;