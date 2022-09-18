using API.Entities;

namespace API.Calculators;

public class MeasurementAdditionner : IMeasurementAdditionner
{
    public Measurement Add(IEnumerable<Measurement> measurements) {        
        var firstMeasurement = measurements.FirstOrDefault();
        if (firstMeasurement != null) {
            var sum = new Measurement {
                Value = 0,
                Unit = firstMeasurement.Unit
            };
            foreach (var measurement in measurements) {
                sum += measurement;
            }
            return sum;
        }

        return new Measurement {
            Value = 0,
            Unit = null
        };
    }
}