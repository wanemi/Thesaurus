import classes from "./SectionTitle.module.css";
import { Fragment } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";


const SectionTitle = (props) => {
    return (
        <Fragment>
            <div className={classes.module}>
            <div className={classes.arrow}>
              <div className={classes.icont}>
                {!props.show && (
                  <MdArrowForwardIos
                    onClick={props.ShowContent}
                    className={classes.icon}
                  />
                )}
                {props.show && (
                  <IoIosArrowDown
                    onClick={props.HideContent}
                    className={classes.icon}
                  />
                )}
              </div>
              <div className={classes.lesson}>Practice time - part 1</div>
            </div>
            <p>
              5 lessons<span className={classes.time}>12 min</span>
            </p>
          </div>
        </Fragment>
    )
}

export default SectionTitle;