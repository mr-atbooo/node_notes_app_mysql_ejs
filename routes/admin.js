//routes/admin.js in routes folder 
const express = require('express');
const notesController = require('../controllers/nodeCont');
const router = express.Router();

router.get('/', notesController.getAll);
router.get('/notes', notesController.getAll);
router.get('/notes/:notesId/edit', notesController.editNotes);
router.post('/store-notes', notesController.storeNotes);
router.post('/update-notes', notesController.updateNotes);
router.post('/delete-notes', notesController.deleteNotes);

module.exports = router;
