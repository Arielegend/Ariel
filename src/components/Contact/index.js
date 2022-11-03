import React from "react";
import {
  ContactContainer,
  ContactTitle,
  ContactWrapper,
  // ContactSocial,
  ContactEmail,
} from "./ContactElements";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactTitle>Lets keep in touch</ContactTitle>
      <ContactWrapper>
        {/* <ContactSocial>
          <ContactSocialItem></ContactSocialItem>
          <ContactSocialItem></ContactSocialItem> 
        </ContactSocial> */}
        <ContactEmail></ContactEmail>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
