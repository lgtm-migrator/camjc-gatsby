/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const data = require('./src/resume.json');
// const _ = require('lodash');

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const overviewTemplate = path.resolve(`src/pages/overview.js`);
  createPage({
    path: '/',
    component: overviewTemplate,
    context: data
  });

  // const employerTemplate = path.resolve(`src/pages/employer.js`);
  // _(data.employment.history)
  //   .groupBy('employer')
  //   .map(({ page }) => {
  //     const path = page;
  //
  //     createPage({
  //       path,
  //       component: employerTemplate,
  //
  //       // Send additional data to page from JSON (or query inside template)
  //       context: {
  //         path
  //       }
  //     });
  // });
};
