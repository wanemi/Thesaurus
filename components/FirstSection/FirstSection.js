import React from "react";
import classes from "./FirstSection.module.css";
import Link from "next/link";


const FirstSection = () => {
  const Allcourses = `/Courses/`;
  return (
    <section className={classes.first}>
      <div className={classes.fdiv}>
        <h1>Build Your Tech Skills</h1>
        <h2>
          The ultimate platform for honing virtually any tech skill. Learn to
          code, design and more - at your own pace
        </h2>
        <Link href={Allcourses}>
          <a>
            <span>Explore our courses</span>
          </a>
        </Link>
      </div>
      <div className={classes.image}>
          <img src="/images/girl.png" className={classes.girl} alt="learn"/>
      </div>
    </section>
  );
};

export default FirstSection;
