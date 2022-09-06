using CoursesWebApi.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace CoursesWebApi.Models
{
    public class CourseDbContext:DbContext
    {
        public DbSet<Course> Courses { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<StudentCourses> StudentCourses { get; set; }
        public DbSet<AllocatedCourses> AllocatedCourses { get; set; }





        public CourseDbContext(DbContextOptions<CourseDbContext> options)
            : base(options)
        {

        }
    }
}
