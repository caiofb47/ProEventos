using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProEventos.API.Data;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{
    private readonly DataContext _context;
    public EventoController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<Evento>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<Evento>>> Get()
    {
        return await _context.Eventos.ToListAsync();
    }

    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(typeof(Evento), StatusCodes.Status200OK)]
    public async Task<ActionResult<Evento>> Get(int id)
    {
        var retorno = await _context.Eventos.FirstOrDefaultAsync(e => e.EventoId == id);

        if (retorno is null)
        {
            return NotFound();
        }
        return Ok(retorno);
    }
}
