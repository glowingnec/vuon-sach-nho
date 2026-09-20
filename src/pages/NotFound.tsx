import { NavLink } from "react-router";
import { BookGardenScene } from "../shared";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-[1152px] flex-col items-center px-5 py-24 text-center">
      <BookGardenScene />
      <h1 className="pt-4 font-['Baloo_2'] font-extrabold leading-[52px] text-[#4a9e6d] text-[48px]">
        Lạc mất trang rồi!
      </h1>
      <p className="max-w-[440px] pt-2 font-['Nunito'] leading-[28px] text-[#8a6a52] text-[18px]">
        Trang bạn tìm không có trong khu vườn. Hãy quay lại trang chủ để tiếp tục khám phá sách hay nhé.
      </p>
      <NavLink
        to="/"
        className="press mt-6 rounded-full bg-[#4caf50] px-8 py-3 font-['Baloo_2'] font-bold leading-[24px] text-[16px] text-white"
      >
        Về trang chủ
      </NavLink>
    </section>
  );
}
