import { ethers } from "hardhat";
import { Contract} from "@ethersproject/contracts";

describe("Function1", function () {
    let function1: Contract;
    let deployer: any;
    before(async function () {
        const [_deployer] = await ethers.getSigners();
        deployer = deployer;
        const Function1 = await ethers.getContractFactory("Function1",deployer);
        function1 = await Function1.deploy();
    });

    it("function", async function () {
        console.log('stateValue', await function1.stateValue())
        await function1.function1();
        //console.log('localValue', await function1.localValue())
        await function1.externalFunction();
       // await function1. _privateFunction();
    });
});