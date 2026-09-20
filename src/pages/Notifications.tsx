import { Reveal, BellScene, PageTitle } from "../shared";

const notices = [
  {
    tag: "Mới",
    tagBg: "#e2574c",
    date: "18/09/2026",
    title: "Ra mắt bộ “Cổ tích Việt Nam” bản minh hoạ mới",
    text: "20 câu chuyện quen thuộc được vẽ lại rực rỡ, kèm bản nghe kể chuyện cho bé trước giờ ngủ.",
  },
  {
    tag: "Ưu đãi",
    tagBg: "#4caf50",
    date: "15/09/2026",
    title: "Tuần lễ sách thiếu nhi — giảm đến 30%",
    text: "Áp dụng cho hơn 400 đầu sách khoa học và kỹ năng sống, miễn phí gói quà cho đơn từ 200.000₫.",
  },
  {
    tag: "Sự kiện",
    tagBg: "#29abe2",
    date: "09/09/2026",
    title: "Buổi đọc sách cùng tác giả tại Vĩnh Phúc",
    text: "Đăng ký cho bé tham gia buổi giao lưu, tô màu và nhận chữ ký tác giả vào sáng Chủ nhật.",
  },
  {
    tag: "Cập nhật",
    tagBg: "#ef7d2e",
    date: "01/09/2026",
    title: "Giao hàng nhanh trong ngày tại nội thành",
    text: "Đặt trước 15h để nhận sách ngay trong ngày — thêm lựa chọn thiệp viết tay khi thanh toán.",
  },
];

export default function Notifications() {
  return (
    <>
      {/* Page header */}
      <div className="w-full bg-white pb-8 pt-6">
        <div className="mx-auto flex max-w-[1152px] items-center justify-between gap-6 px-5">
          <PageTitle
            title="Thông báo"
            subtitle="Tin sách mới, ưu đãi và sự kiện của Vườn Sách Nhỏ — để bé và ba mẹ không bỏ lỡ điều gì thú vị."
          />
          <BellScene />
        </div>
      </div>

      <section className="w-full border-y-[0.8px] border-[rgba(0,0,0,0.05)] bg-white py-12">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-5 px-5">
          {notices.map((n, i) => (
            <Reveal key={n.title} delay={i * 90}>
              <article className="flex flex-col gap-3 rounded-[24px] border-[1.6px] border-[rgba(0,0,0,0.05)] bg-[#fffdf8] px-7 py-6 drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] sm:flex-row sm:items-start sm:gap-6">
                <div className="flex items-center gap-3 sm:w-[140px] sm:shrink-0 sm:flex-col sm:items-start">
                  <span
                    className="rounded-full px-3 py-[4px] font-['Baloo_2'] font-bold leading-[20px] text-[13px] text-white"
                    style={{ backgroundColor: n.tagBg }}
                  >
                    {n.tag}
                  </span>
                  <span className="font-['Nunito'] font-bold leading-[20px] text-[#8a6a52] text-[13px]">
                    {n.date}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-['Baloo_2'] font-extrabold leading-[30px] text-[#6b4a9e] text-[22px]">
                    {n.title}
                  </h3>
                  <p className="pt-1 font-['Nunito'] leading-[26px] text-[#8a6a52] text-[16px]">
                    {n.text}
                  </p>
                  <button className="press mt-4 w-fit rounded-full bg-[#4caf50] px-6 py-2 font-['Nunito'] font-bold leading-[24px] text-[15px] text-white">
                    Xem chi tiết
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
