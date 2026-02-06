import '../Common.css';
import { Link } from 'react-router';

const Welcome = () => {
return (
  <div className="content">
    <div className="emphasis-block">
      <h1>Welcome to the Bluestone Gulch Wiki!</h1>
      <p>
        Please mind our dust. This page and all the linked pages are still under construction, just like the main facility! Feel free to take a gander around using the links in the sidebar, or visit the page on <Link to='/contributing'>contributing</Link> to learn how you could help shape the lore as it's created! Otherwise, you can visit the <a href='https://forms.gle/kYpMPUaMEN4NWPSx9'>feedback form</a> if you've got thoughts you'd like to share with us!
      </p>
    </div>
    <div className='content-block'>
      <h2>You must be 18 or older to play this server or view the contents of this wiki, no exception.</h2>
      <p>
        This server and wiki both contain references to vore and other sexual content. While they are not the primary focus of the station, they are present. Birthdate checks on entry and random ID checks will occur, and you will be permanantly banned if you're found to be under 18.
      </p>
    </div>
    <div className='emphasis-block'>
      <h2>What is this?</h2>
      <p>
        Bluestone Gulch is a game server for the popular roleplay-survival-..roguelike..? game "Space Station 13". Derived from the codebase of Outpost 21, which itself is derived from the codebase of Chompstation2, which is a mirror of Chompstation1, which is-.. at this point, there's been so many iterations that it's hard to relate this codebase to anything other than.. semi-BayStation, or "Vore Code".
      </p>
      <p>
        Now that we're caught up on the basics.. what makes Bluestone different is the intent to focus on grounded roleplay and immersion in the setting. This is a small collaborative roleplay environment, and we intend to keep it that way by ensuring that everyone here stays immersed in the culture that makes this place special.
      </p>
    </div>
    
    <div className='content-block'>
      <h2>What should I expect?</h2>
      <p>
        This server is intended as a relatively small group of dedicated roleplayers, with a constant culture of mutual respect. While being discerning is always hard, we do have a decently strict whitelist for the purposes of making sure you're down to engage with the setting and cooperate with others to lift it up to its full potential. 
      </p>
      <ul>
        <li>Your character will be subject to IC consequences, and you will be expected to tolerate them. If they commit egregious crimes, or prove themselves to be an excessively poor worker.. then they would likely be suspended or fired from a real job.</li>
        <li>The setting is meant to be taken seriously, with disbelief suspended to a reasonable degree. Engaging with anything becomes exceedingly hard when someone wants to act like a marvel character.</li>
        <li>While not nearly as intense as most SS13 servers, things may happen that your character will have to overcome. Hard antagonists will be exceedingly rare, but the roleplay is intended to be complemented by the struggles characteristic of SS13. Shit goes wrong.</li>
        <li>This server isn't for everyone, or intended as a replacement for another server. We welcome you if this sounds like your kind of place, all the same!</li>
      </ul>
    </div>
    </div>
    );
};

export default Welcome;