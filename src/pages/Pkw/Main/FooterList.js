import React from 'react';

function FooterList({ type, desc, link_text, url }) {
  return (
    <li className="footerlist">
      <span className={type}>{desc}</span>
      <a href={url} target="_blank" rel="noreferrer">
        {link_text}
      </a>
    </li>
  );
}

export default FooterList;
