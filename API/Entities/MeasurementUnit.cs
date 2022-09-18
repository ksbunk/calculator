namespace API.Entities;

public enum MeasurementUnitType
{
    Unknown = 0,
    Mass = 1,
    Volume = 2,
    Distance = 3
}

public class MeasurementUnit
{
    public int Id { get; set; }

    public string UnitName { get; set; }

    public MeasurementUnitType UnitType { get; set; }

    public decimal ConversionValue { get; set; }
}