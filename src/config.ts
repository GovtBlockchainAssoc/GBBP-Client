module.exports = {
    localMode: false,                                                       // true mocks log-in since can't accept OAuth callback to localhost
    apiUrl: "https://gbbp-api.azurewebsites.net",                                        // http://localhost:1340 or https://gbbp-api.azurewebsites.net
    BCAddr: 'http://etht5zt7j-dns-reg1.eastus2.cloudapp.azure.com:8540',    // empty string, ws://localhost:8545 for ganache or the addrGBBP address

    coldStorage: '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0',
    tokens: ['PLAY'],
    token: {
        PLAY: { symbol: 'PLAY', name: 'GBA Play Token', decimals: 2, address: '0xf2E99e3a23741449fA942705F4D504b6a099be8b' },
        REWARD: { symbol: 'REWARD', name: 'GBA Reward Token', decimals: 6, address: '' },
        UTILETH: { symbol: 'UTILETH', name: 'ETH Utility Token', decimals: 18, address: '' }
    },

    addrGBBP: 'http://etht5zt7j-dns-reg1.eastus2.cloudapp.azure.com:8540',
    addrSokol: 'https://sokol.poa.network',
    addrMainnet: 'https://mainnet.infura.io/v3/4707197d3863444c8fab719ee7b57189',
    addrRopsten: 'https://ropsten.infura.io/v3/4707197d3863444c8fab719ee7b57189',
    addrRinkeby: 'https://rinkeby.infura.io/v3/4707197d3863444c8fab719ee7b57189',
    addrKovan: 'https://kovan.infura.io/v3/4707197d3863444c8fab719ee7b57189',
    addrGoerli: 'https://goerli.infura.io/v3/4707197d3863444c8fab719ee7b57189',

    loginServer: "http://www.gbaglobal.net/",
    clientId: "ILk0iMUPYCwbXgqhtMzEg743j0jAatR8zmEvz07g",
    redirectUrl: "https://gba-gbbp.azurewebsites.net",

    hiveUrl: 'https://anyx.io',
    hiveAlts: ['https://api.hive.blog', 'https://api.pharesim.me', 'https://rpc.ausbit.dev',
        'https://api.hivekings.com', 'https://api.openhive.network'],
    steemUrl: 'https://api.justyy.com',
    // steemUrl: 'https://steemd.minnowsupportproject.org',
    // steemUrl: 'https://api.steemit.com',
};