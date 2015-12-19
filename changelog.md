# Rūto - Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [3.0.0] - 2015-12-18
### Added
- Hapi plugin and Express middleware now return request object.

### Changed
- Middleware now returns response object (instead of reply).
- Middleware uses built-in error handling from Express.
- Tests and examples updated, accordingly.
- Examples simplified without hot reloading and linting.
- Examples global styles reimplemented with Radium.

## [2.1.1] - 2015-12-16
### Changed
- Updates example development dependency versions.
- Lowers Node.js engine version to 4 as 5 was not a hard requirement.

### Fixed
- Adds missing polyfill to client.
- Minor syntax fixes.

## [2.1.0] - 2015-12-08
### Added
- createTypes utility: Accepts array of strings and optional redux namespace.

### Changed
- Renames internal scripts directory to cli for clarity of purpose.
- Updates react-router version.

## [2.0.6] - 2015-12-06
### Changed
- Separates creating store from handler and client for universal+redux example.
- Separates getting state from handler into a module for universal example.
- Dependencies locked to specific versions and devDependencies updated.
- Uses object form of history's push method.

### Fixed
- Corrects location creation to include search parameters.
- Corrects fill property destructuring in hapi logo.

## [2.0.5] - 2015-11-23
### Added
- Displays location object on redux example pages.

### Changed
- Updates json-loader dependency version.
- Visual alignment improvements with logos and navigation links.

### Fixed
- Correctly updates store from history changes.

## [2.0.4] - 2015-11-23
### Changed
- Updates redux example handler to provide location object.
- Updates redux examples to export named components (not default).

### Fixed
- Update action now accepts either pathname string or location object.
- Back link in examples now maintains redux state.


## [2.0.3] - 2015-11-22
### Fixed
- Updates compatibility with shigoto 1.0.2 changes.
- Simplifies bin configuration.
- Removes superfluous preinstall lifecycle step for pruning.

## [2.0.2] - 2015-11-21
### Fixed
- Copies shigoto binary during build sript.
- Restores shigoto as a devDependency.

## [2.0.1] - 2015-11-21
### Fixed
- Makes shigoto a dependency to correct an npm install issue.

## [2.0.0] - 2015-11-21
### Added
- Express middleware.
- Redux action, reducer and connect history to store helpers.
- Express server example.
- Basic gists of plugin/middleware usage to readme.
- Command line interface via shigoto.
- Changelog.

### Changed
- Hapi plugin now accessed as `register` property.
- Hapi example rewritten to share common code with Express example.
- Examples interface redesigned to display well on any device.
- Babel 6 migration.

## [1.0.3] - 2015-10-06
### Fixed
- Dependency on babel-runtime corrected.

## [1.0.2] - 2015-10-06
### Fixed
- Examples module resolution.

## [1.0.1] - 2015-10-06
### Changed
- Improved testing.

## [1.0.0] - 2015-10-26
### Added
- Hapi plugin.

[Unreleased]: https://github.com/ninja/ruto/compare/3.0.0...develop
[3.0.0]: https://github.com/ninja/ruto/compare/3.0.0...2.1.0
[2.1.0]: https://github.com/ninja/ruto/compare/2.1.0...2.0.6
[2.0.6]: https://github.com/ninja/ruto/compare/2.0.5...2.0.6
[2.0.5]: https://github.com/ninja/ruto/compare/2.0.4...2.0.5
[2.0.4]: https://github.com/ninja/ruto/compare/2.0.3...2.0.4
[2.0.3]: https://github.com/ninja/ruto/compare/2.0.2...2.0.3
[2.0.2]: https://github.com/ninja/ruto/compare/2.0.1...2.0.2
[2.0.1]: https://github.com/ninja/ruto/compare/2.0.0...2.0.1
[2.0.0]: https://github.com/ninja/ruto/compare/1.0.3...2.0.0
[1.0.3]: https://github.com/ninja/ruto/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/ninja/ruto/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/ninja/ruto/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/ninja/ruto/compare/1.0.0
