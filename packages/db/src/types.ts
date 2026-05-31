/**
 * Strict User Roles for the CoVound ecosystem.
 * Since SQLite does not support native enums, we enforce this at the application layer.
 */
export enum UserRole {
  REPORTER = "REPORTER",
  INVESTIGATOR = "INVESTIGATOR",
  ADMIN = "ADMIN",
}
