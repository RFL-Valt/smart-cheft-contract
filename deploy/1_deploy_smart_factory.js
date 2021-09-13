module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // Deploy contract
  await deploy('SmartChefFactory', {
    from: deployer,
    log: true,
    owner: deployer,
    args: [],
  });
};

module.exports.tags = ['SmartChefFactory'];
