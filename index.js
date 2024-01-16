const core = require('@actions/core');

async function run() {
  try {
    // pull request
    if(process.env.GITHUB_HEAD_REF)
        core.exportVariable('BRANCH_NAME', process.env.GITHUB_HEAD_REF);
    // normal push
    else
        core.exportVariable('BRANCH_NAME', process.env.GITHUB_REF.split('/').slice(2).join('/'));
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
