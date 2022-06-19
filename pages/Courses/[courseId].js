import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { getCourseById, getAllCourses } from "../../helpers/api";
import { Fragment } from "react";
import DeatailHeader from "../../components/CourseDetail/DetailHeader";
import CourseContent from "../../components/CourseDetail/CourseContent";

const PageDetail = (props) => {
  const course = props.course;
  return (
    <Fragment>
      <Header />
      <main>
        <DeatailHeader
          title={course.title}
          key={course.id}
          id={course.id}
          author={course.author}
          instructor={course.instructor}
          description={course.description}
          level={course.level}
        />
        <CourseContent />
      </main>
      <Footer />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const courseId = context.params.courseId;

  const course = await getCourseById(courseId);

  return {
    props: {
      course: course,
    },
  };
}

export async function getStaticPaths() {
  const courses = await getAllCourses();

  const paths = courses.map((course) => ({ params: { courseId: course.id } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default PageDetail;
