import Image from "next/image";
import classes from "./AllCourseItem.module.css";
import Link from "next/link";

const AllCourseItem = (props) => {
  const { title, image, level, author, id, instructor } = props;
  const CourseLink = `/Courses/${id}`;
  return (
    <li className={classes.item}>
      <Image src={image} alt="course-image" width={266.5} height={160} />
      <div className={classes.content}>
        <h2>{title}</h2>
        <div className={classes.card}>
          <div className={classes.inst}>
            <div className={classes.instruct}>
              <Image src={instructor} width={40} height={40} />
            </div>
            <div className={classes.name}>
              <small>Your Instructor</small>
              <h4>{author}</h4>
            </div>
          </div>
          <h4 className={classes.type}>{level}</h4>
        </div>
        <Link href={CourseLink}>
          <a className={classes.ctabtn}>
            <span>Get started</span>
          </a>
        </Link>
      </div>
    </li>
  );
};

export default AllCourseItem;
