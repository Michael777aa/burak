import { T } from "../libs/types/common";
import { NextFunction, Request, Response } from "express";
import {
  ExtendedRequest,
  LoginInput,
  Member,
  MemberInput,
} from "../libs/types/member";
import MemberService from "../models/Member.service";
import Errors, { HttpCode, Message } from "../libs/Error";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";

const memberService = new MemberService();
const authService = new AuthService();

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("SignUp");

    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);

    //TODO: TOKENS AUTHENTICATION
    const token = await authService.createToken(result);
    console.log("token>>", token);
    res.cookie("accessToken", token, {
      maxAge: AUTH_TIMER * 3600 * 1000,
      httpOnly: false,
    });

    res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
  } catch (err) {
    console.log("Error: SignUp", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("Login");

    const input: LoginInput = req.body,
      result: Member = await memberService.login(input);

    //TODO: TOKENS AUTHENTICATION
    const token = await authService.createToken(result);
    res.cookie("accessToken", token, {
      maxAge: AUTH_TIMER * 3600 * 1000,
      httpOnly: false,
    });
    console.log("res>>", req.cookies);
    res.status(HttpCode.OK).json({ member: result, accessToken: token });
  } catch (err) {
    console.log("Error: Login", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.logout = (req: ExtendedRequest, res: Response) => {
  try {
    console.log("logout");
    res.cookie("accessToken", null, { maxAge: 0, httpOnly: true });
    res.status(HttpCode.OK).json({ logout: true });
  } catch (err) {
    console.log("Error: logout", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.verifyAuth = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies["accessToken"];
    if (token) {
      req.member = await authService.checkAuth(token);
    }

    if (!req.member)
      throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);

    next();
  } catch (err) {
    console.log("Error: verifyAuth", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.retrieveAuth = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies["accessToken"];
    if (token) {
      req.member = await authService.checkAuth(token);
      next();
    }
  } catch (err) {
    next();
  }
};

export default memberController;
