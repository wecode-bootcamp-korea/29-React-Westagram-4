import React from 'react';
import FooterList from './FooterList';
import FooterData from './FooterData';
import './Footer.scss';

function Footer() {
  return (
    <ul className="footer">
      {FooterData.map(data => {
        return (
          <FooterList
            key={data.id}
            type={data.type}
            desc={data.desc}
            link_text={data.link_text}
            url={data.url}
          />
        );
      })}
    </ul>
  );
}

export default Footer;
