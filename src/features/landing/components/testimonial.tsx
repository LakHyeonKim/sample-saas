"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "김서연",
    role: "스타트업 CEO",
    avatar: "https://picsum.photos/seed/user1/200",
    content: "개발 시간이 3개월에서 2주로 단축되었습니다. 특히 인증 시스템과 결제 연동이 매우 인상적이었어요. 덕분에 빠르게 시장 검증을 할 수 있었습니다.",
    rating: 5
  },
  {
    name: "이준호",
    role: "프리랜서 개발자",
    avatar: "https://picsum.photos/seed/user2/200",
    content: "코드 품질이 정말 훌륭합니다. TypeScript와 최신 기술들이 잘 적용되어 있어서, 커스터마이징하기도 쉽고 유지보수도 편리해요.",
    rating: 5
  },
  {
    name: "박지민",
    role: "제품 디자이너",
    avatar: "https://picsum.photos/seed/user3/200",
    content: "디자인 시스템이 체계적이에요. Figma 파일도 함께 제공되어서 디자인 작업이 훨씬 수월했습니다. 클라이언트들의 반응도 매우 좋아요.",
    rating: 5
  }
];

export function Testimonial() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-8",
          "bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground",
          "bg-clip-text text-transparent"
        )}>
          고객 후기
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          실제 고객들의 경험을 확인해보세요
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border/40">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {Array(testimonial.rating).fill(null).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 