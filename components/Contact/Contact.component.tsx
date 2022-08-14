import React, { useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader.component';
import Button from '../button/Button.component';
import axios from 'axios';
import Image from 'next/image';
import TextInput from './TextInput/TextInput';
import TextArea from './TextArea/TextArea';
import contactStyles from './Contact.module.scss';

interface State {
  submitted: boolean;
  submitting: boolean;
  info: { error: boolean; msg: null | string };
}

const Contact = () => {
  const [status, setStatus] = useState<State>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  // handle server response when submit button is clicked
  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus((prevState) => ({
        ...prevState,
        info: { error: true, msg: msg },
      }));
    }
  };

  // handles form input change
  const handleOnChange = (e: any) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  // handles the post action when the form is clicked
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        setStatus((prevState) => ({
          ...prevState,
          submitted: false,
          submitting: false,
        }));
        console.log(error);
        handleServerResponse(false, 'An error occurred. Please try again.');
      });
  };
  return (
    <div className={contactStyles.contact} id='contact'>
      <SectionHeader text='Contact' info='Send a message or make an inquire' />

      <div className={contactStyles.contentContainer}>
        <div className={contactStyles.formContainner}>
          <form onSubmit={handleOnSubmit}>
            <TextInput
              name='name'
              value={inputs.name}
              onChange={handleOnChange}
            />

            <TextInput
              name='email'
              value={inputs.email}
              onChange={handleOnChange}
            />

            <TextArea
              name='message'
              value={inputs.message}
              onChange={handleOnChange}
            />

            <Button
              text={
                !status.submitting
                  ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                  : 'Submitting...'
              }
              backgroundColor={true}
              type={true}
              submitting={status.submitting}
            />
          </form>
        </div>

        <div className={contactStyles.imageContainer}>
          <Image
            src='/images/contact-gif.webp'
            alt='contactMe'
            className={contactStyles.image}
            layout='fill'
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
