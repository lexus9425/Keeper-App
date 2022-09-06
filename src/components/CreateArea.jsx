import React, { useState } from "react";

function CreateArea() {

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
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
