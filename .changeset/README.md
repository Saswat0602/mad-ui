# Changesets

Welcome to Changesets! This directory tracks changes across releases.

## Adding a Changeset

When submitting a PR with user-facing changes:

```bash
npm run changeset
```

Follow the prompts to select the bump type (`patch`, `minor`, `major`) and write a brief summary of the changes.

## Releasing a New Version

To consume all pending changesets and bump package versions:

```bash
npm run version-packages
```
