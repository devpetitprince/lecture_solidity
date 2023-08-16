import { ethers } from "hardhat";
import { Contract} from "@ethersproject/contracts";

describe("Function2", function () {
    let function2: Contract;
    let deployer: any;
    before(async function () {
        const [_deployer] = await ethers.getSigners();
        deployer = deployer;
        const Function2 = await ethers.getContractFactory("Function2",deployer);
        function2 = await Function2.deploy();
    });

    it("function2", async function () {
        await function2.pureFunction(4);
        await function2.viewFunction(4);
        console.log(await function2.getDoubleA(6));
        console.log(await function2.getDoubleA2(6));
    });
});
