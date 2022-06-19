import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Fragment } from "react";
import CourseList from "../../components/Course/CourseList";
import CourseHead from "../../components/Course/CourseHead";
import { getAllCourses } from "../../helpers/api";

const Courses = (props) => {
  return (
    <Fragment>
      <Header />
      <Head>
        <title>Browse all the courses on Thesaurus</title>
        <meta
          name="description"
          content="Find your preferred digital skill courses on Thesaurus from beginner to advanced"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <CourseHead />
        <CourseList item={props.course} />
      </main>
      <Footer />
    </Fragment>
  );
};

export async function getStaticProps() {
  const AllCourses = await getAllCourses();
  return {
    props: {
      course: AllCourses,
    },
  };
}

export default Courses;
