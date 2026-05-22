using Aplicatie.API.Data;
using Aplicatie.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Aplicatie.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AngajatiController : ControllerBase
    {
        private readonly AplicatieDbContext _aplicatieDbContext;

        public AngajatiController(AplicatieDbContext aplicatieDbContext)
        {
            _aplicatieDbContext = aplicatieDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAngajati()
        {
            var angajati = await _aplicatieDbContext.Angajati.ToListAsync();

            return Ok(angajati);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetAngajat([FromRoute] Guid id)
        {
            var angajat = await _aplicatieDbContext.Angajati.FirstOrDefaultAsync(x => x.Id == id);

            if (angajat == null)
            {
                return NotFound();
            }

            return Ok(angajat);
        }

        [HttpPost]
        public async Task<IActionResult> AddAngajat([FromBody] Angajat angajatRequest)
        {
            angajatRequest.Id = Guid.NewGuid();

            await _aplicatieDbContext.Angajati.AddAsync(angajatRequest);
            await _aplicatieDbContext.SaveChangesAsync();

            return Ok(angajatRequest);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateAngajat([FromRoute] Guid id, [FromBody] Angajat angajatDeModificat)
        {
            var angajat = await _aplicatieDbContext.Angajati.FindAsync(id);

            if (angajat == null)
            {
                return NotFound();
            }

            angajat.Name = angajatDeModificat.Name;
            angajat.Email = angajatDeModificat.Email;
            angajat.Phone = angajatDeModificat.Phone;
            angajat.Salary = angajatDeModificat.Salary;
            angajat.Department = angajatDeModificat.Department;

            await _aplicatieDbContext.SaveChangesAsync();

            return Ok(angajat);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteAngajat([FromRoute] Guid id)
        {
            var angajat = await _aplicatieDbContext.Angajati.FindAsync(id);

            if (angajat == null)
            {
                return NotFound();
            }

            _aplicatieDbContext.Angajati.Remove(angajat);
            await _aplicatieDbContext.SaveChangesAsync();

            return Ok(angajat);
        }
    }
}