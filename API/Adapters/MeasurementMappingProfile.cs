using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Adapters;

public class MeasurementMappingProfile : Profile
{
    public MeasurementMappingProfile(IMeasurementUnitDataProvider measurementUnitDataProvider)
    {
        CreateMap<MeasurementDTO, Measurement>()
            .ForMember(dest => dest.Unit, opt => opt.MapFrom(source => measurementUnitDataProvider.Find(source.Unit)));
                 
        CreateMap<Measurement, MeasurementDTO>()
            .ForMember(dest => dest.Unit, opt => opt.MapFrom(source => source.Unit.UnitName));
    }
}