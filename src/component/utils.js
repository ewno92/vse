import { useState, useEffect } from "react";

export const formatNumber = (num) => {
  return num.toString().padStart(3, "0");
};

export const divideImageList = (images) => {
  const middleIndex = Math.ceil(images.length / 2);
  const first = images.splice(0, middleIndex);
  const second = images.splice(-middleIndex);
  return [first, second];
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const doPost = async (url, post) => {
  const res = await fetch(url, {
    redirect: "follow",
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
