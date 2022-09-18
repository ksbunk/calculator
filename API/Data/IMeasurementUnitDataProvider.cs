using API.Entities;

namespace API.Data
{
    public interface IMeasurementUnitDataProvider
    {
        List<MeasurementUnit> GetAll();

        MeasurementUnit Find(string unitName);
    }
}