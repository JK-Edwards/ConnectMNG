import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import MobileDropdown from './MobileDropdown';
import logo from "../../images/logo.png";
import Hamburger from 'hamburger-react';

const Mobile: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showResources, setShowResources] = useState<boolean>(false);
  const [showActivities, setShowActivities] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false);

  const location = useLocation();
  const intl = useIntl();

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  const handleClick = () => {
    setShowMenu(prev => !prev);
  };

  const handleNavLinkSelect = (index: number) => {
    setActiveIndex(index);
    setShowActivities(false);
    setShowResources(false);
    setShowAbout(false);
  };

  return (
    <>
      <div className="menuButton">
        <div className="mobileLogo">
          <Link to="/" onClick={() => handleNavLinkSelect(0)}>
            <img src={logo} alt="Connect MNG Logo" className="logo" />
          </Link>
        </div>
        <button onClick={handleClick}>
          <Hamburger
            toggled={showMenu}
            toggle={setShowMenu}
            direction="left"
            size={20}
            distance="sm"
            color="black"
            duration={0.4}
          />
        </button>
      </div>
      {showMenu && <MobileDropdown />}
    </>
  );
};

export default Mobile;
