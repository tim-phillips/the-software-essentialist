export class MilitaryTimeValidator {
  static validateRange(range: string): boolean {
    if (
      !this.rangeHasSeparator(range) ||
      !this.rangeHasCorrectNumberOfParts(range)
    ) {
      return false;
    }

    const [start, end] = this.getStartAndEndTimes(range);

    return this.isValidTime(start) && this.isValidTime(end);
  }

  private static rangeHasSeparator(range: string): boolean {
    return range.includes("-");
  }

  private static rangeHasCorrectNumberOfParts(range: string): boolean {
    return range.split(" - ").length === 2;
  }

  private static getStartAndEndTimes(range: string): string[] {
    const [start, end] = range.split(" - ");
    return [start, end];
  }

  private static isValidTime(time: string): boolean {
    if (!this.timeHasSeparator(time)) return false;

    const [hour, minute] = this.getHourAndMinute(time);

    return this.isValidHour(hour) && this.isValidMinute(minute);
  }

  private static timeHasSeparator(time: string): boolean {
    return time.includes(":");
  }

  private static getHourAndMinute(time: string): number[] {
    const [hour, minute] = time.split(":").map((t) => parseInt(t));
    return [hour, minute];
  }

  private static isValidHour(hour: number): boolean {
    return hour < 24 && hour >= 0;
  }

  private static isValidMinute(minute: number): boolean {
    return minute < 60 && minute >= 0;
  }
}
