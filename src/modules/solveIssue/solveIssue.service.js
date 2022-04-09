const {ISSUE_STATUS} = require("../../models/DBEnums");

const createError = require('http-errors');
const {CollectorIssues} = require("../collectorIssues/collectorIssues");
const {IssuesModel} = require("../../models/issues");

const createIssue = async (name) => {
  try {
    const issue = await IssuesModel.findOne({ where: { name }, raw: true });
    if (issue) throw createError(400, `The issue is created and pending to sole...Please send request to /solveIssue/${issue?.id} for get response of the issue.`);
    return await IssuesModel.create({name});
  } catch(error) {
    throw createError(400, error)
  }
}

const getIssue = async (getIssueId) => {
  const issue = await IssuesModel.findOne({ where: { id: getIssueId }, raw: true });
  switch (issue?.status) {
    case ISSUE_STATUS[0]:
      await CollectorIssues.recursiveSearchAndSolve()
         return {
         message: `status your issue is ${issue?.status}. Please try again later.`
       }
    case ISSUE_STATUS[1]:
      return {
        message: `status your issue ${issue?.status}. Please try again later.`
      }
    case ISSUE_STATUS[2]:
      return {
        message: `Your issue solved. Thanks for try the support-server`
      }
    default:
      return {
        message: "May be some thing wrong..."
      }
  }
}

module.exports = {
  createIssue,
  getIssue,
}