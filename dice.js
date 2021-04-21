function GG(arr) {
  let map = [],
    result = 0;

  arr
    .join("")
    .split("")
    .forEach((el) => (map[el] = (map[el] || 0) + 1));

  for (let index = 0; index <= 6; index++) {
    if (map[index] != undefined) {
      switch (index) {
        case 1:
          if (map[index] >= 3) {
            result += 1000;

            if (map[index] - 3 > 0) result += (map[index] - 3) * 100;
          } else {
            result += map[index] * 100;
          }

          break;
        case 2:
          if (map[index] >= 3) result += 200;

          break;
        case 3:
          if (map[index] >= 3) result * 300;

          break;
        case 4:
          if (map[index] >= 3) result += 400;

          break;
        case 5:
          if (map[index] >= 3) {
            result += 500;

            if (map[index] - 3 > 0) result += (map[index] - 3) * 50;
          } else {
            result += map[index] * 50;
          }

          break;
        case 6:
          if (map[index] >= 3) result += 600;

          break;
      }
    }
  }

  return result;
}

GG([5, 1, 3, 4, 1]); // 250

// GG([1, 1, 1, 3, 1]); // 1100

// GG([2, 4, 4, 5, 4]); // 450
