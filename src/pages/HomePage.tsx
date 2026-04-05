import DodgeButton from '../components/DodgeButton';
import Button from '../components/Button/Button';

type HomePageProps = { slayMode: boolean };

const HomePage: React.FC<HomePageProps> = ({ slayMode }) => {
  return (
    <>
      {slayMode && <DodgeButton />}
      {!slayMode && (
        <Button
          label="Reserve table"
          disabled={false}
          variant="contained"
          color="warning"
        />
      )}
    </>
  );
};

export default HomePage;
