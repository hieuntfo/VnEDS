import {
  AlertTriangle,
  Target,
  Layers,
  LayoutTemplate,
  FileJson,
  Users,
  ShieldCheck,
} from "lucide-react";

export function OverviewView() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-12">
      <header className="mb-8">
        <h1 className="text-4xl font-heading italic text-gray-900 leading-none">
          Design System Manifesto
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Chiến lược chuẩn hoá hiển thị & UI Components cho dự án Báo điện tử.
        </p>
      </header>

      {/* 1. Pain Points */}
      <section className="bg-red-50 border border-red-100 rounded-2xl p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-red-100 p-4 rounded-full h-fit shrink-0">
            <AlertTriangle className="text-red-700 w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-red-900 mb-4 uppercase tracking-wide">
              1. Thực trạng & Pain Points (10 năm qua)
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-red-900 text-sm leading-relaxed">
              <div className="bg-white/60 p-5 rounded-xl border border-red-200 shadow-sm">
                <span className="block font-bold text-base mb-1">
                  Lỗi hiển thị hàng loạt
                </span>
                Thường xuyên gặp lỗi sai font chữ, line-height, màu sắc, cấu
                trúc lặp đi lặp lại.
              </div>
              <div className="bg-white/60 p-5 rounded-xl border border-red-200 shadow-sm">
                <span className="block font-bold text-base mb-1">
                  Thiếu nhất quán, mạnh ai nấy làm
                </span>
                Tự sáng tạo hoặc copy rồi tự sửa, dẫn đến hiển thị không đồng
                nhất trên các trang.
              </div>
              <div className="bg-white/60 p-5 rounded-xl border border-red-200 shadow-sm">
                <span className="block font-bold text-base mb-1">
                  Quản lý file lộn xộn
                </span>
                Tên frame chưa chuyển đổi chuẩn, các file cũ không có tính ứng
                dụng cao.
              </div>
              <div className="bg-white/60 p-5 rounded-xl border border-red-200 shadow-sm">
                <span className="block font-bold text-base mb-1">
                  Hạn chế kỹ thuật
                </span>
                Đội dev lại phải code lại một bộ riêng cho từng landing page,
                khó kiểm soát và bảo trì.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mục tiêu */}
      <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-blue-50 p-4 rounded-full h-fit shrink-0">
            <Target className="text-blue-600 w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              2. Phạm vi & Mục tiêu cốt lõi
            </h2>
            <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed">
              <div className="flex gap-3 items-start">
                <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold mt-0.5">
                  Phạm vi
                </div>
                <p>
                  Tạm thời chỉ tập trung chuẩn hóa các{" "}
                  <strong className="text-gray-900 bg-blue-50 px-1 rounded">
                    Landing Page thuần tin tức
                  </strong>{" "}
                  (ví dụ: sự kiện thời sự). Bỏ qua các landing page đặc thù,
                  nặng tính sáng tạo và ít tin tức (Teck Awards, Car Awards) để
                  designers thoải mái sáng tạo.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold mt-0.5">
                  Mục tiêu
                </div>
                <p>
                  Tạo ra một nguồn dữ liệu{" "}
                  <strong className="text-gray-900">
                    Single Source of Truth
                  </strong>
                  . Nếu có thay đổi, chỉ cần cập nhật ở một nơi và áp dụng cho
                  toàn bộ dự án, giảm thiểu sai sót và tăng tốc độ triển khai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3 Trụ cột */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading flex items-center gap-2">
          3 Trụ Cột Của Hệ Thống Mới
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:border-[#9F224E] transition-colors group">
            <Layers className="text-[#9F224E] w-10 h-10 mb-6 group-hover:scale-110 transition-transform origin-left" />
            <h3 className="font-bold text-xl text-gray-900 mb-3 block">
              Phần 1: Components (Thành phần)
            </h3>
            <p className="text-sm text-gray-600 mb-5">
              Liệt kê đầy đủ danh sách component & states.
            </p>
            <ul className="text-[13px] text-gray-600 space-y-3 list-disc pl-4 marker:text-gray-300">
              <li>
                <strong className="text-gray-900 block mb-0.5">
                  Component Tĩnh:
                </strong>{" "}
                Những block không đổi (footer, list tin, comment).
              </li>
              <li>
                <strong className="text-gray-900 block mb-0.5">
                  Component Cắm Slot (Linh hoạt):
                </strong>{" "}
                Header cho phép thay đổi BG, logo, text menu mà không hỏng bản
                gốc.
              </li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:border-[#9F224E] transition-colors group">
            <LayoutTemplate className="text-[#9F224E] w-10 h-10 mb-6 group-hover:scale-110 transition-transform origin-left" />
            <h3 className="font-bold text-xl text-gray-900 mb-3 block">
              Phần 2: Templates (Cấu trúc Layout)
            </h3>
            <p className="text-sm text-gray-600 mb-5">
              Bộ khung chuẩn mực (4 thẻ nhỏ, 1 to 3 nhỏ) để tránh tự chế.
            </p>
            <ul className="text-[13px] text-gray-600 space-y-3 list-disc pl-4 marker:text-gray-300">
              <li>Bảo vệ nguyên vẹn cấu trúc lưới từ Design → Dev.</li>
              <li>
                <strong className="text-gray-900">Mục đích sâu xa:</strong> Đo
                lường dữ liệu CTR/Pageview thực tế từ đó tư vấn ngược lại cho
                Ban Nội dung format tối ưu.
              </li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:border-[#9F224E] transition-colors group">
            <FileJson className="text-[#9F224E] w-10 h-10 mb-6 group-hover:scale-110 transition-transform origin-left" />
            <h3 className="font-bold text-xl text-gray-900 mb-3 block">
              Phần 3: Specs & Style Guide
            </h3>
            <p className="text-sm text-gray-600 mb-5">
              Xây dựng quy chuẩn kỹ thuật tập trung.
            </p>
            <ul className="text-[13px] text-gray-600 space-y-3 list-disc pl-4 marker:text-gray-300">
              <li>
                Mô tả Specs cực detail bằng Annotation Figma. Hiểu rõ cơ chế đổ
                data rỗng/tràn.
              </li>
              <li>
                <strong className="text-gray-900">Quy định cấm:</strong> Tự ý
                đổi font body, đổi line-height,... Mọi thay đổi ngoại lệ cần
                thông qua Gatekeeper.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Cam kết */}
      <section className="bg-gradient-to-r from-[#FFE7E9] to-[#FFF1F2] border border-[#9F224E]/30 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm">
        <ShieldCheck className="text-[#9F224E] w-16 h-16 shrink-0" />
        <div>
          <h2 className="text-[#9F224E] font-bold text-xl uppercase tracking-widest mb-3">
            4. Lời Kết & Cam Kết
          </h2>
          <p className="text-gray-800 text-[15px] leading-relaxed">
            Đây là lần chuẩn hóa mang tính{" "}
            <strong className="text-[#9F224E]">dứt điểm</strong> để xử lý lỗi 10
            năm qua. Từ nay về sau, nếu chuẩn hóa xong & giao Spec chuẩn mà Web
            vẫn lỗi:{" "}
            <strong className="text-red-600 underline underline-offset-4 decoration-red-200">
              Đó là lỗi của Kỹ Thuật (Dev)
            </strong>
            . Thiết kế hết trách nhiệm khi đã chốt Base chuẩn. Ai không tuân thủ
            áp dụng File mới chuẩn &rarr;{" "}
            <strong className="text-gray-900">Phải tự chịu trách nhiệm!</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
