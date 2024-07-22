import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import '../Style/backbutton.css'

const BackButtonCr = ({destination = '/cr'}) => {
  return (
    <div className="back-button-container">
      <Link to={destination} className="back-button-link">
        <BsArrowLeft className="back-button-icon" />
      </Link>
    </div>
  );
}

export default BackButtonCr