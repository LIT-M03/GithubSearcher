using System.Collections.Generic;
using System.Net;
using Newtonsoft.Json;

namespace GithubStuff.Api
{
    public class GithubApi
    {
        private const string baseUrl = "https://api.github.com/users/";

        public GithubUser GetUser(string username)
        {
            using (var webClient = new WebClient())
            {
                webClient.Headers["User-Agent"] = "Gitlab is better";
                var json = webClient.DownloadString(baseUrl + username);
                return JsonConvert.DeserializeObject<GithubUser>(json);
            }
        }

        public IEnumerable<GithubRepo> GetReposForUser(string username)
        {
            using (var webClient = new WebClient())
            {
                webClient.Headers["User-Agent"] = "Gitlab is better";
                var json = webClient.DownloadString(baseUrl + username + "/repos");
                return JsonConvert.DeserializeObject<IEnumerable<GithubRepo>>(json);
            }
        }
    }
}