/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface GlobalVariableInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "daysUnit"
      | "ethUnit"
      | "gasPrice"
      | "gweiUnit"
      | "hoursUnit"
      | "minutesUnit"
      | "msgData"
      | "msgSender"
      | "msgSig"
      | "msgTest"
      | "msgValue"
      | "origin"
      | "secondsUnit"
      | "weeksUnit"
      | "weiUnit"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "daysUnit", values?: undefined): string;
  encodeFunctionData(functionFragment: "ethUnit", values?: undefined): string;
  encodeFunctionData(functionFragment: "gasPrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "gweiUnit", values?: undefined): string;
  encodeFunctionData(functionFragment: "hoursUnit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minutesUnit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "msgData", values?: undefined): string;
  encodeFunctionData(functionFragment: "msgSender", values?: undefined): string;
  encodeFunctionData(functionFragment: "msgSig", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "msgTest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "msgValue", values?: undefined): string;
  encodeFunctionData(functionFragment: "origin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "secondsUnit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "weeksUnit", values?: undefined): string;
  encodeFunctionData(functionFragment: "weiUnit", values?: undefined): string;

  decodeFunctionResult(functionFragment: "daysUnit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ethUnit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gasPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gweiUnit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hoursUnit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minutesUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "msgData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "msgSender", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "msgSig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "msgTest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "msgValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "origin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "secondsUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weeksUnit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weiUnit", data: BytesLike): Result;
}

export interface GlobalVariable extends BaseContract {
  connect(runner?: ContractRunner | null): GlobalVariable;
  waitForDeployment(): Promise<this>;

  interface: GlobalVariableInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  daysUnit: TypedContractMethod<[], [bigint], "view">;

  ethUnit: TypedContractMethod<[], [bigint], "view">;

  gasPrice: TypedContractMethod<[], [bigint], "view">;

  gweiUnit: TypedContractMethod<[], [bigint], "view">;

  hoursUnit: TypedContractMethod<[], [bigint], "view">;

  minutesUnit: TypedContractMethod<[], [bigint], "view">;

  msgData: TypedContractMethod<[], [string], "view">;

  msgSender: TypedContractMethod<[], [string], "view">;

  msgSig: TypedContractMethod<[], [string], "view">;

  msgTest: TypedContractMethod<[a: BigNumberish], [void], "payable">;

  msgValue: TypedContractMethod<[], [bigint], "view">;

  origin: TypedContractMethod<[], [string], "view">;

  secondsUnit: TypedContractMethod<[], [bigint], "view">;

  weeksUnit: TypedContractMethod<[], [bigint], "view">;

  weiUnit: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "daysUnit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ethUnit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "gasPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "gweiUnit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "hoursUnit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minutesUnit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "msgData"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "msgSender"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "msgSig"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "msgTest"
  ): TypedContractMethod<[a: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "msgValue"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "origin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "secondsUnit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "weeksUnit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "weiUnit"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
