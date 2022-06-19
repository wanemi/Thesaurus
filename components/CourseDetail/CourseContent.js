import classes from "./CourseContent.module.css";
import { useState } from "react";
import CourseTable from "./CourseTable";
import SectionTitle from "./SectionTitle";

const CourseContent = () => {
  const [show, setShow] = useState(false);
  const [view, SetView] = useState(false);
  const [display, SetDisplay] = useState(false);
  const [open, SetOpen] = useState(false);
  const [close, SetClose] = useState(false);

  const ShowContent = () => {
    setShow(true);
  };

  const HideContent = () => {
    setShow(false);
  };

  const ShowView = () => {
      SetView(true);
  }

  const HideView = () => {
      SetView(false);
  }

  const ShowDisplay = () => {
      SetDisplay(true);
  }

  const HideDisplay = () => {
      SetDisplay(false);
  }

  const ShowOpen = () => {
      SetOpen(true);
  }

  const HideOpen = () => {
      SetOpen(false);
  }

  const ShowClose = () => {
      SetClose(true);
  }

  const HideClose = () => {
      SetClose(false);
  }

  return (
    <section className={classes.section}>
      <h3>Course Content</h3>
      <p>This course contains 25 screencasts spread across 5 modules</p>
      <div className={classes.content}>
        <div className={classes.mocont}>
          <SectionTitle show={show} ShowContent={ShowContent} HideContent={HideContent}/>
          {show && (<CourseTable />
          )}
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.mocont}>
          <SectionTitle show={view} ShowContent={ShowView} HideContent={HideView}/>
          {view && (<CourseTable />
          )}
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.mocont}>
          <SectionTitle show={display} ShowContent={ShowDisplay} HideContent={HideDisplay}/>
          {display && (<CourseTable />
          )}
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.mocont}>
          <SectionTitle show={open} ShowContent={ShowOpen} HideContent={HideOpen}/>
          {open && (<CourseTable />
          )}
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.mocont}>
          <SectionTitle show={close} ShowContent={ShowClose} HideContent={HideClose}/>
          {close && (<CourseTable />
          )}
        </div>
      </div>

    </section>
  );
};

export default CourseContent;
