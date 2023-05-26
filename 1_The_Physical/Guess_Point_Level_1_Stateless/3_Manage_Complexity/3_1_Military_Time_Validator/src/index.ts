export class MilitaryTimeValidator {
  static validateRange(range: string): boolean {
    if (!range.includes("-")) return false;

    const [start, end] = range.split(" - ");
    if (!start || !end) return false;

    return Boolean(range);
  }
}
