using Nancy;

namespace RequireNancySammy.Modules
{
    public class HomeModule : NancyModule
    {
        public HomeModule()
        {
            Get["/Home/Index"] = parameters =>
            {
                return View["Home/index"];
            };
        }
    }
}