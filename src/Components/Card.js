import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("liked removed");
        } else {
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            } else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("liked Successfully");
        }

    }

    return (
        <div className="w-[300px] bg-[#17181a] rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} alt={course.title} />

                <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ?
                                (<FcLike fontSize="1.75rem" />) :
                                (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>

            <div>
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-4 text-white text-sm" >
                    {
                        course.description.length > 100 ?
                            (course.description.substr(0, 100)) + "..." :
                            (course.description)
                    }
                </p>
            </div>
        </div>
    );
};

export default Card;
