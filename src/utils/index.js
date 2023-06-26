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
  formatDate(date) {
    const dateObject = new Date(date);
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 since months are zero-based
    const year = dateObject.getFullYear().toString();

    return `${month}/${day}/${year}`;
  },
};

export default utils;
