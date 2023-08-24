import React, { useContext } from "react";
import { Link } from "react-router-dom";


import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Navbar,
  MobileNav,
} from "@material-tailwind/react";

import { PowerIcon, CalendarIcon } from "@heroicons/react/24/solid";

import Logout from "../../screen/Logout";
import imgmeta from "../../assets/META.png";
import userImg from "../../assets/user-1.jpg";

import { NavLinks } from "./NavLinks";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './sidebar.css'

const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const pleave = 2;

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const user_role = localStorage.getItem("user_role");
  return (
    <>
      <div className="">
        <Card className="w-full max-w-xs md:max-w-[20rem] h-full p-4 shadow-xl shadow-blue-gray-900/5 hidden md:flex lg:flex sidebar">
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray">
              <img src={imgmeta} alt="MetaMind" />
            </Typography>
          </div>
          <List>
            {NavLinks.map((data, index) => (
              <Link to={data.link}>
                <ListItem className="transition duration-150 ease-in-out">
                  <ListItemPrefix>{data.icon}</ListItemPrefix>
                  {data.name}
                </ListItem>
              </Link>
            ))}

            {/*     <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Dashboard
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Analytics
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Reporting
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Projects
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion> 

          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem> */}

            
          </List>
          <div className="user-profile">
           <div className="userImg">
          <img src={userImg}></img>

          <div className="userDesignation">
           <h3>Hi, User Name</h3>
           <p>Designer</p>
           </div>
           </div>
           
           <div className="logoOut">

          

<button  onClick={Logout}>  <PowerIcon className="h-5 w-5 text-rose-700" /></button>

          
          
           </div>

                </div>
        </Card>
      </div>
     
     <div className="md:hidden flex justify-between items-center px-4 py-4">
     <img className="mobile-logo" src={imgmeta} alt="MetaMind" style={{maxWidth:"200px"}}  />
      <div onClick={() => setNav(!nav)}
        className="cursor-pointer  z-10 text-gray-500 " >
        
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          
            {NavLinks.map(({ name, icon, link, id }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      
      </div>

     
     
    </>
  );
};

export default Sidebar;
