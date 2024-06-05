import React, { useState } from 'react'

export default function ContactMe() {
  
    //contactFormData is the current value and setContactFormData is the updated value. contactFormData refers to the initial value of name, email, and message. setContactFormData is what is input by the user in the form's input fields
    const [contactFormData, setContactFormData] = useState({ name: '', email: '', message: '' });
    const [formErrors, setFormErrors] = useState({});

    const handleChanges = (e) => {
      //this is spreading contactFormData (an object) so that the target.name (stands for either the name, email, or message) is set to the value that the user types in the input fields. Then this function will give new values to the setContactFormData
      setContactFormData({ ...contactFormData, [e.target.name]: e.target.value })
    };

    // const handleBlurForm = (e) => {
    //   if (!e.target.value) {
    //     setFormErrors({ ...formErrors, [e.target.name]: 'This needs to be filled out' })
    //   } else {
    //     setFormErrors({ ...formErrors, [e.target.name]: '' })
    //   }
    // };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(contactFormData);
    };

    return (
      <section>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={contactFormData.name}
              onChange={handleChanges}
              // onBlur={handleBlurForm}
            />
          </div>
          <div>
          <label>Email:</label>
            <input
              type="email"
              name="email"
              value={contactFormData.email}
              onChange={handleChanges}
              // onBlur={handleBlurForm}
            />
          </div>
          <div>
          <label>Email Message:</label>
            <input
              type="text"
              name="message"
              value={contactFormData.message}
              onChange={handleChanges}
              // onBlur={handleBlurForm}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </section>
    )
  
}

