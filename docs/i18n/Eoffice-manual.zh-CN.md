# Eoffice 安装版使用手册

本手册适用于公司定制的 **Eoffice 0.11.1 / Windows x64**。软件沿用
GenOffice 的办公编辑器、文件读写和 AI 逻辑，使用新 V Logo 和蓝色界面背景。
旧 EZAIGC Logo 版及其免安装包的说明保留在历史手册中。

## 安装与启动

安装文件：`D:\code\EOffice\apps\shell\release\eoffice-light\Eoffice Setup 0.11.1.exe`。
安装包 160,276,080 字节，约 153 MiB。把这个文件复制到其他 Windows 10/11
x64 电脑，双击安装，可选择安装目录；随后从桌面或开始菜单的 **Eoffice**
快捷方式启动。普通使用者无需安装 Node.js、Rust、GCC 或复制源码。

本机原 0.11.0 已安装到 `C:\Users\zhuoqi\AppData\Local\Programs\Eoffice`，桌面及
开始菜单快捷方式指向该目录的 `Eoffice.exe`。更新时先保存文件并关闭 Eoffice，
再运行 0.11.1 安装包。此次没有覆盖当前运行中的旧版；新版程序资源已从完整
打包目录独立运行验收。可在 Windows「已安装的应用」中
卸载。软件包完整包含六种编辑器、字体、表格原生引擎、PDF WASM、Windows OCR
及 CLI；不要只复制安装目录中的 `Eoffice.exe`，它需要同目录的程序资源。

程序仅在安装时解压资源，以后启动直接运行安装目录中的软件。原单文件免安装
包每次运行释放约 591 MiB、2854 个文件，退出时再清理，造成额外等待。
本机同一运行时的 `--version` 对照为直接运行 0.334 秒、旧包装器 28.628 秒；
该对照包含包装器解压及退出清理，不能当作首页启动耗时。
此前安装版带自动化连接的独立配置测试中，首页约 4.8 秒可用。0.11.1 打包程序
首启测试含自动化连接及两步引导操作，约 5.2 秒进入首页。机器配置、磁盘和
安全软件会影响实际速度，打开文档也需另行载入。

本次生成的安装包未做代码签名。AI 功能仍需要原服务支持的账号或 API 密钥；
完整打包不包含第三方服务额度。本机验证平台为 Windows 11 x64，尚未在另一台
实体电脑上验收，也未生成 Windows ARM64、macOS 或 Linux 的本次安装包。

## 界面与品牌

- 首页、窗口标题、六个模块名称、安装程序和快捷方式使用 **Eoffice**。
- Logo 使用用户提供的原始 PNG，蓝紫渐变及白色 V 保持原样；应用图标仅做尺寸
  缩放和 PNG/ICO/ICNS 格式转换。
- 浅色主背景使用用户色块的浅蓝灰 **`#E8EEF7`**，深色界面保留深海蓝。
  从左下角头像菜单打开「设置 → 常规 → 主题」，可选浅色、深色或跟随系统。
  没有设置过主题的用户默认浅色；已手动保存的主题选择会保留。希望背景更亮时
  选择「浅色」，「文档主题」只控制文档页面，和软件背景主题是两项设置。
- 首次引导缩短为两步软件介绍与使用提示，移除 GitHub 点赞和社区推广；首页
  不再出现 GitHub 点赞弹窗。源码与许可归属仍保留在设置和随包声明中。
- 蓝色用于侧栏、背景、工具栏、对话框和 AI 面板。文档纸张、Excel 单元格的
  填充及文字颜色、幻灯片和导出内容保留文档本身的颜色。

首页原图资产：`apps/shell/src/renderer/src/assets/eoffice-logo.png`，1254 × 1254。
SHA-256：`915393801df856680e651a87decdf917a26b91d419b23d1dee488c6d2b5d79ba`。
界面配色集中在 `packages/ui/src/tokens.css`，首页样式在 shell 的 `home.css`，
窗口标题栏和标签栏也已使用同一组蓝色。

## 打开、编辑和保存文件

从首页选择「打开本地文件」，或使用 Windows 的「打开方式 → Eoffice」。
Word、Excel、PowerPoint、PDF、Markdown、HTML 编辑器均已包含。
保存、另存为、自动保存、AI 编辑和转换沿用原来的操作方式。
新建文档的默认保存目录为「文档\Eoffice」；用户在设置中选择的目录优先。

Eoffice 使用独立的用户配置目录。原 GenOffice 的文件和账号设置没有自动迁移；
需要时在 Eoffice 中重新选择保存目录或登录。原来保存的办公文件仍可直接打开。

Excel 首次载入包含冻结窗格、多行文字的文件时，数据载入与画布绘制可能不同时
完成，应等待排版绘制结束。安装版已自带 `xlsx-sidecar.exe`，无需安装表格引擎。
本次用「待招聘岗位JD补充.xlsx」的副本验证了全部 288 个非空单元格，富文本、
换行及数值与原件一致，画布可见，原文件哈希未改变。这个结果只针对本次验收
的文件，不能推断所有 Excel 文件都没有兼容问题。

## AI、CLI 与来源说明

在软件设置中选择模型服务、登录账号或配置 API 地址和密钥。本次品牌定制没有
替换认证、模型调用、云功能或搜索接口。无账号时仍可进行本地文档编辑；联网
功能取决于所选服务、网络连接和账号权限。

供开发者使用的技术命令继续叫 `genoffice`，协议、环境变量和 MCP 标识保持
兼容。安装后的命令入口为 `<安装目录>\resources\cli\genoffice.cmd`。
Windows 启动器优先运行 `Eoffice.exe` 并保留原 `GenOffice.exe` 兼容分支；
软件内的 MCP 配置使用当前真实 EXE 路径，因此可选择带空格的安装目录。

Eoffice 是基于 [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice)
的公司定制版本。随包保留原 `LICENSE`、`NOTICE`、Chromium 许可和第三方声明。
设置中的开源来源、Genspark 等真实服务名以及原版安装参考文章保留其准确含义；
这些不代表本次定制包使用原版签名、下载地址或自动更新服务。

## 构建与验证记录

源码目录：`D:\code\EOffice`。本次未增加 npm 依赖，原生表格引擎和 OCR 源码未变。
完整前端构建通过，第三方声明包含 570 个 npm 包和 144 个 Rust crate。
本机打包使用已配置的本地 GNU 工具链；开发构建步骤如下，普通使用者不需要执行：

```powershell
. .local/packaging/env.ps1
npm.cmd run notices
npm.cmd run build:all
$env:CSC_IDENTITY_AUTO_DISCOVERY='false'
$env:BUILD_DIR='release/eoffice-light'
Push-Location apps/shell
../../node_modules/.bin/electron-builder.cmd --win nsis --x64 --publish never --config electron-builder.cjs --config.electronDist=D:/code/EOffice/node_modules/electron/dist --config.extraMetadata.version=0.11.1
Pop-Location
```

本次验收：

- 0.11.0 的实际 NSIS 安装退出码为 0，卸载项、桌面和开始菜单快捷方式存在。
  0.11.1 NSIS 构建通过，沿用同一安装配置；未在用户程序运行时执行升级安装。
- 0.11.1 完整打包程序使用独立测试配置，六种文件均打开并显示；DOCX 编辑保存后重开
  内容仍在，XLSX 数值与公式编辑、重算、保存和重开均通过。
- 浅色、深色、跟随系统三种背景及原 Logo 已实际检查；未保存主题的测试配置在
  初始暗色渲染状态下仍选择浅色。两步引导没有 GitHub/社区推广，完成标志与
  浅色偏好在重启后保留。84 组文字/按钮对比度检查最低为 4.57:1。
  GUI 验收无未处理页面
  错误、预加载失败或模块加载失败；源代码目录的模块依赖被测试驱动明确禁止。
- 中文及带空格目录中的实际打包 CLI 启动器能够显示版本并读取 XLSX。
- 此前全工作区类型检查及本次受影响的 shell 类型检查、源码 ESLint
  （0 错误、14 条原有警告）、格式检查、主题
  颜色检查和生产依赖许可检查通过。名称、标题栏颜色及新 CLI 分支的定向测试
  通过；未修改原有失败断言来取得通过结果。

全量单元测试不是全部通过：`npm test` 在 electron-utils 的 7 项原有失败处
停止（250 项通过）；本次 shell 全量为 785 项通过、19 项原有失败、3 项跳过。
CLI 涉及文件的前后对照保留相同 9 项原有失败及 1 个未处理错误，通过项由
40 增至 44。这些失败涉及 Windows 下的 POSIX 路径/权限/符号链接假设、命名
管道冲突及既有错误码/请求行为，已有基线记录，不能宣称全测试套件通过。
shell 的断点续下载并发用例此前在基线中失败，本次通过；本次未改动其实现或断言。
未变更的原生表格引擎沿用此前 244 项通过证据，Windows OCR 沿用此前中英文
识别验收；真实付费 AI、联网服务和所有文件格式边界本次未逐一验证。

本次原始日志、截图和验收驱动保存在本地 `.local/eoffice-light/`；此前证据保存在
`.local/eoffice-installer/`，均不进入 Git。安装包与 SHA-256 校验文件保存在
`apps/shell/release/eoffice-light/`，不进入 Git。
安装包 SHA-256：
`fb2374688126f70f8e9be97c2fb856b479db89006f9da626e62ce06ac87fbfd5`。
