export const formatDate = (date) => {
  const options = {
    weekday: 'long',
    yaer: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return date.toLocaleDateString('en-US', options);
};
