import image from "../../image/about-us.jpeg"

const AboutUs = () => {
  return (
    <>

      <div className="about-container">
        <img src={image} alt="About EventHub" className="about-image" />
        <p className="about-text">
          Welcome to EventHub! We are a platform dedicated to helping people find and share amazing events happening around them.
        </p>
        <p className="about-text">
          Our mission is to connect communities through experiences and make event discovery seamless and fun.
        </p>
        <p className="about-text">
          Whether you're looking for concerts, conferences, meetups, or festivals, EventHub makes it easy to discover and participate in exciting events.
        </p>
        <p className="about-text">
          We aim to empower event organizers by providing tools to promote and manage their events efficiently.
        </p>
        <p className="about-text">
          Join us in making every event a memorable experience!
        </p>
      </div>
     
    </>
  );
};

export default AboutUs;