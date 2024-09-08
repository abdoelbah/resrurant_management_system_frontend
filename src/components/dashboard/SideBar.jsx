// import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,

} from "@material-tailwind/react";
import {
  PowerIcon,
  HomeIcon,
  ArrowDownOnSquareIcon
} from "@heroicons/react/24/solid";

import Logo from "../../assets/resturant-logo.jpg";
import { Link } from "react-router-dom";





function SideBar() {




  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-orange-700">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src={Logo} alt="brand" className="h-12 w-12" />
        <Typography variant="h5" color="white">
          Resturant management system
        </Typography>
      </div>
      <List>
        <hr className="my-2 border-blue-gray-50" />
       <Link to='/'>
       <ListItem className="text-white">
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
       </Link>
       <Link to='/vendors'>
        <ListItem className="text-white">
          <ListItemPrefix>
            <ArrowDownOnSquareIcon className="h-5 w-5" />
          </ListItemPrefix>
          Vendors
        </ListItem>
       </Link>
      </List>
    </Card>
  );
}

export default SideBar;