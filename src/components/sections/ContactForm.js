import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import Button from "../elements/Button";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const ContactForm = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  return (
    <section {...props} className={outerClasses} id="contact-scroll">
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">Contact Us</h3>
          </div>
          <div className="cta-action">
            <Input
              id="newsletter"
              type="email"
              label="Email"
              placeholder="Your email"
            />
            <Input id="name" type="text" label="Name" placeholder="Your name" />
            <Input
              id="message"
              type="text"
              label="Message"
              placeholder="Your message"
              rows={3}
            />
            <Button className="mt-16">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactForm.propTypes = propTypes;
ContactForm.defaultProps = defaultProps;

export default ContactForm;
