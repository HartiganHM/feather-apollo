import { render, screen } from '@testing-library/react';

import { copyContent } from 'shared/data';
import LandingPage from '../LandingPage';

const { heading, subHeading, imageAlt } = copyContent.landingPage;

describe('LandingPage tests', () => {
  beforeEach(() => {
    render(<LandingPage />);
  });

  it('Should have a heading', () => {
    const headingElement = screen.getByText(heading);

    expect(headingElement).toBeInTheDocument();
  });

  it('Should have a sub-heading', () => {
    const subHeadingElement = screen.getByText(subHeading);

    expect(subHeadingElement).toBeInTheDocument();
  });

  it('Should have an image', () => {
    const imageElement = screen.getByAltText(imageAlt);

    expect(imageElement).toBeInTheDocument();
  });
});
