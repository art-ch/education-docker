import styles from '../styles/Contact.module.css';
import sassy_styles from '../styles/sass/Contact.module.scss';

const ContactPage = () => {
  const fakeContacts = [
    { id: '1', field: 'Name', value: 'Chuck Rogers' },
    { id: '2', field: 'Street Address', value: '2715 Mulberry Avenue' },
    { id: '3', field: 'City', value: 'Morrilton' },
    { id: '4', field: 'State', value: 'Arkansas' },
    { id: '5', field: 'Zipcode', value: '72110' },
    { id: '6', field: 'Phone Number', value: '501-354-8229' }
  ];
  return (
    <>
      <h2>Contact Page</h2>
      <h3 className={styles.highlight}>Deal Of The Day</h3>
      <article>
        <h1>Contacts</h1>
        <div className="contacts">
          {fakeContacts.map(({ id, field, value }) => (
            <div key={id} className={sassy_styles.singleContact}>
              <h6>{field}:</h6>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default ContactPage;
