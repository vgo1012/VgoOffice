<!-- Modified for VgoOffice (https://github.com/vgo1012/VgoOffice); see MODIFICATIONS.md. -->

# Cài đặt VgoOffice

[Bản phát hành](https://github.com/vgo1012/VgoOffice/releases) — Dùng trình cài đặt đính kèm bản phát hành. Trang này không có nghĩa là đã công bố tệp nhị phân trên GitHub. Bản dựng cục bộ không được ký nếu không cung cấp thông tin ký mã.

## Trước khi cài đặt

Phiên bản này đã được kiểm tra trên Windows x64. Các mục tiêu macOS và Linux vẫn được giữ trong mã nguồn, nhưng phiên bản này chưa được xác minh ở đó. Chỉ chọn gói khi bản phát hành nêu rõ hỗ trợ hệ điều hành của bạn.

## Cài đặt và khởi chạy

1. Lưu tài liệu đang mở và đóng phiên bản cũ trước khi nâng cấp.
2. Chạy trình cài đặt .exe của Windows đến khi hoàn tất.
3. Khởi chạy VgoOffice từ lối tắt trên màn hình hoặc menu Bắt đầu.

Trình cài đặt lưu tài nguyên một lần, tránh giải nén chương trình di động mỗi lần khởi chạy. Chỉ sao chép VgoOffice.exe sẽ thiếu tài nguyên của các trình biên tập.

## Nâng cấp và tùy chọn

Nâng cấp giữ định danh cài đặt và thư mục hồ sơ Eoffice hiện có. Tên thư mục Eoffice là bình thường để duy trì tương thích. Trong Cài đặt → Chung, chọn sáng, tối hoặc theo hệ thống; nền mặc định là xanh xám nhạt. Màu tài liệu được điều khiển riêng.

## Phiên bản và dự án

Cài đặt → Giới thiệu hiển thị phiên bản và liên kết VgoOffice. Hãy tặng kho mã một Star nếu hữu ích. Cập nhật phụ thuộc cấu hình bản dựng; xem trang phát hành nếu không có cập nhật trong ứng dụng.

[VgoOffice · Star](https://github.com/vgo1012/VgoOffice)

## Dòng lệnh và AI

Lệnh tương thích vẫn là genoffice. Cài đặt → Tích hợp hiển thị đường dẫn và cấu hình. Chạy lệnh dưới qua đường dẫn đó hoặc sau khi thêm CLI vào PATH.

```sh
genoffice --version
```

Đăng nhập tài khoản ứng dụng đã bị loại bỏ. Cấu hình API mô hình của bạn, điểm cuối tương thích OpenAI hoặc Codex CLI đã cài. Xác thực và phí bên thứ ba vẫn độc lập; chỉnh sửa cục bộ không cần tài khoản VgoOffice.

[Cài đặt tích hợp](help://settings-integrations) · [Mô hình AI](help://ai-models)
