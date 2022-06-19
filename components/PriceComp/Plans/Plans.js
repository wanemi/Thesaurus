import classes from "./Plans.module.css";

const Plans = () => {
  return (
    <section className={classes.plans}>
      <div className={classes.free}>
        <h3>Free</h3>
        <p>
          Learn everything about Thesaurus and take part in weekly programming
          challenges
        </p>
        <h4>Access to into courses</h4>
        <h4>Weekly Programming Challenges</h4>
        <a className={classes.cta} href="#">
          Create Free Account
        </a>
      </div>
      <div className={classes.basic}>
        <h3>Basic Plan</h3>
        <p>All the courses you need to be a hireable developer</p>
        <h4>Access to 30 courses</h4>
        <h4>Certifications</h4>
        <h4>Monthly Updates of Course Materials</h4>
        <h4>14-Day Money-Back Guarantee, No Questions Asked</h4>
        <a href="#" className={classes.cta}>
          $12 / Month
        </a>
      </div>
      <div className={classes.pro}>
        <h3>Professional</h3>
        <p>Get expert learning, career support and access to all courses.</p>
        <h4>Access to All courses</h4>
        <h4>Certifications</h4>
        <h4>Personal Study Counselor</h4>
        <h4>14-Day Money-Back Guarantee, No Questions Asked</h4>
        <a href="#" className={classes.cta}>
          $150 / Month
        </a>
      </div>
    </section>
  );
};

export default Plans;
