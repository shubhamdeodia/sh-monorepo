//TODO:
// knobs
// actions
// accessibility

// Nunace logo

module.exports = {
  stories: ["../packages/**/stories/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    {
      name:   "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    },
    "@storybook/addon-actions",
    "@storybook/addon-essentials"
  ]
}