import { useState } from "react";
import Contact from "./Contact";
import Location from "./Location";
const ContactForm = ({ maintenance }) => {
  const [contact, setContact] = useState(maintenance ? true : false);
  const [location, setLocation] = useState(false);

  return (
    <div id="contact-form">
      {location && <Location />}
      {contact && <Contact />}
      <div className="btn-wrap">
        <span
          className={`${
            contact ? `text-animation-on` : ""
          } " text-animation contact_rotate`}
          onClick={() => {
            if (!contact && location) setLocation(false);
            setContact(!contact);
          }}
        >
          CONTACT
        </span>
        <span
          className={`${
            location ? `text-animation-on` : ""
          } " text-animation contact_rotate`}
          onClick={() => {
            if (contact && !location) setContact(false);
            setLocation(!location);
          }}
        >
          LOCATION
        </span>
      </div>
    </div>
  );
};

export default ContactForm;
