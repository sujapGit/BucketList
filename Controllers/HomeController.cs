using System;
using Microsoft.AspNetCore.Mvc;

namespace ProjectApi
{
    [Route("api/[Controller]")]
    public class HelloController : Controller
    {
        [HttpGet]
        public IActionResult Greetings() {
            return Ok("Get Goals");
        }
    }
}