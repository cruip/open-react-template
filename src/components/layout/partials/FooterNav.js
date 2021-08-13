import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://lucasnicolaudevelo.wixsite.com/freya/o-que-%C3%A9-hidroponia">O que é Hidroponia?</a>
        </li>
        <li>
          <a href="https://lucasnicolaudevelo.wixsite.com/freya/contato">Contato</a>
        </li>
        <li>
          <a href="https://lucasnicolaudevelo.wixsite.com/freya/faq-s">Perguntas Frequentes</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;