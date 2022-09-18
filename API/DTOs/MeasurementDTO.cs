using System.ComponentModel.DataAnnotations;
using API.Validators;

namespace API.DTOs;

public class MeasurementDTO
{
    [Required]
    public decimal Value { get; set; }

    [Required]
    [ValidMeasurementUnit]
    public string Unit { get; set; }
}