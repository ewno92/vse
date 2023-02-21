export const formatNumber = (num) => {
  return num.toString().padStart(3, "0");
};

export const divideImageList = (images) => {
  const temp = images;
  const middleIndex = Math.ceil(images.length / 2);
  const first = temp.splice(0, middleIndex);
  const second = temp.splice(-middleIndex);
  return [first, second];
};
