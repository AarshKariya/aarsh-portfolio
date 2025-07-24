import { NextPage } from "next";
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  personName: string;
  personPosition: string;
  companyName: string;
  mainCardStyles?: string;
  personImg?: string;
  companyImg?: string;
  quote: string;
}

const TestimonialCard: NextPage<TestimonialCardProps> = ({
  personName,
  personPosition,
  companyName,
  mainCardStyles,
  personImg,
  companyImg,
  quote,
}: TestimonialCardProps) => {
  return (
    <div
      id="card"
      className={`Card w-full h-[500px] rounded-xl relative z-30 mb-10 flex ${mainCardStyles}`}
    >
      <div className="flex flex-col justify-between items-center p-4 w-full">
        <div className="flex justify-between items-center p-4 w-full">
          <div className="text-[1.75rem] text-[#83C5BE]">{personName}</div>
          <div className="flex">
            <div className="text-[0.875rem] flex space-x-1">
              <span className="text-[#6D6875]">{personPosition},</span>
              <span>{companyName}</span>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-300 w-full my-1" />

        <div className="flex-grow flex justify-between items-center p-4 rounded-md w-full">
          <div className="flex flex-col space-y-4 w-[8rem]">
            <Image
              src={personImg ?? ""}
              alt="img is here"
              width={160}
              height={160}
            />
            <Image
              src={companyImg ?? ""}
              alt="company img is here"
              width={160}
              height={160}
            />
          </div>
          <div className="flex items-center space-x-4 max-w-[60%]">
            <Image
              src="/doubleQuotesIcon.svg"
              alt="company img is here"
              width={120}
              height={60}
              className="flex-shrink-0"
            />
            <div className="flex-grow">{quote}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
