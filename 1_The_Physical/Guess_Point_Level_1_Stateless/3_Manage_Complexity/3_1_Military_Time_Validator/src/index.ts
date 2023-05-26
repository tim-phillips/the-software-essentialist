export class MilitaryTimeValidator {
  static validateRange(range: string): boolean {
    if (!range.includes("-")) return false;

    const [start, end] = range.split(" - ");
    if (!start || !end) return false;

    if (!start.includes(":") || !end.includes(":")) return false;

    const [startHour] = start.split(":");
    const [endHour] = end.split(":");
    if (parseInt(startHour) >= 24) return false;
    if (parseInt(endHour) >= 24) return false;

    return Boolean(range);
  }
}
