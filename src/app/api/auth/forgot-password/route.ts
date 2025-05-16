import { NextResponse } from "next/server";
import { forgotPasswordPayloadSchema } from "@/features/auth/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = forgotPasswordPayloadSchema.parse(body);

    // TODO: 실제 이메일 전송 로직 구현
    console.log("비밀번호 재설정 이메일 전송:", email);

    return NextResponse.json({
      message: "비밀번호 재설정 링크가 이메일로 전송되었습니다.",
    });
  } catch (error) {
    console.error("비밀번호 찾기 요청 실패:", error);
    return NextResponse.json(
      { error: "비밀번호 재설정 요청 중 오류가 발생했습니다." },
      { status: 400 }
    );
  }
} 