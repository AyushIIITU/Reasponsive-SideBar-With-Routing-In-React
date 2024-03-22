import { useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaHome } from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import { MdFormatAlignLeft } from "react-icons/md";
import { FaBusAlt } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { Link, useNavigate } from "react-router-dom";
import ComplainPostProvider from "./ComplainPostProvider";
import ComplainPost from "./ComplainPost";

const SideNavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  // const [selectedNavItem, setSelectedNavItem] = useState();
  // const navigate = useNavigate();

 

  

  return (
    <div>
      {" "}
      {/* Parent wrapper */}
      <SideNav
        defaultExpanded={isVisible}
        style={{ background: "black", position: "fixed" }}
      >
        <SideNav.Toggle
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        />
        <SideNav.Nav>
          <NavItem eventKey="home">
            <NavIcon>
              <Link to="/StudentPanel">
                <FaHome style={{ fontSize: '1.75em' }}/>
              </Link>
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>

          <NavItem eventKey="Create post">
            <NavIcon>
              <Link to="/StudentPanel/CreatePost">
                <MdPostAdd style={{ fontSize: '2em' }}/>
              </Link>
            </NavIcon>
            <NavText>Create Complain</NavText>
          </NavItem>

          {/* <Link to="/StudentPanel/Laundary"> */}
          <NavItem eventKey="Laundary">
            <NavIcon>
              <Link to="/StudentPanel/Laundary">
                <MdLocalLaundryService style={{ fontSize: '2em' }}/>
              </Link>
            </NavIcon>
            <NavText>Laundary</NavText>
          </NavItem>

          <NavItem eventKey="Book Bus">
            <NavIcon>
              <Link to="/StudentPanel/BookBus">
                <FaBusAlt style={{ fontSize: '1.75em' }}/>
              </Link>
            </NavIcon>
            <NavText>Ride With Pride</NavText>
          </NavItem>
          <NavItem eventKey="Application">
            <NavIcon>
              <Link to="/StudentPanel/Application">
                <MdFormatAlignLeft style={{ fontSize: '1.75em' }}/>
              </Link>
            </NavIcon>

            <NavText>Aplication Request</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      {/* {renderComponentBasedOnRouteItem()} */}
    </div>
  );
};

export default SideNavBar;
