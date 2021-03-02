module.exports = {
    plugins: [require('./node_modules/commitlint-plugin-jira-rules')],
    extends: ['jira'],
    rules: {
        'jira-task-id-max-length':  [2, 'always', 10],
        "jira-task-id-project-key": [2,'always','@sh']
    },
}