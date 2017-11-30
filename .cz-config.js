"use strict"

const commitTypes = [
  {
    value: "feat",
    name: "A new feature"
  },
  {
    value: "fix",
    name: "A bug fix"
  },
  {
    value: "docs",
    name: "Documentation only changes"
  },
  {
    value: "style",
    name: "Changes that do not affect the meaning of the code"
  },
  {
    value: "refactor",
    name: "A code change that neither fixes a bug nor adds a feature"
  },
  {
    value: "test",
    name: "Adding missing tests"
  },
  {
    value: "chore",
    name: "Changes to the build process, auxiliary tools and libraries"
  },
  {
    value: "revert",
    name: "Revert to a commit"
  },
  {
    value: "WIP",
    name: "Work in progress"
  }
]

const maxCommitTypeLength = Math.max(...commitTypes.map(type => type.value.length))

const displayCommitTypes = commitTypes.map(type => {
  const whitespace = Array(maxCommitTypeLength - type.value.length)
    .fill(" ")
    .join("")

  type.name = type.value + ": " + whitespace + type.name

  return type
})

function displayScopes(scopeList) {
  return scopeList.map(scopeName => {
    return {name: scopeName}
  })
}

const globalScopes = []
const choreScopes = ["git", "deps", "npm", "build"]

module.exports = {
  types: displayCommitTypes,

  scopes: displayScopes(globalScopes),

  scopeOverrides: {
    chore: displayScopes(choreScopes)
  },

  // override messages
  // messages: {
  //   type: "Select the type of change that you're committing:",
  //   scope: "Denote the SCOPE of this change (optional):",
  //   // used if allowCustomScopes is true
  //   customScope: "Denote the SCOPE of this change:",
  //   subject: "Write a SHORT, IMPERATIVE tense description of the change:",
  //   body:
  //     'Provide a LONGER description of the change (optional). Use "|" to break new line:',
  //   breaking: "List any BREAKING CHANGES (optional):",
  //   footer: "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:",
  //   confirmCommit: "Are you sure you want to proceed with the commit above?"
  // },

  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix"]
}
