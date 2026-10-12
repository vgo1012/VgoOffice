# GenOffice：EZAIGC Logo 定制版手册

本手册适用于 `D:\code\EOffice` 中的本地定制源码。上游项目为
[genspark-ai/genoffice](https://github.com/genspark-ai/genoffice)，基线提交为
`fc754f7a90619289942602ebcce68bd57a90515c`，定制分支为 `codex/ezaigc-logo`。

本次只替换 EZAIGC Logo 和应用图标，并调整首页 Logo 的显示与可访问名称。
软件名称仍为 **GenOffice**；`EOffice` 是本地目录名。编辑器、文件读写、AI、
登录、云功能、更新配置、许可及原有帮助内容沿用上游实现。

## Logo 来源与维护入口

Logo 来自已有公司项目的
`D:\code\ezaigc-HR\ui\public\assets\ezaigc-logo.png`。
首页使用完整标识；方形应用图标取原图左侧 `222 × 170` 的品牌图形，按既有
favicon 的构图方式生成各尺寸。应用运行时直接使用本仓库资源，不依赖该外部目录。

| 位置                  | 本地文件入口                                                                                                    | 用途                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 首页完整 Logo         | `apps/shell/src/renderer/src/assets/ezaigc-logo.png`                                                            | 首页品牌标识                                   |
| 首页引用与样式        | `apps/shell/src/renderer/src/Home.tsx`、`home.css`                                                              | 引用 PNG；保留原色，取消原单色 Logo 的反色处理 |
| 主应用打包图标        | `apps/shell/build/icon.png`、`icon-mac.png`、`icon.ico`、`icon.icns`、`icons/`                                  | Windows、macOS、Linux 应用图标                 |
| Docs 独立应用打包图标 | `apps/docs/build/icon.png`、`icon.ico`、`icon.icns`                                                             | Docs 独立开发或打包时的应用图标                |
| 渲染页面方形图标      | `apps/shell/src/renderer/src/assets/app-icon.png`、`apps/{docs,sheets,slides}/src/renderer/assets/app-icon.png` | 欢迎页、更新界面等原有图标引用                 |

后续换 Logo 时同时更新完整标识和各尺寸方形图标，保留现有文件名、透明通道、
图标格式及引用关系。文件类型图标、模型服务商标识和文档内容不属于本次修改。

## 本地启动（Windows）

开发环境需要 **Node.js 22.12.0 或更新版本、npm 10 或更新版本**，以及 PATH 中
可调用的 Rust `cargo`。Windows 使用 Rust MSVC 工具链时还需要对应的 Visual
Studio C++ Build Tools 和 Windows SDK。已打包应用的普通使用者无需安装这些开发工具。

以下命令在 PowerShell 中执行。使用 `npm.cmd` 可避免 PowerShell 对 `npm.ps1`
执行策略的限制；每一步成功后再执行下一步。

```powershell
Set-Location -LiteralPath 'D:\code\EOffice'
node --version
npm.cmd --version
cargo --version
npm.cmd install
npm.cmd run native:build -w '@genoffice/sheets'
npm.cmd run dev
```

首次安装会下载依赖和 Electron，首次 Rust 编译也可能耗时。`native:build` 为
Sheets 生成本机 xlsx sidecar；`dev` 启动六个编辑器的开发服务器和统一桌面外壳。
在运行命令的终端按 `Ctrl+C` 停止开发进程。只调试 Docs 时可改用
`npm.cmd run dev:docs`。

开发模式用于本地查看和调试；它不生成安装包。首页 Logo 可在该模式中查看，
安装程序和系统应用图标应使用打包产物检查。

## 日常使用

1. 从首页打开本地文件、选择最近使用的文件，或创建相应类型的新文档。也可把
   本地文件拖入首页。
2. 在对应编辑器中修改内容。Word 使用 Docs，Excel 使用 Sheets，PowerPoint
   使用 Slides；PDF、Markdown 和 HTML 使用各自的编辑器。
3. 通过菜单保存，Windows 可用 `Ctrl+S`。需要保留原文件时选择“另存为”，
   在关闭前处理未保存提示。
4. 打开文档旁的 AI 面板，描述要执行的操作；检查结果，必要时使用该轮操作的
   撤销/回滚入口，再保存。
5. 文件转换使用对应应用的导出入口，例如 PDF 转 Word、Excel 或 PowerPoint，
   Markdown / HTML 导出为 Word。具体能力和示例见[原项目中文说明](README.zh-CN.md)。

表格需要保留公式、格式和多张工作表时保存为 `.xlsx`；CSV 只适合单张表的数据
交换。首次处理重要文件时先用副本，检查导出结果是否满足实际需求。

### AI 设置与费用

AI 使用原有 **设置 → AI**：登录 Genspark，或选择服务商并填写自己的 API
密钥与模型；自定义 OpenAI 兼容接口按原界面填写 Base URL、密钥和模型名称。
网页搜索、图片生成及媒体解析在 **设置 → AI 媒体与搜索** 分别配置。

Logo 定制没有附带公司模型、公司统一登录或额外服务额度。AI、搜索、图片及云
能力的可用性和费用取决于原有账号、所选服务商及其当前套餐；使用前由账号持有者
确认。没有可用凭证时仍可使用本地编辑能力，相关在线请求可能提示登录或配置。

本地打开、编辑、保存和转换沿用原有实现；调用 AI、搜索、媒体解析或云功能时，
相关输入和文档内容是否发往外部取决于所使用的原功能及配置。Logo 定制没有改变
这些数据流。内部文档应按公司对相应服务商的使用规定处理，详情见
[原项目隐私说明](../../PRIVACY.md)。

## Windows x64 安装包

从**仓库根目录**运行完整打包命令。根目录的 `npm run build` 只构建 Docs；
`build:all` 才构建全部编辑器、CLI 和 shell。根目录 `dist:win` 会重新生成
第三方声明、构建全部模块，然后生成 NSIS 安装包。

当前上游 Windows x64 打包配置从
`apps/sheets/native/xlsx-engine/target/x86_64-pc-windows-gnu/release/xlsx-sidecar.exe`
取 sidecar；Windows 默认 MSVC 主机编译通常生成在 `target/release/`。
按上游支持的方式，先编译并将本机 x64 可执行文件暂存到打包读取的目录：

```powershell
Set-Location -LiteralPath 'D:\code\EOffice'
npm.cmd run native:build -w '@genoffice/sheets'
$sidecarStage = 'D:\code\EOffice\apps\sheets\native\xlsx-engine\target\x86_64-pc-windows-gnu\release'
New-Item -ItemType Directory -Path $sidecarStage -Force
Copy-Item -LiteralPath 'D:\code\EOffice\apps\sheets\native\xlsx-engine\target\release\xlsx-sidecar.exe' -Destination $sidecarStage
npm.cmd run dist:win
```

此流程面向 Windows x64 主机和 x64 安装包。暂存目录名不表示 MSVC 二进制被转换
为 GNU；它只满足上游已有资源路径。若修改过 Rust 源码，必须重新编译并重新复制。
ARM64 包应按 `apps/shell/electron-builder.cjs` 的目标配置使用对应架构二进制，
不能复制 x64 sidecar。

默认输出目录为 `apps/shell/release/`，也可由已有 `BUILD_DIR` 环境变量覆盖。
运行生成的 `.exe` 安装程序后，桌面和开始菜单中的名称仍是 GenOffice，图标为
EZAIGC。没有签名凭证时生成未签名包，Windows 可能显示安全提示。

打包环境未注入 `GENOFFICE_UPDATE_URL` 时，上游配置不生成更新源，自动更新保持
关闭；未提供完整 GA4 配置时使用统计不启用。本次没有修改这两项配置。如果公司
后续使用自己的构建环境，应核查实际注入的配置。

### 改动检查

下列为 [CONTRIBUTING.md](../../CONTRIBUTING.md) 规定的验证命令，均在仓库根目录执行。
测试 fixtures 首次生成，以及 docx-engine 改动后需要重新生成。

```powershell
npm.cmd run fixtures
npm.cmd run format
npm.cmd run format:check
npm.cmd run lint
npm.cmd run typecheck
npm.cmd test
npm.cmd run licenses
```

提交后的分支还可运行 `npm.cmd run format:check -- --base origin/main` 检查相对
上游的已提交文件。本手册记录操作方法，不作为这些检查或安装包验收已通过的证明。

交付给员工前，用安装包核查桌面与开始菜单图标、首页 Logo、深浅主题显示，
并打开一份 `.docx`、`.xlsx`、`.pptx` 和 PDF 验证保存；需要 AI 时再验证实际
账号配置。应保留具体运行结果，区分源码构建成功与安装后实际可用。

### 本次交付的验证范围

- 已通过格式检查、ESLint（0 错误，14 项上游警告）、全项目 TypeScript 类型检查、
  主题色检查和生产依赖许可证检查，统一桌面外壳构建成功。
- 在真实 Electron 窗口中确认首页浅色、深色和跟随系统主题的 Logo、首次欢迎页、
  模拟更新窗口中的图标均可加载，软件标题仍为 GenOffice。
- 与基线源码逐文件比较，本次变化仅涉及 25 个 Logo 资源、Logo 引用与显示、
  图标可访问名称和本手册文件，其余已跟踪文件未变。
- `npm.cmd test` 在上游 `electron-utils` 的 7 项测试失败后停止；另行执行 shell
  测试有 783 项通过、20 项失败、3 项跳过。本次出现的失败均在未定制的原版源码
  对照中复现，未修改这些功能或测试以消除失败，完整测试不能视为通过。
- 当前机器未安装可调用的 Rust `cargo`；未执行完整原生构建、安装包制作或
  安装后验收。需要制作 Windows 安装包时，按上文补齐工具链并验证产物。

## 同步上游与保留定制

`origin` 指向原项目。先查看工作区和远端，再获取与比较上游；以下只读取状态和
获取远端提交，不会覆盖工作区文件：

```powershell
Set-Location -LiteralPath 'D:\code\EOffice'
git status --short
git remote -v
git fetch origin
git log --oneline HEAD..origin/main
git diff HEAD...origin/main -- apps/shell/src/renderer/src/Home.tsx apps/shell/src/renderer/src/home.css apps/shell/build apps/docs/build
```

正式合入前保存本地工作并备份分支，在定制分支上审阅上游变化。冲突时逐项保留
上述品牌资源与引用，同时接受经检查的上游功能改动；不要通过整文件覆盖丢掉首页
代码更新。合入后重新运行适用检查、生成各平台安装包并核查 Logo。上游更新器若
被配置为官方渠道，安装官方版本可能覆盖定制资源，需由实际构建配置核实。

## 源码与许可

本项目是 GenOffice 的 Logo 定制版。保留根目录 `LICENSE`、`NOTICE` 及随包的
第三方许可声明，分发时说明这一修改范围；不把上游代码表述为全部自主原创。
`ee/` 的独立许可仍有效，本次不涉及该目录。EZAIGC 标识来自公司已有项目，
维护与使用遵循公司的品牌授权。

更多原有功能、CLI 与 MCP 用法见[中文 README](README.zh-CN.md)，开发及打包约定
见 [CONTRIBUTING.md](../../CONTRIBUTING.md)。
