using API.Entities;

namespace API.Calculators;

public interface IMeasurementAdditionner
{
    Measurement Add(IEnumerable<Measurement> measurements);
}