export class MilitaryTimeValidator {
  static validateRange(range: string): boolean {
    if (!this.rangeHasSeparator(range)) return false;
    if (!this.rangeHasCorrectNumberOfParts(range)) return false;

    const [start, end] = this.getStartAndEndTimes(range);
    if (!this.isValidTime(start) || !this.isValidTime(end)) return false;

    return true;
  }

  private static rangeHasSeparator(range: string): boolean {
    return range.includes("-");
  }

  private static rangeHasCorrectNumberOfParts(range: string): boolean {
    const parts = range.split(" - ");
    return parts.length === 2;
  }

  private static getStartAndEndTimes(range: string): string[] {
    const [start, end] = range.split(" - ");
    return [start, end];
  }

  private static isValidTime(time: string): boolean {
    if (!this.timeHasSeparator(time)) return false;

    const [hour, minute] = this.getHourAndMinute(time);
    if (hour >= 24 || hour < 0) return false;
    if (minute >= 60 || minute < 0) return false;

    return true;
  }

  private static timeHasSeparator(time: string): boolean {
    return time.includes(":");
  }

  private static getHourAndMinute(time: string): number[] {
    const [hour, minute] = time.split(":").map((t) => parseInt(t));
    return [hour, minute];
  }
}
