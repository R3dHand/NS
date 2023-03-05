using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Nutrishare.DTO
{
	public class ValidationResult
	{
		public static ValidationResult DefaultSuccess => new ValidationResult { Success = true, Message = string.Empty };

		public static ValidationResult DefaultFail => new ValidationResult { Success = false, Message = string.Empty };

		public bool Success { get; set; }
		public string Message { get; set; }
		public string Code { get; set; }
	}
}
