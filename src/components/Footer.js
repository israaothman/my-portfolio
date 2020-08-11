import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Link} from 'react-dom'

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});



const Footer = () => {
  const classes = useStyles();

  const openInNewTab = (url) =>{
    let win = window.open(url, '_blank');
    win.focus();
  }
  return (
    <BottomNavigation className={classes.bottomNavContainer}>
     <a href="https://www.facebook.com/israa.ayoub.18/" target="_blank" >  
     <BottomNavigationAction icon={<Facebook />} className={classes.root} /></a>
     <a href="https://www.linkedin.com/in/israa-othman-b9a279158/" target="_blank" > 
     <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} /></a>
     <a href="https://github.com/israaothman" target="_blank" > 
     <BottomNavigationAction icon={<GitHubIcon />} className={classes.root} /></a>
    </BottomNavigation>
  );
};
export default Footer;
