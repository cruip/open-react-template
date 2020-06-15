import React from 'react';
import classNames from 'classnames';
// import Button from '../components/elements/Button';

const Email = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
        className={outerClasses}
      >
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
              <div className="center-content">
                <h1>Contact Me</h1>
                <h5>(Temporarily inactive, email is on resume to avoid web crawlers)</h5>
              </div>
              <form action="/action_page.php">
                <h2>First Name</h2>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <h2>Last Name</h2>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


                <h2>Email</h2>
                <input type="email" id="email" name="email" placeholder="Your email" />


                <h2>Subject</h2>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <br></br><br></br>

                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <input type="submit" value="Submit" style={{
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      padding: '12px 20px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Email;