# VgoOffice 安装与使用

本指南介绍 VgoOffice Windows 版。文档、表格、演示、PDF、Markdown 和 HTML
共用一个桌面软件，本地打开、编辑、保存和转换不需要软件账户。

## 安装与更新

从 [VgoOffice Releases](https://github.com/vgo1012/VgoOffice/releases) 选择
已发布的 Windows x64 安装程序。尚无发布资产时，需要按仓库 README 从源码构建；
本机生成的安装包不会因为提交源码而自动上传到 GitHub。

双击 `VgoOffice Setup <版本>.exe`，安装后从桌面或开始菜单启动 VgoOffice。
普通使用者无需另装 Node.js、Rust 或表格引擎。安装版把资源保存在安装目录中，
后续启动无需每次重新解压整个程序。

升级前保存文档并正常关闭旧版。Windows 升级身份仍为 `com.eoffice.app`，已有
Eoffice 安装可以继续位于 `%LOCALAPPDATA%\Programs\Eoffice`，程序名是
`VgoOffice.exe`，原配置仍位于 `%APPDATA%\Eoffice`。新装或自选目录以实际安装
位置为准。保留这些技术目录是为了沿用设置，无需手动改名。

## 界面与项目链接

- 应用名称为 VgoOffice，使用 V Logo 和浅蓝背景。
- 在「设置 → 通用 → 主题」选择浅色、深色或跟随系统。
- 本版已移除软件账户登录、账户云项目与编辑器登录按钮。
- 「设置 → 关于」显示版本和 VgoOffice 项目链接。点击「去 GitHub 点 Star」
  会打开 [项目仓库](https://github.com/vgo1012/VgoOffice)，由你在 GitHub 上决定
  是否点 Star；软件不会自动操作你的 GitHub 账户。
- Windows 默认 Office 程序名称使用 Unicode 读取，避免中文乱码。更改默认
  应用时仍通过 Windows 系统设置完成。

## 文件编辑

在首页选择「打开本地文件」，或将文件拖入窗口。Word、Excel、PowerPoint、
PDF、Markdown 和 HTML 编辑器均随安装包提供。编辑后使用 `Ctrl+S` 保存，保留
原件时选择另存为。默认保存目录可在「设置 → 通用」更改。

表格的内容导入与网格绘制可能先后完成，带冻结窗格或多行文本的文件应等待画布
显示稳定。此前 0.11.2 的本机验收核对过真实工作簿的 288 个非空单元格，并验证
DOCX/XLSX 编辑保存和重新打开；这不能代表所有文件格式边界都已通过。

## AI 与集成

在「设置 → AI 模型」配置自己的服务商密钥、模型或 OpenAI 兼容端点；本机模型
服务是否需要密钥由服务配置决定。已安装的 Codex CLI 可使用其既有配置，CLI
自身的认证由它负责。搜索、图片与媒体解析在「生图、媒体与搜索」中配置。

AI 请求可能将提示词、选中内容或引用文件发送到所选服务商，费用和权限取决于
对应服务。软件账户移除不代表第三方 AI 免费。配置与备份应保持私密，详见
[隐私说明](../../PRIVACY.md)。

技术命令仍叫 `genoffice`，环境变量与 MCP 标识保持兼容。「设置 → 集成」可以
配置 CLI、MCP 和随包的 agent skill。Windows 入口为安装目录中的
`resources\cli\genoffice.cmd`，命令说明见 [CLI 文档](../../packages/cli/README.md)。

## 来源与验证范围

VgoOffice 是基于 [GenOffice 开源核心](https://github.com/genspark-ai/genoffice)
的修改版本，保留原 LICENSE、NOTICE、字体及第三方许可。具体改动见
[修改说明](../../MODIFICATIONS.md)。当前实际安装与 GUI 验证范围为 Windows
x64；其它平台的源码支持不等于已完成对应实机验收。

完整测试存在已记录的 Windows 路径、权限、符号链接和请求行为失败，不能宣称
全量套件通过。真实付费 AI、另一台实体电脑及所有文件兼容边界保持未验证。
一次性验收日志、截图、个人文件和配置备份只保存在本地，不进入项目发布。
