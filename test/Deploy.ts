import { ethers } from "hardhat";
import { Contract } from "@ethersproject/contracts";
describe("Deploy", function () {
    let deploy: Contract;
    let deployer: any;
    before(async function () {
        const [_deployer] = await ethers.getSigners();
        deployer = _deployer;
        deploy = await ethers.getContractAt(
            "Deploy", "0x80F4089dc04a36877026083181e0Aa51d257Bc30"
        );
    });
    it.skip("setStateValue", async function () {
        await deploy.setStateValue(60);
    });
    it("getStateValue", async function () {
        console.log(await deploy.getStateValue());
    });
});