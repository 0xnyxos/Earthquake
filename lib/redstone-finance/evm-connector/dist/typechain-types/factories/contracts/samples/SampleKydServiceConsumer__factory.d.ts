import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { SampleKydServiceConsumer, SampleKydServiceConsumerInterface } from "../../../contracts/samples/SampleKydServiceConsumer";
declare type SampleKydServiceConsumerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SampleKydServiceConsumer__factory extends ContractFactory {
    constructor(...args: SampleKydServiceConsumerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SampleKydServiceConsumer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SampleKydServiceConsumer;
    connect(signer: Signer): SampleKydServiceConsumer__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506110bd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063ec359c4d11610050578063ec359c4d146100cc578063f50b2efe146100e2578063f90c4924146100f557600080fd5b80633ce142f51461007757806371478b24146100a1578063b24ebfcc146100ab575b600080fd5b61008a610085366004610e6c565b6100fc565b60405160ff90911681526020015b60405180910390f35b6100a96101c1565b005b6100be6100b9366004610ea0565b610285565b604051908152602001610098565b60005460ff166040519015158152602001610098565b6100a96100f0366004610f7e565b610379565b600261008a565b60007370997970c51812dc3a010c7d01b50e0d17dc79c873ffffffffffffffffffffffffffffffffffffffff8316141561013857506000919050565b733c44cdddb6a900fa2b585dd299e03d12fa4293bc73ffffffffffffffffffffffffffffffffffffffff8316141561017257506001919050565b6040517fec459bc000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024015b60405180910390fd5b6040517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b166020820152600090603401604051602081830303815290604052805190602001209050600061021882610385565b905080600114610256576040517fdb1e860d0000000000000000000000000000000000000000000000000000000081523360048201526024016101b8565b5050600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60008151600014156102c3576040517fdfac221e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000826000815181106102e657634e487b7160e01b600052603260045260246000fd5b602002602001015190506000600190505b8351811015610372578184828151811061032157634e487b7160e01b600052603260045260246000fd5b602002602001015114610360576040517fd5e55d1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061036a81611022565b9150506102f7565b5092915050565b61038281610411565b50565b6040805160018082528183019092526000918291906020808301908036833701905050905082816000815181106103cc57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250506103e1816104c7565b60008151811061040157634e487b7160e01b600052603260045260246000fd5b6020026020010151915050919050565b600061041f6103e883610fae565b90508042101561047a57603c610435428361100b565b1115610476576040517fb6b0916d000000000000000000000000000000000000000000000000000000008152600481018290524260248201526044016101b8565b5050565b60b4610486824261100b565b1115610476576040517f0321d0b5000000000000000000000000000000000000000000000000000000008152600481018290524260248201526044016101b8565b60606104d2826104d8565b92915050565b60606000825167ffffffffffffffff81111561050457634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561052d578160200160208202803683370190505b5090506000835167ffffffffffffffff81111561055a57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610583578160200160208202803683370190505b5090506000845167ffffffffffffffff8111156105b057634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156105e357816020015b60608152602001906001900390816105ce5790505b50905060005b855181101561064e5760408051600280825260608201835290916020830190803683370190505082828151811061063057634e487b7160e01b600052603260045260246000fd5b6020026020010181905250808061064690611022565b9150506105e9565b5060006106596106d4565b9050600061066682610809565b61ffff169050610677600283610f96565b60405190925060005b828110156106bd5760006106978a8989898961085c565b90506106a38186610f96565b9450826040525080806106b590611022565b915050610680565b506106c88487610b8b565b98975050505050505050565b60006602ed57011e00007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601358116148061073c576040517fe7764c9e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60003660291115610779576040517f5796f78a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd7360135600060096107b2600362ffffff8516610f96565b6107bc9190610f96565b9050366107ca600283610f96565b1115610802576040517fc30a7bd700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b600080610817602084610f96565b905036811115610853576040517f5796f78a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b36033592915050565b60008060008061086b85610d03565b909250905060008080606081600d61088e610887602089610f96565b8990610d53565b6108989190610f96565b905060006108b16108aa60688d610f96565b3690610d5f565b905060006108ce836108c460418f610f96565b6108aa9190610f96565b90506108da83826108ed565b935082602085012094508135965061092f565b604080518381526020818501810190925260009101838382377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0019392505050565b6109408765ffffffffffff16610379565b6109548561094f60418f610f96565b610d6b565b955061095f866100fc565b60ff1699505050505050505060008060005b84811015610b5857610984888583610e01565b909350915060005b8c51811015610b45578c81815181106109b557634e487b7160e01b600052603260045260246000fd5b6020026020010151841415610b335760008b82815181106109e657634e487b7160e01b600052603260045260246000fd5b602002602001015190506109ff81896001901b16151590565b158015610a365750600260ff168d8381518110610a2c57634e487b7160e01b600052603260045260246000fd5b6020026020010151105b15610b2d578c8281518110610a5b57634e487b7160e01b600052603260045260246000fd5b602002602001018051809190610a7090611022565b81525050838b8381518110610a9557634e487b7160e01b600052603260045260246000fd5b602002602001015160018f8581518110610abf57634e487b7160e01b600052603260045260246000fd5b6020026020010151610ad1919061100b565b81518110610aef57634e487b7160e01b600052603260045260246000fd5b60209081029190910101526001881b81178c8381518110610b2057634e487b7160e01b600052603260045260246000fd5b6020026020010181815250505b50610b45565b80610b3d81611022565b91505061098c565b5080610b5081611022565b915050610971565b50505081602082610b699190610f96565b610b739190610fce565b610b7e90604e610f96565b9998505050505050505050565b60606000835167ffffffffffffffff811115610bb757634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610be0578160200160208202803683370190505b509050600260005b8551811015610cf95781858281518110610c1257634e487b7160e01b600052603260045260246000fd5b60200260200101511015610c8657848181518110610c4057634e487b7160e01b600052603260045260246000fd5b6020026020010151826040517f2b13aef50000000000000000000000000000000000000000000000000000000081526004016101b8929190918252602082015260400190565b6000610cb8878381518110610cab57634e487b7160e01b600052603260045260246000fd5b6020026020010151610285565b905080848381518110610cdb57634e487b7160e01b600052603260045260246000fd5b60209081029190910101525080610cf181611022565b915050610be8565b5090949350505050565b600080808080610d14604187610f96565b90506000610d266108aa602084610f96565b803594509050610d37816003610d5f565b62ffffff9490941697933563ffffffff16965092945050505050565b60006108028284610fce565b6000610802828461100b565b60408051600080825260208083018085528690523685900380850135831a948401859052803560608501819052910135608084018190529193909260019060a0016020604051602081039080840390855afa158015610dce573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00151979650505050505050565b60008080610e10604e87610f96565b90506000610e3d610e36610e25602089610f96565b610e30886001610f96565b90610d53565b8390610e60565b90506000610e4b3683610d5f565b80359960209091013598509650505050505050565b60006108028284610f96565b600060208284031215610e7d578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610802578182fd5b60006020808385031215610eb2578182fd5b823567ffffffffffffffff80821115610ec9578384fd5b818501915085601f830112610edc578384fd5b813581811115610eee57610eee611071565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715610f3157610f31611071565b604052828152858101935084860182860187018a1015610f4f578788fd5b8795505b83861015610f71578035855260019590950194938601938601610f53565b5098975050505050505050565b600060208284031215610f8f578081fd5b5035919050565b60008219821115610fa957610fa961105b565b500190565b600082610fc957634e487b7160e01b81526012600452602481fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156110065761100661105b565b500290565b60008282101561101d5761101d61105b565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156110545761105461105b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220436a84424e873ca97664ff65a87c207f2b0b661a74fcbb284e2f5c6a76a9e9f264736f6c63430008040033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): SampleKydServiceConsumerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SampleKydServiceConsumer;
}
export {};
//# sourceMappingURL=SampleKydServiceConsumer__factory.d.ts.map