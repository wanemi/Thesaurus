import classes from "./CourseTable.module.css";
import { Fragment } from "react";
import { FaRegPlayCircle } from "react-icons/fa";


const CourseTable = () => {
    return (
        <Fragment>
            <div className={classes.cast}>
                <div className={classes.castcont}>
                  <div className={classes.arrow}>
                    <div className={classes.icont}>
                      <FaRegPlayCircle className={classes.icon} />
                    </div>
                    <div className={classes.lesson2}>Welcome to the Course</div>
                  </div>
                  <div className={classes.time2}>2:11</div>
                </div>
              </div>

              <div className={classes.cast}>
                <div className={classes.castcont}>
                  <div className={classes.arrow}>
                    <div className={classes.icont}>
                      <FaRegPlayCircle className={classes.icon} />
                    </div>
                    <div className={classes.lesson2}>Welcome to the Course</div>
                  </div>
                  <div className={classes.time2}>2:11</div>
                </div>
              </div>

              <div className={classes.cast}>
                <div className={classes.castcont}>
                  <div className={classes.arrow}>
                    <div className={classes.icont}>
                      <FaRegPlayCircle className={classes.icon} />
                    </div>
                    <div className={classes.lesson2}>Welcome to the Course</div>
                  </div>
                  <div className={classes.time2}>2:11</div>
                </div>
              </div>

              <div className={classes.cast}>
                <div className={classes.castcont}>
                  <div className={classes.arrow}>
                    <div className={classes.icont}>
                      <FaRegPlayCircle className={classes.icon} />
                    </div>
                    <div className={classes.lesson2}>Welcome to the Course</div>
                  </div>
                  <div className={classes.time2}>2:11</div>
                </div>
              </div>

              <div className={classes.cast}>
                <div className={classes.castcont}>
                  <div className={classes.arrow}>
                    <div className={classes.icont}>
                      <FaRegPlayCircle className={classes.icon} />
                    </div>
                    <div className={classes.lesson2}>Welcome to the Course</div>
                  </div>
                  <div className={classes.time2}>2:11</div>
                </div>
              </div>
        </Fragment>
    )
}

export default CourseTable;