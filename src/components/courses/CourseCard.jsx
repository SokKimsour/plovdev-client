// import CourseImg from '../../assets/HomeHeroimage.png'

export default function CourseCard({
  img,
  title,
  duration,
  category,
  rating,
  student,
  price,
  oldPrice,
}) {
  return (
    <>
      <div className="m-12 w-[209px] h-[350px] border-1 border-gray-300 rounded-lg relative bg-white">
        <div className="relative">
          <div className="">
            <img
              alt={title || "Course thumbnail"}
              className="h-[180px] w-full rounded-lg object-cover"
              src={
                img ||
                "https://i.pinimg.com/1200x/01/7c/44/017c44c97a38c1c4999681e28c39271d.jpg"
              }
            />
          </div>
          <div className="absolute bottom-8 left-3 bg-black text-white px-4 text-sm">
            {duration}
          </div>
        </div>
        <div className="bg-white w-[207px] h-[30px] top-[60%] absolute"></div>
        <div className="p-4 ">
          <div className="text-orange-500 text-sm text-bold font-bold">
            {category}
          </div>
          <div className="text-sm">{title}</div>

          <div className="flex justify-between items-center">
            <div className="text-[8px] text-orange-500 flex gap-1">
              {rating}
              <div>⭐⭐⭐⭐⭐</div>
              <div className="text-gray-400">{student}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-bold text-sm">{price}</div>
              <div className="text-[8px] text-red-900">{oldPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
