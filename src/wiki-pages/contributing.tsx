import '../Common.css';
import { Link } from 'react-router';

const Contributing = () => {
return (
  <div className="content">
    <div className="emphasis-block">
        <h1 className='backed'>Contributing</h1>
        <p>
        Thank you so much for looking at how you can help! We're currently still riveting this hunk of code and assorted junk together, and we can always use some extra help.
        </p>
    </div>
    <div className='content-block'>
      <h3>What can I help with?</h3>
      <p>
        To start, the part of the server that is getting the most work as of now is the lore and setting. Rome wasn't built in a day, and the only technology they had to make sense of was the aqueduct. Listed below are the random pages that still need to be worked on. You can peruse the topics and choose one that you feel comfortable on! To discuss and get your work into the server, dm @whooshboom on discord to be added to the server. Lore isn't the only thing that needs work, though- If you're familiar with DM and all the awful conditions associated with working on it, we have quite a few dev tasks that need to be done before launch.
      </p>
    </div>
    <div className='content-block'>
      <h2>Best Practices (Wiki)</h2>
      <p>
        When creating content for the wiki, there's a set of things that are neccessary to do in order to keep things functional and uniform, to preserve the design and make things more professional! If you have any questions on what the best practice is for something you're working on, either reach out to @whooshboom or look for a completed wiki page on the sort of content you're looking to contribute.
      </p>
      <ul>
        <li>The general structure of a wiki page starts with a title and a quick summary of the content the page is about. Next is usually some form of relevant quote, intended to make the page feel more in-character, like a news clipping or such. This may not always be possible, but it's heavily encouraged. The rest of the page can be broken into different sections, such as "How to find it", "Corporate Goals".. etc.</li>
        <li>The pages should all be written in a matter-of-fact tone (and may be adjusted to fit this tone). The intention of this is to immerse the wiki in a corporate vibe to match the server itself.</li>
        <li>Personal anecdotes and quips should be kept to an absolute minimum. No characters owned by any player should be referenced in the wiki, outside of the staff records page.</li>
      </ul>
      <p>
        The rest of the best practices are formatting-based, and we'll take care of that when your page is inserted into the wiki.
      </p>
    </div>
    <div className='content-block'>
      <h2 className='backed'>Open Lore Tasks</h2>
      <ul>
        <li>Species (ideas/elements can be found on the <Link to={'/species/species'}>associated page</Link>)</li>
          <ul>
            <li>Akula</li>
            <li>Vulpankin</li>
            <li>Alarune</li>
            <li>Tajarans</li>
            <li>Vassilian</li>
            <li>Teshari</li>
            <li>Nevrean</li>
            <li>Diona</li>
            <li>Sergal</li>
            <li>Promethean</li>
            <li>Changelings</li>
            <li>Any unmentioned species is <span className='bold'>probably</span> not listed because it's already half-done or its design is something there's already a vision for. Worth asking if you don't see the one you want to work on.</li>
          </ul>
        <li>Trans-Stellar Corporations and other Factions</li>
          <ul>
            <li></li>
          </ul>
        <li>SOP Documents</li>
      </ul>
    </div>
    <div className='content-block'>
      <h2 className='backed'>Open General Wiki Tasks</h2>
      <ul>
        <li>Department Guides (use the engineering guide as a template)</li>
        <li>Paperwork Templates</li>
      </ul>
    </div>
    <div className='content-block'>
      <h2 className='backed'>Development Changes</h2>
      <ul>
        <li>Priority : Change</li>
        <li></li>
      </ul>
    </div>
  </div>
);
};

export default Contributing;