const startIntersectionObserver = () => {
  const features = document.querySelectorAll(".feature");

  const observer = new IntersectionObserver(
    (sections) => {
      sections.forEach((section) => {
        if (section.intersectionRatio > 0.5) {
          section.target.classList.add("show-feature");
        } else {
          section.target.classList.remove("show-feature");
        }
      });
    },
    { threshold: 0.5 }
  );

  features.forEach((feature) => observer.observe(feature));
};

startIntersectionObserver();

// 1 hour = 30 degrees
// 1 min = 6 degrees

const getAngle = (hour, minute) => {
  const twelfthHour = hour === 12;
  const hourDegree = twelfthHour ? 0 : hour * 30;
  const minDegree = minute == 12 ? 0 : minute * 6;
  const angle =
    hourDegree < minDegree ? minDegree - hourDegree : hourDegree - minDegree;

  return angle;
};

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (j < nums.length) {
      let total = nums[i] + nums[j];
      if (total == target) {
        return [i, j];
        break;
      } else {
        j++;
      }
    }
  }
};
