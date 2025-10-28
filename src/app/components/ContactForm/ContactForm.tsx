'use client';

import { useState } from 'react';
import { MailOpen } from 'lucide-react';
import './ContactForm.css';
import Image from 'next/image';

import contactUs from '../../../../public/contact-form/contactUs.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    lookingFor: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      lookingFor: '',
      message: '',
    });
  };

  return (
    <section className='contact-form'>
      <div className='container'>
        <div className='leftColumn'>
          <Image src={contactUs} alt='contactUs' width={500} height={600} />
        </div>
        <div className='rightColumn'>
          <div className='contactForm'>
            <MailOpen className='decorativeIcon' size={80} strokeWidth={1} />

            <h3>Let&apos;s Talk!</h3>

            <form onSubmit={handleSubmit} className='form'>
              <div className='formGroup'>
                <label htmlFor='name'>What&apos;s your name?</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='input'
                  required
                />
              </div>

              <div className='formGroup'>
                <label htmlFor='email'>What&apos;s your email address?</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='input'
                  required
                />
              </div>

              <div className='formGroup'>
                <label htmlFor='phone'>What&apos;s your phone number?</label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='input'
                />
              </div>

              <div className='formGroup'>
                <label htmlFor='lookingFor'>What are you looking for?</label>
                <input
                  type='text'
                  id='lookingFor'
                  name='lookingFor'
                  value={formData.lookingFor}
                  onChange={handleChange}
                  className='input'
                />
              </div>

              <div className='formGroup'>
                <label htmlFor='message'>How can we help you?</label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className='textarea'
                ></textarea>
              </div>

              <button type='submit' className='submitButton'>
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
