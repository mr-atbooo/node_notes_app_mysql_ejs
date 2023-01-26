//controllers/admin.js in controller folder
const noteModel = require('../models/note');

  exports.getAll = (req, res, next) => {
        noteModel.fetchAll()
    .then(([notes,metaData])=>{
      console.log(notes);
      res.render('index',{
        pageTitle:'Notes',
        allNotes:notes,
      });
    })
    .catch(err=>{console.log(err)});
  };
  
  
  exports.storeNotes =(req, res, next) => {
    const title = req.body.text;
    const state = 0;
    const note = new noteModel(null,title,state);
    note.save()
    .then(() => {res.redirect('/notes');})
    .catch(err => console.log(err));
  };

  exports.editNotes = (req, res, next) => {
    const noteId = req.params.notesId;
    const edit = req.query.edit;
    if(!edit){ res.redirect('/');}
    noteModel.findById(noteId)
    .then(([notes,metaData])=>{
      res.render('edit_note',{
        pageTitle:'Edit Note',
        singleNote:notes[0],
      });
    })
    .catch(err=>{console.log(err)});
  };

  exports.updateNotes =(req, res, next) => {
    const id = req.body.note_id;
    const title = req.body.text;
    const state = 0;
    const note = new noteModel(id,title,state);
    note.update()
    .then(()=>{ res.redirect('/notes');})
    .catch(err=>{console.log(err)});
  };
  
  exports.deleteNotes = (req, res, next) => {
    const id = req.body.id;
     noteModel.deleteById(id) 
     .then(()=>{res.redirect('/notes');})
    .catch(err=>{console.log(err)});
  };
