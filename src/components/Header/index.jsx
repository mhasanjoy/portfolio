import { useState } from 'react';
import styles from './style.module.scss';

const Header = () => {
    const [active, setActive] = useState(false);

    const handleMenuIcon = () => {
        setActive(!active);
    };

    // const [state, setState] = React.useState({
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // });

    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (
    //         event.type === 'keydown' &&
    //         (event.key === 'Tab' || event.key === 'Shift')
    //     ) {
    //         return;
    //     }

    //     setState({ ...state, [anchor]: open });
    // };

    // const list = (anchor) => (
    //     <Box
    //         sx={{
    //             width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
    //         }}
    //         role="presentation"
    //         onClick={toggleDrawer(anchor, false)}
    //         onKeyDown={toggleDrawer(anchor, false)}
    //     >
    //         <List>
    //             {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
    //                 (text, index) => (
    //                     <ListItem key={text} disablePadding>
    //                         <ListItemButton>
    //                             {/* <ListItemIcon>
    //                                 {index % 2 === 0 ? (
    //                                     // <InboxIcon />
    //                                 ) : (
    //                                     // <MailIcon />
    //                                 )}
    //                             </ListItemIcon> */}
    //                             <ListItemText primary={text} />
    //                         </ListItemButton>
    //                     </ListItem>
    //                 )
    //             )}
    //         </List>
    //         <Divider />
    //         <List>
    //             {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //                 <ListItem key={text} disablePadding>
    //                     <ListItemButton>
    //                         {/* <ListItemIcon>
    //                             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //                         </ListItemIcon> */}
    //                         <ListItemText primary={text} />
    //                     </ListItemButton>
    //                 </ListItem>
    //             ))}
    //         </List>
    //     </Box>
    // );

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div
                    onClick={handleMenuIcon}
                    className={`${styles.icon} ${active && styles.active}`}
                >
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* <div>
                {['left', 'right', 'top', 'bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>
                            {anchor}
                        </Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div> */}
        </header>
    );
};

export default Header;
