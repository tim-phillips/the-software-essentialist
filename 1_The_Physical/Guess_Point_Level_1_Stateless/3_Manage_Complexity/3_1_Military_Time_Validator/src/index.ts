export class MilitaryTimeValidator {
  static validateRange(range: string): boolean {
    if (!range.includes("-")) return false;

    const [, end] = range.split(" - ");
    if (!end) return false;

    return Boolean(range);
  }
}
