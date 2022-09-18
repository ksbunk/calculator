namespace API.Entities;

public class Measurement
{
    public decimal Value { get; set; }

    public MeasurementUnit Unit { get; set; }

    public static Measurement operator +(Measurement a, Measurement b) {
        if ((a.Unit != null) && (b.Unit != null) && (a.Unit.UnitType == b.Unit.UnitType)) {
            var aNormalized = (a.Value * a.Unit.ConversionValue);
            var bNormalized = (b.Value * b.Unit.ConversionValue);
            var resultUnit = (a.Unit.ConversionValue > b.Unit.ConversionValue) ? a.Unit : b.Unit;
            return new Measurement {
                Value = (aNormalized + bNormalized) / resultUnit.ConversionValue,
                Unit = new MeasurementUnit {
                    Id = resultUnit.Id,
                    UnitName = resultUnit.UnitName,
                    UnitType = resultUnit.UnitType,
                    ConversionValue = resultUnit.ConversionValue,
                }
            };
        }
        throw new Exception($"Attempting to add mesurements with incompatible units: {a.Unit?.UnitName ?? "NULL"} and {b.Unit?.UnitName ?? "NULL"}");
    }
}