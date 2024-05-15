import { useState, useEffect } from "react";
import getCourses from "@shared/api/getCourses";
import { CoursesResponse } from "@shared/types/courses";

const useCourses = () => {
  const [courses, setCourses] = useState<CoursesResponse[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesData = await getCourses();
        setCourses(coursesData);
      } catch (error) {
        console.error("failed_to_fetch_courses:", error);
      }
    };

    fetchData();
  }, []);

  return courses;
};

export default useCourses;