using Microsoft.AspNetCore.Mvc;
using API.DTOs;
using API.Entities;
using AutoMapper;
using API.Calculators;
using System.Net;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MeasurementSumController : ControllerBase
{
    private readonly IMeasurementAdditionner _additionner;
    private readonly IMapper _mapper;

    public MeasurementSumController(IMeasurementAdditionner additionner, IMapper mapper)
    {
        _additionner = additionner;
        _mapper = mapper;
    }

    [HttpPost]
    public ActionResult<MeasurementDTO> Sum([FromBody] IEnumerable<MeasurementDTO> measurements)
    {
        try {
            var sum = _additionner.Add(_mapper.Map<IEnumerable<Measurement>>(measurements));
            return _mapper.Map<MeasurementDTO>(sum);
        } catch (Exception e) {
            return BadRequest(e.Message);
        }
    }
}
