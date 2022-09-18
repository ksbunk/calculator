﻿// <auto-generated />
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.9");

            modelBuilder.Entity("API.Entities.MeasurementUnit", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<double>("ConversionValue")
                        .HasColumnType("REAL");

                    b.Property<string>("UnitName")
                        .HasColumnType("TEXT");

                    b.Property<int>("UnitType")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("MeasurmentUnits");
                });
#pragma warning restore 612, 618
        }
    }
}
