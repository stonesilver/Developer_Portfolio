import SectionHeader from '../SectionHeader/SectionHeader.component';
import Button from '../button/Button.component';
import { Contacts } from '../svgIcons/Icons';
import Scroll from '../Scroll/Scroll.component';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import contactImg from '../../public/images/contact-me.jpg';
import contactStyles from './Contact.module.scss';

const Contact = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    alert('Submitted!');
  };
  return (
    <div className={contactStyles.contact}>
      <SectionHeader text='Contact' info='Send a message or make an inquire' />
      <div className={contactStyles.contentContainer}>
        <div className={contactStyles.formContainner}>
          <form onSubmit={onFormSubmit}>
            <label htmlFor='name' className={contactStyles.name}>
              <input
                type='text'
                name='name'
                id={contactStyles.name}
                placeholder='name'
              />
            </label>
            <label htmlFor='email' className={contactStyles.email}>
              <input
                type='email'
                name='email'
                id={contactStyles.email}
                placeholder='email'
              />
            </label>
            <label htmlFor='message' className={contactStyles.message}>
              <textarea
                name='message'
                id={contactStyles.message}
                placeholder='message'
                onChange={() => console.log('Message')}
              ></textarea>
            </label>
            <Button text='Submit' backgroundColor={true} type={true} />
          </form>
        </div>
        <div className={contactStyles.imageContainer}>
          {/* <Contacts /> */}
          <img
            src={contactImg}
            alt='contactMe'
            className={contactStyles.image}
          />
        </div>
      </div>
      <div className={contactStyles.scrollUp}>
        <Scroll icon={faArrowUp} text='Scroll Up' reverse={true} />
      </div>
    </div>
  );
};

export default Contact;
