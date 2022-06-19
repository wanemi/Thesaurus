import React from "react";
import classes from "./SecondSection.module.css";

const SecondSection = () => {
  return (
    <section className={classes.secondsection}>
      <div className={classes.direction}>
        <div className={classes.space}>
          <div className={classes.image}>
            <img
              src="/images/geo.png"
              alt="skill"
              className={classes.imgcont}
            />
          </div>
          <div>
            <h4 className={classes.text1}>Learn Unique Skills</h4>
            <p className={classes.text2}>
              Javascript, node js, react js and many more
            </p>
          </div>
        </div>
        <div className={classes.space}>
          <div className={classes.image}>
            <img
              src="/images/certificate.png"
              alt="certificate"
              className={classes.imgcont}
            />
          </div>
          <div>
            <h4 className={classes.text1}>Get Certified</h4>
            <p className={classes.text2}>
              And recognized by top professionals on linkdln
            </p>
          </div>
        </div>
      </div>

      <div className={classes.direction}>
        <div className={classes.space}>
          <div className={classes.image}>
            <img
              src="/images/task.png"
              alt="task"
              className={classes.imgcont}
            />
          </div>
          <div>
            <h4 className={classes.text1}>Join weekly project</h4>
            <p className={classes.text2}>
              Challenge yourself with real life project
            </p>
          </div>
        </div>
        <div className={classes.space}>
          <div className={classes.image}>
            <img src="/images/job.png" alt="job" className={classes.imgcont} />
          </div>
          <div>
            <h4 className={classes.text1}>Create Opportunities</h4>
            <p className={classes.text2}>Set yourself ahead of the pack</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
