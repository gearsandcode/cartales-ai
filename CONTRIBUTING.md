# Contributing to Car Tales

## Version Management with Semantic Release

We use [Semantic Release](https://github.com/semantic-release/semantic-release) to automate version management and package publishing.

### Commit Message Format

Your commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

#### Types that trigger releases:

- `feat:` - A new feature (minor release)
- `fix:` - A bug fix (patch release)
- `perf:` - A performance improvement (patch release)
- `BREAKING CHANGE:` - Breaking API change (major release, in commit body)

#### Types that don't trigger releases:

- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code changes that neither fix bugs nor add features
- `test:` - Adding or correcting tests
- `chore:` - Changes to the build process or auxiliary tools

### Examples

```
feat(story): add new car brand selection option

fix(generator): correct handling of special characters in story prompts

refactor: optimize image generation pipeline

BREAKING CHANGE: remove legacy API endpoint for story retrieval
```

### Automated Releases

Our GitHub Actions workflow automatically:

1. Analyzes commits on the main branch
2. Determines the next version number based on commit types
3. Updates the CHANGELOG.md file
4. Creates a GitHub release
5. Deploys the new version to production

You don't need to manually specify version numbers or create changelog entries.
