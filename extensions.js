module.exports = {
  indicator: options => {
    console.log("Options for indicator", options);
    return ".";
  },
  "logo.svg": options => {
    if (options.replaceLogo) {
      if (options && options.variation) {
        return `./src/logos/${options.variation}.svg`;
      }
      return "./src/logo.svg";
    } else {
      return null;
    }
  }
};
