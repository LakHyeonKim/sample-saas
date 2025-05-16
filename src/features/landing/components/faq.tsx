import React from "react";

export function FAQ() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-center mb-6">자주 묻는 질문</h2>
      <div className="max-w-2xl mx-auto">
        <div className="mb-4">
          <h3 className="font-semibold">Q: 이 플랫폼은 무엇인가요?</h3>
          <p>A: 이 플랫폼은 SaaS 애플리케이션을 빠르고 효율적으로 구축할 수 있게 해줍니다.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Q: 코딩 기술이 필요한가요?</h3>
          <p>A: 아니요, 우리의 직관적인 템플릿은 코딩 전문 지식이 필요하지 않습니다.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Q: 어떻게 시작할 수 있나요?</h3>
          <p>A: "시작하기" 버튼을 클릭하여 가입하고 여정을 시작하세요.</p>
        </div>
      </div>
    </section>
  );
}
