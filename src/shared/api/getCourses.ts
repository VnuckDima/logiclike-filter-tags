import { AxiosResponse } from "axios";

import axiosInstance from "./axiosInstance";
import { CoursesResponse } from "@shared/types/courses";

const getCourses = async (): Promise<CoursesResponse[]> => {
  try {
    const response: AxiosResponse<CoursesResponse[]> = await axiosInstance.get(
      "/courses.json"
    );
    return response.data;
  } catch (error) {
    throw new Error("FAILED_TO_FETCH_COURSES");
  }
};

export default getCourses;
