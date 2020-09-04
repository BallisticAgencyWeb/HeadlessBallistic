import React from "react";

function PageHeading(props) {
  return (
    <div className="p-6 bg-ballistic-gray">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl text-center font-bold text-gray-900 sm:text-5xl sm:leading-snug sm:truncate">
              {props.title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeading;
