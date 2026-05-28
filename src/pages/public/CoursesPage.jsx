import React, { useEffect, useState } from "react";
import { getAllCourses } from "../../services/Course.service";
import CourseCard from "../../components/courses/CourseCard";

const CoursesPage = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const handleFetchCourses = async () => {
      const data = await getAllCourses();
      setCourse(data.courses);
      console.log("courses data in usesstate", course);
      console.log("courses data in component", data);
      console.log("courses data type in component", typeof data);
    };
    handleFetchCourses();
  }, []);

  return (
    <>
      <div className="mt-28 grid grid-cols-4  max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-6">
        {course.map((c) => (
          <CourseCard
            key={c.id}
            img={c.thumbnailUrl}
            title={c.title_en}
            description={c.description}
            duration={c.total_duration_secs}
            category={c.category?.[0]?.name}
            teacher = {c.teacher.fullName}
            rating={c.avgRating}
            student={c.totalStudents}
            price={c.price}
            oldPrice={c.original_price}
          />
        ))}
      </div>
    </>
  );
};

export default CoursesPage;
