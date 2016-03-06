using System;
using System.Linq;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using System.Text;
using System.Threading.Tasks;

namespace GithubStuff.Api
{
    public class GithubUser
    {
        public string Name { get; set; }
        public string Location { get; set; }
        public string Followers { get; set; }
    }
}
