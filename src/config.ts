module.exports = {
    localMode: false,                                                       // true mocks log-in since can't accept OAuth callback to localhost
    apiUrl: "https://gbbp-api.azurewebsites.net",                           // http://localhost:1340 or https://gbbp-api.azurewebsites.net
    BCAddr: 'http://etht5zt7j-dns-reg1.eastus2.cloudapp.azure.com:8540',    // empty string, ws://localhost:8545 for ganache or the addrGBBP address

    // mInfoAddr: '0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B',             // Mark W's ganache addresses, please leave & feel free to add your own
    // playToken: { symbol: 'PLAY', name: 'GBA Play Token', decimals: 2, address: '0xC89Ce4735882C9F0f0FE26686c53074E09B0D550' },

    mInfoAddr: '0xEb088F8033D26896db3A272186272c33166Fc947',
    playToken: { symbol: 'PLAY', name: 'GBA Play Token', decimals: 2, address: '0xf2E99e3a23741449fA942705F4D504b6a099be8b' },
    rewardToken: { symbol: 'REWARD', name: 'GBA Reward Token', decimals: 6, address: '' },
    utilityToken: { symbol: 'UTILITY', name: 'GBA Utility Token', decimals: 18, address: '' },

    addrGBBP: 'http://etht5zt7j-dns-reg1.eastus2.cloudapp.azure.com:8540',
    addrSokol: 'https://sokol.poa.network',
    addrSteem: 'https://api.justyy.com',
    addrSteem1: 'https://steemd.minnowsupportproject.org',
    addrHive: 'https://api.pharesim.me',
    addrHive1: 'https://api.openhive.network',
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