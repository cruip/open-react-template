import { NextResponse, NextRequest } from "next/server";

type ResponseData = {
  name?: string;
  email?: string;
  msg?: string;
}

export function POST(req: NextRequest, res: NextResponse) {
  // console.log(req.body);
  // const body = req.body as ResponseData;
  // if (!body.name) {
  //   res.status(500);
  //   return res.json({ msg: "Please provide an name." });
  // }
  // if (!body.email) {
  //   res.status(500);
  //   return res.json({ msg: "Please provide an email." });
  // }


  // res.status(200).json({
  //   name: `${body?.name}`,
  //   email: `${body?.email}`,
  //   msg: `${body?.message}`,
  // });
}
