const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const projectTemplate = path.resolve('./src/templates/Project.js');
  const result = await graphql(`
    query {
      projects: allSanityProjects {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)
  result.data.projects.nodes.forEach(project => {
    actions.createPage({
      path: `project/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current
      }
    });
  });
}