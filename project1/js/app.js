console.log('Hello World');
showNotes();

//if user  add somthing add it to local storage

const btn = document.getElementById('addBtn');
btn.addEventListener('click', function(e){
    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('notes');

    if(notes == null){
        notesObj = [];
    }
    else{ 
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addText.value = '';

    showNotes();
});

function showNotes(){
    let notes = localStorage.getItem('notes');

    if(notes == null){
        notesObj = [];
    }
    else{ 
        notesObj = JSON.parse(notes);
    }

    let html = '';
    notesObj.forEach(function(element, index){
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;"> 
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
        `;
    });
    let notesElem = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = `Nothing to show! Use "Add a note" section above to add notes.`;
    }
};

// delete a note
function deleteNote(index) {
    console.log("I am deleting", index);

    let notes = localStorage.getItem('notes');

    if(notes == null){
        notesObj = [];
    }
    else{ 
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes(); 

}