using System;

namespace Nutrishare.DTO
{
	public class ApiError
	{
		public ApiError() { }
		public ApiError(string code, string msg, string logRefId = "", bool isException = false)
		{
			Code = code;
			Message = msg;
			IsException = isException;
			LogRefId = logRefId;
		}

		public string Code { get; set; } = "";
		public string Message { get; set; } = "";
		public bool IsException { get; set; }
		public string LogRefId { get; set; } = Guid.Empty.ToString().ToLower();
	}
}
