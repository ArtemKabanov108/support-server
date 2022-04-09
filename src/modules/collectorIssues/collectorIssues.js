const {Agent} = require("../agents/agents.service") ;
const {IssuesModel} = require("../../models/issues") ;
const {ISSUE_STATUS} = require("../../models/DBEnums") ;

class CollectorIssues {

  static async letsSolveTheIssue() {
    try {
     const freeAgent = await Agent.searchFreeAgent()
      if(!freeAgent){
        return {
          message: "All the agents unavailable. Please try one more time ;)"
        }
      } else {
        await this.recursiveSearchAndSolve()
      }
  } catch (err) {
      console.log('error: ', err.message)
    }
  }

  static async recursiveSearchAndSolve() {
    const freeAgent = await Agent.searchFreeAgent()
    const pendingIssue = await IssuesModel.findOne({ where: { status: ISSUE_STATUS[0] }, raw: true });
    if(pendingIssue?.status === ISSUE_STATUS[0] && freeAgent) {
      await Agent.solveIssue(pendingIssue, freeAgent)
      await this.recursiveSearchAndSolve()
    }
  }
}

module.exports = {CollectorIssues}