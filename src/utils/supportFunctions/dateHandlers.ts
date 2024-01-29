/**
 * Takes string argument from Data to ISO string and returns it
 * formatted to YYYY-mm-dd standard
 */
export function applyDate(date: string | null): string {
  if (date === null) {
    return "Session is not planned";
  }
  const result = date.substring(0, 10);
  return result;
}
