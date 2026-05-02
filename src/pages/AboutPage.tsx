import { Helmet } from 'react-helmet-async';
import content from '../assets/locales/en.json';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>{content.aboutPageMetaTitle}</title>
        <meta name="description" content={content.aboutPageMetaDescription} />

        <meta property="og:title" content={content.aboutPageMetaTitle} />
        <meta
          property="og:description"
          content={content.aboutPageMetaDescription}
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:url"
          content="https://little-lemon-capstone-project.io/aboutus"
        />
      </Helmet>

      <div>
        <h1>{content.aboutPageTitle}</h1>
        <h2>{content.aboutPageSubtitle}</h2>
        <p>{content.aboutPageParagraph}</p>
        <p>{content.aboutPageParagraph2}</p>
      </div>
    </>
  );
};

export default AboutPage;
