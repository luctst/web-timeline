import React, {useEffect, useRef} from "react";
import {TweenMax} from "gsap";
import LoaderStyle from "./LoaderStyle.style";

const Loader = () => {
  const blue = useRef(null);
  const red = useRef(null);
  const yellow = useRef(null);
  const green = useRef(null);

  useEffect(() => {
    TweenMax.fromTo([blue.current, yellow.current],
      0.5,
      { y: 18 },
      { y: -18, yoyo: true, repeat: -1 }
      );

    TweenMax.fromTo(
      [red.current, green.current],
      0.5,
      { y: -18 },
      { y: 18, repeat: -1, yoyo: true }
    );
  })

  return (
    <LoaderStyle className="loader">
      <svg viewBox="0 0 150 33.2" width="180" height="150">
        <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#B0E7FF" />
        <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#C9EFFF" />
        <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#B0E7FF" />
        <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#C9EFFF" />
      </svg>
    </LoaderStyle>
  );
};
export default Loader;