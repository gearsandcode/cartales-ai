# Contributing to Car Tales AI

## Version Management with Changesets

We use [Changesets](https://github.com/changesets/changesets) to manage versions and changelogs.

### Adding a Changeset

When you want to make a change that should be reflected in the version number and changelog:

1. Run `npm run changeset`
2. Follow the prompts:

   - Select the packages affected (typically just this package)
   - Choose the type of change:
     - `major`: Breaking changes
     - `minor`: New features
     - `patch`: Bug fixes
   - Write a description of the change (this will appear in the changelog)

3. Commit the generated changeset file with your changes

### Version Bump Rules

For deterministic version bumps, follow these guidelines:

- Use `major` ONLY when:

  - Breaking a public API
  - Removing a feature
  - Changing behavior that would break existing user code

- Use `minor` for:

  - Adding new features
  - Extending existing functionality in a backward-compatible way
  - Deprecating (but not removing) functionality

- Use `patch` for:
  - Bug fixes
  - Performance improvements without API changes
  - Documentation updates that affect code behavior

### Automated Releases

Our GitHub Actions workflow automatically:

1. Detects new changesets on the main branch
2. Creates a PR that updates versions and changelogs
3. Allows you to review the changes before they're released

When the PR is merged, the new version is officially released.
