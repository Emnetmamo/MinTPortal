import React, { useState,useEffect} from "react";
import {Link } from 'react-router-dom'

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import MuiList from "@mui/material/List";
import ListOutlined from "@mui/icons-material/ListOutlined";
import Logout from "@mui/icons-material/Logout";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Dashboard from "@mui/icons-material/Dashboard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from  "@mui/icons-material/ShoppingCart"
import { useAuthContext } from "../../AuthContext";


import { Title as DefaultTitle } from "./Title";

const Sider = ( {sidebarItems} ) => {
    const [selectedItem, setSelectedItem] = useState(false)
    const [collapsed, setCollapsed] = useState(false);
    const [opened, setOpened] = useState(false);
    const [role1, setRole] = useState("");
    // const {user} = useAuthContext()
    // const email = user.email
    // console.log(email)

    const drawerWidth = () => {
        if (collapsed) return 64;
        return 300;
    };

  console.log(sidebarItems)

    const [open, setOpen] = useState({});
    useEffect(
        function(){
            try{
                const role = document.cookie.split(';')[1].split('=')[1].replaceAll('"','');
                if(role === "admin"){
                    setRole("MinT Grant Admin")
                }
                else if(role === "admin2"){
                    setRole("Technical Committee Admin")
                }
                else if(role === "admin3"){
                    setRole("MinT General Admin")
                }
                else if(role === "user"){
                    setRole("Researcher User Account")
                }
            }
            catch(err){
                setRole("Ministry of Innovation and Technology");
            }
        }
        ,[])
    // useEffect(() => {
    //     setOpen((previousOpen) => {
    //         const previousOpenKeys = Object.keys(previousOpen);
    //         const uniqueKeys = new Set([
    //             ...previousOpenKeys,
    //             ...defaultOpenKeys,
    //         ]);
    //         const uniqueKeysRecord = Object.fromEntries(
    //             Array.from(uniqueKeys.values()).map((key) => [key, true]),
    //         );
    //         return uniqueKeysRecord;
    //     });
    // }, [defaultOpenKeys]);

    const RenderToTitle =  DefaultTitle;
    const [buttonSelected, setButtonSelected] = useState(false);

    const handleClick = (key) => {
        setOpen({ ...open, [key]: !open[key] });
    };

    const renderTreeView = (tree, selectedKey) => {
        return tree.map((item) => {
            const { icon, label, route, name, children, parentName } = item; ///main
            const isOpen = open[route || ""] || false;

            const isSelected = route === selectedKey;
            const isNested = !(parentName === undefined);
            

            if (children.length > 0) {
                return (
                   
                        <div key={route}>
                            <Tooltip
                                title={label ?? name}
                                placement="right"
                                disableHoverListener={!collapsed}
                                arrow
                            >
                                <ListItemButton




                                    onClick={() => {
                                        if (collapsed) {
                                            setCollapsed(false);
                                            if (!isOpen) {
                                                handleClick(route || "");
                                                setButtonSelected(true);
                                            }
                                        } else {
                                            handleClick(route || "");
                                            setButtonSelected(true);
                                        }
                                       
                                    }}
                                    sx={{
                                        pl: isNested ? 4 : 2,
                                        justifyContent: "center",
                                        "&.Mui-selected": {
                                            "&:hover": {
                                                backgroundColor: buttonSelected ? '#11676d'  : "transparent",
                                            },
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            justifyContent: "center",
                                            minWidth: 36,
                                            color: "primary.contrastText",
                                        }}
                                    >
                                        {icon ?? <ListOutlined />}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={label}
                                        primaryTypographyProps={{
                                            noWrap: true,
                                            fontSize: "16px",
                                            fontWeight: isSelected
                                                ? "bold"
                                                : "normal",
                                         
                                        }}
                                    />
                                    {!collapsed &&
                                        (isOpen ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        ))}
                                </ListItemButton>
                            </Tooltip>
                            {!collapsed && (
                                <Collapse
                                    in={open[route || ""]}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <MuiList sx={{
                                        
                                        backgroundColor: "black",  // Set the color to yellow
                                        
                                    }} component="div" disablePadding>
                                        {renderTreeView(children, selectedKey)}
                                    </MuiList>
                                </Collapse>
                            )}
                        </div>
                   
                );
            }

            return (
               
                    <Tooltip
                        title={label ?? name}
                        placement="right"
                        disableHoverListener={!collapsed}
                        arrow
                    >
                        <ListItemButton
                            component={Link}
                            to={route}
                            selected={isSelected}
                            onClick={() => {
                                setOpened(false);
                            }}
                            sx={{
                                pl: isNested ? 4 : 2,
                                py: isNested ? 1.25 : 1,
                                "&.Mui-selected": {
                                    "&:hover": {
                                        backgroundColor: isSelected
                                            ? "#1e36e8"
                                            : "transparent",
                                    },
                                    backgroundColor: isSelected
                                        ? "#475be8"
                                        : "transparent",
                                },
                                justifyContent: "center",
                                margin: "10px auto",
                                borderRadius: "12px",
                                minHeight: "56px",
                                width: "90%",
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    justifyContent: "center",
                                    minWidth: 36,
                                    color: isSelected ? "#fff" : "#808191",
                                }}
                            >
                                {icon ?? <ListOutlined />}
                            </ListItemIcon>
                            <ListItemText
                                primary={label}
                                primaryTypographyProps={{
                                    noWrap: true,
                                    fontSize: "16px",
                                    fontWeight: isSelected ? "bold" : "normal",
                                    color: isSelected ? "#fff" : "#808191",
                                    marginLeft: "10px",
                                }}
                            />
                        </ListItemButton>
                    </Tooltip>
               
            );
        });
    };

 



    const logout =  (
        <Tooltip
            title="Logout"
            placement="right"
            disableHoverListener={!collapsed}
            arrow
        >
            <ListItemButton
                key="logout"
                // onClick={() => mutateLogout()}
                sx={{
                    justifyContent: "center",
                    margin: "10px auto",
                    borderRadius: "12px",
                    minHeight: "56px",
                    width: "90%",
                }}
            >
                <ListItemIcon
                    sx={{
                        justifyContent: "center",
                        minWidth: 36,
                        color: "#808191",
                    }}
                >
                    <Logout />
                </ListItemIcon>
                <ListItemText
                    primary="Logout"
                    primaryTypographyProps={{
                        noWrap: true,
                        fontSize: "16px",
                    }}
                />
            </ListItemButton>
        </Tooltip>
    );

    

    const renderSider = () => {
       
        if (sidebarItems) {
            return  (
                <>
                    {sidebarItems.map((item, index) => (
                        <Tooltip
                        key={index}
                        title={item.label}
                        placement="right"
                        disableHoverListener={!collapsed}
                        arrow
                        >
                       

                        <ListItemButton
                            component={Link}
                            to={{
                                pathname: item.path,
                                // state: {
                                //     email: email
                                // }
                            }}
                            // state = {{email: email}}
                            onClick={() => {
                            setOpened(false);
                            setSelectedItem(item)
                            }}
                            sx={{
                            pl: 2,
                            py: 1,
                            backgroundColor: '#FF8F00',
                            borderRadius: '10px',
                            marginTop: '10px',
                            "&.Mui-selected": {
                                backgroundColor: 'black'
                            },
                            "&:hover": {
                                opacity: '0.99'
                                },
                            justifyContent: "center",
                            }}
                            selected  = {selectedItem === item}                       
                        >
                            <ListItemIcon
                            sx={{
                                justifyContent: "center",
                                minWidth: 36,
                                color: "white",
                                marginLeft: "6px",
                                marginRight: "18px",
                            }}
                            >
                            {item.icon}
                            </ListItemIcon>
                            <ListItemText
                          
                            primary={item.label}
                            primaryTypographyProps={{
                                noWrap: true,
                                fontSize: "19px",
                                fontWeight: "bold",
                                color:'#ffffff'
                            }}
                            />
                        </ListItemButton>
{/* <ListItemButton
    component="div" // Use div as a wrapper
    onClick={() => {
        setOpened(false);
    }}
    sx={{
        pl: 2,
        py: 1,
        "&.Mui-selected": {
            "&:hover": {
                backgroundColor: "transparent",
            },
            backgroundColor: "transparent",
        },
        justifyContent: "center",
    }}
>
    <Link
        to={{
            pathname: item.path }}

       state= {{
         
        email: email
       } }
        style={{ textDecoration: 'none', color: 'inherit' }}
    >
        <ListItemIcon
            sx={{
                justifyContent: "center",
                minWidth: 36,
                color: "#808191",
                marginLeft: "6px",
                marginRight: "14px",
            }}
        >
            {item.icon}
        </ListItemIcon>
        <ListItemText
            primary={item.label}
            primaryTypographyProps={{
                noWrap: true,
                fontSize: "16px",
            }}
        />
    </Link>
</ListItemButton> */}

                        </Tooltip>
                   ))}

                    {collapsed}
                </>
            );
        }
        return (
            <>
                
                {/* {items} */}
                {logout}
            </>
        );
    };

    const drawer = (
        <MuiList disablePadding sx={{ mt: 1, color: "#808191", }}>
            {renderSider()}
        </MuiList>
    );

    return (
        <>
            <Box
                sx={{
                    width: { xs: drawerWidth() },
                    display: {
                        xs: "none",
                        md: "block",
                    },
                    transition: "width 0.3s ease",
                }}
            />
            <Box
                component="nav"
                sx={{
                    position: "fixed",
                    zIndex: 1101,
                    width: { sm: drawerWidth() },
                    display: "flex",
                    bgcolor: '#FF8F00'
                    
                }}
            >
                <Drawer
                    variant="temporary"
                    open={opened}
                    onClose={() => setOpened(false)}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { sm: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            width: 256,
                            bgcolor: "#FCFCFC",
                        },
                    }}
                >
                    <Box
                        sx={{
                            height: '64',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            backgroundColor: '#11676d'
                           
                            
                        }}
                    >
                        <RenderToTitle collapsed={false} role={role1} />
                        
                    </Box>
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    PaperProps={{ elevation: 0 }}
                    sx={{
                        display: { xs: "none", md: "block" },
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            bgcolor: "#ffffff",
                            overflow: "hidden",
                            transition:
                                "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
                        },
                    }}
                    open
                >
                    <Box
                        sx={{
                            height: 64,
                            display: "flex",
                            alignItems: "strech",
                            justifyContent: "center",
                        }}
                    >
                        <RenderToTitle collapsed={collapsed} role={role1} />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            overflowX: "hidden",
                            overflowY: "auto",
                        }}
                    >
                        {drawer}
                    </Box>
                    <Button
                        sx={{
                            background: '#11676d',
                            color: "primary.contrastText",
                            textAlign: "center",
                            borderRadius: 0,
                            borderTop: "1px solid #ffffff1a",
                            "&:hover": {
                                background: "#ffffff",
                                color:'#11676d'
                            },
                        }}
                        fullWidth
                        size="large"
                        onClick={() => setCollapsed((prev) => !prev)}
                    >
                        {collapsed ? <ChevronRight  /> : <ChevronLeft />}
                    </Button>
                </Drawer>
                <Box
                    sx={{
                        display: { xs: "block", md: "none" },
                        position: "fixed",
                        top: "64px",
                        left: "0px",
                        borderRadius: "0 6px 6px 0",
                        bgcolor: "#475be8",
                        zIndex: 1199,
                        width: "36px",
                    }}
                >
                    <IconButton
                        sx={{ color: "#fff", width: "36px" }}
                        onClick={() => setOpened((prev) => !prev)}
                    >
                        <MenuRounded />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default Sider;