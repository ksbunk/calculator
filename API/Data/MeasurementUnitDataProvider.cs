using API.Entities;

namespace API.Data
{
    public class MeasurementUnitDataProvider : IMeasurementUnitDataProvider
    {
        private readonly DataContext _context;
        private List<MeasurementUnit> _measurementUnits; 

        public MeasurementUnitDataProvider(DataContext context)
        {
            _context = context;
            _measurementUnits = null;
        }

        public List<MeasurementUnit> GetAll() {
            return loadMeasurmentUnits();
        }

        public MeasurementUnit Find(string unitName) {
            var measurements = loadMeasurmentUnits();
            return measurements.FirstOrDefault(u => u.UnitName == unitName);
        }

        private List<MeasurementUnit> loadMeasurmentUnits() {
            if (_measurementUnits == null) {
                _measurementUnits = _context.MeasurmentUnits.ToList();
            }

            return _measurementUnits;
        }
    }
}