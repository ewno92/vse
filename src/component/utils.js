export const formatNumber = (num) => {
  return num.toString().padStart(3, "0");
};

export const divideImageList = (images) => {
  const middleIndex = Math.ceil(images.length / 2);
  const first = images.splice(0, middleIndex);
  const second = images.splice(-middleIndex);
  return [first, second];
};
