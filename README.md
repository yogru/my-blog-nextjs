# 프로젝트 소개
팀 블로그 프론트엔드 서버 입니다. 

# 개발 목표
 - 로직과 뷰를 최대한 분리 
 - 테스트가 쉬운 코드 작성
 - 로직이든 뷰이든 변경 해야할 때, 바로 찾아서 고칠 수 있도록 격리성 높이기

# 실행 스크립트
> npm run dev

# 기술 스택
 - nextJS 
 - ReactJS
 - Mobx
 - Material-ui

# 폴더 구조 
```bash
├── README.md                 - 리드미 파일
├── component                 - 단순 리액트 컴포넌트
├── container                 - mobx store와 컴포넌트 연결 하는 컴포넌트
├── hooks                     - 리액트 훅 관련
├── mobx-store                - mobx store (상태 관리 로직 코드)
├── model                     - 단순 데이터 클래스
├── modules                   - 외부 라이브러리 래핑 클래스
├── pages                     - 실제로 렌더링 되는 NextJS page 
├── public                    - static files   
├── repository                - 서버에서 데이터 가져 오는 repository 코드
├── styles                    - 전역적인 테마, css 관련 폴더
├── tsconfig.json             - 타입 스크립트 설정
└── pakage.json               - 패키지 설정
```


# 추후 개선 사항(예정)
## 테스트 코드 추가
 Mobx Store 로직 및 Modules 래핑 클래스들을 검증 하는 테스트 코드 작성 추가

## 폴더 구조 개선
component, container 구조에서 Cell, Tissue, Organ 으로 3단계로 나누어서 컴포넌트를 구성
