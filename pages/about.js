import styles from '../styles/About.module.css';
import sassy_styles from '../styles/sass/About.module.scss';

const AboutPage = () => {
  return (
    <>
      <h2>About Page</h2>
      <h3 className={sassy_styles.highlightcss}>Deal Of The Week</h3>
      <h3 className={styles.highlight}>Deal Of The Day</h3>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-success">Success</button>
    </>
  );
};

export default AboutPage;
