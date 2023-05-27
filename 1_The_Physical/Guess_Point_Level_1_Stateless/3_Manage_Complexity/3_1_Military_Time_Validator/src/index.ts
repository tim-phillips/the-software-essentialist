export class MilitaryTimeValidator {
  static validateRange(range: string): boolean {
    if (!range.includes("-")) return false;

    const [start, end, ...rest] = range.split(" - ");
    if (!start || !end) return false;
    if (rest.length) return false;

    if (!start.includes(":") || !end.includes(":")) return false;

    const [startHour, startMinute] = start.split(":");
    const [endHour, endMinute] = end.split(":");
    if (parseInt(startHour) >= 24 || parseInt(startHour) < 0) return false;
    if (parseInt(endHour) >= 24 || parseInt(endHour) < 0) return false;
    if (parseInt(startMinute) >= 60 || parseInt(startMinute) < 0) return false;
    if (parseInt(endMinute) >= 60 || parseInt(endMinute) < 0) return false;

    return Boolean(range);
  }
}
