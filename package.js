var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-form',
  summary : 'Semantic UI - Form (official): Single component release of form',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Form.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
