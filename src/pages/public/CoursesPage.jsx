import React, { useEffect, useState } from "react";
import { getAllCourses } from "../../services/Course.service";
import CourseCard from "../../components/courses/CourseCard";

const CoursesPage = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const handleFetchCourses = async () => {
      const data = await getAllCourses();
      setCourse(data.courses ?? []);
      console.log("courses data in component", data);
      console.log("courses data type in component", typeof data);
    };
    handleFetchCourses();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-2.5">
        {course.map((c) => (
            <CourseCard
              key={c.id}
              img={c.thumbnailUrl}
              title={c.title_en}
              duration={c.total_duration_secs}
              category={c.category?.[0]?.name}
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
