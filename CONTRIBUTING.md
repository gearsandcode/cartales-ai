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

### Types of Changes

- `major`: Breaking changes that require significant adaptation
- `minor`: New features or improvements that don't break existing functionality
- `patch`: Bug fixes or small adjustments that maintain compatibility

### Automated Releases

Our GitHub Actions workflow automatically:

1. Detects new changesets on the main branch
2. Creates a PR that updates versions and changelogs
3. Allows you to review the changes before they're released

When the PR is merged, the new version is officially released.
