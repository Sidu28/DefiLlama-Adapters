const sdk = require('@defillama/sdk');
const RETH_STRATEGY = '0x879944A8cB437a5f8061361f82A6d4EED59070b5';
const RETH_TOKEN_CONTRACT = '0x178E141a0E3b34152f73Ff610437A7bf9B83267A';

const CONFIG = {
    rocketpool: {
      strategy_contract: '0x879944A8cB437a5f8061361f82A6d4EED59070b5',
      token_contract: '0x178E141a0E3b34152f73Ff610437A7bf9B83267A',
    },
  }

async function tvl(_, _1, _2, { api }) {
  const balances = {};

  for (const entry of Object.values(CONFIG)) {
    const { strategy } = entry;
    const balance = await api.call({
        abi: 'erc20:balanceOf',
        target: strategy.token_contract,
        params: [strategy.strategy_contract],
      });
    await sdk.util.sumSingleBalance(balances, strategy.token_contract, balance, api.chain)

    totalTVL += tvl;
  }
  return balances;
}

module.exports = {
    timetravel: true,
    misrepresentedTokens: false,
    methodology: 'counts number of erc20 tokens across various eigenlayer strategies',
    start: 1000235,
    tvl: tvl,
  }; 