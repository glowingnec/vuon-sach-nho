import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import {
  imgLogo,
  imgLeafIcon,
  imgShoppingCart,
  imgAccountCircle,
  imgLogoFooter,
  navItems,
} from "./shared";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#fffdf8] font-['Nunito'] flex flex-col items-center">
      <ScrollToTop />
      {/* Sticky header */}
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0px_6px_20px_-8px_rgba(130,85,43,0.35)]" : ""
        }`}
      >
        {/* Top bar */}
        <div className="w-full bg-white border-b-[0.8px] border-[rgba(0,0,0,0.1)]">
          <div
            className={`mx-auto flex max-w-[1152px] w-full flex-wrap items-center gap-4 px-5 transition-all duration-300 ${
              scrolled ? "py-2" : "py-4"
            }`}
          >
            {/* Logo */}
            <NavLink
              to="/"
              className={`relative w-[152px] shrink-0 origin-top-left transition-all duration-300 ${
                scrolled ? "h-[74px] scale-[0.62]" : "h-[118px] scale-100"
              }`}
            >
              <div className="absolute left-[47px] top-0 size-14">
                <img alt="" src={imgLogo} className="block size-full" />
              </div>
              <div className="absolute left-0 top-[60px] w-[75px] -rotate-3">
                <img alt="" src={imgLeafIcon} className="float-leaf absolute left-0 top-[-18px] size-[18px]" />
                <p className="font-['Grandstander'] font-black leading-[28.88px] text-[#4caf50] text-[30.4px] tracking-[-0.608px]">
                  Vườn
                </p>
              </div>
              <div className="absolute left-[85px] top-[62px] rotate-1">
                <p className="font-['Grandstander'] font-black leading-[28.88px] text-[#4caf50] text-[30.4px] tracking-[-0.608px]">
                  Sách
                </p>
              </div>
              <div className="absolute left-[47px] top-[89px] -rotate-[1.5deg]">
                <p className="font-['Grandstander'] font-black leading-[28.88px] text-[#4caf50] text-[30.4px] tracking-[-0.608px]">
                  Nhỏ
                </p>
              </div>
            </NavLink>

            {/* Search */}
            <div className="order-last w-full rounded-[16px] border-[1.6px] border-[rgba(41,171,226,0.3)] bg-white p-2 drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] md:order-none md:w-auto md:flex-1">
              <div className="px-1">
                <p className="font-['Nunito'] font-bold leading-[20px] text-[#8a6a52] text-[14px]">
                  Tìm sách nhanh
                </p>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="text"
                  aria-label="Tìm sách"
                  placeholder="Nhập sách bạn muốn tìm tại đây..."
                  className="h-[38px] w-full rounded-[8px] border-[0.8px] border-[rgba(0,0,0,0.1)] bg-[#fbfbfb] px-3 py-2 font-['Nunito'] text-[14px] text-[#4a4038] outline-none placeholder:text-[rgba(74,64,56,0.5)] md:w-[450px]"
                />
                <button className="press shrink-0 rounded-[8px] bg-[#29abe2] px-4 py-2 font-['Nunito'] font-bold text-[16px] leading-[24px] text-white">
                  Tìm
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="ml-auto flex items-center gap-4">
              <button className="press flex items-center gap-[7px] rounded-[16px] border border-[rgba(0,0,0,0.33)] bg-[#f5b84c] p-[10px]">
                <img alt="" src={imgShoppingCart} className="size-6" />
                <span className="font-['Baloo_2'] font-bold leading-[28px] text-[18px] text-white">
                  Giỏ hàng
                </span>
              </button>
              <button className="press flex items-center gap-[7px] rounded-[16px] border border-[rgba(0,0,0,0.33)] bg-[#9e4a4a] p-[10px]">
                <img alt="" src={imgAccountCircle} className="size-6" />
                <span className="font-['Baloo_2'] font-bold leading-[28px] text-[18px] text-white">
                  Đăng nhập
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="w-full border-t-[0.8px] border-[rgba(0,0,0,0.05)] bg-white">
          <div className="mx-auto flex max-w-[1152px] items-center px-5 py-[10px]">
            <nav className="flex flex-wrap items-center gap-2 rounded-full border-[1.6px] border-[rgba(0,0,0,0.05)] bg-[#f6f4ef] p-[6px]">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  className="nav-pill relative rounded-full px-[18px] py-[7px] font-['Baloo_2'] font-bold leading-[24px] text-[17px]"
                >
                  {({ isActive }) => (
                    <span
                      className={`flex items-center rounded-full px-[18px] py-[7px] -mx-[18px] -my-[7px] ${
                        isActive ? "text-white shadow-[0px_4px_10px_-2px_rgba(0,0,0,0.25)]" : "text-[#8a6a52]"
                      }`}
                      style={isActive ? { backgroundColor: item.color } : undefined}
                    >
                      <span
                        className="nav-dot mr-[7px] inline-block size-[9px] rounded-full align-middle"
                        style={{ backgroundColor: isActive ? "rgba(255,255,255,0.9)" : item.color }}
                      />
                      {item.label}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <Outlet />

      {/* Footer */}
      <footer className="w-full border-t-[0.8px] border-[rgba(0,0,0,0.05)] bg-white">
        <div className="mx-auto flex max-w-[1152px] flex-wrap items-center justify-between gap-4 px-5 py-10">
          <NavLink to="/" className="flex items-center gap-3">
            <img alt="" src={imgLogoFooter} className="size-12" />
            <span className="font-['Baloo_2'] font-extrabold leading-[32px] text-[#6b4a9e] text-[24px]">
              Vườn Sách Nhỏ
            </span>
          </NavLink>
          <div className="flex flex-wrap gap-6">
            {["Vận chuyển", "Đổi trả", "Liên hệ", "Facebook", "Zalo"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-['Nunito'] font-bold leading-[24px] text-[#8a6a52] text-[16px]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t-[0.8px] border-[rgba(0,0,0,0.05)] p-5 text-center">
          <p className="font-['Nunito'] font-bold leading-[20px] text-[#8a6a52] text-[14px]">
            © 2026 Vườn Sách Nhỏ · Gieo mầm tri thức · Ươm mầm tương lai
          </p>
        </div>
      </footer>
    </div>
  );
}
