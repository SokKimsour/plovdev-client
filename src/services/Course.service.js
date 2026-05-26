const API_URL = import.meta.env.VITE_API_BASE_URL ;
const BASE_URL = `${API_URL}/api/v1/courses`;

export const getAllCourses = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    }); 

    if (!response.ok) {
      throw new Error(`Failed to fetch courses: ${response.status}`);
    }

    const data = await response.json();
    console.log("courses data", data);
    return data ?? [];
  } catch (error) { 
    console.error("Error fetching courses:", error);
    return [];
  }
};