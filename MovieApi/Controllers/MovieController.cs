using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using MovieApi.Repository;

namespace MovieApi.Controllers
{
    public class MovieController : ApiController
    {
        // GET: api/Movie
        public async Task<string> Get()
        {
            return await MovieRepository.MoviesList();
        }

        // GET: api/Movie/5
        public async Task<string> Get(string id)
        {
            return await MovieRepository.MovieDetails(id);
        }

    }
}
