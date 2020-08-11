export const clickOnSelectedLink = (ev) => {
  ev.preventDefault();
  ev.stopPropagation();
  console.log(ev.target);
  ev.target.click();
};
