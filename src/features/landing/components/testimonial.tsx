import React from "react";

export function Testimonial() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-center mb-6">고객 후기</h2>
      <div className="max-w-2xl mx-auto">
        <div className="mb-4">
          <p className="italic">&quot;이 플랫폼 덕분에 SaaS 애플리케이션을 빠르게 출시할 수 있었습니다!&quot;</p>
          <p className="text-right font-semibold">- 홍길동</p>
        </div>
        <div className="mb-4">
          <p className="italic">&quot;사용하기 쉬운 인터페이스 덕분에 코딩 지식 없이도 시작할 수 있었습니다.&quot;</p>
          <p className="text-right font-semibold">- 김철수</p>
        </div>
      </div>
    </section>
  );
} 