import * as React from 'react';
import '../scss/styles.scss';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import FlipCountdown from '@rumess/react-flip-countdown';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <>
      <div className="sakura-falling"></div>
      <img
        src="./img/dGOOfnA.png"
        alt="image-top-right"
        className="top-right-decoration"
      />
      <img
        src="./img/t6ffnbn.png"
        alt="image-top-left"
        className="top-left-decoration"
      />
      <section id="media"></section>
      <div className="wrap">
        <div className="title">
          <h1>Tushar </h1>
          <h2>&</h2>
          <h1>Vritangi</h1>
          <h3>Are getting married</h3>
          <p>
            on <span class="date">07 December 2023</span>, At{' '}
            <span class="place">Hotel, Lemonade</span> Opp. LIC office, Moti
            Dungari, Alwar
          </p>
        </div>
      </div>
      <FlipCountdown
        endAt={'2023-12-7 01:26:58'} // Date/Time
        dayTitle="Days"
        hourTitle="Hours"
        minuteTitle="Minutes"
        secondTitle="Seconds"
        hideYear
        hideMonth
        theme="dark"
      />

      <p className="footer">
        Can't wait to celebrate auspicious moment of our family with you! <br />
        Just a ping away for any queries:{' '}
        <a href="tel:9460254866">+91 9460254866</a>
        <span></span>
      </p>
      <div className="music">
        <audio src="./mp3/song.mp3" id="my_audio" loop="loop"></audio>
      </div>
      <p className="happiness">
        Join us in our happiness!
        <br />
      </p>

      <div className="actions">
        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20231205T183000Z%2F20231206T183000Z&details=You%20are%20cordially%20invited%20to%20the%20wedding%20of%20Tushar%20%26%20Vritangi.%0ACan%27t%20wait%20to%20celebrate%20the%20auspicious%20moment%20of%20our%20family%20with%20you%21%0AJust%20a%20ping%20away%20for%20any%20queries%3A%20%2B91%209460254866&location=Lemonade%20Hotel%2C%2033%2C%20opposite%20Lic%20regional%20office%2C%20Mangal%20Vihar%2C%20Moti%20Doongri%2C%20Alwar%2C%20Rajasthan%2030100&text=Tushar%20%26%20Vritangi%20Wedding"
          target="_blank"
        >
          <div className="venue">SAVE THE DATE</div>
        </a>
        <a href="https://maps.app.goo.gl/krUaUge3s59MH9ZNA" target="_blank">
          <div className="venue">SEE THE VENUE</div>
        </a>
        <a href="https://drive.google.com/file/d/1qUgWY36FPnBP4mIhUcnUJv1a8993DCPe/view?usp=sharing">
          <div className="venue">DOWNLOAD INVITATION CARD</div>
        </a>
      </div>
      <div className="team">
        <p className="happiness">
          Special request
          <br />
          <span className="inviter">
            <b>Dolly - Sandeep</b>
            <br />
          </span>
        </p>
        <p className="happiness">
          Welcome by
          <br />
          <span className="inviter">
            <b>Manju - Jagan </b>
            <br />
            <b>Anju - Ajit </b>
            <br />
            <b>Bhawna - Gourav</b>
            <br />
          </span>
        </p>

        <p className="happiness">
          R.S.V.P
          <br />
          <span className="inviter">
            <b>Om Prakash Gandhi </b>
            <br />
            <b>M/S Om Bartan Bhandar, Alwar </b>
            <br />
            <b>M/S CloudAlgo PVT. LTD., Jaipur</b>
            <br />
            <b>M/S Laxmi Bartan Bhandar, Alwar </b>
            <br />
            <b>M/S Baba Ki Dukan, Alwar</b>
            <br />
          </span>
        </p>

        <p className="happiness">
          W.B.C.F
          <br />
          <span className="inviter">
            <b>Gandhi Family </b>
            <br />
            <b>Luthra Family </b>
            <br />
            <b>Yadav Family</b>
            <br />
            <b>Chutani Family </b>
            <br />
            <b>Kumar Family</b>
            <br />
          </span>
        </p>

        <p className="happiness">
          मनोहार
          <br />
          <span className="inviter">
            आसमान से चांद उतरेगा तारे मुस्कुराएंगे, <br />
            हमें खुशी तब होगी जब आप हमारे मामा की शादी में ज़रूर से ज़रूर आएंगे।{' '}
            <br />
            <b>- यति और गुगु</b>
          </span>
        </p>
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
