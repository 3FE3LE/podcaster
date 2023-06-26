const utils = {
  trimText(text) {
    if (text.length <= 28) {
      return text;
    }

    return text.slice(0, 28) + "...";
  },
  millsFormatter(milliseconds) {
    let secs = Math.floor(milliseconds / 1000);

    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor((secs % 3600) / 60);
    let leftSeconds = secs % 60;

    let timeFormatted = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${leftSeconds.toString().padStart(2, "0")}`;

    return timeFormatted;
  },
};

export default utils;
