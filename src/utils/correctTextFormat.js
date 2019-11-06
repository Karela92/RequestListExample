export const changeTextContent = description => {
  const changedDescription = document.createElement('p');
  changedDescription.innerHTML = description;
  return changedDescription.textContent;
};