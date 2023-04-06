import { NextRequest } from "next/server";
import React from "react";

export default function middleware(request: NextRequest) {
  console.log("미들웨어거 실행되고 있음. 체크중...");
}
