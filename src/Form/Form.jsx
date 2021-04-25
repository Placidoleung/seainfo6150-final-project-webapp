import React, { useState } from "react";
import styles from './Form.module.css';


const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div className={styles.container}>
      {
        submittedForm ? (
          <div>Thank you {submittedForm.get("firstName")}  {submittedForm.get("lastName")}!</div>
        ) : (
          <form className={styles.form} onSubmit={onSubmit}>
            <label htmlFor="firstName">First Name*</label>
            <input type="text" name="firstName" id="firstName" required/>
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" name="lastName" id="lastName" required/>
            <label htmlFor="email">Email*</label>
            <input type="email" name="email" id="email" required/>
            <label htmlFor="tel">Telephone</label>
            <input type="tel" name="tel" id="tel" placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>

            <label htmlFor="usingTime">How long have you been using BlockNews?
</label>
            <select name="usingTime" id="usingTime">
              <option value="day">Less than a week</option>
              <option value="week">Several weeks</option>
              <option value="month">Several months</option>
              <option value="year">More than a year</option>
            </select>
            <label htmlFor="often">How often do you use BlockNews? </label>
            <select name="often" id="often">
              <option value="day">Everyday</option>
              <option value="week">Every Week</option>
              <option value="month">Every Month</option>
              <option value="rarely">Rarely</option>
            </select>
            <label htmlFor="message">Your Message*</label>
            <input type="text" name="message" id="message"  required/>
            <label>May we contact you to follow up?</label>
            <div className={styles.contact}>
              <label htmlFor="contact-yes">Yes</label><input type="radio" name="contact" id="contact-yes" value="yes" />
              <label htmlFor="contact-no">No</label><input type="radio" name="contact" id="contact-no" value="no" />
            </div>
            <input type="submit" value="Send" />
          </form>
        )
      }
    </div>
  )
}

export default Form
