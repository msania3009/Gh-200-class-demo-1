const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const minLength = parseInt(core.getInput('minLength'));
    const commitMessage = github.context.payload.head_commit.message;

    console.log(`Commit message: "${commitMessage}"`);

    if (commitMessage.length < minLength) {
      core.setFailed(`Commit message too short! Minimum length is ${minLength} characters.`);
    } else {
      console.log("✅ Commit message length is acceptable.");
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
