<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# VgoOffice 설치

[릴리스](https://github.com/vgo1012/VgoOffice/releases) — 릴리스에 첨부된 설치 파일을 사용하세요. 이 문서가 GitHub에 바이너리 파일이 이미 공개되었음을 의미하지는 않습니다. 서명 자격 증명을 제공하지 않은 로컬 빌드는 서명되지 않습니다.

## 설치 전 확인

이 버전은 Windows x64에서 검증했습니다. macOS와 Linux 소스 대상은 유지하지만 해당 플랫폼에서 이 버전을 검증하지 않았습니다. 릴리스가 운영 체제 지원을 명시할 때만 해당 패키지를 선택하세요.

## 설치와 실행

1. 열린 문서를 저장하고 업데이트 전에 이전 버전을 닫으세요.
2. Windows .exe 설치 파일을 실행해 설치를 완료하세요.
3. 바탕 화면 또는 시작 메뉴의 바로 가기로 VgoOffice를 실행하세요.

설치 프로그램은 리소스를 한 번 저장하므로 매번 휴대용 실행 파일을 풀 필요가 없습니다. VgoOffice.exe만 복사하면 편집기에 필요한 리소스가 빠집니다.

## 업데이트와 환경 설정

업데이트는 기존 Eoffice 설치 식별자와 프로필 폴더를 유지합니다. 호환성을 위해 폴더 이름이 Eoffice로 남는 것은 정상입니다. 설정 → 일반에서 밝게, 어둡게 또는 시스템 모드를 선택하세요. 기본 배경은 밝은 청회색이며 문서 색상은 별도로 제어합니다.

## 버전과 프로젝트

설정 → 정보에서 설치된 버전과 VgoOffice 프로젝트 링크를 확인할 수 있습니다. 도움이 된다면 저장소에 Star를 주세요. 업데이트는 빌드 구성에 따라 제공됩니다. 앱 업데이트가 없으면 프로젝트 릴리스 페이지를 확인하세요.

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## 명령줄과 AI

호환 명령은 genoffice로 유지됩니다. 설정 → 통합에서 설치 경로와 구성을 확인하세요. 해당 경로로 아래 명령을 실행하거나 CLI를 PATH에 추가한 뒤 실행하세요.

```sh
genoffice --version
```

앱 계정 로그인은 제거되었습니다. 모델 API, OpenAI 호환 엔드포인트 또는 설치된 Codex CLI를 직접 구성하세요. 외부 서비스 인증과 비용은 별도로 처리되며 로컬 편집에는 VgoOffice 계정이 필요하지 않습니다.

[통합 설정](help://settings-integrations) · [AI 모델](help://ai-models)
