import classes from "./DetailHeader.module.css";

const DeatailHeader = (props) => {
  const { title, description, level, author, id, instructor } = props;
  return (
    <section className={classes.section}>
      <div className={classes.desc}>
        <h1>{title}</h1>
        <div className={classes.inst}>
          <div className={classes.instruct}>
            <img src={instructor} />
          </div>
          <div className={classes.author}>
            <h4>
              With <strong>{author}</strong>
            </h4>
            <p>Course level: {level}</p>
          </div>
        </div>
        <p className={classes.about}>
          {description}
        </p>
      </div>
    </section>
  );
};

export default DeatailHeader;
