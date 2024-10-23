import PropTypes from 'prop-types';

export default function PetCard (props) {
    return (
        <div className='bg-rose-100 border-2 border-pink-900 rounded-3xl p-3'>
            <div className='flex space-x-4'>
                
            </div>
            <div>
                 <span className='text-3xl block'>{props.emoji} </span><br></br>
                 {props.description}
            </div>
        </div>
    );
}



PetCard.propTypes = {
    emoji: PropTypes.string,
    description: PropTypes.string
  };