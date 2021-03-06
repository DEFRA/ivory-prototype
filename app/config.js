// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
  // Service name used in header. Eg: 'Renew your passport'
  // serviceName: 'Declare an ivory item before sale or hire',
  // serviceName: 'Buy a permit for the single sale of an item containing ivory',
  // serviceName: 'Register an item containing ivory for sale or hire',
  // Service name is now hardcoded in the version's layout.html file (so we can have a service name per version)

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Enable or disable built-in docs and examples.
  useDocumentation: 'true',

  // Force HTTP to redirect to HTTPS on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'GOV.UK uses cookies to make the site simpler. <a href="#">Find out more about cookies</a>',

  // Enable or disable Browser Sync
  useBrowserSync: 'true',

  // Get the absolute path of the root application directory
  // (Beware an alternative way of setting this using 'path.dirname(require.main.filename)' is different on localhost and Heroku)
  rootAppDirectory: __dirname
}
