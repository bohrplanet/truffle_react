var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(Voting, ['Alice', 'Bob', 'Cary']),{gas:1000000};
};
