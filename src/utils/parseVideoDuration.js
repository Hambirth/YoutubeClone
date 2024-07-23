const parseVideoDuration = (duration) => {
  const durationParts = duration
    .replace("PT", "")
    .replace("H", ":")
    .replace("M", ":")
    .replace("S", "")
    .split(":");

  if (durationParts.length === 3) {
    // Hours:Minutes:Seconds
    return `${durationParts[0]}:${
      parseInt(durationParts[1], 10) < 10
        ? `0${durationParts[1]}`
        : durationParts[1]
    }:${
      parseInt(durationParts[2], 10) < 10
        ? `0${durationParts[2]}`
        : durationParts[2]
    }`;
  }

  if (durationParts.length === 2) {
    // Minutes:Seconds
    return `${durationParts[0]}:${
      parseInt(durationParts[1], 10) < 10
        ? `0${durationParts[1]}`
        : durationParts[1]
    }`;
  }

  if (durationParts.length === 1) {
    // Seconds only, assuming less than a minute videos
    return `0:${
      parseInt(durationParts[0], 10) < 10
        ? `0${durationParts[0]}`
        : durationParts[0]
    }`;
  }

  // This return was in the wrong place since it's the same as the 3-part condition. Removed for clarity.
};

export default parseVideoDuration;
