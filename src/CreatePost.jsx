import React from 'react'
import "./CreatePost.css"
function CreatePost() {
  return (
    <>
    <div className="form-container">
      <form className="form">
      <div className="radio-inputs">
  <label className="radio">
    <input type="radio" name="radio" checked=""/>
    <span className="name">Public</span>
  </label>
  <label className="radio">
    <input type="radio" name="radio"/>
    <span className="name">Private</span>
  </label>  
    </div>

      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input required="" name="name" id="name" type="text"/>
        </div>
        <div className="form-group">
          <label htmlFor="Title">Title</label>
          <input required="" name="Title" id="Title" type="text"/>
        </div>
        <div className="form-group">
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
        </div>
        <button type="submit" className="form-submit-btn">Submit</button>
      </form>
    </div>
    </>
  )
}

export default CreatePost