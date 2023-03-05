using System;
using System.Collections.Generic;
using System.Linq;

namespace Nutrishare.DTO
{
	public class ApiResult
	{
		public ApiResult() { }

		///  <summary>
		///  Copy Constructor
		///  </summary>summary>
		/// </summary>
		/// <param name="copy"></param>
		public ApiResult(ApiResult copy) 
		{
			Success = copy.Success;
			Message = copy.Message;
			if (copy.Errors != null)
			{
				Errors = copy.Errors.ToList();
			}
		}

		public static ApiResult DefaultSucces => new ApiResult { Success = true, Message = string.Empty };

		public bool Success { get; set; } = false;

		public string Message { get; set; } = "";

		public IList<ApiError> Errors { get; set; }

		public void SetErrors(IList<ApiError> lErrorDetails)
		{
			SetSuccessOnFail();
			Errors = lErrorDetails;
		}

		public void AddError(string errCode, string errMsg, string logRefId = "")
		{
			SetSuccessOnFail();
			Errors = Errors ?? new List<ApiError>();
			Errors.Add(new ApiError(errCode, errMsg, logRefId));
		}

		private void SetSuccessOnFail()
		{
			Success = false;
		}
	}

	/// <summary>
	/// Generic wrapper for result class T
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public class ApiResult<T> : ApiResult where T : class
	{
		public ApiResult() { }

		public ApiResult(ApiResult copy):base(copy) { }
		public T Result { get; set; }
	}
}
