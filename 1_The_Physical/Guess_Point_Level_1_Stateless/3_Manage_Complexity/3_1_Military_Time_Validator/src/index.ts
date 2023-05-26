export class MilitaryTimeValidator {
  static validateRange(range: string): boolean {
    if (!range.includes("-")) return false;

    const [start, end] = range.split(" - ");
    if (!start || !end) return false;

    if (!start.includes(":") || !end.includes(":")) return false;

    const [startHour, startMinute] = start.split(":");
    const [endHour, endMinute] = end.split(":");
    if (parseInt(startHour) >= 24) return false;
    if (parseInt(endHour) >= 24) return false;
    if (parseInt(endMinute) >= 60) return false;

    return Boolean(range);
  }
}
