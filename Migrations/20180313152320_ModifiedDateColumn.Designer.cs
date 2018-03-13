﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using ProjectApi;
using System;

namespace BucketList.Migrations
{
    [DbContext(typeof(ProjectContext))]
    [Migration("20180313152320_ModifiedDateColumn")]
    partial class ModifiedDateColumn
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ProjectApi.Assignment", b =>
                {
                    b.Property<int>("AssignmentId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<DateTime>("EndDate");

                    b.Property<int>("ProjectMilestoneId");

                    b.Property<DateTime>("StartDate");

                    b.Property<string>("Title");

                    b.HasKey("AssignmentId");

                    b.HasIndex("ProjectMilestoneId");

                    b.ToTable("Assignment");
                });

            modelBuilder.Entity("ProjectApi.Level", b =>
                {
                    b.Property<int>("LevelId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("value");

                    b.HasKey("LevelId");

                    b.ToTable("Level");
                });

            modelBuilder.Entity("ProjectApi.Milestone", b =>
                {
                    b.Property<int>("MilestoneId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<int>("LevelId");

                    b.Property<string>("Name");

                    b.HasKey("MilestoneId");

                    b.HasIndex("LevelId");

                    b.ToTable("Milestone");
                });

            modelBuilder.Entity("ProjectApi.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Description");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("date");

                    b.Property<string>("Name");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("date");

                    b.Property<int>("StatusId");

                    b.HasKey("ProjectId");

                    b.HasIndex("StatusId");

                    b.ToTable("Project");
                });

            modelBuilder.Entity("ProjectApi.ProjectMilestone", b =>
                {
                    b.Property<int>("ProjectMielstoneId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Descirption");

                    b.Property<DateTime>("EndDate");

                    b.Property<string>("MilestoneGivenName");

                    b.Property<int>("MilestoneId");

                    b.Property<int>("ProjectId");

                    b.Property<DateTime>("StartDate");

                    b.Property<int>("StatusId");

                    b.HasKey("ProjectMielstoneId");

                    b.HasIndex("MilestoneId");

                    b.HasIndex("ProjectId");

                    b.HasIndex("StatusId");

                    b.ToTable("ProjectMilestone");
                });

            modelBuilder.Entity("ProjectApi.Status", b =>
                {
                    b.Property<int>("StatusId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("StatusName");

                    b.HasKey("StatusId");

                    b.ToTable("Status");
                });

            modelBuilder.Entity("ProjectApi.Assignment", b =>
                {
                    b.HasOne("ProjectApi.ProjectMilestone", "projectMilestone")
                        .WithMany()
                        .HasForeignKey("ProjectMilestoneId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ProjectApi.Milestone", b =>
                {
                    b.HasOne("ProjectApi.Level", "level")
                        .WithMany()
                        .HasForeignKey("LevelId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ProjectApi.Project", b =>
                {
                    b.HasOne("ProjectApi.Status", "status")
                        .WithMany()
                        .HasForeignKey("StatusId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ProjectApi.ProjectMilestone", b =>
                {
                    b.HasOne("ProjectApi.Milestone", "milestone")
                        .WithMany()
                        .HasForeignKey("MilestoneId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ProjectApi.Project", "project")
                        .WithMany()
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ProjectApi.Status", "status")
                        .WithMany()
                        .HasForeignKey("StatusId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
