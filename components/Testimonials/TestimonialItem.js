import Image from 'next/image';
import classes from "./TestimonialItem.module.css";
import { AiFillStar } from "react-icons/ai";

const TestimonialItem = (props) => {
  const {customer, place, description} = props;
  return (
    <div className={classes.test}>
      <div className={classes.fpart}>
        <div className={classes.timg}>
          <Image src="/images/jay.jpg" width={64} height={64}/>
        </div>
        <div className={classes.cname}>
          <span className={classes.fav}>{customer}</span>
          <div classsName={classes.star}>
            <AiFillStar className={classes.icon}/>
            <AiFillStar className={classes.icon}/>
            <AiFillStar className={classes.icon}/>
            <AiFillStar className={classes.icon}/>
            <AiFillStar className={classes.icon}/>
          </div>
          <span className={classes.count}>{place}</span>
        </div>
      </div>
      <div className={classes.rev}>
        {description}
      </div>
    </div>
  );
};

export default TestimonialItem;
