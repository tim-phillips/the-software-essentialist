export class MilitaryTimeValidator {
  validateRange(range: string): boolean {
    if (!range.includes("-")) return false;
    return Boolean(range);
  }
}
