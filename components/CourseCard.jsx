// /components/CourseCard.jsx
import Image from 'next/image';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <div className="relative w-full h-40 rounded-md overflow-hidden mb-4">
        <Image
          src={course.image}
          alt={course.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className="text-xl font-semibold">{course.title}</h2>
      <p className="text-sm text-gray-600">{course.description}</p>
    </div>
  );
};

export default CourseCard;
