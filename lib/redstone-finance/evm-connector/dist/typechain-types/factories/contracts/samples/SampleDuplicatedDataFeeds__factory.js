"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleDuplicatedDataFeeds__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "CalldataMustHaveValidPayload",
        type: "error",
    },
    {
        inputs: [],
        name: "CalldataOverOrUnderFlow",
        type: "error",
    },
    {
        inputs: [],
        name: "CanNotPickMedianOfEmptyArray",
        type: "error",
    },
    {
        inputs: [],
        name: "EachSignerMustProvideTheSameValue",
        type: "error",
    },
    {
        inputs: [],
        name: "EmptyCalldataPointersArr",
        type: "error",
    },
    {
        inputs: [],
        name: "IncorrectUnsignedMetadataSize",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "receivedSignersCount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "requiredSignersCount",
                type: "uint256",
            },
        ],
        name: "InsufficientNumberOfUniqueSigners",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidCalldataPointer",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "receivedSigner",
                type: "address",
            },
        ],
        name: "SignerNotAuthorised",
        type: "error",
    },
    {
        inputs: [],
        name: "TimestampIsNotValid",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
        ],
        name: "aggregateValues",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signerAddress",
                type: "address",
            },
        ],
        name: "getAllMockAuthorised",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signerAddress",
                type: "address",
            },
        ],
        name: "getAllMockExceptLastOneAuthorised",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signerAddress",
                type: "address",
            },
        ],
        name: "getAuthorisedMockSignerIndex",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "signerAddress",
                type: "address",
            },
        ],
        name: "getAuthorisedSignerIndex",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getUniqueSignersThreshold",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getValuesFromStorage",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "dataFeedIdsWithDuplicates",
                type: "bytes32[]",
            },
        ],
        name: "saveOracleValuesInStorage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "receivedTimestampMilliseconds",
                type: "uint256",
            },
        ],
        name: "validateTimestamp",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50611935806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063b24ebfcc11610076578063d22158fa1161005b578063d22158fa14610143578063f50b2efe14610156578063f90c49241461016957600080fd5b8063b24ebfcc1461010d578063c22b59281461012e57600080fd5b80633ce142f5146100a8578063429989f0146100d257806353432eb4146100e557806395262d9f146100fa575b600080fd5b6100bb6100b6366004611612565b610170565b60405160ff90911681526020015b60405180910390f35b6100bb6100e0366004611612565b610181565b6100f86100f3366004611646565b61065a565b005b6100bb610108366004611612565b6106b4565b61012061011b3660046116b6565b6106bf565b6040519081526020016100c9565b6101366106ca565b6040516100c991906117ac565b6100bb610151366004611612565b610722565b6100f8610164366004611794565b6107a9565b600a6100bb565b600061017b826106b4565b92915050565b600073f39fd6e51aad88f6f4ce6ab8827279cfffb9226673ffffffffffffffffffffffffffffffffffffffff831614156101bd57506000919050565b7370997970c51812dc3a010c7d01b50e0d17dc79c873ffffffffffffffffffffffffffffffffffffffff831614156101f757506001919050565b733c44cdddb6a900fa2b585dd299e03d12fa4293bc73ffffffffffffffffffffffffffffffffffffffff8316141561023157506002919050565b7390f79bf6eb2c4f870365e785982e1f101e93b90673ffffffffffffffffffffffffffffffffffffffff8316141561026b57506003919050565b7315d34aaf54267db7d7c367839aaf71a00a2c6a6573ffffffffffffffffffffffffffffffffffffffff831614156102a557506004919050565b739965507d1a55bcc2695c58ba16fb37d819b0a4dc73ffffffffffffffffffffffffffffffffffffffff831614156102df57506005919050565b73976ea74026e726554db657fa54763abd0c3a0aa973ffffffffffffffffffffffffffffffffffffffff8316141561031957506006919050565b7314dc79964da2c08b23698b3d3cc7ca32193d995573ffffffffffffffffffffffffffffffffffffffff8316141561035357506007919050565b7323618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f73ffffffffffffffffffffffffffffffffffffffff8316141561038d57506008919050565b73a0ee7a142d267c1f36714e4a8f75612f20a7972073ffffffffffffffffffffffffffffffffffffffff831614156103c757506009919050565b73bcd4042de499d14e55001ccbb24a551f3b95409673ffffffffffffffffffffffffffffffffffffffff831614156104015750600a919050565b7371be63f3384f5fb98995898a86b02fb2426c578873ffffffffffffffffffffffffffffffffffffffff8316141561043b5750600b919050565b73fabb0ac9d68b0b445fb7357272ff202c5651694a73ffffffffffffffffffffffffffffffffffffffff831614156104755750600c919050565b731cbd3b2770909d4e10f157cabc84c7264073c9ec73ffffffffffffffffffffffffffffffffffffffff831614156104af5750600d919050565b73df3e18d64bc6a983f673ab319ccae4f1a57c709773ffffffffffffffffffffffffffffffffffffffff831614156104e95750600e919050565b73cd3b766ccdd6ae721141f452c550ca635964ce7173ffffffffffffffffffffffffffffffffffffffff831614156105235750600f919050565b732546bcd3c84621e976d8185a91a922ae77ecec3073ffffffffffffffffffffffffffffffffffffffff8316141561055d57506010919050565b73bda5747bfd65f08deb54cb465eb87d40e51b197e73ffffffffffffffffffffffffffffffffffffffff8316141561059757506011919050565b73dd2fd4581271e230360230f9337d5c0430bf44c073ffffffffffffffffffffffffffffffffffffffff831614156105d157506012919050565b738626f6940e2eb28930efb4cef49b2d1f2c9c119973ffffffffffffffffffffffffffffffffffffffff8316141561060b57506013919050565b6040517fec459bc000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024015b60405180910390fd5b60006106988383808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506107ec92505050565b80519091506106ae9060009060208401906115b2565b50505050565b600061017b82610722565b600061017b82610aa9565b6060600080548060200260200160405190810160405280929190818152602001828054801561071857602002820191906000526020600020905b815481526020019060010190808311610704575b5050505050905090565b6000738626f6940e2eb28930efb4cef49b2d1f2c9c119973ffffffffffffffffffffffffffffffffffffffff831614156107a0576040517fec459bc000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83166004820152602401610651565b61017b82610181565b6501812f2590c08110156107e9576040517f355b874300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b60606000825167ffffffffffffffff81111561081857634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610841578160200160208202803683370190505b509050600080805b855181101561094b576000925060005b828110156108d25786828151811061088157634e487b7160e01b600052603260045260246000fd5b60200260200101518582815181106108a957634e487b7160e01b600052603260045260246000fd5b602002602001015114156108c057600193506108d2565b806108ca81611870565b915050610859565b5082610939578581815181106108f857634e487b7160e01b600052603260045260246000fd5b602002602001015184838151811061092057634e487b7160e01b600052603260045260246000fd5b60209081029190910101528161093581611870565b9250505b8061094381611870565b915050610849565b50808352600061095a84610ab4565b90506000865167ffffffffffffffff81111561098657634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156109af578160200160208202803683370190505b50905060005b8751811015610a9e5760005b8651811015610a8b578681815181106109ea57634e487b7160e01b600052603260045260246000fd5b6020026020010151898381518110610a1257634e487b7160e01b600052603260045260246000fd5b60200260200101511415610a7957838181518110610a4057634e487b7160e01b600052603260045260246000fd5b6020026020010151838381518110610a6857634e487b7160e01b600052603260045260246000fd5b602002602001018181525050610a8b565b80610a8381611870565b9150506109c1565b5080610a9681611870565b9150506109b5565b509695505050505050565b600061017b82610abf565b606061017b82610bd3565b6000815160001415610afd576040517f9e198af900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b0682610dd2565b600060028351610b169190611808565b905060028351610b2691906118a9565b610ba3576000610b8e84610b3b600185611859565b81518110610b5957634e487b7160e01b600052603260045260246000fd5b6020026020010151858481518110610b8157634e487b7160e01b600052603260045260246000fd5b6020026020010151610e1a565b9050610b9b600282611808565b949350505050565b828181518110610bc357634e487b7160e01b600052603260045260246000fd5b6020026020010151915050919050565b60606000825167ffffffffffffffff811115610bff57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610c28578160200160208202803683370190505b5090506000835167ffffffffffffffff811115610c5557634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610c7e578160200160208202803683370190505b5090506000845167ffffffffffffffff811115610cab57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610cde57816020015b6060815260200190600190039081610cc95790505b50905060005b8551811015610d4c5760408051600a808252610160820190925290602082016101408036833701905050828281518110610d2e57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610d4490611870565b915050610ce4565b506000610d57610e2d565b90506000610d6482610f5b565b61ffff169050610d756002836117f0565b60405190925060005b82811015610dbb576000610d958a89898989610fae565b9050610da181866117f0565b945082604052508080610db390611870565b915050610d7e565b50610dc684876112dd565b98975050505050505050565b8051602082016020820281019150805b828110156106ae57815b81811015610e11578151815180821015610e07578084528183525b5050602001610dec565b50602001610de2565b6000610e2682846117f0565b9392505050565b60006602ed57011e00007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe036013581161480610e95576040517fe7764c9e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60003660291115610ed2576040517f5796f78a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd736013560006009610f0b600362ffffff85166117f0565b610f1591906117f0565b905036610f236002836117f0565b1115610e26576040517fc30a7bd700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080610f696020846117f0565b905036811115610fa5576040517f5796f78a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b36033592915050565b600080600080610fbd85611455565b909250905060008080606081600d610fe0610fd96020896117f0565b89906114a5565b610fea91906117f0565b90506000611003610ffc60688d6117f0565b36906114b1565b905060006110208361101660418f6117f0565b610ffc91906117f0565b905061102c838261103f565b9350826020850120945081359650611081565b604080518381526020818501810190925260009101838382377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0019392505050565b6110928765ffffffffffff166107a9565b6110a6856110a160418f6117f0565b6114bd565b95506110b186610170565b60ff1699505050505050505060008060005b848110156112aa576110d6888583611553565b909350915060005b8c51811015611297578c818151811061110757634e487b7160e01b600052603260045260246000fd5b60200260200101518414156112855760008b828151811061113857634e487b7160e01b600052603260045260246000fd5b6020026020010151905061115181896001901b16151590565b1580156111885750600a60ff168d838151811061117e57634e487b7160e01b600052603260045260246000fd5b6020026020010151105b1561127f578c82815181106111ad57634e487b7160e01b600052603260045260246000fd5b6020026020010180518091906111c290611870565b81525050838b83815181106111e757634e487b7160e01b600052603260045260246000fd5b602002602001015160018f858151811061121157634e487b7160e01b600052603260045260246000fd5b60200260200101516112239190611859565b8151811061124157634e487b7160e01b600052603260045260246000fd5b60209081029190910101526001881b81178c838151811061127257634e487b7160e01b600052603260045260246000fd5b6020026020010181815250505b50611297565b8061128f81611870565b9150506110de565b50806112a281611870565b9150506110c3565b505050816020826112bb91906117f0565b6112c5919061181c565b6112d090604e6117f0565b9998505050505050505050565b60606000835167ffffffffffffffff81111561130957634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611332578160200160208202803683370190505b509050600a60005b855181101561144b578185828151811061136457634e487b7160e01b600052603260045260246000fd5b602002602001015110156113d85784818151811061139257634e487b7160e01b600052603260045260246000fd5b6020026020010151826040517f2b13aef5000000000000000000000000000000000000000000000000000000008152600401610651929190918252602082015260400190565b600061140a8783815181106113fd57634e487b7160e01b600052603260045260246000fd5b60200260200101516106bf565b90508084838151811061142d57634e487b7160e01b600052603260045260246000fd5b6020908102919091010152508061144381611870565b91505061133a565b5090949350505050565b6000808080806114666041876117f0565b90506000611478610ffc6020846117f0565b8035945090506114898160036114b1565b62ffffff9490941697933563ffffffff16965092945050505050565b6000610e26828461181c565b6000610e268284611859565b60408051600080825260208083018085528690523685900380850135831a948401859052803560608501819052910135608084018190529193909260019060a0016020604051602081039080840390855afa158015611520573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00151979650505050505050565b60008080611562604e876117f0565b9050600061158f6115886115776020896117f0565b6115828860016117f0565b906114a5565b8390610e1a565b9050600061159d36836114b1565b80359960209091013598509650505050505050565b8280548282559060005260206000209081019282156115ed579160200282015b828111156115ed5782518255916020019190600101906115d2565b506115f99291506115fd565b5090565b5b808211156115f957600081556001016115fe565b600060208284031215611623578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610e26578182fd5b60008060208385031215611658578081fd5b823567ffffffffffffffff8082111561166f578283fd5b818501915085601f830112611682578283fd5b813581811115611690578384fd5b8660208260051b85010111156116a4578384fd5b60209290920196919550909350505050565b600060208083850312156116c8578182fd5b823567ffffffffffffffff808211156116df578384fd5b818501915085601f8301126116f2578384fd5b813581811115611704576117046118e9565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715611747576117476118e9565b604052828152858101935084860182860187018a1015611765578788fd5b8795505b83861015611787578035855260019590950194938601938601611769565b5098975050505050505050565b6000602082840312156117a5578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156117e4578351835292840192918401916001016117c8565b50909695505050505050565b60008219821115611803576118036118bd565b500190565b600082611817576118176118d3565b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611854576118546118bd565b500290565b60008282101561186b5761186b6118bd565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156118a2576118a26118bd565b5060010190565b6000826118b8576118b86118d3565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220a16b3efff4fe708bd4eeec5eaef6e705ed4861496742f2bd2ab76d0cdfd8804164736f6c63430008040033";
const isSuperArgs = (xs) => xs.length > 1;
class SampleDuplicatedDataFeeds__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.SampleDuplicatedDataFeeds__factory = SampleDuplicatedDataFeeds__factory;
SampleDuplicatedDataFeeds__factory.bytecode = _bytecode;
SampleDuplicatedDataFeeds__factory.abi = _abi;
//# sourceMappingURL=SampleDuplicatedDataFeeds__factory.js.map