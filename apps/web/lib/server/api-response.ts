import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { HttpError } from "./http-error";

export type ApiSuccess<T> = {
  ok: true;
  data: T;
};

export type ApiFailure = {
  ok: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
};

export function successResponse<T>(data: T, status = 200) {
  return NextResponse.json<ApiSuccess<T>>({ ok: true, data }, { status });
}

export function errorResponse(code: string, message: string, status: number, details?: unknown) {
  return NextResponse.json<ApiFailure>(
    {
      ok: false,
      error: { code, message, details }
    },
    { status }
  );
}

export function toRouteErrorResponse(error: unknown) {
  if (error instanceof HttpError) {
    return errorResponse(error.code, error.message, error.status, error.details);
  }

  if (error instanceof ZodError) {
    return errorResponse("VALIDATION_ERROR", "Request validation failed", 400, error.flatten());
  }

  return errorResponse("INTERNAL_ERROR", "Unexpected server error", 500);
}
