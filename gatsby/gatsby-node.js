const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {

  const templates = {
    story: path.resolve('./src/templates/Story.js'),
    project: path.resolve('./src/templates/Project.js')
  };

  const result = await graphql(`
    query {
      projects: allSanityProjects {
        nodes {
          name
          type
          slug {
            current
          }
        }
      }
    }
  `)
  result.data.projects.nodes.forEach(node => {
    const contentType = node.type
    actions.createPage({
      path: `project/${node.slug.current}`,
      component: templates[contentType],
      context: {
        slug: node.slug.current
      }
    });
  });
}