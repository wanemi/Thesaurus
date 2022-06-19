export async function getAllCourses() {
  const response = await fetch(
    "https://thesaurus-c17cb-default-rtdb.firebaseio.com/courses.json"
  );
  const data = await response.json();

  const courses = [];

  for (const key in data) {
    courses.push({
      id: key,
      ...data[key],
    });
  }

  return courses;
}

export async function getFeaturedCourses() {
  const allCourses = await getAllCourses();
  return allCourses.filter((Course) => Course.isFeatured);
}

export async function getCourseById(id) {
  const allCourses = await getAllCourses();
  return allCourses.find((Course) => Course.id === id);
}


