"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "이 서비스는 어떤 문제를 해결하나요?",
    answer: "우리 서비스는 SaaS 애플리케이션 개발 시간을 대폭 단축시킵니다. 수개월이 걸리던 개발 과정을 몇 분으로 줄여, 비즈니스 아이디어를 빠르게 현실화할 수 있습니다."
  },
  {
    question: "기술 스택은 어떻게 구성되어 있나요?",
    answer: "Next.js, TypeScript, TailwindCSS를 기반으로 하며, 추가로 Prisma(DB), NextAuth(인증), React-Query(상태관리) 등 현대적이고 안정적인 기술들을 사용합니다."
  },
  {
    question: "커스터마이징이 가능한가요?",
    answer: "네, 모든 컴포넌트와 기능을 완벽하게 커스터마이징할 수 있습니다. 직관적인 설정 파일과 명확한 문서를 제공하여 원하는 대로 수정할 수 있습니다."
  },
  {
    question: "데이터는 어떻게 관리되나요?",
    answer: "강력한 보안을 갖춘 클라우드 인프라를 사용하며, GDPR과 CCPA를 준수합니다. 모든 데이터는 암호화되어 저장되며, 정기적인 백업이 이루어집니다."
  },
  {
    question: "기술 지원은 어떻게 받을 수 있나요?",
    answer: "24/7 실시간 채팅 지원, 이메일 지원, 그리고 상세한 문서를 제공합니다. 또한 활발한 개발자 커뮤니티를 통해 다양한 문제 해결 방법을 공유받을 수 있습니다."
  }
];

export function FAQ() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-8",
          "bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground",
          "bg-clip-text text-transparent"
        )}>
          자주 묻는 질문
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          고객님들이 자주 문의하시는 내용을 모았습니다
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
