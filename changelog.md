# Rūto - Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

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

[Unreleased]: https://github.com/ninja/ruto/compare/2.0.3...develop
[2.0.3]: https://github.com/ninja/ruto/compare/2.0.2...2.0.3
[2.0.2]: https://github.com/ninja/ruto/compare/2.0.1...2.0.2
[2.0.1]: https://github.com/ninja/ruto/compare/2.0.0...2.0.1
[2.0.0]: https://github.com/ninja/ruto/compare/1.0.3...2.0.0
[1.0.3]: https://github.com/ninja/ruto/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/ninja/ruto/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/ninja/ruto/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/ninja/ruto/commit/d7d22cf06cea78eefd0a6b3160fbe2b20d056c57
