const utils = {
  trimText(text: string): string {
    if (text.length <= 28) {
      return text;
    }

    return text.slice(0, 28) + "...";
  },
};

export default utils;
