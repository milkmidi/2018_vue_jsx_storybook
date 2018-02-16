import addons from '@storybook/addons';
import jestTestResultsJSON from '../../.jest-test-results.json';

// https://github.com/storybooks/storybook-addon-jest/blob/master/src/withTests.js
const basename = path => path.split(/\/|\\/).slice(-1)[0]; // fixed window path issus

const findTestResults = (testFiles, jestTestResults, jestTestFilesExt) =>
  testFiles.map((name) => {
    const fileName = name + jestTestFilesExt;
    if (jestTestResults && jestTestResults.testResults) {
      return {
        fileName,
        name,
        result: jestTestResults.testResults.find(t => basename(t.name) === fileName),
      };
    }
    return { fileName, name };
  });

const withTests = (results, options) => (...testFiles) => {
  const emitAddTests = ({ kind, story }) => {
    addons.getChannel().emit('storybook/tests/add_tests', {
      kind,
      storyName: story,
      tests: findTestResults(testFiles, results, options.filesExt),
    });
  };

  return (storyFn, { kind, story }) => {
    emitAddTests({ kind, story });
    return storyFn();
  };
};

export default withTests(jestTestResultsJSON, {
  filesExt: '.test.js',
});
