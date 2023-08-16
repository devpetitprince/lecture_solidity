/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Deploy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Deploy__factory>;
    getContractFactory(
      name: "Event",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Event__factory>;
    getContractFactory(
      name: "Function1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Function1__factory>;
    getContractFactory(
      name: "Function2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Function2__factory>;
    getContractFactory(
      name: "GlobalVariable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GlobalVariable__factory>;
    getContractFactory(
      name: "Mapping",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Mapping__factory>;
    getContractFactory(
      name: "Variable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Variable__factory>;

    getContractAt(
      name: "Deploy",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Deploy>;
    getContractAt(
      name: "Event",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Event>;
    getContractAt(
      name: "Function1",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Function1>;
    getContractAt(
      name: "Function2",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Function2>;
    getContractAt(
      name: "GlobalVariable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.GlobalVariable>;
    getContractAt(
      name: "Mapping",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Mapping>;
    getContractAt(
      name: "Variable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Variable>;

    deployContract(
      name: "Deploy",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Deploy>;
    deployContract(
      name: "Event",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Event>;
    deployContract(
      name: "Function1",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Function1>;
    deployContract(
      name: "Function2",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Function2>;
    deployContract(
      name: "GlobalVariable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GlobalVariable>;
    deployContract(
      name: "Mapping",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Mapping>;
    deployContract(
      name: "Variable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Variable>;

    deployContract(
      name: "Deploy",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Deploy>;
    deployContract(
      name: "Event",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Event>;
    deployContract(
      name: "Function1",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Function1>;
    deployContract(
      name: "Function2",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Function2>;
    deployContract(
      name: "GlobalVariable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GlobalVariable>;
    deployContract(
      name: "Mapping",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Mapping>;
    deployContract(
      name: "Variable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Variable>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}