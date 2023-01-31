using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{
    public EventoController()
    {
    }
    [HttpGet]
    public Evento Get()
    {
        return new Evento(){
            EventoId = 1,
            Tema = "Curso de Angular",
            Local = "Belo Horizonte",
            Lote = "1°",
            QtdPessoas = 250,
            DataEvento = DateTime.Now.ToString(),
            ImageURL="img.png"
        };
    }
}
