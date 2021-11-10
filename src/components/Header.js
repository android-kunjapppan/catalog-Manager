import { AppBar, Toolbar } from '@mui/material'
import React from 'react';
import './Header.css'


// const header = {
//     background: 'white',
//     left: 37px;
//     top: 86px;
// }
const Header = () => {
    return (
        <div className ="header">
        <AppBar  elevation={3} style={{background: "white"}}>
            <Toolbar>
                <div className="project_catalog_text">
                Project Catalog
                </div>
            </Toolbar>
        </AppBar>
        Project Catalog
        </div>
    )
}

export default Header
