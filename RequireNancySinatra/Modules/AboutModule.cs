using Nancy;

namespace RequireNancySammy.Modules
{
    public class AboutModule : NancyModule
    {
        public AboutModule()
        {
            Get["/About/Index"] = parameters =>
            {
                return View["About/index"];
            };
        }
    }
}