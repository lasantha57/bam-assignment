export type ErrorCode = 1 | 403 | 404 | 500 | 400 | 401 | 409 | 502 | 503;

export class ApiError {
  constructor(
    public code: ErrorCode,
    public text: string,
    public description?: string,
    public originalError?: any
  ) {}
}
