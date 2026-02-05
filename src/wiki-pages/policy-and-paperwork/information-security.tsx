import '../../Common.css';

const Information_Security = () => {
return (
  <div className="content">
    <div className="emphasis-block">
      <h1 className='backed'>
      Information Security
      </h1>
      <h3>
        This document is filed IC as SOP document FILL SERIAL
      </h3>
    </div>
    <div className="content">
      <div className="content-block">
        <p>
        "You all know the catchy saying - Loose lips sink ships! Well, I'm here to tell you, even though we're on dry land... you don't want to know what's beneath this rock. Even if you know the person you're talking to like they're your own flesh and blood- by telling them protected information, you're creating more and more opportunites for a leak of information. Whether it be a malicious eavesdropper, or a blabber-mouthed buddy- these small pinhole leaks add up!.. and a boat full of leaks will quickly find itself unable to keep above the waves."
        </p>
        <p><span className='bold'>- "Information Security and You: A Lesson on Keeping it Inside"</span> (Copyright Bluestone Oversight Board, 2568)</p>
      </div>
    </div>
    <div className="content-block">
      <h3 className='backed'>
        IS-CUI: Controlled Unclassified Information
      </h3>
      <p>
        This category is the lightest, pertaining to business secrets that exist as something to be exclusively internally, or with other board-approved individuals. A good example of IS-CUI would be knowledge of the supermatter engine's setup.
      </p>
      <p>
        Punishments for violating IS-CUI are minimul, and to be handled entirely administratively. The most common response to a failure to uphold this standard is a verbal or formal reprimand, with pay docking also being utilized for repeat offenses or intentional divulgance. Repeat violations may lead to the offending employee being let go, as they have breached their contract by sharing controlled information.
      </p> 
    </div>
    <div className="content-block">
      <h3 className='backed'>
        IS-PRT: Protected Information
      </h3>
      <p>
        This category is intended for more sensitive information, and even first-time offenses can carry security punishments if the breach of security warrants it. A good example of IS-PRT would be information on a research program with either combat or espionage potential, such as (Link)Shadekin.
      </p>
      <p>
        WIP
      </p> 
    </div>
    <div className="content-block">
      <h3 className='backed'>
        IS-SCR: Secured Information
      </h3>
      <p>
        This category is WIP
      </p>
      <p>
        WIP
      </p>
    </div>
    </div>
    );
};

export default Information_Security;