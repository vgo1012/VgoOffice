<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# 安裝 VgoOffice

[版本發布](https://github.com/vgo1012/VgoOffice/releases) — 選擇發布項目隨附的安裝包。本文不代表 GitHub 已上傳二進位程式；未提供程式碼簽章憑證的本機建置會產生未簽章程式。

## 安裝前確認

本定製版已在 Windows x64 上驗證。macOS 和 Linux 的原始碼目標仍然保留，但尚未驗證本定製版在這些平台的運作。只有發布說明明確支援你的系統時，才使用對應安裝包。

## 安裝與啟動

1. 儲存開啟的辦公檔案，升級前關閉舊版軟體。
2. 執行 Windows .exe 安裝包，完成安裝。
3. 從桌面或開始功能表的捷徑啟動 VgoOffice。

安裝包只需寫入一次資源，日常啟動不再反覆解壓縮免安裝程式。單獨複製 VgoOffice.exe 會缺少編輯器所需資源。

## 升級與偏好設定

升級保留原有 Eoffice 安裝識別和設定目錄。目錄仍叫 Eoffice 是為了相容，屬於正常情況。在「設定 → 一般」選擇淺色、深色或跟隨系統；預設主背景為淺藍灰色。文件內容顏色另行控制。

## 軟體版本與專案

「設定 → 關於」顯示已安裝版本，並提供 VgoOffice 專案連結。專案有幫助時歡迎點 Star。更新是否可用取決於建置設定；無法在軟體內更新時，到專案發布頁查看。

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## 命令列與 AI

相容命令仍叫 genoffice。「設定 → 整合」顯示已安裝路徑和整合設定。使用該路徑執行下方命令，或先將 CLI 加入 PATH。

```sh
genoffice --version
```

本版已移除桌面帳戶登入。設定自己的模型 API、OpenAI 相容介面或已安裝的 Codex CLI。第三方認證和服務費用另行處理；本機編輯不需要 VgoOffice 軟體帳戶。

[整合設定](help://settings-integrations) · [AI 模型](help://ai-models)
