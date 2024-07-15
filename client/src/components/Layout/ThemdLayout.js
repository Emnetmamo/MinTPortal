import React, {Outlet} from "react";

import Box from "@mui/material/Box";

import  DefaultSider  from "./Sidebar";
import  DefaultHeader from "./Navbar/Navbar1";


export const ThemedLayout = ({
    Sider,
    Header,
    Title,
    Footer,
    OffLayoutArea,
    children,
    initialSiderCollapsed,
}) => {
    // const SiderToRender = DefaultSider ;
    // const HeaderToRender = DefaultHeader ;

    return (
        
            <Box display="flex" flexDirection="row">
                <Sider Title={Title} />
                <Box
                    sx={[
                        {
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            minHeight: "100vh",
                        },
                        { overflow: "auto" },
                        { overflow: "clip" },
                    ]}
                >
                    <Header />
                    <Box
                        component="main"
                        sx={{
                            p: { xs: 1, md: 2, lg: 3 },
                            flexGrow: 1,
                            bgcolor: (theme) =>
                                theme.palette.background.default,
                        }}
                    >
                    {children}
                    
                    </Box>
                    {Footer && <Footer />}
                </Box>
                {OffLayoutArea && <OffLayoutArea />}
            </Box>
       
    );
};
