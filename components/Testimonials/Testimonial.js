import React from "react";
import classes from "./Testimonial.module.css";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  const Testimonies = [
    {
      id: "01",
      Name: "Tony Samuel",
      country: "United States",
      text: "Best customer service I've ever received. From christabel biden, Support Specialist -Thesaurus Academy Unfortunate circumstances meant I could no longer trade. Emailed Nelson to cancel my subscriptions and was refunded the same day.",
    },
    {
      id: "02",
      Name: "Segun Oladele",
      country: "Nigeria",
      text: "Best customer service I've ever received. From christabel biden, Support Specialist -Thesaurus Academy Unfortunate circumstances meant I could no longer trade. Emailed Nelson to cancel my subscriptions and was refunded the same day.",
    },
    {
      id: "03",
      Name: "Mukesh Amir",
      country: "India",
      text: "Best customer service I've ever received. From christabel biden, Support Specialist -Thesaurus Academy Unfortunate circumstances meant I could no longer trade. Emailed Nelson to cancel my subscriptions and was refunded the same day.",
    },
  ];
  return (
    <section className={classes.section}>
      <h2>What Our Students Think About Us</h2>
      <div className={classes.card}>
        {Testimonies.map((review) => (
          <TestimonialItem
            key={review.id}
            customer={review.Name}
            place={review.country}
            description={review.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
