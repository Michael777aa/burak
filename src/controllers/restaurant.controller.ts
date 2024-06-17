
import { Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import {LoginInput} from "../libs/types/member";

const memberService = new MemberService();

const restaurantController: T = {}; 
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        
        res.send("Home Page")
    }catch(err) {
        console.log("Error, goHome:", err);
        
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send("Signup Page")
    }catch(err) {
        console.log("Error, getSignup:", err);
        
    }
};
 
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        
        res.send("Login Page")
    }catch(err) {
        console.log("Error, getLogin:", err);
        
    }
};


 
restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
        // Session Authentication   
        res.send(result);
    }catch(err) {
        console.log("Error, processSignup:", err);
        res.send(err);  
        
    }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        const input: LoginInput = req.body; 
        const result = await memberService.processLogin(input);
        // Session Authentication   
        res.send(result);
    }catch(err) {
        console.log("Error, processLogin:", err);
        res.send(err);
        
    }
};
 


 


export default restaurantController;