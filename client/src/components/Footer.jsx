import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../const';
import Socials from './Socials';

const Footer = () => {
  return (
    <FooterWrapper>
      <Row>
        <div className="col-12 col-xl-auto text-center"><small>© Tous droits réservés - 2022</small></div>
        <div className="col-12 col-xl-auto text-center">
            <Socials />
        </div>
      </Row>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div.attrs({
  className: 'container-fluid py-3',
})`
  color:${COLORS.mainBorder};

  a {
    color:${COLORS.mainBorder};

    &:hover {
        color:${COLORS.mainBorder};
        text-decoration: underline;
    }
  }
`;
const Row = styled.div.attrs({
  className: 'row justify-content-between',
})``;

export default Footer;
