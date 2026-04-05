import { Helmet } from 'react-helmet-async';
import Button from '../components/Button/Button';
import content from '../assets/locales/en.json';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>{content.contactPageMetaTitle}</title>
        <meta name="description" content={content.contactPageMetaDescription} />

        <meta property="og:title" content={content.contactPageMetaTitle} />
        <meta
          property="og:description"
          content={content.contactPageMetaDescription}
        />
        <meta property="og:image" content="/logo.png" />
      </Helmet>

      <div>
        <h1>{content.contactPageTitle}</h1>
        <p>{content.contactPageParagraph}</p>

        <Button
          variant="contained"
          color="warning"
          disabled={false}
          path="tel:+81-1234567890"
          label={content.callUs}
        />
      </div>
    </>
  );
};

export default ContactPage;
