import { ethers } from "hardhat";
import {Contract } from "@ethersproject/contracts";

describe("GlobalVariable", function () {
    let globalVariable: Contract;
    let deployer: any;
    before(async function () {
        const [_deployer] = await ethers.getSigners();
        deployer = _deployer;
        const GlobalVariable = await ethers.getContractFactory(
            "GlobalVariable",
            deployer
        );
        globalVariable = await GlobalVariable.deploy();
    });
    it("ETH unit", async function () {
        console.log('weiUnit', (await globalVariable.weiUnit()).toString());
        console.log('gweiUnit', (await globalVariable.gweiUnit()).toString());
        console.log('ethUnit', (await globalVariable.ethUnit()).toString());
    });

    it("TIME unit", async function () {
        console.log('secondsUnit', (await globalVariable.secondsUnit()).toString());
        console.log('minutesUnit', (await globalVariable.minutesUnit()).toString());
        console.log('hoursUnit', (await globalVariable.hoursUnit()).toString());
        console.log('daysUnit', (await globalVariable.daysUnit()).toString());
        console.log('weeksUnit', (await globalVariable.weeksUnit()).toString());
    });
    it("msg test", async function () {
        const msgArray = await globalVariable.msgTest(1,{value:1});
        console.log("msgData", ((await globalVariable.msgData()).toString()))
        console.log("msgSender", ((await globalVariable.msgSender())))
        console.log("msgSig", ((await globalVariable.msgSig()).toString()))
        console.log("msgValue", ((await globalVariable.msgValue()).toString()))
    });
    it("Tx Test", async function () {
        console.log("gasPrice", ((await globalVariable.gasPrice()).toString()))
        console.log("origin", ((await globalVariable.origin())))
    });
});