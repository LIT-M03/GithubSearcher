using Newtonsoft.Json;

namespace GithubStuff.Api
{
    public class GithubRepo
    {
        public string Name { get; set; }
        public string Description { get; set; }
        [JsonProperty("stargazers_count")]
        public int Stars { get; set; }
        public int Watchers { get; set; }
    }
}