/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  GlobalVariable,
  GlobalVariableInterface,
} from "../GlobalVariable";

const _abi = [
  {
    inputs: [],
    name: "daysUnit",
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
    name: "ethUnit",
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
    name: "gasPrice",
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
    name: "gweiUnit",
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
    name: "hoursUnit",
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
    name: "minutesUnit",
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
    name: "msgData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "msgSender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "msgSig",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "a",
        type: "uint8",
      },
    ],
    name: "msgTest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "msgValue",
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
    name: "origin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "secondsUnit",
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
    name: "weeksUnit",
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
    name: "weiUnit",
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
] as const;

const _bytecode =
  "0x60806040526001600055633b9aca00600155670de0b6b3a76400006002556001600355603c600455610e106005556201518060065562093a806007553a600b5532600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561008c57600080fd5b50610a7b8061009c6000396000f3fe6080604052600436106100e85760003560e01c8063be44f8641161008a578063ec3e88cf11610059578063ec3e88cf146102b7578063f1e6d198146102e2578063f726e9781461030d578063fe173b9714610338576100e8565b8063be44f8641461020b578063c4c2bfdc14610236578063d737d0c714610261578063ddf363d71461028c576100e8565b806330442e6e116100c657806330442e6e1461016e578063938b5f321461018a578063a0d0d59e146101b5578063aec3d640146101e0576100e8565b806309879682146100ed57806312176349146101185780632aca45f114610143575b600080fd5b3480156100f957600080fd5b50610102610363565b60405161010f9190610545565b60405180910390f35b34801561012457600080fd5b5061012d610369565b60405161013a9190610545565b60405180910390f35b34801561014f57600080fd5b5061015861036f565b6040516101659190610545565b60405180910390f35b6101886004803603810190610183919061059e565b610375565b005b34801561019657600080fd5b5061019f610415565b6040516101ac919061060c565b60405180910390f35b3480156101c157600080fd5b506101ca61043b565b6040516101d79190610545565b60405180910390f35b3480156101ec57600080fd5b506101f5610441565b6040516102029190610545565b60405180910390f35b34801561021757600080fd5b50610220610447565b60405161022d9190610545565b60405180910390f35b34801561024257600080fd5b5061024b61044d565b60405161025891906106b7565b60405180910390f35b34801561026d57600080fd5b506102766104db565b604051610283919061060c565b60405180910390f35b34801561029857600080fd5b506102a1610501565b6040516102ae9190610545565b60405180910390f35b3480156102c357600080fd5b506102cc610507565b6040516102d99190610714565b60405180910390f35b3480156102ee57600080fd5b506102f761051a565b6040516103049190610545565b60405180910390f35b34801561031957600080fd5b50610322610520565b60405161032f9190610545565b60405180910390f35b34801561034457600080fd5b5061034d610526565b60405161035a9190610545565b60405180910390f35b60035481565b60005481565b60075481565b60003660089182610387929190610975565b5033600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000357fffffffff0000000000000000000000000000000000000000000000000000000016600960146101000a81548163ffffffff021916908360e01c021790555034600a8190555050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b60015481565b60055481565b6008805461045a90610798565b80601f016020809104026020016040519081016040528092919081815260200182805461048690610798565b80156104d35780601f106104a8576101008083540402835291602001916104d3565b820191906000526020600020905b8154815290600101906020018083116104b657829003601f168201915b505050505081565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a5481565b600960149054906101000a900460e01b81565b60045481565b60025481565b600b5481565b6000819050919050565b61053f8161052c565b82525050565b600060208201905061055a6000830184610536565b92915050565b600080fd5b600060ff82169050919050565b61057b81610565565b811461058657600080fd5b50565b60008135905061059881610572565b92915050565b6000602082840312156105b4576105b3610560565b5b60006105c284828501610589565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105f6826105cb565b9050919050565b610606816105eb565b82525050565b600060208201905061062160008301846105fd565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610661578082015181840152602081019050610646565b60008484015250505050565b6000601f19601f8301169050919050565b600061068982610627565b6106938185610632565b93506106a3818560208601610643565b6106ac8161066d565b840191505092915050565b600060208201905081810360008301526106d1818461067e565b905092915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61070e816106d9565b82525050565b60006020820190506107296000830184610705565b92915050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806107b057607f821691505b6020821081036107c3576107c2610769565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261082b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826107ee565b61083586836107ee565b95508019841693508086168417925050509392505050565b6000819050919050565b600061087261086d6108688461052c565b61084d565b61052c565b9050919050565b6000819050919050565b61088c83610857565b6108a061089882610879565b8484546107fb565b825550505050565b600090565b6108b56108a8565b6108c0818484610883565b505050565b5b818110156108e4576108d96000826108ad565b6001810190506108c6565b5050565b601f821115610929576108fa816107c9565b610903846107de565b81016020851015610912578190505b61092661091e856107de565b8301826108c5565b50505b505050565b600082821c905092915050565b600061094c6000198460080261092e565b1980831691505092915050565b6000610965838361093b565b9150826002028217905092915050565b61097f838361072f565b67ffffffffffffffff8111156109985761099761073a565b5b6109a28254610798565b6109ad8282856108e8565b6000601f8311600181146109dc57600084156109ca578287013590505b6109d48582610959565b865550610a3c565b601f1984166109ea866107c9565b60005b82811015610a12578489013582556001820191506020850194506020810190506109ed565b86831015610a2f5784890135610a2b601f89168261093b565b8355505b6001600288020188555050505b5050505050505056fea2646970667358221220b654c463c7091a4c8ae27881d21a62feb11c320521ea7bcaf2247743e57e6e1264736f6c63430008130033";

type GlobalVariableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GlobalVariableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GlobalVariable__factory extends ContractFactory {
  constructor(...args: GlobalVariableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      GlobalVariable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): GlobalVariable__factory {
    return super.connect(runner) as GlobalVariable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GlobalVariableInterface {
    return new Interface(_abi) as GlobalVariableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): GlobalVariable {
    return new Contract(address, _abi, runner) as unknown as GlobalVariable;
  }
}
