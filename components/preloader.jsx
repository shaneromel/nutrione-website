import React from 'react';

const Preloader = () => {
  return (
    <>
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="object" id="first_object"></div>
            <div className="object" id="second_object"></div>
            <div className="object" id="third_object"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;