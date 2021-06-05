[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Coverage Status](https://coveralls.io/repos/github/stopyransky/npm-publish-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/stopyransky/npm-publish-boilerplate?branch=master)

# About

A boilerplate for standalone lib published to npm.

# Features

- semantic release versioning and automated changelog
- commitizen-friendly commits
- typescript eslint
- auto lint before build
- unit tests with jest
- coveralls test coverage report
- cjs, esm and umd builds

# Before first commit

## Update `.git/hooks/prepare-commit-msg.sh`

```sh
#!/bin/bash
exec < /dev/tty && node_modules/.bin/cz --hook || true
```

## Coveralls

Enable the repo in coveralls.io

## Add env variables to travis ci

GH_TOKEN

NPM_TOKEN

COVERALLS_REPO_TOKEN (optional)

## Change rollup namespace

edit `rollup.config.js` and change name for the global namaespace in umd bundle from MYLIB to anything else

# Useful links

https://github.com/semantic-release/semantic-release/blob/master/docs/usage/ci-configuration.md#authentication

# License

MIT
