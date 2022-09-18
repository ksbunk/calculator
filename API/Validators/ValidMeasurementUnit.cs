
using System.ComponentModel.DataAnnotations;
using API.Data;

namespace API.Validators;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, AllowMultiple = false)]
sealed public class ValidMeasurementUnit : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        var measurementUnitDataProvider = (IMeasurementUnitDataProvider) validationContext.GetService(typeof(IMeasurementUnitDataProvider));
        if (measurementUnitDataProvider.Find((string) value) != null) {
            return ValidationResult.Success;
        }

        return new ValidationResult($"Invalid unit '{value}'");
    }
}