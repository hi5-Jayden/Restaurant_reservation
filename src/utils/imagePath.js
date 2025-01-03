export const getImagePath = (imageName) => {
  // This will handle both development and production paths
  return `${process.env.PUBLIC_URL}/images/${imageName}`;
};
