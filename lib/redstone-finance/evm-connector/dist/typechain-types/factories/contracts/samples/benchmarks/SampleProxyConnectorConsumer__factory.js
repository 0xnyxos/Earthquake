"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleProxyConnectorConsumer__factory = void 0;
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
        name: "getComputationResult",
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
        inputs: [
            {
                internalType: "bytes32",
                name: "dataFeedId",
                type: "bytes32",
            },
        ],
        name: "getValueForDataFeedId",
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
                internalType: "bytes32",
                name: "dataFeedId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "mockArg1",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "mockArg2",
                type: "string",
            },
            {
                internalType: "string",
                name: "mockArg3",
                type: "string",
            },
            {
                internalType: "string",
                name: "mockArg4",
                type: "string",
            },
            {
                internalType: "string",
                name: "mockArg5",
                type: "string",
            },
            {
                internalType: "string",
                name: "mockArg6",
                type: "string",
            },
        ],
        name: "getValueManyParams",
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
                internalType: "bytes32[]",
                name: "dataFeedIds",
                type: "bytes32[]",
            },
        ],
        name: "getValuesForDataFeedIds",
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
        inputs: [],
        name: "latestSavedValue",
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
                internalType: "bytes32",
                name: "dataFeedId",
                type: "bytes32",
            },
        ],
        name: "processOracleValue",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "dataFeedIds",
                type: "bytes32[]",
            },
        ],
        name: "processOracleValues",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "returnMsgValue",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "revertWithTestMessage",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "revertWithoutMessage",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "dataFeedId",
                type: "bytes32",
            },
        ],
        name: "saveOracleValueInContractStorage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint8",
                name: "newUniqueSignersThreshold",
                type: "uint8",
            },
        ],
        name: "updateUniqueSignersThreshold",
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
const _bytecode = "0x6080604052600060019081556002805460ff1916909117905534801561002457600080fd5b50611b02806100346000396000f3fe6080604052600436106101445760003560e01c80637a1202c8116100c0578063c06a97cb11610074578063f50b2efe11610059578063f50b2efe14610363578063f90c492414610383578063fabdf8361461039b57600080fd5b8063c06a97cb1461032e578063d22158fa1461034357600080fd5b806395262d9f116100a557806395262d9f1461029f578063a09f9c3a146102bf578063b24ebfcc1461030e57600080fd5b80637a1202c8146102795780638e7a41201461029957600080fd5b80633d60fee3116101175780634db39f23116100fc5780634db39f23146102165780634f178e44146102365780635ddf81ba1461026357600080fd5b80633d60fee3146101d6578063429989f0146101f657600080fd5b80630f6561e714610149578063351d31ab1461016d5780633c154daf1461018d5780633ce142f5146101a4575b600080fd5b34801561015557600080fd5b506001545b6040519081526020015b60405180910390f35b34801561017957600080fd5b5061015a610188366004611806565b6103bb565b34801561019957600080fd5b506101a26103d2565b005b3480156101b057600080fd5b506101c46101bf366004611722565b610439565b60405160ff9091168152602001610164565b3480156101e257600080fd5b506101a26101f13660046117ee565b61044a565b34801561020257600080fd5b506101c4610211366004611722565b610459565b34801561022257600080fd5b506101a26102313660046117ee565b61092d565b34801561024257600080fd5b50610256610251366004611756565b61095f565b6040516101649190611906565b34801561026f57600080fd5b5061015a60005481565b34801561028557600080fd5b5061015a6102943660046117ee565b61096a565b3461015a565b3480156102ab57600080fd5b506101c46102ba366004611722565b610975565b3480156102cb57600080fd5b506101a26102da3660046118e5565b600280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff92909216919091179055565b34801561031a57600080fd5b5061015a610329366004611756565b610980565b34801561033a57600080fd5b506101a2600080fd5b34801561034f57600080fd5b506101c461035e366004611722565b61098b565b34801561036f57600080fd5b506101a261037e3660046117ee565b610a12565b34801561038f57600080fd5b5060025460ff166101c4565b3480156103a757600080fd5b506101a26103b6366004611756565b610a55565b60006103c688610ad0565b98975050505050505050565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f54657374206d657373616765000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600061044482610975565b92915050565b61045381610ad0565b60005550565b600073f39fd6e51aad88f6f4ce6ab8827279cfffb9226673ffffffffffffffffffffffffffffffffffffffff8316141561049557506000919050565b7370997970c51812dc3a010c7d01b50e0d17dc79c873ffffffffffffffffffffffffffffffffffffffff831614156104cf57506001919050565b733c44cdddb6a900fa2b585dd299e03d12fa4293bc73ffffffffffffffffffffffffffffffffffffffff8316141561050957506002919050565b7390f79bf6eb2c4f870365e785982e1f101e93b90673ffffffffffffffffffffffffffffffffffffffff8316141561054357506003919050565b7315d34aaf54267db7d7c367839aaf71a00a2c6a6573ffffffffffffffffffffffffffffffffffffffff8316141561057d57506004919050565b739965507d1a55bcc2695c58ba16fb37d819b0a4dc73ffffffffffffffffffffffffffffffffffffffff831614156105b757506005919050565b73976ea74026e726554db657fa54763abd0c3a0aa973ffffffffffffffffffffffffffffffffffffffff831614156105f157506006919050565b7314dc79964da2c08b23698b3d3cc7ca32193d995573ffffffffffffffffffffffffffffffffffffffff8316141561062b57506007919050565b7323618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f73ffffffffffffffffffffffffffffffffffffffff8316141561066557506008919050565b73a0ee7a142d267c1f36714e4a8f75612f20a7972073ffffffffffffffffffffffffffffffffffffffff8316141561069f57506009919050565b73bcd4042de499d14e55001ccbb24a551f3b95409673ffffffffffffffffffffffffffffffffffffffff831614156106d95750600a919050565b7371be63f3384f5fb98995898a86b02fb2426c578873ffffffffffffffffffffffffffffffffffffffff831614156107135750600b919050565b73fabb0ac9d68b0b445fb7357272ff202c5651694a73ffffffffffffffffffffffffffffffffffffffff8316141561074d5750600c919050565b731cbd3b2770909d4e10f157cabc84c7264073c9ec73ffffffffffffffffffffffffffffffffffffffff831614156107875750600d919050565b73df3e18d64bc6a983f673ab319ccae4f1a57c709773ffffffffffffffffffffffffffffffffffffffff831614156107c15750600e919050565b73cd3b766ccdd6ae721141f452c550ca635964ce7173ffffffffffffffffffffffffffffffffffffffff831614156107fb5750600f919050565b732546bcd3c84621e976d8185a91a922ae77ecec3073ffffffffffffffffffffffffffffffffffffffff8316141561083557506010919050565b73bda5747bfd65f08deb54cb465eb87d40e51b197e73ffffffffffffffffffffffffffffffffffffffff8316141561086f57506011919050565b73dd2fd4581271e230360230f9337d5c0430bf44c073ffffffffffffffffffffffffffffffffffffffff831614156108a957506012919050565b738626f6940e2eb28930efb4cef49b2d1f2c9c119973ffffffffffffffffffffffffffffffffffffffff831614156108e357506013919050565b6040517fec459bc000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83166004820152602401610430565b600061093882610ad0565b905061094581602a6119e9565b6001600082825461095691906119bd565b90915550505050565b606061044482610b5c565b600061044482610ad0565b60006104448261098b565b600061044482610b67565b6000738626f6940e2eb28930efb4cef49b2d1f2c9c119973ffffffffffffffffffffffffffffffffffffffff83161415610a09576040517fec459bc000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83166004820152602401610430565b61044482610459565b6501812f2590c0811015610a52576040517f355b874300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b6000610a6082610b5c565b905060005b8251811015610acb57818181518110610a8e57634e487b7160e01b600052603260045260246000fd5b6020026020010151602a610aa291906119e9565b60016000828254610ab391906119bd565b90915550819050610ac381611a3d565b915050610a65565b505050565b604080516001808252818301909252600091829190602080830190803683370190505090508281600081518110610b1757634e487b7160e01b600052603260045260246000fd5b602002602001018181525050610b2c81610b5c565b600081518110610b4c57634e487b7160e01b600052603260045260246000fd5b6020026020010151915050919050565b606061044482610b72565b600061044482610d9a565b60606000825167ffffffffffffffff811115610b9e57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610bc7578160200160208202803683370190505b5090506000835167ffffffffffffffff811115610bf457634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610c1d578160200160208202803683370190505b5090506000845167ffffffffffffffff811115610c4a57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610c7d57816020015b6060815260200190600190039081610c685790505b50905060005b8551811015610d205760025460ff1667ffffffffffffffff811115610cb857634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610ce1578160200160208202803683370190505b50828281518110610d0257634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610d1890611a3d565b915050610c83565b506000610d2b610e9e565b90506000610d3882610fd3565b61ffff169050610d496002836119bd565b60405190925060005b82811015610d8f576000610d698a89898989611026565b9050610d7581866119bd565b945082604052508080610d8790611a3d565b915050610d52565b506103c68487611359565b6000815160001415610dd8576040517f9e198af900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610de1826114e2565b600060028351610df191906119d5565b905060028351610e019190611a76565b610e7e576000610e6984610e16600185611a26565b81518110610e3457634e487b7160e01b600052603260045260246000fd5b6020026020010151858481518110610e5c57634e487b7160e01b600052603260045260246000fd5b6020026020010151611530565b9050610e766002826119d5565b949350505050565b828181518110610b4c57634e487b7160e01b600052603260045260246000fd5b60006602ed57011e00007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe036013581161480610f06576040517fe7764c9e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60003660291115610f43576040517f5796f78a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd736013560006009610f7c600362ffffff85166119bd565b610f8691906119bd565b905036610f946002836119bd565b1115610fcc576040517fc30a7bd700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b600080610fe16020846119bd565b90503681111561101d576040517f5796f78a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b36033592915050565b6000806000806110358561153c565b909250905060008080606081600d6110586110516020896119bd565b899061158c565b61106291906119bd565b9050600061107b61107460688d6119bd565b3690611598565b905060006110988361108e60418f6119bd565b61107491906119bd565b90506110a483826110b7565b93508260208501209450813596506110f9565b604080518381526020818501810190925260009101838382377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0019392505050565b61110a8765ffffffffffff16610a12565b61111e8561111960418f6119bd565b6115a4565b955061112986610439565b60ff1699505050505050505060008060005b848110156113265761114e88858361163a565b909350915060005b8c51811015611313578c818151811061117f57634e487b7160e01b600052603260045260246000fd5b60200260200101518414156113015760008b82815181106111b057634e487b7160e01b600052603260045260246000fd5b602002602001015190506111c981896001901b16151590565b158015611204575060025460ff1660ff168d83815181106111fa57634e487b7160e01b600052603260045260246000fd5b6020026020010151105b156112fb578c828151811061122957634e487b7160e01b600052603260045260246000fd5b60200260200101805180919061123e90611a3d565b81525050838b838151811061126357634e487b7160e01b600052603260045260246000fd5b602002602001015160018f858151811061128d57634e487b7160e01b600052603260045260246000fd5b602002602001015161129f9190611a26565b815181106112bd57634e487b7160e01b600052603260045260246000fd5b60209081029190910101526001881b81178c83815181106112ee57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250505b50611313565b8061130b81611a3d565b915050611156565b508061131e81611a3d565b91505061113b565b5050508160208261133791906119bd565b61134191906119e9565b61134c90604e6119bd565b9998505050505050505050565b60606000835167ffffffffffffffff81111561138557634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156113ae578160200160208202803683370190505b50905060006113bf60025460ff1690565b60ff16905060005b85518110156114d857818582815181106113f157634e487b7160e01b600052603260045260246000fd5b602002602001015110156114655784818151811061141f57634e487b7160e01b600052603260045260246000fd5b6020026020010151826040517f2b13aef5000000000000000000000000000000000000000000000000000000008152600401610430929190918252602082015260400190565b600061149787838151811061148a57634e487b7160e01b600052603260045260246000fd5b6020026020010151610980565b9050808483815181106114ba57634e487b7160e01b600052603260045260246000fd5b602090810291909101015250806114d081611a3d565b9150506113c7565b5090949350505050565b8051602082016020820281019150805b8281101561152a57815b81811015611521578151815180821015611517578084528183525b50506020016114fc565b506020016114f2565b50505050565b6000610fcc82846119bd565b60008080808061154d6041876119bd565b9050600061155f6110746020846119bd565b803594509050611570816003611598565b62ffffff9490941697933563ffffffff16965092945050505050565b6000610fcc82846119e9565b6000610fcc8284611a26565b60408051600080825260208083018085528690523685900380850135831a948401859052803560608501819052910135608084018190529193909260019060a0016020604051602081039080840390855afa158015611607573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00151979650505050505050565b60008080611649604e876119bd565b9050600061167661166f61165e6020896119bd565b6116698860016119bd565b9061158c565b8390611530565b905060006116843683611598565b80359960209091013598509650505050505050565b600082601f8301126116a9578081fd5b813567ffffffffffffffff8111156116c3576116c3611ab6565b6116f460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161194a565b818152846020838601011115611708578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611733578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610fcc578182fd5b60006020808385031215611768578182fd5b823567ffffffffffffffff81111561177e578283fd5b8301601f8101851361178e578283fd5b80356117a161179c82611999565b61194a565b80828252848201915084840188868560051b87010111156117c0578687fd5b8694505b838510156117e25780358352600194909401939185019185016117c4565b50979650505050505050565b6000602082840312156117ff578081fd5b5035919050565b600080600080600080600060e0888a031215611820578283fd5b8735965060208801359550604088013567ffffffffffffffff80821115611845578485fd5b6118518b838c01611699565b965060608a0135915080821115611866578485fd5b6118728b838c01611699565b955060808a0135915080821115611887578485fd5b6118938b838c01611699565b945060a08a01359150808211156118a8578384fd5b6118b48b838c01611699565b935060c08a01359150808211156118c9578283fd5b506118d68a828b01611699565b91505092959891949750929550565b6000602082840312156118f6578081fd5b813560ff81168114610fcc578182fd5b6020808252825182820181905260009190848201906040850190845b8181101561193e57835183529284019291840191600101611922565b50909695505050505050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561199157611991611ab6565b604052919050565b600067ffffffffffffffff8211156119b3576119b3611ab6565b5060051b60200190565b600082198211156119d0576119d0611a8a565b500190565b6000826119e4576119e4611aa0565b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611a2157611a21611a8a565b500290565b600082821015611a3857611a38611a8a565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611a6f57611a6f611a8a565b5060010190565b600082611a8557611a85611aa0565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122025f821809c5909c2539b1472fc9b5f727a4a08638af4189d0efa753f62a904f164736f6c63430008040033";
const isSuperArgs = (xs) => xs.length > 1;
class SampleProxyConnectorConsumer__factory extends ethers_1.ContractFactory {
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
exports.SampleProxyConnectorConsumer__factory = SampleProxyConnectorConsumer__factory;
SampleProxyConnectorConsumer__factory.bytecode = _bytecode;
SampleProxyConnectorConsumer__factory.abi = _abi;
//# sourceMappingURL=SampleProxyConnectorConsumer__factory.js.map