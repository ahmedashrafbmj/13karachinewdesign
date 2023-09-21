import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Logo = ({ imageUrl, logoClass }) => {
  return (
    <div className={clsx(logoClass)}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img className="" alt="" src={process.env.PUBLIC_URL + imageUrl} style={{height
      :"10vh",width:"250px",marginTop:"-21px"}} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string
};

export default Logo;
