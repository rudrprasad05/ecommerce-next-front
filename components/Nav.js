import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { 
    HiOutlineMenuAlt2,
    HiOutlineHome,
    HiOutlineShoppingCart
} from 'react-icons/hi'

import {
    HiOutlineListBullet,
    HiOutlineArchiveBox
} from 'react-icons/hi2'

import { CartContext } from './CartContext';
import Link from 'next/link';
import ButtonLink from './ButtonLink';
import { width } from '@mui/system';



export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const {cartCount} = React.useContext(CartContext)

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
        {['Home', 'Products', 'Categories'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{width: 1}}>
            <ButtonLink link={text != 'Home' ? `/${text.toLowerCase()}` : "/"} addClass={"w-full"}>
              <ListItemButton sx={{width: 1}}>
                <ListItemIcon >
                  {text === 'Home' ? <HiOutlineHome size={30} strokeWidth={1.5}/> :
                  text === 'Products' ? <HiOutlineArchiveBox size={30} strokeWidth={1.5}/> :
                  text === 'Categories' ? <HiOutlineListBullet size={30} strokeWidth={1.5}/> : <div></div>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ButtonLink>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{width: 1}}>
          <ButtonLink link={'/cart'} addClass={"w-full"}>
            <ListItemButton sx={{width: 1}}>
              <ListItemIcon >
                <div className='relative'>
                  <HiOutlineShoppingCart size={30} strokeWidth={1.5}/>
                  <div className='absolute w-6 h-6 rounded-full bg-blue-500 text-white text-center bottom-3/4 left-full text-sm flex items-center justify-center'>
                      <p>
                        {cartCount}
                      </p>
                    </div>
                </div>
              </ListItemIcon>
              <ListItemText primary={"Cart"} />
            </ListItemButton>
          </ButtonLink>
        </ListItem>
      </List>
      
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <div key={anchor} className={'sticky'}>
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