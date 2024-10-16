import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Notice = () => {
  const notices = [
    {
      id: 1,
      date: "15",
      month: "Sep",
      year: "2024",
      title: "Semester Registration Open",
    },
    {
      id: 13,
      date: "13",
      month: "Sep",
      year: "2024",
      title: "Final Examinations",
    },
    {
      id: 2,
      date: "12",
      month: "Sep",
      year: "2024",
      title: "Submission of Final Grades",
    },
    {
      id: 3,
      date: "10",
      month: "Sep",
      year: "2024",
      title: "Result of admission test (Written) of fall 2024",
    },
    {
      id: 4,
      date: "10",
      month: "Sep",
      year: "2024",
      title: "First Day of Classes for Fall 2024",
    },
    {
      id: 5,
      date: "15",
      month: "Sep",
      year: "2024",
      title: "Semester Registration Open",
    },
    {
      id: 6,
      date: "13",
      month: "Sep",
      year: "2024",
      title: "Final Examinations",
    },
    {
      id: 7,
      date: "12",
      month: "Sep",
      year: "2024",
      title: "Submission of Final Grades",
    },
    {
      id: 8,
      date: "10",
      month: "Sep",
      year: "2024",
      title: "Result of admission test (Written) of fall 2024",
    },
    {
      id: 9,
      date: "10",
      month: "Sep",
      year: "2024",
      title: "First Day of Classes for Fall 2024",
    },
    {
      id: 10,
      date: "12",
      month: "Sep",
      year: "2024",
      title: "Submission of Final Grades",
    },
    {
      id: 11,
      date: "10",
      month: "Sep",
      year: "2024",
      title: "Result of admission test (Written) of fall 2024",
    },
    {
      id: 12,
      date: "10",
      month: "Sep",
      year: "2024",
      title: "First Day of Classes for Fall 2024",
    },
  ];

  return (
    <section className="wrapper bg-secondary">
      <div className="text-white flex justify-between items-center mb-[90px] flex-col md:flex-row">
        <h1 className="text-heading lg:text-[70px] font-medium">Notice</h1>
        <Link to="" className="text-[20px] flex justify-center items-center">
          <span>View All</span>
          <span
            className={`inline-flex items-center justify-center w-5 h-5 text-[8px] ml-2 border border-white rounded-full`}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <ul className="noticebox list-none text-white text-[25px] h-[674px] overflow-y-scroll">
        {notices.map((notice, index) => (
          <li key={notice.id} className="md:mr-[60px] md:ml-4 cursor-pointer">
            <div
              className={`flex flex-col md:flex-row items-center gap-4 p-4 md:gap-[60px] md:p-[30px] font-medium rounded-2xl hover:bg-primary ${
                index === 0 ? "bg-primary" : ""
              }`}
            >
              <div className="flex flex-col justify-center items-center text-[24px] md:text-[30px]">
                <div className="date  ">{notice.date}</div>
                <div >
                  {notice.month} {notice.year}
                </div>
              </div>
              <p className="text-center md:text-left">{notice.title}</p>
            </div>

            {index > 0 && (
              <>
                <div className="flex items-center hover:hidden">
                  <div className="flex-1 border border-gray-300 relative justify-center items-center flex">
                    <div className="absolute left-0 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white border border-gray-300"></div>
                    <div className="absolute right-0 transform translate-x-1/2 w-2 h-2 rounded-full bg-white border border-gray-300"></div>
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notice;
