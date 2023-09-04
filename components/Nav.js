import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { 
    HiOutlineMenuAlt2,
    HiOutlineHome,
    HiOutlineShoppingCart
} from 'react-icons/hi'

import {
    HiOutlineListBullet,
    HiOutlineArchiveBox
} from 'react-icons/hi2'


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Products', 'Categories', 'Cart'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon >
                {text === 'Home' ? <HiOutlineHome size={30} strokeWidth={1.5}/> :
                text === 'Products' ? <HiOutlineArchiveBox size={30} strokeWidth={1.5}/> :
                text === 'Categories' ? <HiOutlineListBullet size={30} strokeWidth={1.5}/> : 
                <HiOutlineShoppingCart size={30} strokeWidth={1.5}/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <div key={anchor} className={'absolute'}>
          <Button onClick={toggleDrawer(anchor, true)} className={''}>
            <HiOutlineMenuAlt2 size={40} strokeWidth={1.5} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}

          >
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </div>
  );
}