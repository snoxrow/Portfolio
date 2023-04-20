import { useState, useEffect, useRef } from "react";

const refHook = (options) => {
  const ref = useRef(null);

  const [isIntersecting, setIsIntersecting] = useState(false);
 

  const callFunction = (entries) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callFunction, options);
    
    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, [ref, options]);
  return [ref, isIntersecting]
};

export default refHook;
