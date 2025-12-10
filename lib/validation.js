/**
 * Input validation and sanitization utilities
 * Prevents injection attacks and ensures data integrity
 */

import { z } from "zod";

/**
 * Sanitizes a JSON string by removing any potential code execution patterns
 * @param {string} jsonString - The JSON string to sanitize
 * @returns {string} Sanitized JSON string
 */
export function sanitizeJsonString(jsonString) {
  if (typeof jsonString !== "string") {
    throw new Error("Input must be a string");
  }

  // Remove any potential script tags or code execution patterns
  const sanitized = jsonString
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .replace(/eval\s*\(/gi, "")
    .replace(/Function\s*\(/gi, "");

  return sanitized;
}

/**
 * Safely parses JSON with validation
 * @param {string} jsonString - The JSON string to parse
 * @param {z.ZodSchema} schema - Optional Zod schema for validation
 * @returns {object} Parsed and validated JSON object
 */
export function safeJsonParse(jsonString, schema = null) {
  try {
    // Sanitize the JSON string first
    const sanitized = sanitizeJsonString(jsonString);

    // Parse the JSON
    const parsed = JSON.parse(sanitized);

    // If a schema is provided, validate against it
    if (schema) {
      return schema.parse(parsed);
    }

    return parsed;
  } catch (error) {
    throw new Error(`JSON parsing/validation failed: ${error.message}`);
  }
}

/**
 * Schema for AI-generated car details from image processing
 */
export const aiCarDetailsSchema = z.object({
  make: z.string().min(1).max(100),
  model: z.string().min(1).max(100),
  year: z.number().int().min(1900).max(new Date().getFullYear() + 1),
  color: z.string().min(1).max(50),
  price: z.string().min(1).max(50),
  mileage: z.string().min(1).max(50),
  bodyType: z.string().min(1).max(50),
  fuelType: z.string().min(1).max(50),
  transmission: z.string().min(1).max(50),
  description: z.string().min(1).max(2000),
  confidence: z.number().min(0).max(1),
});

/**
 * Schema for AI-generated car search details
 */
export const aiCarSearchSchema = z.object({
  make: z.string().min(1).max(100),
  bodyType: z.string().min(1).max(50),
  color: z.string().min(1).max(50),
  confidence: z.number().min(0).max(1),
});

/**
 * Schema for car data input validation
 */
export const carDataSchema = z.object({
  make: z.string().min(1).max(100),
  model: z.string().min(1).max(100),
  year: z.number().int().min(1900).max(new Date().getFullYear() + 1),
  price: z.string().min(1).max(50),
  mileage: z.string().min(1).max(50),
  color: z.string().min(1).max(50),
  fuelType: z.string().min(1).max(50),
  transmission: z.string().min(1).max(50),
  bodyType: z.string().min(1).max(50),
  seats: z.number().int().min(1).max(20),
  description: z.string().min(1).max(5000),
  status: z.enum(["AVAILABLE", "SOLD", "UNAVAILABLE"]),
  featured: z.boolean(),
});

/**
 * Schema for search parameters validation
 */
export const searchParamsSchema = z.object({
  search: z.string().max(200).optional(),
  make: z.string().max(100).optional(),
  bodyType: z.string().max(50).optional(),
  fuelType: z.string().max(50).optional(),
  transmission: z.string().max(50).optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  sortBy: z.enum(["newest", "priceAsc", "priceDesc"]).optional(),
  page: z.number().int().min(1).optional(),
  limit: z.number().int().min(1).max(100).optional(),
});

/**
 * Schema for test drive booking validation
 */
export const testDriveBookingSchema = z.object({
  carId: z.string().uuid(),
  bookingDate: z.string().datetime(),
  startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
  endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
  notes: z.string().max(1000).optional(),
});

/**
 * Schema for car status update validation
 */
export const carStatusUpdateSchema = z.object({
  status: z.enum(["AVAILABLE", "SOLD", "UNAVAILABLE"]).optional(),
  featured: z.boolean().optional(),
});

/**
 * Schema for user role update validation
 */
export const userRoleUpdateSchema = z.object({
  userId: z.string().uuid(),
  role: z.enum(["USER", "ADMIN"]),
});

/**
 * Sanitizes user input strings to prevent XSS and injection attacks
 * @param {string} input - The input string to sanitize
 * @returns {string} Sanitized string
 */
export function sanitizeUserInput(input) {
  if (typeof input !== "string") {
    return input;
  }

  return input
    .replace(/[<>]/g, "") // Remove angle brackets
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
    .trim();
}

/**
 * Validates and sanitizes file upload
 * @param {File} file - The file to validate
 * @param {Object} options - Validation options
 * @returns {boolean} Whether file is valid
 */
export function validateFileUpload(
  file,
  options = {
    maxSize: 10 * 1024 * 1024, // 10MB default
    allowedTypes: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
  }
) {
  if (!file) {
    throw new Error("No file provided");
  }

  // Check file size
  if (file.size > options.maxSize) {
    throw new Error(
      `File size exceeds maximum allowed size of ${options.maxSize / 1024 / 1024}MB`
    );
  }

  // Check file type
  if (!options.allowedTypes.includes(file.type)) {
    throw new Error(
      `File type ${file.type} is not allowed. Allowed types: ${options.allowedTypes.join(", ")}`
    );
  }

  return true;
}
