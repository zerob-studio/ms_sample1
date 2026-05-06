# MUSAI Studio — Design References

> "Cinema-grade Sound, Editorial Quiet."
>
> 사운드 스튜디오의 본질(정밀·전문성·시네마틱한 무게감)을 잡으면서도
> 럭셔리를 "장식"이 아니라 **절제·여백·타이포그래피**로 표현하는 방향.

기존 시안의 골드 그라데이션 + 세리프 일색은 럭셔리의 가장 게으른 표현이라
사운드 스튜디오의 본질이 빠지면 즉시 촌스러워진다. 본질을 잡으려면
**소리 자체를 시각 언어로** 끌어올려야 한다.

---

## 직접 레퍼런스 — Sound / Audio B2B Global

가장 가까운 톤부터.

### 1. **antfood.com** — 가장 강한 직접 레퍼런스
- 사운드 브랜딩 에이전시. 글로벌 B2B의 정석.
- **참고한 것**
  - 시네마틱 블랙 베이스 + 에디토리얼한 큰 세리프 헤드라인
  - 사이드바 없이 세로로 흐르는 매거진 같은 페이지 구조
  - 작품을 "썸네일 + 기술 메타데이터" 조합으로 보여주는 방식
- **적용 위치**: `Hero.tsx` 전체 구조, `Portfolio.tsx` 카드 레이아웃

### 2. **stringandtins.com** — 런던 사운드 스튜디오
- 미니멀하면서도 장난기 있는 모더니즘.
- **참고한 것**
  - 큰 italic 세리프와 정직한 산세리프의 대비
  - hairline 디바이더로만 구역을 나누는 절제
- **적용 위치**: 모든 섹션의 `border-top` hairline, 헤드라인의 italic 단어 강조

### 3. **massivemusic.com** — 글로벌 뮤직/오디오 에이전시
- 본질적인 B2B 톤. 클라이언트 로고 처리 참고.
- **참고한 것**
  - 클라이언트 로고를 "수집"이 아니라 "신뢰의 흐름"으로 보여주는 마키
  - 케이스 스터디 카드의 정렬·여백
- **적용 위치**: `Clients.tsx` 마키 — 다이아몬드(◆) 같은 장식 제거,
  슬래시(`/`) 모노스페이스 디바이더로만 구분

### 4. **humanworldwide.com** — 뉴욕 음악 스튜디오
- 강한 타이포 + 절제된 컬러 블록.
- **참고한 것**
  - "사운드 = 거대한 활자"의 시각적 등치
- **적용 위치**: `Hero.tsx` 헤드라인 (`clamp(3.2rem, 11.5vw, 12.5rem)`),
  `Footer.tsx` 거대한 워드마크

### 5. **yessian.com**
- 시네마틱하고 진중한 사운드 컴퍼니.
- **참고한 것**: 작품 카드의 어두운 그라데이션 + 메타데이터 정렬.
- **적용 위치**: `Portfolio.tsx` `ArtCard` 의 다크 그라데이션 처리.

### 6. **spitfireaudio.com** — 시네마틱 라이브러리
- "프리미엄 사운드 = 차분한 검정 + 정밀한 모노스페이스"의 교본.
- **참고한 것**
  - 모든 기술적 정보(샘플레이트·채널·런타임)를 모노스페이스로 처리
  - 차분한 검정 위에 절제된 한 톤의 액센트
- **적용 위치**: 전 섹션의 모노스페이스 메타데이터,
  `Hero.tsx` 상단 메타 스트립 (`192 kHz · 24 bit / Dolby Atmos`)

### 7. **native-instruments.com**, **output.com**, **elektron.se**
- 모던 미니멀 프로덕트 톤.
- **참고한 것**: 기능적이면서도 차가운 정밀함.
- **적용 위치**: `Stats.tsx` 의 grid + divider 정렬, `Services.tsx` row 레이아웃.

---

## 인접 분야 — 모던 럭셔리 B2B의 톤

장식 없이 타이포그래피만으로 프리미엄을 만드는 사이트들.

### 8. **a24films.com** — 에디토리얼 다크
- 폰트와 여백만으로 무게감을 만드는 영화 스튜디오.
- **참고한 것**
  - 진짜 italic 세리프(GT Sectra 류)의 권위감
  - 한 섹션 = 한 메시지 원칙
- **적용 위치**: 폰트 선택 (**Instrument Serif** — GT Sectra의 무료 대체),
  About / Services / Portfolio 헤드라인의 italic 단어 강조 패턴

### 9. **linear.app**, **resend.com**, **vercel.com**
- 타이포그래피만으로 프리미엄을 만드는 SaaS.
- **참고한 것**
  - hairline 보더 + 잘 정렬된 메타데이터의 정밀함
  - 다크 모드에서의 따뜻한 오프화이트 (`#ede9de` 류) 사용
- **적용 위치**: 컬러 팔레트 (`--color-ink: #ede9de`),
  헤더의 hairline + backdrop-blur 처리

### 10. **bureauborsche.com**, **bureaubureau.studio**
- 스위스 그리드 + 세리프 디스플레이의 디자인 스튜디오.
- **참고한 것**
  - 챕터 번호(`— 01 / Studio`) 같은 에디토리얼 마커
  - 12-col 그리드의 비대칭 활용
- **적용 위치**: 모든 섹션 상단의 챕터 마커 + 12-col 비대칭 정렬

---

## 적용한 디자인 원칙 (촌스러움 회피)

기존 시안에서 했던 것 → 새 시안에서 한 것.

| # | 기존 (촌스러움) | 새 시안 (절제) |
|---|---|---|
| 1 | 골드 그라데이션 (`gold-text`, `shimmer-text`) | **단색 오프화이트** `#ede9de` 한 톤 |
| 2 | 라운드 글로우 + 베이지 베젤 | hairline 보더 (`rgba(237,233,222,0.08)`) |
| 3 | Playfair Display (장식적 세리프) | **Instrument Serif** (에디토리얼) |
| 4 | 한글: Noto Serif KR 일색 | **Noto Serif KR** (헤드라인) + **Noto Sans KR** (본문) |
| 5 | 데코레이션 골드 라인 | **spectrogram hairline** (실제 주파수 패턴 반영) |
| 6 | 다이아몬드(◆), 별표(※) 장식 | **slash(`/`)**, **em-dash(`—`)** 모노스페이스 마커 |
| 7 | "장인의 시간" 같은 감성 카피 | `192 kHz · 24 bit / Dolby Atmos` 같은 **기술 메타** |
| 8 | 이펙트성 호버 (gold sweep) | **밑줄 borderline 변화** (1px → 강조) |

---

## 사운드 → 시각 언어 매핑

스튜디오의 본질을 살리는 핵심. **장식이 아니라 레이아웃 구성요소**로 다룸.

| 사운드 요소 | 사이트의 시각 표현 | 위치 |
|---|---|---|
| **● REC indicator** | blink 애니메이션 vermillion 닷 | Header CTA, Hero 메타 스트립, Studios "On Air", Footer |
| **EQ / 주파수 비주얼라이저** | 64-bar CSS 애니메이션 | `Hero.tsx` 우상단 |
| **웨이브폼 (시간축)** | 결정론적 SVG 파형 (시드 기반) | `Portfolio.tsx` 카드 가운데 |
| **스펙트로그램 (주파수축)** | hairline 그라데이션 패턴 | `Stats.tsx` 하단, CSS `.spectrogram-line` |
| **타임코드** | 모노스페이스 `01:42:18` | `Portfolio.tsx` 카드 메타 |
| **샘플레이트 / 채널** | 모노스페이스 `192 kHz · 24 bit` / `5.1.4` | Hero 메타 스트립, Portfolio 카드 |
| **GPS 좌표** | 모노스페이스 `37.5°N · 127.0°E` | Hero 메타 스트립, Studios 카드 |
| **표준 인증** | 모노스페이스 `ISO 17100` | Hero 메타 스트립, Services |

---

## 컬러 시스템

```
--color-bg         #0a0a0b   cinema black (메인 배경)
--color-bg-elev    #101012   살짝 들어올린 면 (카드, 마키 배경)
--color-ink        #ede9de   따뜻한 오프화이트 (메인 텍스트, paper-feel)
--color-ink-soft   #b6b1a4   서브 텍스트
--color-mute       #6b6863   메타데이터 / 캡션
--color-line       rgba(237,233,222,0.08)   기본 hairline
--color-line-2     rgba(237,233,222,0.18)   강조 hairline
--color-live       #e04b36   ● REC 인디케이터 전용 (절대 다른 곳에 쓰지 않음)
```

**원칙**: 액센트 컬러(`--color-live`)는 "녹음 중"을 알리는 한 가지 의미로만
사용한다. 그 외 모든 강조는 명도 대비(off-white vs mute)로만 처리한다.

---

## 타이포그래피 시스템

```
font-display     Instrument Serif     에디토리얼 디스플레이 (italic 강함)
font-sans        Inter                UI / 본문
font-mono        JetBrains Mono       기술 메타데이터
font-kr          Noto Sans KR         한글 본문
font-kr-display  Noto Serif KR        한글 헤드라인 / 인용
```

**원칙**:
- 큰 헤드라인은 `font-display` + `clamp(2.2rem, 5.4vw, 5rem)`.
- 한 헤드라인 안에서 **딱 한 단어만 italic** — 그 단어가 곧 메시지의 무게중심.
- 모든 메타데이터(연도·좌표·샘플레이트·챕터 마커)는 `font-mono`,
  `tracking-[0.18em]`, `uppercase`, `text-[10px]`로 통일.
- 한글 본문은 항상 `leading-[1.95]` 이상 — 호흡을 줘야 한국어가 럭셔리해진다.

---

## 모션 원칙

- 페이드 업 진입: `cubic-bezier(0.16, 1, 0.3, 1)`, **1s** 가까이 — "느리고 의도적으로".
- 호버 트랜지션: `duration-500 ~ 700` — 짧은 인터랙션도 천천히.
- shimmer / parallax / 화려한 트윈 **없음**.
- 사운드 리액티브 미세 움직임은 **EQ 비주얼라이저 + REC 닷** 단 두 가지뿐.

---

## 다음에 손볼 만한 것

- Hero 배경에 **실제 스튜디오 룸의 흑백 사진**을 매우 어둡게 깔면 무게감이 한 단계 더 올라감.
- Portfolio 썸네일을 그라데이션 대신 **실제 작품 키비주얼의 흑백 처리** 버전으로 교체.
- 폰트 라이선스 여유 시 **PP Editorial New** (Pangram Pangram) 또는
  **GT Sectra** (Grilli Type)로 디스플레이 폰트 업그레이드 — antfood/a24가 쓰는 톤.
- 인터랙티브 사운드 샘플 플레이어(웨이브폼 + 재생 버튼)를 Portfolio 카드에 추가하면
  "사운드 스튜디오"가 진짜 들리는 사이트가 됨.
