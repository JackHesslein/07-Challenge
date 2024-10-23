// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (!license) {
    return '';
  }

  const badges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'Apache 2.0': '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'GPL 3.0': '![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'BSD 3-Clause': '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)',
  };

  return badges[license] || '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (!license) {
    return '';
  }

  return `[${license} License]()(https://opensource.org/licenses/${license})`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License \n\nThis project is licensed under the [${license} License](https://opensource.org/licenses/${license}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.dependencies}

  ## Usage
  ${data.userknowledge}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions, please contact me at [${data.email}]
`;
}

export default generateMarkdown;
