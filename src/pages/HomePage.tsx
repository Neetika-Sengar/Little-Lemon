import DodgeButton from '../components/DodgeButton';
import Button from '../components/Button/Button';
import { Helmet } from 'react-helmet-async';
import content from '../assets/locales/en.json';
import './Homepage.scss';

type HomePageProps = { slayMode: boolean };

const HomePage: React.FC<HomePageProps> = ({ slayMode }) => {
  return (
    <>
      <Helmet>
        <title>{content.homepageMetaTitle}</title>
        <meta name="description" content={content.homepageMetaDescription} />

        <meta property="og:title" content={content.homepageMetaTitle} />
        <meta
          property="og:description"
          content={content.homepageMetaDescription}
        />
        <meta property="og:image" content="/recipe.jpg" />
        <meta
          property="og:url"
          content="https://little-lemon-capstone-project.io"
        />
      </Helmet>

      <section className="innerContainer">
        <div>
          <h1 className="title">{content.homepageTitle}</h1>
          <h2 className="subTitle">{content.homepageSubtitle}</h2>
          <p>{content.homepageParagraph}</p>
          <p>{content.homepageParagraph2}</p>

          {slayMode && <DodgeButton path="/reserve" />}
          {!slayMode && (
            <Button
              label="Reserve table"
              disabled={false}
              variant="contained"
              color="warning"
              path="/reserve"
            />
          )}
        </div>

        <img
          className="home-image"
          src="/restaurantfood.jpg"
          alt={content.deliciousRecipe}
          width="280"
        />
      </section>
    </>
  );
};

export default HomePage;
