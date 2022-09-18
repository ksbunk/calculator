using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MeasurementUnitsController : Controller
{
    private readonly IMeasurementUnitDataProvider _measurementUnitDataProvider;

    public MeasurementUnitsController(IMeasurementUnitDataProvider measurementUnitDataProvider)
    {
        _measurementUnitDataProvider = measurementUnitDataProvider;
    }

    [HttpGet]
    public ActionResult<IEnumerable<MeasurementUnit>> GetUnits()
    {
        return _measurementUnitDataProvider.GetAll();
    }
}