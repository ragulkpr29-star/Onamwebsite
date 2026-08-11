import { departmentCodes, yearPrefixes } from "@/data/departments";

export const normalizeRollNo = (rollNo: string): string =>
  rollNo.trim().toUpperCase().replace(/\s+/g, "");

export const getDepartmentFromRollNo = (rollNo: string): string => {
  const roll = normalizeRollNo(rollNo);
  const match = roll.match(/[A-Z]{3}/);
  if (!match) return "";
  return departmentCodes[match[0]] ?? "";
};

export const getYearFromRollNo = (rollNo: string): string => {
  const roll = normalizeRollNo(rollNo);
  if (!roll || roll.length < 2) return "";
  return yearPrefixes[roll.substring(0, 2)] ?? "";
};

/** A valid roll number looks like 25CSR123 — 2-digit year, 3-letter dept code, digits. */
export const isValidRollNo = (rollNo: string): boolean => {
  const roll = normalizeRollNo(rollNo);
  if (!/^\d{2}[A-Z]{3}\d{1,5}$/.test(roll)) return false;
  if (!yearPrefixes[roll.substring(0, 2)]) return false;
  return Boolean(departmentCodes[roll.substring(2, 5)]);
};

export const deriveMember = (rollNo: string) => ({
  department: getDepartmentFromRollNo(rollNo),
  year: getYearFromRollNo(rollNo),
});

export const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

export const isValidPhone = (phone: string): boolean => /^\d{10}$/.test(phone.trim());
