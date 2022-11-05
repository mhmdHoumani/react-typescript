import React, { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <p>text</p>
      <input type="text" ref={inputRef} />
    </div>
  );
};
export default DomRef;
