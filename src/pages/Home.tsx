import {
  assetPathPrefix,
  imgLogoQuote,
  bestSellersRow1,
  bestSellersRow2,
  categories,
  features,
  Reveal,
  BookCard,
  BookGardenScene,
  Shelf,
} from "../shared";

const selectFilters = ["Tất cả độ tuổi", "Sách in / Ebook", "Loại sách"];
const bestSellerChips = ["Hôm nay", "Theo tuần", "Theo tháng", "Theo năm"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="w-full bg-white pb-[30px]">
        <div className="mx-auto flex max-w-[1152px] flex-col items-stretch gap-6 px-5 lg:flex-row lg:items-center">
          <div className="flex flex-1 items-center gap-6 rounded-[24px] border-[1.6px] border-[rgba(0,0,0,0.05)] bg-[#f6f4ef] px-7 py-6 drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]">
            <div className="flex-1">
              <h1 className="font-['Baloo_2'] font-extrabold leading-[45px] text-[#616f52] text-[36px]">
                Muôn vàn sách, vạn điều hay{" "}
              </h1>
              <p className="pt-2 font-['Nunito'] leading-[28px] text-[#8a6a52] text-[18px]">
                Hơn <span className="font-bold text-[#4caf50]">3.600 đầu sách</span>{" "}
                cho thiếu nhi và tuổi mới lớn — Giúp trẻ phát triển tư duy, ngôn ngữ và một tâm hồn giàu cảm xúc.
              </p>
            </div>
            <BookGardenScene />
          </div>
          <div className="flex w-full shrink-0 flex-col gap-[15px] lg:w-[224px]">
            {selectFilters.map((label) => (
              <button
                key={label}
                className="flex h-[41.6px] items-center justify-between rounded-[12px] border-[0.8px] border-[rgba(0,0,0,0.1)] px-4 py-[10px] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgb(255,255,255) 0%, rgb(252,252,252) 20%, rgb(248,248,248) 40%, rgb(245,245,245) 60%, rgb(241,241,241) 80%, rgb(238,238,238) 100%)",
                }}
              >
                <span className="font-['Nunito'] font-bold leading-[20px] text-[#8a6a52] text-[14px]">
                  {label}
                </span>
                <span className="font-['Nunito'] font-bold leading-[16px] text-[#8a6a52] text-[12px]">
                  ▼
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Best sellers */}
      <section className="mx-auto w-full max-w-[1152px] px-5 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-['Baloo_2'] font-extrabold leading-[40px] text-[#4a9e6d] text-[36px]">
            Sách bán chạy
          </h2>
          <div className="flex flex-wrap gap-2">
            {bestSellerChips.map((chip, i) => (
              <button
                key={chip}
                className={
                  i === 0
                    ? "rounded-full border-[1.6px] border-[#ef7d2e] bg-[#ef7d2e] px-4 py-[6px] font-['Baloo_2'] font-bold leading-[20px] text-[14px] text-white"
                    : "rounded-full border-[1.6px] border-[rgba(0,0,0,0.1)] bg-white px-4 py-[6px] font-['Baloo_2'] font-bold leading-[20px] text-[#8a6a52] text-[14px]"
                }
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-2 sm:grid-cols-4">
            {bestSellersRow1.map((book, i) => (
              <Reveal key={i} delay={i * 90} className="flex justify-center">
                <BookCard book={book} />
              </Reveal>
            ))}
          </div>
          <Shelf />
        </div>

        <div className="pt-10">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-2 sm:grid-cols-4">
            {bestSellersRow2.map((book, i) => (
              <Reveal key={i} delay={i * 90} className="flex justify-center">
                <BookCard book={book} />
              </Reveal>
            ))}
          </div>
          <Shelf />
        </div>
      </section>

      {/* Categories */}
      <section className="w-full border-y-[0.8px] border-[rgba(0,0,0,0.05)] bg-white py-12">
        <div className="mx-auto max-w-[1152px] px-5">
          <h2 className="font-['Baloo_2'] font-extrabold leading-[40px] text-[#4a9e6d] text-[36px]">
            Thể loại sách
          </h2>
          <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 80}>
                <a
                  href="#"
                  className="cat-card flex items-center gap-4 rounded-[16px] px-5 py-4 drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)]"
                  style={{ backgroundColor: cat.bg }}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.25)]">
                    <span className="text-[24px] leading-[32px]">{cat.emoji}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-['Baloo_2'] font-extrabold leading-[28px] text-[18px] text-white">
                      {cat.name}
                    </p>
                    <p className="font-['Baloo_2'] font-bold leading-[20px] text-[14px] text-[rgba(255,255,255,0.85)]">
                      {cat.count}
                    </p>
                  </div>
                  <span className="cat-arrow ml-auto font-['Baloo_2'] leading-[28px] text-[20px] text-white">
                    →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto w-full max-w-[1152px] px-5 pb-12 pt-12">
        <h2 className="font-['Baloo_2'] font-extrabold leading-[40px] text-[#4a9e6d] text-[36px]">
          Đánh giá từ độc giả
        </h2>
        <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
          {[
            { name: "Nguyễn A", book: "Chú sóc thông minh", img: "5f561.png" },
            { name: "Văn B", book: "Công chúa và Lâu đài", img: "7f1c2.png" },
          ].map((r, i) => (
            <Reveal key={r.name} delay={i * 120}>
              <article className="flex gap-5 rounded-[24px] border-[1.6px] border-[rgba(0,0,0,0.05)] bg-white p-5 drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]">
                <div className="relative h-44 w-28 shrink-0 rounded-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]">
                  <img
                    alt=""
                    src={`${assetPathPrefix}/${r.img}`}
                    className="absolute inset-0 size-full rounded-[8px] object-cover"
                  />
                  <div className="absolute right-[-4px] bottom-[-4px] flex size-9 items-center justify-center rounded-full bg-[#ef7d2e] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]">
                    <span className="font-['Baloo_2'] font-extrabold text-[18px] leading-[28px] text-white">
                      e
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="font-['Baloo_2'] font-extrabold leading-[30px] text-[#6b4a9e] text-[24px]">
                    {r.name}
                  </h3>
                  <p className="pt-[2px] font-['Nunito'] font-bold leading-[24px] text-[#bf4599] text-[16px]">
                    {r.book}
                  </p>
                  <p className="pt-2 font-['Nunito'] leading-[22.75px] text-[#8a6a52] text-[14px]">
                    Sách hay, nội dung tốt
                  </p>
                  <button className="press mt-4 w-fit rounded-full bg-[#bf4599] px-6 py-2 font-['Nunito'] font-bold leading-[24px] text-[16px] text-white">
                    Xem ngay
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features + quote */}
      <section className="w-full border-y-[0.8px] border-[rgba(0,0,0,0.05)] bg-white pt-12">
        <div className="mx-auto max-w-[1152px] px-5">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 100}
                className="rounded-[24px] border-[1.6px] border-[rgba(0,0,0,0.05)] bg-[#fffdf8] p-6 drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]"
              >
                <div
                  className="flex size-14 items-center justify-center rounded-[16px] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]"
                  style={{ backgroundColor: f.bg }}
                >
                  <span className="text-[30px] leading-[36px] text-white">{f.emoji}</span>
                </div>
                <h3 className="pt-4 font-['Baloo_2'] font-extrabold leading-[32px] text-[#6b4a9e] text-[24px]">
                  {f.title}
                </h3>
                <p className="pt-2 font-['Nunito'] leading-[26px] text-[#8a6a52] text-[16px]">
                  {f.text}
                </p>
              </Reveal>
            ))}
          </div>

          <figure className="flex flex-col items-start gap-5 pb-12 pt-12 md:flex-row">
            <img alt="" src={imgLogoQuote} className="size-20 shrink-0" />
            <div className="relative flex-1 rounded-[24px] border-[1.6px] border-[rgba(0,0,0,0.05)] bg-[#fffdf8] px-7 py-6 drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]">
              <div className="absolute left-[-9px] top-7 hidden size-6 rotate-45 border-b-[1.6px] border-l-[1.6px] border-[rgba(0,0,0,0.05)] bg-[#fffdf8] md:block" />
              <blockquote className="font-['Baloo_2'] font-bold leading-[41.25px] text-[#6e3410] text-[30px]">
                “Từ ngày biết đến Vườn Sách Nhỏ, tối nào hai mẹ con cũng có hẹn với một câu chuyện. Con bé giờ mê đọc hơn cả xem tivi”
              </blockquote>
              <figcaption className="pt-4 font-['Nunito'] font-bold leading-[24px] text-[#8a6a52] text-[16px]">
                — Chị NKD, phụ huynh tại Vĩnh Phúc
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto w-full max-w-[1152px] px-5 py-14">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[32px] bg-[#4caf50] p-12 drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] lg:flex-row lg:items-center">
          <div className="max-w-[559px]">
            <h2 className="font-['Baloo_2'] font-extrabold leading-[45px] text-[36px] text-white">
              Nhận gợi ý sách hay mỗi tháng
            </h2>
            <p className="max-w-[448px] pt-3 font-['Nunito'] leading-[24px] text-[16px] text-[rgba(255,255,255,0.9)]">
              Danh sách sách mới theo độ tuổi, mã giảm giá và mẹo đọc sách cùng bé — hoàn toàn miễn phí.
            </p>
          </div>
          <form className="flex w-full shrink-0 flex-col gap-3 lg:w-[349px]">
            <input
              type="email"
              aria-label="Email của bạn"
              placeholder="Nhập email của bạn"
              className="h-[55px] w-full rounded-full border-[1.6px] border-transparent bg-white px-5 py-[14px] font-['Nunito'] font-semibold text-[16px] text-[#4a4038] outline-none placeholder:text-[rgba(74,64,56,0.5)]"
            />
            <button className="press w-full rounded-full bg-[#6e3410] px-6 py-[14px] font-['Baloo_2'] font-bold leading-[24px] text-[16px] text-white">
              Đăng ký ngay
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
