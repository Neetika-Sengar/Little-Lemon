import { Helmet } from 'react-helmet-async';
import content from '../assets/locales/en.json';
import ReservationForm from '../components/ReserveForm/ReserveForm';

const ReservePage = () => {
  return (
    <>
      <Helmet>
        <title>{content.reservePageMetaTitle}</title>
        <meta name="description" content={content.reservePageMetaDescription} />

        <meta property="og:title" content={content.reservePageMetaTitle} />
        <meta
          property="og:description"
          content={content.reservePageMetaDescription}
        />
        <meta property="og:image" content="logo.png" />
        <meta
          property="og:url"
          content="https://little-lemon-capstone-project.io/reserve"
        />
      </Helmet>

      <ReservationForm />
    </>
  );
};

export default ReservePage;
