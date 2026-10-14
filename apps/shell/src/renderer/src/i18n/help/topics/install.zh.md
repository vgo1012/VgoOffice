<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# 安装 VgoOffice

[版本发布](https://github.com/vgo1012/VgoOffice/releases) — 选择发布条目随附的安装包。本说明不代表 GitHub 上已经上传了二进制程序；没有代码签名凭据的本地构建会生成未签名程序。

## 安装前确认

本定制版已在 Windows x64 上验证。macOS 和 Linux 的源码目标仍然保留，但尚未验证本定制版在这些平台的运行。只有发布说明明确支持你的系统时，才使用对应安装包。

## 安装与启动

1. 保存打开的办公文件，升级前关闭旧版软件。
2. 运行 Windows .exe 安装包，完成安装。
3. 从桌面或开始菜单的快捷方式启动 VgoOffice。

安装包只需写入一次资源，日常启动不再反复解压免安装程序。单独复制 VgoOffice.exe 会缺少编辑器所需资源。

## 升级与偏好设置

升级保留原有 Eoffice 安装身份和配置目录。目录仍叫 Eoffice 是为了兼容，属于正常情况。在「设置 → 通用」选择浅色、深色或跟随系统；默认主背景为浅蓝灰色。文档内容颜色单独控制。

## 软件版本与项目

「设置 → 关于」显示已安装版本，并提供 VgoOffice 项目链接。项目有帮助时欢迎点 Star。更新是否可用取决于构建配置；无法在软件内更新时，到项目发布页查看。

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## 命令行与 AI

兼容命令仍叫 genoffice。「设置 → 集成」显示已安装路径和集成配置。使用该路径运行下方命令，或先将 CLI 添加到 PATH。

```sh
genoffice --version
```

本版已移除桌面账户登录。配置自己的模型 API、OpenAI 兼容接口或已安装的 Codex CLI。第三方认证和服务费用单独处理；本地编辑不需要 VgoOffice 软件账户。

[集成设置](help://settings-integrations) · [AI 模型](help://ai-models)
