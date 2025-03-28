/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekendDays {
    SUNDAY,
    SATURDAY,
}

function isWeekend (day: WeekendDays): boolean {
    return day === WeekendDays.SUNDAY || day === WeekendDays.SATURDAY;
}

// console.log(isWeekend(WeekendDays.SUNDAY))
// console.log(isWeekend(WeekendDays.SATURDAY))
// console.log(isWeekend(WeekendDays.MONDAY))
