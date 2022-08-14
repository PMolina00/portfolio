import React, { useState } from 'react'
import styles from './contactForm.module.css'

const ContactForm = () => {
  const [dataForm, setDataForm] = useState({
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(dataForm)
    setDataForm({
      email: '',
      message: ''
    })
  }

  return (
    <div className={styles.contactFormContainer}>
        <form className={styles.formContainer} onSubmit={e => handleSubmit(e)}>
            <label className={styles.labelContactForm}>Email</label>
            <input
            type="email"
            name="email"
            className={styles.emailContactForm}
            value={dataForm.email}
            onChange={handleChange}
            required
            />
            <label className={styles.labelContactForm}>Mensaje</label>
            <textarea
            type="text"
            name="message"
            className={styles.messageContactForm}
            value={dataForm.message}
            onChange={handleChange}
            required
            />
            <button type="submit" className={styles.submitButton}>enviar</button>
        </form>
    </div>
  )
}

export default ContactForm
