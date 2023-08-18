import React from "react";

const Experience = (props) => {
    return (
        <div className="bg-[#1f2937] text-[#f9fafb]">
            <div className="mx-auto flex w-full max-w-5xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
            <div className="max-md:order-1 md:w-1/4">
                <img src=".\Assets\Tata_logo.svg.png" alt={props.logoAlt} className="max-w-[120px]" />
            </div>
            <div className="flex flex-col gap-4 max-md:order-3 md:w-3/4">
                <p variant="subtitle" className="font-semibold">{props.position}</p>
                <ul className="flex list-disc flex-col gap-2 md:gap-1 ml-[1rem]">
                    {props.summary?.map((sentence, index) => (
                        <li component="li" key={index}>{sentence}</li>
                    ))}
                </ul>
            </div>
        <div className="max-md:order-2 md:w-1/4">
          {/* <p className="text-gray-700 md:text-right">
            {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
              props.startDate
            )}{' '}
            -{' '}
            {props.currentlyWorkHere
              ? 'Present'
              : props.endDate
              ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                  props.endDate
                )
              : 'NA'}
          </p> */}
          <p className="text-[#f9fafb] md:text-right">{props.date}</p>
        </div>
      </div>
      </div>
    );
  };
  
  export default Experience;