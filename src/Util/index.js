const dayOfWeeks = ["Mon", "Tue", "Wed", "Tue", "Fri"];

export function getDayWithWeekend(dayLimit) {
  let countDay = 0;
  let currentDay = new Date();
  let leastDay = dayLimit - parseInt(new Date().getDate());

  for (let i = 1; i <= leastDay; i++) {
    let temp = new Date();

    temp.setDate(temp.getDate() + i);

    if (temp.getDay() === 0 || temp.getDay() === 6) {
      leastDay -= 1;
    }
  }

  return -1 * leastDay;
}
