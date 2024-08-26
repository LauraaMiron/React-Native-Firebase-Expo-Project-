import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

interface Course {
  id: string;  
  title: string;
  description: string;
  teacher: string;
  price: number;
  duration: string;
  imageSource: string;
}

const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const fetchCourses = async () => {
    try {
      const courseCollection = collection(db, 'courses');
      const courseSnapshot = await getDocs(courseCollection);
      const courseList = courseSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id, 
          title: data.title || '',
          description: data.description || '',
          teacher: data.teacher || '',
          price: data.price || 0,
          duration: data.duration || '',
          imageSource: data.imageSource || '',
        } as Course;
      });
      setCourses(courseList);
      console.log(courseList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return courses;
};

export default useCourses;
