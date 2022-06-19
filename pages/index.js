import Head from "next/head";
import Header from "../components/Header/Header";
import FirstSection from "../components/FirstSection/FirstSection";
import SecondSection from "../components/SecondSection/SecondSection";
import CourseSection from "../components/CourseSection/CourseSection";
import Testimonials from "../components/Testimonials/Testimonial";
import Footer from "../components/Footer/Footer";
import { Fragment } from "react";
import { getFeaturedCourses } from "../helpers/api";

const HomePage = (props) => {
  return (
    <Fragment>
      <Header />
      <Head>
        <title>Learn to code, design and more at your own pace</title>
        <meta name="description" content="Thesaurus is the best platform to hone your tech skills"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <FirstSection />
        <SecondSection />
        <CourseSection items={props.course}/>
        <Testimonials />
      </main>
      <Footer />
    </Fragment>
  );
};

export async function getStaticProps() {
  const featuredCourses = await getFeaturedCourses();
  return {
    props: {
      course: featuredCourses,
    },
  };
}

export default HomePage;
