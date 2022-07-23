const networkConfig = {
  31337: {
    name: "localhost",
  },
  42: {
    name: "kovan",
    intialSupply: 50,
  },
  4: {
    name: "rinkeby",
    intialSupply: 50,
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
