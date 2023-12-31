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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface EventInterface extends Interface {
  getFunction(nameOrSignature: "borrow"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;

  encodeFunctionData(
    functionFragment: "borrow",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
}

export namespace BorrowEvent {
  export type InputTuple = [
    index: BigNumberish,
    user: AddressLike,
    token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    index: bigint,
    user: string,
    token: string,
    amount: bigint
  ];
  export interface OutputObject {
    index: bigint;
    user: string;
    token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Event extends BaseContract {
  connect(runner?: ContractRunner | null): Event;
  waitForDeployment(): Promise<this>;

  interface: EventInterface;

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

  borrow: TypedContractMethod<
    [index: BigNumberish, token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "borrow"
  ): TypedContractMethod<
    [index: BigNumberish, token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Borrow"
  ): TypedContractEvent<
    BorrowEvent.InputTuple,
    BorrowEvent.OutputTuple,
    BorrowEvent.OutputObject
  >;

  filters: {
    "Borrow(uint256,address,address,uint256)": TypedContractEvent<
      BorrowEvent.InputTuple,
      BorrowEvent.OutputTuple,
      BorrowEvent.OutputObject
    >;
    Borrow: TypedContractEvent<
      BorrowEvent.InputTuple,
      BorrowEvent.OutputTuple,
      BorrowEvent.OutputObject
    >;
  };
}
