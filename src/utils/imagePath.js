export const getImagePath = (imageName) => {
  const isGitHubPages = window.location.hostname.includes('github.io');
  const basePath = isGitHubPages ? '/Restaurant_reservation' : '';
  return `${basePath}/images/${imageName}`;
};
