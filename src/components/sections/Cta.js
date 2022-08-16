import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button'

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
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
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div >
            <h2>
              Estas interesado en PRIME? Dejanos tu contacto!
            </h2>
          </div>
          <div >
            <Input id="newsletter" type="text" label="Subscribe" labelHidden hasIcon="right" placeholder="Nombre">
            </Input>
            <br></br>
            <Input id="newsletter1" type="text" label="Subscribe" labelHidden hasIcon="right" placeholder="Apellido">
            </Input>
            <br></br>
            <Input id="newsletter2" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Correo">
            </Input>
            <br></br>
            <Button>Enviar Contacto</Button>
          </div>
        </div>
      </div>
    </section>


  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;