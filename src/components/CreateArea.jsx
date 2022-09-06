import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChagne(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input 
          name="title"
          onChange={handleChagne}
          value={note.title} 
          placeholder="Title" 
        />
        <textarea 
          name="content" 
          onChange={handleChagne}
          value={note.content} 
          placeholder="Take a note..." 
          rows="3" 
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
