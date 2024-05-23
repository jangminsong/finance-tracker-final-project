import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  ClipboardDocumentListIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Account1 from "./Account1"; // Ensure you import the Account1 component correctly
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { loginUser, logoutUser } from "./features/userSlice";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(loginUser());
    signOut(auth);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Card className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 flex flex-col justify-between">
        <div>
          <div className="mb-2 p-4 flex items-center">
            <img
              src="https://www.bates.edu/communications-marketing/files/2013/01/bobcat-B-thumbnail-384x500.jpg"
              alt="Sidebar logo"
              className="h-auto w-16 mr-4"
            />
            <Typography variant="h5" color="blue-gray" className="text-4xl">
              Bobcats Bucks
            </Typography>
          </div>
          <List>
            {/* <ListItem
              className="hover:bg-gray-200 text-xl"
              onClick={handleOpen}
            >
              <ListItemPrefix>
                <ClipboardDocumentListIcon className="h-7 w-7" />
              </ListItemPrefix>
              Add to List
              <ListItemSuffix>
                <Chip
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem> */}
            <ListItem
              onClick={handleLogout}
              className="hover:bg-gray-200 text-xl"
            >
              <ListItemPrefix>
                <PowerIcon className="h-7 w-7" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </div>
        {/* <div className="flex flex-col gap-2 mt-4">
          <Button variant="text" size="lg" className="w-full text-xl">
            <span>Log In</span>
          </Button>
          <Button variant="gradient" size="lg" className="w-full text-xl">
            <span>Sign In</span>
          </Button>
        </div> */}
      </Card>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5">Add to List</Typography>
        </DialogHeader>
        <DialogBody>
          <Account1 />
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen}>
            Cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            Add
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Sidenav;
