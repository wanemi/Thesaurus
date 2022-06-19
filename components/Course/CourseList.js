import classes from "./CourseList.module.css";
import AllCourseItem from "./AllCourseItem";

const CourseList = (props) => {
  const { item } = props;
  return (
    <section className={classes.section}>
      <ul className={classes.items}>
        {item.map((course) => (
            <AllCourseItem
            key={course.id}
            id={course.id}
            title={course.title}
            author={course.author}
            instructor={course.instructor}
            image={course.image}
            level={course.level}
          />
        ))}
      </ul>
    </section>
  );
};

export default CourseList;
