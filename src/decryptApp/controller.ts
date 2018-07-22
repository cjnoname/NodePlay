import { Request, Response } from "express";
import server from "utils/server";
import { decrypt } from "../initial";

export const decryptGooglePay = async (req: Request, res: Response) => {
    const request = {
        token: req.body.token,
        privateKey1: decrypt.privateKey1,
        privateKey2: decrypt.privateKey2,
        merchantId: decrypt.merchantId
    };
    const result = await server.post<object>("https://googlepaycrypto.dev.ticketek.net", request, {}, true);
    res.send(result);
};
