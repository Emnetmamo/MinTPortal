import React from "react";
import {Link}  from 'react-router-dom'

import Button from "@mui/material/Button";

import logo from "../../images/Logo.jpg";

export const Title = ({collapsed, role }) => {
    

    return (
        <Button href = '/' fullWidth variant="text" disableRipple style= {{backgroundColor: '#11676d', padding: '0', border: 'none', borderRadius: '0'}}>
            
                {collapsed ? (
                    <div style = {{ }}>
                     <img src={logo} alt="Afroe" width="35px" />
                    </div>
                   
                ) : (<>
                 <img src={logo} alt="Afroel" width="90px" height= '64px' />
                 <span style={{marginLeft:'5px', fontSize: '14px', fontWeight: '700',  color: '#ffffff', }}>{role}</span>
                </>
                   
                )}
          
        </Button>
    );
};