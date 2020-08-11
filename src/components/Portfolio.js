import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
// import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
// import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Gadha App",
    date:'07/2020 - 08/2020',
    description: `
    Gadha is a motivational app that motivates the users to move on in their lives,
    to achieve their goals, to reach success also,
    they can see other people success stories or achieved goals from other users 
    they can publish their own stories so others can motivate from them`,
    tech : `languages and technologies : HTML, CSS, Sass, Javascript, NodeJs, React, Redux, MongoDB, REST APIs, Socket-io, Bootstrap, Firebase`,
    image: project5,
    repo:'https://github.com/Gadha-project401/frontend-gadha',
    live:'https://gadha.netlify.app/',
  },
  {
    name: "Covid-Hub",
    description: `
    A full-stack website project that aims to provide users 
    the latest updates and reliable about covid19`,
    image: project3,
    tech : `languages and technologies : HTML, CSS, Javascript, NodeJs, PostgressSQL, Ejs, jquery`,
    repo:'https://github.com/The-SuperAgents/covid-19-project',
    live:'https://covid19-webapp-project.herokuapp.com/',
  },
  {
    name: "ToDo App",
    description: `
     This App for managing daily tasks `,
    tech : `languages and technologies : HTML, CSS, Sass, Javascript, NodeJs, React, Redux, MongoDB, REST APIs, Bootstrap`,
    image: project6,
    repo:'https://github.com/401-advanced-javascript-israaOthman/todo',
  },
  {
    name: "Moto Spare",
    description: `
     This web app is for selling car parts online `,
    image: project1,
    tech : `languages and technologies : HTML, CSS, Javascript`,
    repo:'https://github.com/Blitz-Crank/moto-spare',
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container  justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={6} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="p" gutterBottom>
                    {project.date}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.tech}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <a href={project.repo}  rel="noopener noreferrer" target="_blank"  >  
                <Button  size="small" color="primary">
                  GitHub Repo
                </Button></a>
                <a href={project.live}  rel="noopener noreferrer" target="_blank" >  
                <Button size="small" color="primary">
                  Live Demo
                </Button></a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
