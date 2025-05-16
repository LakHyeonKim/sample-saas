This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 로그인 기능 워크플로우

이 프로젝트의 로그인 기능은 다음과 같은 워크플로우를 따릅니다:

```plaintext
+-------------------+
|   LoginPage.tsx   |
+-------------------+
          |
          v
+-------------------+
|   LoginForm.tsx   |
+-------------------+
          |
          v
+-------------------+
+-------------------+
|  사용자 데이터 입력 |
+-------------------+
          |
          v
+-------------------+
|  입력 데이터 검증  |
|  (zod 사용)       |
+-------------------+
          |
          v
+-------------------+
|  폼 제출           |
|  (onSubmit)       |
+-------------------+
          |
          v
+-------------------+
|  API 호출          |
|  (login 함수)     |
+-------------------+
          |
          v
+-------------------+
|  API 응답          |
|  (LoginResponse)  |
+-------------------+
          |
          v
+-------------------+
|  쿠키 설정         |
|  (액세스 토큰)    |
+-------------------+
          |
          v
+-------------------+
|  대시보드로 리다이렉트 |
+-------------------+
```

### 설명

1. **LoginPage.tsx**: 로그인 페이지가 렌더링됩니다.
2. **LoginForm.tsx**: 사용자가 이메일과 비밀번호를 입력할 수 있는 폼이 표시됩니다.
3. **사용자 데이터 입력**: 사용자가 이메일과 비밀번호를 입력합니다.
4. **입력 데이터 검증**: 입력된 데이터는 `zod`를 사용하여 검증됩니다.
5. **폼 제출**: 폼이 제출되면 `onSubmit` 함수가 호출됩니다.
6. **API 호출**: `login` 함수가 호출되어 서버에 로그인 요청을 보냅니다.
7. **API 응답**: 서버로부터 로그인 응답을 받습니다.
8. **쿠키 설정**: 응답으로 받은 액세스 토큰을 쿠키에 저장합니다.
9. **대시보드로 리다이렉트**: 사용자가 대시보드 페이지로 리다이렉트됩니다.
