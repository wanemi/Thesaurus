import classes from "./Cta.module.css";

const Cta = () => {
  return (
    <section className={classes.section}>
      <h1>Thousands of people trust us with their education</h1>
      <div className={classes.element}>
        <div>
          <p className={classes.phead}>Money Back Guarantee</p>
          <p className={classes.pchild}>14 days guarantee, no questions asked</p>
        </div>
        <div>
          <p className={classes.phead}>Money Back Guarantee</p>
          <p className={classes.pchild}>14 days guarantee, no questions asked</p>
        </div>
        <div>
          <p className={classes.phead}>Cancel Whenever</p>
          <p className={classes.pchild}>Your discount stays for as long as you subscribe</p>
        </div>
      </div>
    </section>
  );
};

export default Cta;
