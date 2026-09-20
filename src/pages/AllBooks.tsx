import { allBooks, Reveal, BookCard, BookStackScene, PageTitle } from "../shared";

const ageChips = ["Mọi độ tuổi", "0–5 tuổi", "6–10 tuổi", "11–15 tuổi", "< Lọc thể loại"];

export default function AllBooks() {
  return (
    <>
      {/* Page header */}
      <div className="w-full bg-white pb-8 pt-6">
        <div className="mx-auto flex max-w-[1152px] items-center justify-between gap-6 px-5">
          <PageTitle
            title="Tất cả sách"
            subtitle="Cả một khu vườn sách đang chờ bé khám phá — lọc theo độ tuổi, thể loại và tìm cuốn vừa in cho riêng mình."
          />
          <BookStackScene />
        </div>
      </div>

      <section className="w-full border-y-[0.8px] border-[rgba(0,0,0,0.05)] bg-white py-12">
        <div className="mx-auto max-w-[1152px] px-5">
          <div className="flex flex-wrap items-center gap-2">
            {ageChips.map((chip, i) => (
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
            <button className="ml-auto flex items-center gap-[6px] rounded-full border-[1.6px] border-[rgba(0,0,0,0.1)] bg-white py-[6px] pl-[6px] pr-[7px]">
              <span className="flex size-5 items-center justify-center rounded-full bg-[#ef7d2e] font-['Baloo_2'] font-extrabold text-[12px] leading-[16px] text-white">
                +
              </span>
              <span className="font-['Baloo_2'] font-bold leading-[20px] text-[#8a6a52] text-[14px]">
                Có sách nói
              </span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 pt-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {allBooks.map((book, i) => (
              <Reveal key={i} delay={(i % 5) * 70} className="flex justify-center">
                <BookCard book={book} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
