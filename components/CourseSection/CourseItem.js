import Image from 'next/image';
import React from "react";
import classes from "./CourseItem.module.css";
import Link from "next/link";

const CourseItem = (props) => {
  const { title, image, description, author, id, instructor } = props;
  const CourseLink = `/Courses/${id}`;

  return (
    <li className={classes.card}>
      <div className={classes.icont}>
        <Image src={image} width={270} height={220}/>
      </div>
      <div className={classes.content}>
        <h1>{title}</h1>
        <div className={classes.desc}>
          {description}
        </div>
        <div className={classes.inst}>
          <div className={classes.instruct}>
            <Image src={instructor} width={40} height={40}/>
          </div>
          <div className={classes.name}>
            <small>Your Instructor</small>
            <h4>{author}</h4>
          </div>
        </div>
        <Link href={CourseLink}>
          <a>
            <span>Get started</span>
          </a>
        </Link>
      </div>
    </li>
  );
};

export default CourseItem;
