"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "김서연",
    role: "스타트업 CEO",
    company: "테크스타트 주식회사",
    avatar: "https://picsum.photos/seed/user1/200",
    content: "개발 시간이 3개월에서 2주로 단축되었습니다. 특히 인증 시스템과 결제 연동이 매우 인상적이었어요. 덕분에 빠르게 시장 검증을 할 수 있었습니다.",
    rating: 5
  },
  {
    name: "이준호",
    role: "프리랜서 개발자",
    company: "독립 컨설턴트",
    avatar: "https://picsum.photos/seed/user2/200",
    content: "코드 품질이 정말 훌륭합니다. TypeScript와 최신 기술들이 잘 적용되어 있어서, 커스터마이징하기도 쉽고 유지보수도 편리해요.",
    rating: 5
  },
  {
    name: "박지민",
    role: "제품 디자이너",
    company: "디자인랩스",
    avatar: "https://picsum.photos/seed/user3/200",
    content: "디자인 시스템이 체계적이에요. Figma 파일도 함께 제공되어서 디자인 작업이 훨씬 수월했습니다. 클라이언트들의 반응도 매우 좋아요.",
    rating: 5
  },
  {
    name: "최현우",
    role: "기술이사",
    company: "그로스업",
    avatar: "https://picsum.photos/seed/user4/200",
    content: "확장성이 매우 뛰어납니다. 처음에는 작은 규모로 시작했지만, 사용자가 늘어나도 안정적으로 서비스를 운영할 수 있었어요. 기술 지원팀의 응답도 빨라요.",
    rating: 4
  },
  {
    name: "장미영",
    role: "마케팅 매니저",
    company: "디지털마케팅스",
    avatar: "https://picsum.photos/seed/user5/200",
    content: "분석 도구와 대시보드가 잘 구성되어 있어서 데이터 기반 의사결정이 쉬워졌어요. A/B 테스트 기능도 유용하게 사용하고 있습니다.",
    rating: 5
  },
  {
    name: "강도현",
    role: "프로덕트 매니저",
    company: "테크솔루션",
    avatar: "https://picsum.photos/seed/user6/200",
    content: "여러 SaaS 템플릿을 사용해봤지만, 이만큼 완성도 높은 제품은 처음입니다. 특히 API 문서화와 개발자 경험이 탁월해요.",
    rating: 5
  }
];

export function Testimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
        
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <Card className="bg-background border-border/40 hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground/80">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5 mb-4">
                        {Array(testimonial.rating).fill(null).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        {Array(5 - testimonial.rating).fill(null).map((_, i) => (
                          <Star
                            key={i + testimonial.rating}
                            className="w-4 h-4 text-muted-foreground/20"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 