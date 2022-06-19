import React from "react";
import CourseItem from "./CourseItem";
import classes from "./CourseSection.module.css";


const CourseSection = (props) => {
  const { items } = props;
  return (
    <section className={classes.csection}>
      <h2>Explore Our Courses</h2>
      <h3>
        Thesaurus has helped countless of people around the world <br />
        <b className={classes.cta}>Are you Next?</b>
      </h3>
      <ul className={classes.items}>
        {items.map((course) => (
          <CourseItem
            key={course.id}
            id={course.id}
            title={course.title}
            author={course.author}
            instructor={course.instructor}
            image={course.image}
            description={course.description}
          />
        ))}
      </ul>
    </section>
  );
};



export default CourseSection;
