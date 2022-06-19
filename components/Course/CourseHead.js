import classes from "./CourseHead.module.css";

const CourseHead = () => {
  return (
    <section className={classes.planhead}>
      <h1>Thesaurus Courses</h1>
      <div className={classes.filter}>
        <div className={classes.direction}>
          <div className={classes.container1}>
            <h4>All Courses</h4>
          </div>
          <div className={classes.container}>
            <h4>HTML</h4>
          </div>
          <div className={classes.container}>
            <h4>CSS</h4>
          </div>
        </div>

        <div className={classes.direction}>
          <div className={classes.container}>
            <h4>React</h4>
          </div>
          <div className={classes.container}>
            <h4>Javascript</h4>
          </div>
          <div className={classes.container}>
            <h4>Node Js</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHead;
