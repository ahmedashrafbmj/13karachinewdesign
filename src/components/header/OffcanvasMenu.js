import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import HeaderSocial from "./sub-components/HeaderSocial";
import NavMenu from "./NavMenu";
// import "../../../src/assets/scss/_header.scss"
import './aa.css'

const OffcanvasMenu = ({ activeState, getActiveState }) => {
  return (
    <div className={clsx("clickable-mainmenu", activeState ? "inside" : "")}>
      <div className="clickable-mainmenu-icon">
        <button
          className="clickable-mainmenu-close"
          onClick={() => getActiveState(false)}
        >
          <span className="pe-7s-close"></span>
        </button>
      </div>
      <div className="side-logo aa">
        <Link to={process.env.PUBLIC_URL + "/"}>
       
          <img className="aa"
        
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/logo/logo.png"}
          />
        </Link>
      </div>
      {/* nav menu*/}
      <NavMenu sidebarMenu={true} />

      {/* header social */}
      <HeaderSocial />

      
    </div>
  );
};

OffcanvasMenu.propTypes = {
  activeState: PropTypes.bool,
  getActiveState: PropTypes.func
};

export default OffcanvasMenu;
