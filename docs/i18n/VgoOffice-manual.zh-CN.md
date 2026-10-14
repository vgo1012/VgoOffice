# VgoOffice 安装版使用手册

本手册适用于公司定制的 **VgoOffice 0.11.2 / Windows x64**。软件基于
GenOffice 的办公编辑器和文件引擎，沿用用户提供的 V Logo 与浅蓝界面。
本版调整了产品名称、账户相关入口，以及 Windows 默认 Office 程序名称的显示。

旧版 [Eoffice 0.11.1 手册](Eoffice-manual.zh-CN.md)保留为历史说明，其中的
账户入口、旧 EXE 名称和验收记录不代表本版行为。

## 安装与启动

本次已生成的 Windows x64 安装包为
`D:\code\EOffice\apps\shell\release\vgooffice\VgoOffice Setup 0.11.2.exe`。
文件大小 **160,265,577 字节，约 153 MiB**，未做代码签名（`NotSigned`）。
SHA-256：`dded400e5837288174bc8c5e77e052b85db517e4bdcf5dde1cb50285ffff25d0`。
本机已于 **2026 年 10 月 14 日**从 Eoffice 原位升级，安装返回 0，
VgoOffice 0.11.2 已正常启动；具体结果见文末的验证记录。

取得本次提供的安装包后，复制到 Windows 10/11 x64 电脑，双击安装，随后从
桌面或开始菜单的 **VgoOffice** 快捷方式启动。普通使用者不需要 Node.js、
Rust、GCC 或项目源码。安装版将资源安装到程序目录，以后直接启动，避免单文件
免安装包每次运行时重新解压和清理资源。

本版继续使用既有安装身份，便于从 Eoffice 升级：

| 项目               | 本版设置                          |
| ------------------ | --------------------------------- |
| 软件与快捷方式名称 | `VgoOffice`                       |
| Windows 程序文件   | `VgoOffice.exe`                   |
| 升级身份           | `com.eoffice.app`                 |
| 既有默认安装目录   | `%LOCALAPPDATA%\Programs\Eoffice` |
| 既有用户配置目录   | `%APPDATA%\Eoffice`               |

自选安装目录的用户以实际目录为准。目录仍叫 `Eoffice` 是为保留升级与配置
连续性；无需手动改名。升级前保存办公文件并关闭旧版，再运行新版安装包。
本次升级已确认原设置、模型配置及主题偏好保留。

安装目录包含六种编辑器、字体、表格原生引擎、PDF 资源、Windows OCR 和 CLI。
分发使用安装包；单独复制 `VgoOffice.exe` 不能替代完整程序目录。卸载入口仍是
Windows「已安装的应用」，本机条目为 **VgoOffice 0.11.2**。

## 界面与设置

- 首页、窗口标题、模块名称、安装程序和快捷方式使用 **VgoOffice**。
- V Logo 保持用户提供的蓝紫渐变和白色 V，图标仅进行标准尺寸及格式转换。
  原图仍位于 `apps/shell/src/renderer/src/assets/eoffice-logo.png`。
- 浅色主背景为 **`#E8EEF7`**，深色为海军蓝。左下角直接点击「设置」，在
  「通用」中选择浅色、深色或跟随系统。「文档主题」单独控制文档页面显示。
  软件背景不会改写文档纸张、Excel 单元格、幻灯片或导出内容的原有颜色。
- 左下角不再是登录或账户菜单；设置中不再提供 Genspark 账户页，首页不再
  提供账户云项目入口。Docs、Sheets、Slides 的 AI 面板不再出现登录按钮。
- 「设置 → 关于」不再显示 GitHub 项目推广行。版本信息及随包的许可声明
  继续用于确认软件版本和开源来源。

Logo 原图 SHA-256：
`915393801df856680e651a87decdf917a26b91d419b23d1dee488c6d2b5d79ba`。
界面颜色集中在 `packages/ui/src/tokens.css`，首页样式在 shell 的 `home.css`。

### Office 默认程序名称

「设置 → 通用 → 设为 Office 文档默认程序」会显示当前默认软件。
本版修复了 Windows 中文注册表名称经过 CP936 输出后出现乱码的问题。
这是名称显示修复，不会替用户更改默认程序。

在 Windows 中点击「打开系统设置」，再由你为所需文件类型选择 VgoOffice。
也可以右键办公文件，使用「打开方式」选择 VgoOffice。本次独立包验收已经
核对五类 Office 文档当前默认程序的中文名称；安装后这五类文件的 UserChoice
仍保持原 WPS／ET／WPP 选择，没有自动改成 VgoOffice。

## 打开、编辑和保存文件

从首页选择「打开本地文件」、最近文件，或拖入本地文件。Word 使用 Docs，
Excel 使用 Sheets，PowerPoint 使用 Slides；PDF、Markdown 和 HTML 使用
对应编辑器。

编辑后用 `Ctrl+S` 保存，需要保留原件时用「另存为」。新建文件的保存目录可在
「设置 → 通用」中选择；未设置时默认使用「文档\VgoOffice」，已有有效设置
优先。表格需要保留公式、格式及多张工作表时使用 `.xlsx`；
CSV 用于单张表的数据交换。

Excel 的数据载入与网格绘制可能先后完成，带冻结窗格和多行文本的文件应等待
画布显示完成。本版独立打包程序已使用真实 Excel 副本回归，全部 288 个非空
单元格与原 OOXML 文本、富文本换行及数值一致，网格可见，原文件哈希未变。
该结果针对本次验收文件，不能推断所有 Excel 文件都已通过兼容性测试。

## AI 与本机 CLI

本地打开、编辑、保存和转换文件不需要 VgoOffice 软件账户。本版不再提供
Genspark 账户登录、账户云项目和依赖该账户的模型或工具入口。

### 自定义接口与服务商密钥

进入「设置 → AI 模型」，选择模型服务商并填写自己的 API Key 和模型。
使用公司网关或 OpenAI 兼容服务时，选择自定义端点，填写 Base URL、密钥和
模型名称，并使用原有连接测试确认配置。搜索、图片生成和媒体解析仍在
「设置 → 生图、媒体与搜索」中按能力配置。

本版使用旧版设置时，原 Genspark 模型选择会改为自定义端点，账户工具会关闭；原来
使用 Genspark 的搜索或媒体能力改用无账户配置项。替代项不附带密钥或额度，
应重新检查模型、搜索和媒体设置。其他已配置的厂商密钥及本机 CLI 配置保留。

调用 AI、搜索或媒体服务时，相关输入可能发送到你配置的服务商，费用、网络
连接和权限取决于相应服务。移除软件登录入口不代表第三方 AI 免费，也不取消
第三方服务的认证要求。内部文档按公司对所选服务的规定处理，详见
[隐私说明](../../PRIVACY.md)。

### 已安装的 Codex CLI

在「设置 → AI 模型」选择 Codex，可留空可执行文件路径自动检测，或指定已有的
本机 CLI。使用原有模型检测和连接测试检查是否可用；CLI 自身所需的认证与
安装由其配置负责，VgoOffice 不提供账户登录替代。

### 技术命令与集成

技术命令继续叫 `genoffice`，环境变量和 MCP 标识保持兼容。在
「设置 → 集成」配置现有 skill、CLI 或 MCP 功能。安装后的 CLI 入口为
`<安装目录>\resources\cli\genoffice.cmd`，会调用当前 VgoOffice 程序。
本机保留的 Eoffice 安装目录下可在 PowerShell 查看版本：

```powershell
& "$env:LOCALAPPDATA\Programs\Eoffice\resources\cli\genoffice.cmd" --version
```

完整命令说明见 [CLI 文档](../../packages/cli/README.md)。

## 来源与许可

VgoOffice 是基于 [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice)
的公司定制版本。随包保留原 `LICENSE`、`NOTICE`、Chromium 许可和第三方声明；
品牌、入口和兼容修复不应表述为全部代码从零自主研发。

仓库 README 中的原版介绍、截图和官方发布链接是上游资料，可能包含本版已移除
的账户功能。安装及使用本定制版以本手册和本次提供的安装包为准。

## 构建与验证记录

源码目录为 `D:\code\EOffice`。开发要求和验证命令见
[CONTRIBUTING.md](../../CONTRIBUTING.md)；普通使用者无需执行构建命令。

2026 年 10 月 14 日，本版完成全量 `build:all` 构建，第三方声明包含
570 个 npm 包和 144 个 Rust crate。全工作区类型检查、源码 lint（0 错误、
14 条原有警告）、当前改动及相对 `origin/main` 的格式检查、主题颜色检查、
21 种语言帮助检查和生产依赖许可检查通过。

本机独立配置、中文及带空格目录中的 **0.11.2 打包程序**验收通过：

- VgoOffice 名称、原 V Logo 及浅色／深色／跟随系统背景正确；新配置在暗色
  系统环境下仍默认浅色，两步引导没有 GitHub 或社区推广。
- 账户、云项目和三种编辑器的登录按钮已移除；首页与编辑器的登录 IPC 禁用，
  测试调用没有打开浏览器。「关于」没有 GitHub 项目推广，AI 设置仍可配置。
- 六种编辑器均显示实际文件。DOCX 编辑保存后重开内容仍在；XLSX 数值和公式
  修改、重算至 11／22、保存与重开通过。真实 Excel 副本的 288 个非空单元格
  与原件内容一致，画布可见。
- 五类 Office 默认程序中文名称显示正确；独立包 CLI 在中文及带空格目录中
  可用。GUI 无未处理页面错误、预加载失败或模块加载失败，验收驱动禁止从
  源码树加载模块。

本机真实升级与启动验收也已完成：

- NSIS 安装返回 0，在
  `C:\Users\zhuoqi\AppData\Local\Programs\Eoffice` 原位更新为 `VgoOffice.exe`，
  文件 ProductVersion 为 `0.11.2.0`。EXE、`app.asar`、表格 sidecar、Windows OCR、
  CLI，以及六个编辑器的 renderer／preload 共 17 个文件哈希与已验收包一致。
- 安装前后 `app-settings.json`、`ai-settings.json`、`recent.json` 和
  `slides-recent.json` 四个配置文件哈希全部保留。首次启动后 AI 设置字节未变，
  应用设置只更新 `cliLink`、`lastRunVersion`、`starPrompt` 三项版本／启动记录；
  其他原设置包括主题保留，仍使用 `%APPDATA%\Eoffice` 数据目录。
- 桌面和开始菜单的 VgoOffice 快捷方式指向新 EXE，旧 Eoffice 快捷方式已移除。
  正常启动没有调试参数，窗口标题为 VgoOffice，本地控制服务就绪且 PID 匹配。
- 实际安装 CLI 与中文、含空格目录中的独立复制 CLI 启动器均输出
  `genoffice 0.11.2`，`genoffice.cmd` 读取 XLSX 成功。安装后五种 Office 文件的
  默认应用选择仍与安装前一致。

独立打包程序的结果与真实安装结果分别记录：

| 验收项目                                                   | 当前状态                   |
| ---------------------------------------------------------- | -------------------------- |
| 0.11.2 安装包生成、文件大小、SHA-256 与签名情况            | 已确认，未签名             |
| 从 Eoffice 升级的安装返回值、版本、快捷方式及真实 EXE 路径 | 本机原位升级已通过         |
| 原用户配置、主题和已有 API/CLI 设置的保留                  | 安装及首次启动检查已通过   |
| 登录／账户／云项目入口移除，设置与 AI 配置仍可操作         | 独立包 GUI 已通过          |
| 六种编辑器显示、DOCX/XLSX 编辑保存重开及真实 Excel 回归    | 独立包已通过               |
| Windows 默认 Office 程序中文名称                           | 五类文档名称已通过         |
| 安装后文件关联与已安装 CLI                                 | 原默认应用保留，CLI 已通过 |
| 格式、类型、lint、主题、帮助语言及许可检查                 | 已通过                     |

新增账户配置 helper 的 4 项测试、shell 本轮定向 98 项及 CLI 代理／新分支
兼容定向 24 项测试通过。**全量测试并非全部通过**：

| 测试范围          | 实际结果与后续检查                                                                                                                            |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 根目录 `npm test` | 在 electron-utils 的 7 项原有失败处停止；此前 250 项通过，后续范围未由该命令执行                                                              |
| shell 全量        | 788 项通过、20 项失败、3 项跳过；原基线有 21 项失败，包含相同的断点下载失败                                                                   |
| ai-provider       | 427 项通过；1 项未改动的 Windows 非法路径用例失败                                                                                             |
| Docs 全量         | 3465 项通过、2 项失败；旧登录断言按本版无登录按钮需求更新后，定向 10 项通过；另一 protect-dialog 并发超时用例重跑通过，不据此宣称全量复跑通过 |
| Sheets            | Rust 244 项全部通过；TypeScript 3392 项通过、2 项未改动的 promote-file-atomically 用例失败、1 项跳过                                          |
| Slides            | 1413 项通过、14 项跳过                                                                                                                        |

独立 GUI 与真实 Excel 的报告分别保存在本地
`.local/vgooffice/runs/2026-10-14T02-13-54-142Z/` 和
`.local/vgooffice/runs/2026-10-14T02-13-07-656Z/`；原始日志、截图和驱动不进入 Git。
安装回执位于 `.local/vgooffice/installation-20261014-101617/receipt.json`；
首次启动配置、启动、已安装 CLI 和文件关联记录分别为同目录上级的
`profile-after-startup.json`、`installed-startup.json`、`installed-cli.json` 和
`installed-office-associations.json`。配置备份含私密凭据，保持本地存放，不进入 Git。

真实付费 AI、联网服务、另一台实体电脑及所有文件格式边界，在没有对应结果前
保持未验证；本机安装与独立包验收不能替代这些范围的验证。
