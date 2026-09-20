import { Reveal, SupportScene, PageTitle } from "../shared";

const faqs = [
  {
    q: "Làm sao để chọn sách phù hợp độ tuổi của bé?",
    a: "Mỗi cuốn sách đều có gợi ý độ tuổi ở góc bìa. Bạn cũng có thể lọc theo nhóm tuổi 0–5, 6–10, 11–15 ở trang “Tất cả sách”.",
    bg: "#4caf50",
  },
  {
    q: "Sách có gắn biểu tượng “e” nghĩa là gì?",
    a: "Đó là sách đi kèm bản nghe kể chuyện. Bé có thể vừa nghe vừa lật trang, rất hợp để làm quen với việc đọc.",
    bg: "#29abe2",
  },
  {
    q: "Phí vận chuyển và thời gian giao hàng thế nào?",
    a: "Miễn phí vận chuyển cho đơn từ 200.000₫. Nội thành đặt trước 15h được giao ngay trong ngày, các tỉnh nhận sau 2–3 ngày.",
    bg: "#ef7d2e",
  },
  {
    q: "Bé không thích sách thì có đổi trả được không?",
    a: "Bạn có thể đổi trả trong 7 ngày nếu sách còn nguyên vẹn. Chúng tôi luôn sẵn lòng gợi ý cuốn khác hợp với bé hơn.",
    bg: "#bf4599",
  },
];

const channels = [
  { emoji: "💬", label: "Chat Zalo", note: "8:00 – 21:00 mỗi ngày", bg: "#29abe2" },
  { emoji: "📞", label: "Hotline 1900 xxxx", note: "Miễn phí trong giờ hành chính", bg: "#4caf50" },
  { emoji: "✉️", label: "hotro@vuonsachnho.vn", note: "Phản hồi trong 24 giờ", bg: "#ef7d2e" },
];

export default function Support() {
  return (
    <>
      {/* Page header */}
      <div className="w-full bg-white pb-8 pt-6">
        <div className="mx-auto flex max-w-[1152px] items-center justify-between gap-6 px-5">
          <PageTitle
            title="Hỗ trợ"
            subtitle="Có câu hỏi về sách, đơn hàng hay cách đọc cùng bé? Đội ngũ Vườn Sách Nhỏ luôn ở đây để giúp bạn."
          />
          <SupportScene />
        </div>
      </div>

      {/* Contact channels */}
      <section className="w-full border-t-[0.8px] border-[rgba(0,0,0,0.05)] bg-white py-12">
        <div className="mx-auto max-w-[1152px] px-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 90}>
                <div
                  className="cat-card flex items-center gap-4 rounded-[16px] px-5 py-4 drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)]"
                  style={{ backgroundColor: c.bg }}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.25)]">
                    <span className="text-[24px] leading-[32px]">{c.emoji}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-['Baloo_2'] font-extrabold leading-[26px] text-[17px] text-white">
                      {c.label}
                    </p>
                    <p className="font-['Baloo_2'] font-bold leading-[20px] text-[13px] text-[rgba(255,255,255,0.85)]">
                      {c.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full border-y-[0.8px] border-[rgba(0,0,0,0.05)] bg-white pb-12">
        <div className="mx-auto max-w-[1152px] px-5">
          <h2 className="font-['Baloo_2'] font-extrabold leading-[40px] text-[#4a9e6d] text-[32px]">
            Câu hỏi thường gặp
          </h2>
          <div className="grid grid-cols-1 gap-5 pt-8 md:grid-cols-2">
            {faqs.map((f, i) => (
              <Reveal
                key={f.q}
                delay={i * 90}
                className="rounded-[24px] border-[1.6px] border-[rgba(0,0,0,0.05)] bg-[#fffdf8] p-6 drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="mt-[2px] flex size-7 shrink-0 items-center justify-center rounded-full font-['Baloo_2'] font-extrabold text-[15px] text-white"
                    style={{ backgroundColor: f.bg }}
                  >
                    ?
                  </span>
                  <h3 className="font-['Baloo_2'] font-extrabold leading-[28px] text-[#6b4a9e] text-[19px]">
                    {f.q}
                  </h3>
                </div>
                <p className="pt-3 font-['Nunito'] leading-[26px] text-[#8a6a52] text-[16px]">
                  {f.a}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="mx-auto w-full max-w-[1152px] px-5 py-14">
        <div className="rounded-[32px] bg-[#4caf50] p-10 drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)]">
          <h2 className="font-['Baloo_2'] font-extrabold leading-[45px] text-[32px] text-white">
            Gửi câu hỏi cho chúng tôi
          </h2>
          <p className="max-w-[520px] pt-2 font-['Nunito'] leading-[24px] text-[16px] text-[rgba(255,255,255,0.9)]">
            Để lại lời nhắn, đội ngũ Vườn Sách Nhỏ sẽ phản hồi bạn trong thời gian sớm nhất.
          </p>
          <form className="grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2">
            <input
              type="text"
              aria-label="Họ và tên"
              placeholder="Họ và tên"
              className="h-[52px] w-full rounded-[16px] border-[1.6px] border-transparent bg-white px-5 font-['Nunito'] font-semibold text-[16px] text-[#4a4038] outline-none placeholder:text-[rgba(74,64,56,0.5)]"
            />
            <input
              type="email"
              aria-label="Email liên hệ"
              placeholder="Email liên hệ"
              className="h-[52px] w-full rounded-[16px] border-[1.6px] border-transparent bg-white px-5 font-['Nunito'] font-semibold text-[16px] text-[#4a4038] outline-none placeholder:text-[rgba(74,64,56,0.5)]"
            />
            <textarea
              aria-label="Nội dung câu hỏi"
              placeholder="Nội dung câu hỏi của bạn..."
              rows={4}
              className="w-full rounded-[16px] border-[1.6px] border-transparent bg-white px-5 py-4 font-['Nunito'] font-semibold text-[16px] text-[#4a4038] outline-none placeholder:text-[rgba(74,64,56,0.5)] sm:col-span-2"
            />
            <button className="press w-fit rounded-full bg-[#6e3410] px-8 py-[14px] font-['Baloo_2'] font-bold leading-[24px] text-[16px] text-white sm:col-span-2">
              Gửi câu hỏi
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
