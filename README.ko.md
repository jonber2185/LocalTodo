# Todo Planner

> 날짜별로 할 일을 관리하는 달력 기반 투두 앱 — 어느 날에 일정이 있는지 한눈에 확인하고 스케줄을 정리하세요.

[English](README.md)

![메인](./images/main.png)

---

## 기능

- **달력 뷰** — 투두가 있는 날짜에 점 표시가 있는 월간 달력
- **날짜별 투두** — 원하는 날짜를 선택해 해당 날의 할 일 확인 및 관리
- **투두 추가** — 입력 후 Enter 또는 `+` 버튼으로 추가
- **완료 처리** — 항목 클릭으로 완료/미완료 토글
- **투두 삭제** — 항목별 개별 삭제
- **영구 저장** — localStorage에 저장되어 새로고침 후에도 유지

## 스크린샷

### 투두 표시가 있는 달력

![달력](./images/calendar.png)

투두가 있는 날짜에 점이 표시되어 바쁜 날을 한눈에 확인할 수 있습니다.

### 투두 관리

![투두 목록](./images/todolist.png)

달력에서 날짜를 선택하면 해당 날의 할 일을 조회, 추가, 완료, 삭제할 수 있습니다.

## 기술 스택

| 레이어 | 기술 |
|---|---|
| 언어 | TypeScript |
| UI 프레임워크 | React |
| 빌드 도구 | Vite |
| 달력 | [react-calendar](https://github.com/wojtekmaj/react-calendar) |
| 스타일링 | CSS Modules |
| 저장소 | localStorage |

## 시작하기

### 요구사항

- Node.js
- npm

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

## 배포

이 프로젝트는 [Vercel](https://vercel.com/) 배포를 위한 [vercel.json](vercel.json)을 포함하고 있습니다.