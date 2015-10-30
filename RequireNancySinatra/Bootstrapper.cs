using Nancy;
using Nancy.Bootstrapper;
using Nancy.Conventions;
using Nancy.TinyIoc;
using System.Collections.Generic;

namespace RequireNancySinatra
{
    public class Bootstrapper : DefaultNancyBootstrapper
    {
        protected override void ConfigureApplicationContainer(TinyIoCContainer container)
        {
            //container.Register<ISettingsService>(new SettingsService());

        }

        protected override void RequestStartup(TinyIoCContainer container, IPipelines pipelines, NancyContext context)
        {
            pipelines.AfterRequest += AttachErrorResponse;
        }

        private void AttachErrorResponse(NancyContext ctx)
        {
            if (ctx.ModelValidationResult.Errors.Count > 0)
            {
                ctx.Response.StatusCode = HttpStatusCode.BadRequest;
            }
        }

        protected override void ConfigureConventions(NancyConventions conventions)
        {
            base.ConfigureConventions(conventions);

            var whitelistedWebsiteFolders = new Dictionary<string, string>
            {
                { "Content", @"./Content" },
                { "Lib", @"./Lib" },
                { "Scripts", @"./Scripts" }
            };

            foreach (var whitelistedWebsiteFolder in whitelistedWebsiteFolders)
            {
                conventions.StaticContentsConventions.Add(
                        StaticContentConventionBuilder.AddDirectory(whitelistedWebsiteFolder.Key, whitelistedWebsiteFolder.Value)
                );
            }
        }
    }
}