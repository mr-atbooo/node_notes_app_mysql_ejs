//models/product.js in model folder
const db = require('../util/database');

module.exports = class Note{
    constructor(noteId,noteTitle,noteStates){
        this.id = noteId;
        this.title = noteTitle;
        this.status =noteStates;
    }

    static fetchAll(){
        return db.execute('SELECT * FROM notes');
    }

    save(){
        return db.execute(
            'INSERT INTO notes (title, status) VALUES ( ?, ?)',
            [this.title, this.status]
          );
    }
    static findById(id) {
        return db.execute('SELECT * FROM notes WHERE id= ?',[id]);
    }
    update(){
        return db.execute(
            'UPDATE notes SET title = ?, status = ? WHERE id = ?', [this.title, this.status, this.id]);
    }
    static deleteById(id) {
        return db.execute('DELETE FROM notes WHERE id = ?', [id]);
    }

}