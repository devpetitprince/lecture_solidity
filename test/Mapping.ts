import { ethers } from "hardhat";
import { Contract} from "@ethersproject/contracts";

describe("Mapping", function () {
    let mapping: Contract
    let deployer: any
    let user1: any
    let ETH: any
    let KDAI: any
    before(async function () {
        const [ _deployer, _user1] = await ethers.getSigners()
        deployer = _deployer
        user1 = _user
    })