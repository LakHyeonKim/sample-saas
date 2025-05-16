"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { ForgotPasswordPayload, forgotPasswordPayloadSchema } from "@/features/auth/schema";
import { forgotPassword } from "@/features/auth/api";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ForgotPasswordPayload>({
    resolver: zodResolver(forgotPasswordPayloadSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordPayload) => {
    setIsLoading(true);
    setError(null);

    try {
      await forgotPassword(data);
      setIsSuccess(true);
    } catch (err: any) {
      console.error("Password reset request failed:", err);
      setError(err.response?.data?.error || "비밀번호 재설정 요청 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <Card
        className={cn(
          "w-full backdrop-blur-sm",
          "border border-border/40",
          "shadow-[0_4px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_24px_rgba(255,255,255,0.05)]",
          "overflow-hidden"
        )}
      >
        <CardContent className="p-6 sm:p-8 text-center">
          <h3 className="text-lg font-semibold mb-2">이메일이 전송되었습니다</h3>
          <p className="text-muted-foreground mb-4">
            비밀번호 재설정 링크가 포함된 이메일을 보내드렸습니다. 이메일을 확인해주세요.
          </p>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setIsSuccess(false)}
          >
            다시 시도
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "w-full backdrop-blur-sm",
        "border border-border/40",
        "shadow-[0_4px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_24px_rgba(255,255,255,0.05)]",
        "overflow-hidden"
      )}
    >
      <CardContent className="p-6 sm:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80 font-medium">
                    이메일
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="가입하신 이메일을 입력하세요"
                        type="email"
                        className="pl-10 bg-background/50 border-border/50 focus:border-brand/60 transition-all"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && (
              <div className="text-sm font-medium text-destructive bg-destructive/10 p-3 rounded-md">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className={cn(
                "w-full mt-2",
                "bg-gradient-to-b from-brand to-brand/90 dark:from-brand/90 dark:to-brand/80",
                "hover:from-brand/95 hover:to-brand/85 dark:hover:from-brand/80 dark:hover:to-brand/70",
                "text-white shadow-md",
                "transition-all duration-300"
              )}
              disabled={isLoading}
            >
              {isLoading ? "처리 중..." : "비밀번호 재설정 링크 받기"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center p-6 pt-0 sm:p-8 sm:pt-0 border-t border-border/10">
        <p className="text-sm text-muted-foreground">
          <Link
            href="/auth/login"
            className="text-brand hover:text-brand/90 hover:underline font-medium transition-colors"
          >
            로그인으로 돌아가기
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
} 