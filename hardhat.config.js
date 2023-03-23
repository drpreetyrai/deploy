// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
//   networks: {
//         goerli: {
//           url: `${ process.env.GOERLI_URL }`,
//           accounts: [`${ process.env.PRIVATE_KEY }`],
//         },
//       },
// };



// code 
// require("@nomicfoundation/hardhat-toolbox");

// require("dotenv").config();
// /** @type import('hardhat/config').HardhatUserConfig */

// const GOERLI_URL = `${process.env.GOERLI_URL}`;
// const PRIVATE_KEY = `${process.env.PRIVATE_KEY}`;
// module.exports = {
//   solidity: "0.8.17",
//   defaultNetwork: "hardhat",
//   // networks: {
    
//   //   goerli: {
//   //     url: GOERLI_URL,
//   //     accounts: [PRIVATE_KEY],
//   //   },
//   // },
// };














require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */


const GOERLI_URL = process.env.GOERLI_URL;
const BSCT_URL = process.env.BSCT_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
    bsctestnet: {
      url: BSCT_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

















































































