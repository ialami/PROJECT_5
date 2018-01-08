/**
 * REST API Errors
 *
 * All of following are implemented.
 *   400 - BadRequest
 *   401 - Unauthorized
 *   402 - PaymentRequired
 *   403 - Forbidden
 *   404 - NotFound
 *   405 - MethodNotAllowed
 *   406 - NotAcceptable
 *   407 - ProxyAuthenticationRequired
 *   408 - RequestTimeout
 *   409 - Conflict
 *   410 - Gone
 *   411 - LengthRequired
 *   412 - PreconditionFailed
 *   413 - RequestEntityTooLarge
 *   414 - RequestURITooLong
 *   415 - UnsupportedMediaType
 *   416 - RequestedRangeNotSatisfiable
 *   417 - ExpectationFailed
 *   418 - IAmATeapot
 *   420 - EnhanceYourCalm
 *   422 - UnprocessableEntity
 *   423 - Locked
 *   424 - FailedDependency
 *   426 - UpgradeRequired
 *   428 - PreconditionRequired
 *   429 - TooManyRequests
 *   431 - RequestHeaderFieldsTooLarge
 *   444 - NoResponse
 *   449 - RetryWith
 *   450 - BlockedbyWindowsParentalControls
 *   499 - ClientClosedRequest
 *   500 - InternalServerError
 *   501 - NotImplemented
 *   502 - BadGateway
 *   503 - ServiceUnavailable
 *   504 - GatewayTimeout
 *   505 - HTTPVersionNotSupported
 *   506 - VariantAlsoNegotiates
 *   507 - InsufficientStorage
 *   508 - LoopDetected
 *   509 - BandwidthLimitExceeded
 *   510 - NotExtended
 *   511 - NetworkAuthenticationRequired
 *   598 - NetworkReadTimeout
 *   599 - NetworkConnectTimeout
 */

exports.APIError = APIError;
exports.BadRequest = BadRequest;
exports.Unauthorized = Unauthorized;
exports.NotFound = NotFound;

function APIError(status: number, message: string, code: number) {
    this.status = status;
    this.code = code || status;
    this.message = message;
  }
APIError.prototype = Object.create(Error.prototype);

function BadRequest(message: string, code: number) {
    APIError.call(this, 400, message, code);
  }
BadRequest.prototype = Object.create(APIError.prototype);

function Unauthorized(message: string, code: number) {
    APIError.call(this, 401, message, code);
  }
Unauthorized.prototype = Object.create(APIError.prototype);

function NotFound(message: string, code: number) {
  APIError.call(this, 404, message, code);
}
NotFound.prototype = Object.create(APIError.prototype);