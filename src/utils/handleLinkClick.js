const handleLinkClick = (evt) => {
  if (
    evt.currentTarget.nodeName === "BUTTON" ||
    evt.target.nodeName === "svg" ||
    evt.target.nodeName === "path"
  ) {
    evt.preventDefault();
  }
};

export default handleLinkClick;
