/* eslint-disable no-undef */
const SmartContract = artifacts.require("CryptoDuckWalk");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "http://devaccess.great-site.net/metadata/");
};
