import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import './component.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Israa Othman
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Objective
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Interested about building full-stack web applications.<br />
            Proficient in HTML, CSS, JavaScript, Node.js and React framework and I have interest and willingness to learn new languages and tools.

          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Education
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Advanced Software Development - Full Stack JavaScript
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Abdul Aziz AlGhurair School of Advanced Computing (ASAC)  ---  02/2020 - 08/2020
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <Typography variant="subtitle1" gutterBottom>
              Concepts:
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper>
                  <ul>
                  <li>Structural/Async Design Patterns</li>
                  <li>Client/Server Architecture</li>
                  <li>SQL</li>
                  <li>Relational Data</li>
                  <li>NoSQL Databases</li>
                  <li>RESTful API</li>
                  <li>Authentication/Authorization</li>
                  <li>Data Modeling</li>
                  <li>Test-Driven Development</li>
                  <li>Behavior-Driven Development</li>
                  <li>Unit, Integration and End-to-End Testing</li>
                  <li>Object-Oriented Programming</li>
                  <li>Services and APIs</li>
                  <li>Functional Programming</li>
                  <li>Document Object Model </li>
                </ul></Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>
                <ul>
                  <li>UML</li>
                  <li>MVC Architecture</li>
                  <li>UI Component Frameworks Programming</li>
                  <li>APIs and Middleware</li>
                  <li>Asynchronous Programming</li>
                  <li>Event-Drive Applications</li>
                  <li>Web Sockets</li>
                  <li>Continuous Integration and Deployment</li>
                  <li>Version Control</li>
                  <li>Code Readability and Maintainability</li>
                  <li>Client-Side and Server-Side Routing and Rendering</li>
                  <li>AJAX/JSON and Asynchronous Programming</li>
                  <li>jQuery Events and DOM Manipulation</li>
                </ul>
                </Paper>
              </Grid>
            </Grid>

            <Typography variant="subtitle1" gutterBottom>
              Languages
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper >
                <ul>
                  <li>Advanced Server-Side and Client-Side JavaScript</li>
                </ul>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>
                <ul>
                  <li>Advanced HTML, CSS and CSS Preprocessing</li>
                </ul>
                </Paper>
              </Grid>
            </Grid>

            <Typography variant="subtitle1" gutterBottom>
              Data Structures and Algorithms
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper >
                  <ul>
                  <li>Linked Lists</li>
                  <li>Stacks / Queues</li>
                  <li>Trees</li>
                  <li>Binary Search Trees</li>
                </ul></Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper >
                <ul>
                  <li>Graphs</li>
                  <li>Daily Whiteboard Interview Practice</li>
                  <li>Hash Maps</li>
                  <li>Sorting Algorithms</li>
                </ul>
                </Paper>
              </Grid>
            </Grid>

            <Typography variant="subtitle1" gutterBottom>
              Environments and Tools
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper >
                <ul className="lists">
                  <li>Unix</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Node.js</li>
                  <li>ESLint</li>
                  <li>MongoDB</li>
                  <li>Heroku</li>
                  <li>Travis CI</li>
                  <li>ES6</li>
                  <li>React</li>
                </ul>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>
                <ul className="lists">
                  <li>SCSS</li>
                  <li>JSDoc</li>
                  <li>Swagger</li>
                  <li>Jest</li>
                  <li>Redux</li>
                  <li>React-Native</li>
                  <li>Socket.IO</li>
                  <li>Express</li>
                  <li></li>
                  <li></li>
                </ul>
                </Paper>
              </Grid>
            </Grid>

            {/* <h6>Key Languages of Study</h6>
            <ul>
              <li>Javascript</li>
              <li>CSS/Scss</li>
              <li>HTML</li>
            </ul>

            <h6>Key Tools</h6>
            <ul>
              <li>NodeJS for Application Development</li>
              <li>ExpressJS for API Development</li>
              <li>NoSQL Database Management Systems (MongoDB)</li>
              <li>SQL Database Management Systems (PostgreSQL)</li>
              <li>ReactJS and Component User Interface Development</li>
              <li>Git/GitHub for Version Control</li>
              <li>Server-side and Client-side Templating (HandlebarsJS, EJS)</li>
              <li>Continuous Integration and Deployment with Heroku and GitHub Actions</li>
            </ul> */}
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           Software Engineering
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
           Hashemite University  ---  09/2014 - 02/2020 ---  GPA : 3.22
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           <Typography variant="subtitle1" gutterBottom>
              Background:
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper>
                  <ul>
                  <li>Java</li>
                  <li>C++</li>
                  <li>php</li>
                  <li>Database entity-relationship-diagram</li>
                  <li>Software Requirement Specification (SRS)</li>
                  <li>Software Development Life Cycle (SDLC)</li>
                  <li>Testing</li>
                  <li>UML diagrams</li>
                </ul></Paper>
              </Grid>
              </Grid>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Skills 
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Soft Skills
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
          <ul>
            <li>Effective communication skills</li>
            <li>Teamwork</li>
            <li>Dependability</li>
            <li>Adaptability</li>
            <li>Conflict resolution</li>
            <li>Flexibility</li>
            <li>Problem-solving</li>
            <li>Work under pressure</li>
          </ul>
          </Typography>

          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Languages
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
          <ul>
            <li>Arabic -- Native</li>
            <li>English -- Very good</li>
          </ul>
          </Typography>

          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Certificates
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
          <ul>
            <li>ICDL -- 2017 -- Hashemite University</li>
          </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Work Experience
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Intern with QA team
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Samsung R&D -- 02/2018 - 11/2019
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           Write test cases and test the video games 
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
