import PropTypes from 'prop-types';

// TODO: in storybook, create a story for this component
// update the value for src in the story
// The image is located in public/img/hero-dog.png
export default function PetHeroImage (props) {
  return (
    <div className="bg-gradient-to-b from-rose-500 to-transparent relative p-10 overflow-visible">
  <img src={props.src} 
  alt="dog"
  class=" relative z-10 shadow-2xl transform transition-transform duration-500 ease out hover:scale-105 hover:rotate-3 -top-10" />
</div>

  );
};

PetHeroImage.propTypes = {
  src: PropTypes.string.isRequired,
};
