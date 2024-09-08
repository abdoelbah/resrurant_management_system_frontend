import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../atoms/userAtom';

// Profile menu component
const profileMenuItems = [
  {
    label: "Profile data",
    icon: Cog6ToothIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const user = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/auth');
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="User Avatar"
            className="border border-gray-900 p-0.5"
            src={user.image}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1">
        {/* User Data Section */}
        <MenuItem className="flex flex-col items-start gap-1">
          <Typography as="span" variant="small" className="font-normal">
           <div className="flex flex-row gap-4">
            <div>
            <div className="font-semibold">name :</div>
            <div>email :</div>
            <div>phone :</div>
            </div>
            <div>
            <div className="font-semibold">{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            </div>
           </div>
          </Typography>
        </MenuItem>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-1" />

        {/* Logout Button */}
        <MenuItem
          onClick={() => {
            closeMenu();
            handleLogout();
          }}
          className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
          <PowerIcon className="h-4 w-4 text-red-500" strokeWidth={2} />
          <Typography as="span" variant="small" className="font-normal text-red-500">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default function Header() {
  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <ProfileMenu />
      </div>
    </Navbar>
  );
}
