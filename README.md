# Use branch name on GitHub actions

Convenience action for using current branch name.

**It's a fork made in order to fix small issues like NodeJS version and other fixes. Original repository, seems, unmaintained.**

## Usage
```
name: build
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - run: npm ci
    - uses: nelonoel/branch-name@v1.0.2-wohl
    # Use branch name for whatever purpose
    - run: echo ${BRANCH_NAME}
```
