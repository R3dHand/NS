using System;
using System.Collections.Generic;

namespace Nutrishare.DTO
{
	public static class ApiResultHelper
	{
		public static string GenerateLogId => Guid.NewGuid().ToString().ToLower();

		public static string GenerateNullLogId => Guid.Empty.ToString().ToLower();

		/// <summary>
		/// Convert Validation result to APIResult wrapper instance.
		/// Used when validation has failed
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="validationResult"></param>
		/// <returns></returns>
		public static ApiResult<T> ConvertTo<T>(ApiResult validationResult) where T : class
		{
			return ConvertTo<T>(validationResult, null);
		}

		/// <summary>
		/// Convert validation result to ApiResult wrapper instance.
		/// Used when validation is successful and result data is available.
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="validationResult"></param>
		/// <param name="obj"></param>
		/// <returns></returns>
		public static ApiResult<T> ConvertTo<T>(ApiResult validationResult, T obj) where T : class
		{
			ApiResult<T> target = new ApiResult<T>() { Success = validationResult.Success };
			if (validationResult.Success)
			{
				target.Result = obj;
			}

			target.Errors = validationResult.Errors;
			target.Message = String.IsNullOrEmpty(validationResult.Message) ? GetSuccessMessage(validationResult.Success) : validationResult.Message;
			return target;
		}

		/// <summary>
		/// method to generate failed ApiResult wrapper
		/// </summary>
		/// <param name="message"></param>
		/// <param name="errCode"></param>
		/// <param name="errMsg"></param>
		/// <param name="logRefId"></param>
		/// <param name="isException"></param>
		/// <returns></returns>
		public static ApiResult GetFailedResult( string message, string errCode, string errMsg, string logRefId = "", bool isException = false)
		{
			ApiResult result;

			IList<ApiError> lErr = null;
			if (!string.IsNullOrEmpty(errMsg))
			{
				lErr = BuildErrorMessage(errCode, errMsg, logRefId, isException);
			}
			result = GetFailedResult(message, lErr);
			return result;
		}

		/// <summary>
		/// Generate Success API Result
		/// </summary>
		/// <returns>ApiResult object</returns>
		public static ApiResult GetSuccessResult()
		{
			var target = new ApiResult { Success = true };
			target.Message = GetSuccessMessage(true);
			return target;
		}

		/// <summary>
		/// Generate Success API Result
		/// </summary>
		/// <returns>ApiResult object</returns>
		public static ApiResult<T> GetSuccessResult<T>(T objModel) where T : class
		{
			ApiResult<T> target = new ApiResult<T>() { Success = true };
			target.Result = objModel;
			target.Message = GetSuccessMessage(true);
			return target;
		}

		/// <summary>
		/// Generate failed ApiResult
		/// </summary>
		/// <param name="message"></param>
		/// <param name="lErrors"></param>
		/// <returns></returns>
		public static ApiResult GetFailedResult(string message, IList<ApiError> lErrors)
		{
			var target = new ApiResult { Success = false, Errors = lErrors };
			target.Message = String.IsNullOrEmpty(message) ? GetSuccessMessage(false) : message;
			return target;
		}

		/// <summary>
		/// Generate failed api result for a template class T
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="message"></param>
		/// <param name="ex"></param>
		/// <param name="logRefId"></param>
		/// <returns></returns>
		public static ApiResult<T> GetFailedResult<T>(string message, Exception ex, string logRefId) where T : class
		{
			var lErr = ex != null ? BuildErrorMessage(ex, logRefId) : null;
			return GetFailedResult<T>(message, lErr);
		}

		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="message"></param>
		/// <param name="errCode"></param>
		/// <param name="errMsg"></param>
		/// <param name="logRefId"></param>
		/// <param name="isException"></param>
		/// <returns></returns>
		public static ApiResult<T> GetFailedResult<T>(string message, string errCode, string errMsg, string logRefId = "", bool isException = false) where T : class
		{
			IList<ApiError> lErr = null;
			if (!string.IsNullOrEmpty(errMsg))
			{
				lErr = BuildErrorMessage(errCode, errMsg, logRefId, isException);
			}
			return GetFailedResult<T>(message, lErr);
		}

		/// <summary>
		/// 
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="message"></param>
		/// <param name="lErrors"></param>
		/// <returns></returns>
		public static ApiResult<T> GetFailedResult<T>(string message, IList<ApiError> lErrors) where T : class
		{
			ApiResult<T> target = new ApiResult<T>() { Success = true };
			target.Errors = lErrors;
			target.Message = String.IsNullOrEmpty(message) ? GetSuccessMessage(false) : message;
			return target;
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="errCode"></param>
		/// <param name="errMsg"></param>
		/// <param name="logRefId"></param>
		/// <param name="isException"></param>
		/// <returns></returns>
		private static IList<ApiError> BuildErrorMessage(string errCode, string errMsg, string logRefId, bool isException = false)
		{
			var lErr = new List<ApiError>();
			if (!string.IsNullOrEmpty(errMsg))
			{
				lErr.Add(new ApiError(errCode, errMsg, logRefId, isException: true));
			}
			return lErr;
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="success"></param>
		/// <returns></returns>
		private static string GetSuccessMessage(bool success) => (success ? ApiResultConstants.MsgSucceeded : ApiResultConstants.MsgFailed);
		
		/// <summary>
		/// 
		/// </summary>
		/// <param name="ex"></param>
		/// <param name="logRefId"></param>
		/// <returns></returns>
		private static IList<ApiError> BuildErrorMessage(Exception ex, string logRefId)
		{
			var lErr = new List<ApiError>();
			if (!string.IsNullOrEmpty(ex.Message))
			{
				lErr.Add(new ApiError(ApiResultConstants.Error, ex.Message, logRefId, isException: true));
			}
			return lErr;
		}
	}
}
