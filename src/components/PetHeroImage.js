import PropTypes from 'prop-types';

// TODO: in storybook, create a story for this component
// update the value for src in the story
// The image is located in public/img/hero-dog.png
export default function PetHeroImage (props) {
  return (
    <div className="bg-gradient-to-b from-rose-500 to-transparent">
  <img src={props.src} alt="dog" />
</div>

  );
};

PetHeroImage.propTypes = {
  src: PropTypes.string.isRequired,
};
