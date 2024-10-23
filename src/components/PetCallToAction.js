import PropTypes from "prop-types";

export default function PetCallToAction(props) {
  return (
    <div>
      <button class="w-full px-4 py-2 bg-white text-black font-semibold border-2 rounded-lg shadow-md hover:bg-blue-600">
        Acesse agora
      </button>
    </div>
  );
}

PetCallToAction.propTypes = {
  ctaText: PropTypes.string.isRequired
};
