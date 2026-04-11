# Release

## Prepare release commit

Update CHANGELOG and bump version in `package.json`.

Make a commit and push to GitHub repo.

## Generate minified bundle

Build minified bundle

```
yarn build
```

## Publish GitHub release

Publish a new release in GitHub repo.

Add `dist/meowji.min.js` minified bundle to release assets.

## Publish to NPM

Dry run release:

```
npm publish --dry-run
```

Release:

```
npm publish
```