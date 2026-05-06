# MUSAI Studio — 시안 1: Dark Luxury

순수 블랙(#0a0a0a) + 골드(#c9a84c) + Playfair Display / Noto Serif KR
고급 사운드 스튜디오의 무드를 표현한 다크 럭셔리 컨셉입니다.

## 구성

- 히어로: 풀스크린 + 그라데이션 라이팅 + 셔머 타이틀
- 숫자 통계: 30+ / 20+ / 200+ / 2,000+
- 서비스 3개: SOUND · L10N · ENTERTAINMENT 카드
- 포트폴리오: 6개 게임 작품 (Baldur's Gate 3, Cyberpunk 2077 등) — 그라데이션 아트워크 카드
- 고객사: 12개 로고 마퀴 슬라이더
- 문의 폼

## 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 으로 접속.

## 스택

- Next.js 14 (App Router)
- Tailwind CSS 3.4
- TypeScript
- next/font (Playfair Display, Noto Serif KR)

## 주요 폴더

```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Header.tsx
  Hero.tsx
  Stats.tsx
  Services.tsx
  Portfolio.tsx
  Clients.tsx
  Contact.tsx
  Footer.tsx
```
