import { FC } from 'react';

import { copyContent } from 'shared';
import './LandingPage.scss';

const { heading, subHeading, imageAlt } = copyContent.landingPage;

const LandingPage: FC = () => (
  <div className="app-initials-landing-page">
    <h1 className="app-initials-landing-page__heading">{heading}</h1>
    <p className="app-initials-landing-page__sub-heading">{subHeading}</p>
    <img
      className="app-initials-landing-page__image"
      src={`${process.env.PUBLIC_URL}/assets/logo512.png`}
      alt={imageAlt}
    />
  </div>
);

export default LandingPage;
