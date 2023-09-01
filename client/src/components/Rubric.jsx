import cheeseburger from './images/Cheeseburger3.png';
import kittylitter from './images/dirty_litter_box.png';
import catmeme from './images/meme2.png';

const Rubric = () => {
  return (
    <>
      <h1>Our Stanley Rubric</h1>
      <p>
        Here at CatBoxOffice, a good film is rewarded with a cheezburger and a bad film gets scattered in the scat of the catbox. 
        Keep this in mind when you’re reviewing a film: 
        Do you reward it with a juicy cheezburger, or do you banish it into the lost land of litter to wallow for an eternity?
      </p>
      <p>If a film receives a grade of 75 or higher (on a scale of 1-100), then it is rewarded with a big ol’ 80/20 juicy cheezburger. 
        Anything less, and it plummets to the catbox stinkfest where it belongs. 
        It is up to you to choose its destiny!</p>
      <img src={cheeseburger} alt="Has Cheezburger" style={{ width: '350px', height: 'auto' }} />
      <img src={catmeme} alt="Cat Meme" style={{ width: '350px', height: 'auto' }} />
      <img src={kittylitter} alt="Cat Scat" style={{ width: '350px', height: 'auto' }} />
    </>

  );
};

export default Rubric;
