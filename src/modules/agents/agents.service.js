const {IssuesModel} = require("../../models/issues");
const createError = require("http-errors");
const {ISSUE_STATUS, STATUS} = require("../../models/DBEnums");
const {AgentsModel} = require("../../models/agent");

class Agent {

  static async solveIssue(issue, agent) {
    try{
      const updatedIssue = await IssuesModel.findOne({where: { id: issue.id, deleted_at: null }});
      if (!updatedIssue) return createError(404, 'Issue not found')
      await this.changeStatusAgent(agent.id, STATUS[1])
      await updatedIssue.update({ status: ISSUE_STATUS[1] }, {returning: true, where: {id: issue.id }});
      setTimeout(() => {
        this.changeStatusAgent(agent.id, STATUS[0])
        return updatedIssue.update({status: ISSUE_STATUS[2]}, {returning: true, where: {id: issue.id}})
      }, 30000)


    } catch (err) {
      console.log(err)
    }
}

  static async changeStatusAgent(agentId, status) {
    try{
      const updatedAgent = await AgentsModel.findOne({where: { id: agentId, deleted_at: null }});
      if (!updatedAgent) return createError(404, 'The agent not found')
      return await updatedAgent.update({ status: status }, {returning: true, where: {id: agentId }});
    } catch (err) {
      console.log(err)
    }
  }

  static async searchFreeAgent() {
   return await AgentsModel.findOne({ where: { status: STATUS[0] }, raw: true })
  }

}

module.exports = {Agent}