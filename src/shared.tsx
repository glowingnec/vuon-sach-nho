import { useEffect, useRef, useState, type ReactNode } from "react";

export const assetPathPrefix = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/assets`;

export const imgLogo = `${assetPathPrefix}/10c35.svg`;
export const imgLeafIcon = `${assetPathPrefix}/5eb4e.svg`;
export const imgShoppingCart = `${assetPathPrefix}/7bd7c.svg`;
export const imgAccountCircle = `${assetPathPrefix}/d74bd.svg`;
export const imgLogoQuote = `${assetPathPrefix}/83e56.svg`;
export const imgLogoFooter = `${assetPathPrefix}/0a1e6.svg`;

export type Book = {
  img: string;
  price: string;
  badge?: string;
};

export const navItems = [
  { label: "Trang chủ", to: "/", color: "#29abe2" },
  { label: "Tất cả sách", to: "/tat-ca-sach", color: "#e2574c" },
  { label: "Thông báo", to: "/thong-bao", color: "#4caf50" },
  { label: "Hỗ trợ", to: "/ho-tro", color: "#874cf5" },
];

export const bestSellersRow1: Book[] = [
  { img: "bc5a8.png", price: "68.000₫", badge: "3+" },
  { img: "938ad.png", price: "55.000₫", badge: "3+" },
  { img: "7561a.png", price: "92.000₫", badge: "6+" },
  { img: "6d1d0.png", price: "105.000₫" },
];

export const bestSellersRow2: Book[] = [
  { img: "d19ec.png", price: "128.000₫" },
  { img: "7f1c2.png", price: "135.000₫", badge: "8+" },
  { img: "6c6cb.png", price: "62.000₫" },
  { img: "e60bc.png", price: "98.000₫" },
];

export const allBooks: Book[] = [
  { img: "ab761.png", price: "68.000₫", badge: "e" },
  { img: "d19ec.png", price: "55.000₫", badge: "e" },
  { img: "5824e.png", price: "92.000₫", badge: "e" },
  { img: "27351.png", price: "105.000₫", badge: "e" },
  { img: "b0ad4.png", price: "128.000₫" },
  { img: "46af9.png", price: "135.000₫", badge: "e" },
  { img: "e2cf0.png", price: "62.000₫", badge: "e" },
  { img: "b0b5f.png", price: "98.000₫" },
  { img: "f2813.png", price: "75.000₫", badge: "e" },
  { img: "6c6cb.png", price: "88.000₫", badge: "e" },
  { img: "20dec.png", price: "79.000₫" },
  { img: "d83e0.png", price: "110.000₫", badge: "e" },
  { img: "15037.png", price: "84.000₫", badge: "e" },
  { img: "bc5a8.png", price: "142.000₫" },
];

export const categories = [
  { emoji: "🌱", name: "Thiên nhiên", count: "124 cuốn", bg: "#4caf50" },
  { emoji: "✏️", name: "Truyện tranh", count: "312 cuốn", bg: "#e2574c" },
  { emoji: "🏮", name: "Cổ tích Việt Nam", count: "86 cuốn", bg: "#ef7d2e" },
  { emoji: "🔭", name: "Khoa học ", count: "148 cuốn", bg: "#29abe2" },
  { emoji: "🧭", name: "Phiêu lưu", count: "201 cuốn", bg: "#bf4599" },
  { emoji: "🌈", name: "Kỹ năng sống", count: "97 cuốn", bg: "#6b4a9e" },
];

export const features = [
  {
    emoji: "🌟",
    bg: "#ef7d2e",
    title: "Tuyển chọn kỹ lưỡng",
    text: "Mỗi đầu sách đều được đội ngũ biên tập và phụ huynh đọc thử trước khi lên kệ.",
  },
  {
    emoji: "🚚",
    bg: "#29abe2",
    title: "Giao nhanh toàn quốc",
    text: "Miễn phí vận chuyển cho đơn từ 200.000₫, kèm gói quà và thiệp viết tay.",
  },
  {
    emoji: "🎧",
    bg: "#4caf50",
    title: "Đọc cùng bé",
    text: "Sách có gắn biểu tượng “e” đi kèm bản nghe kể chuyện, giúp bé làm quen với sách.",
  },
];

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function PageTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Reveal className="flex flex-col items-start">
      <h1 className="font-['Baloo_2'] font-extrabold leading-[52px] text-[#4a9e6d] text-[42px]">
        {title}
      </h1>
      <p className="max-w-[640px] pt-2 font-['Nunito'] leading-[28px] text-[#8a6a52] text-[18px]">
        {subtitle}
      </p>
    </Reveal>
  );
}

export function BookCard({ book }: { book: Book }) {
  return (
    <div className="book-card flex flex-col items-center">
      <div className="book-cover relative w-40 h-[213px] overflow-hidden rounded-[6px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1),0px_6px_10px_0px_rgba(130,85,43,0.35)]">
        <img
          alt=""
          src={`${assetPathPrefix}/${book.img}`}
          className="absolute inset-x-0 top-0 w-full h-[135%] max-w-none object-cover object-top pointer-events-none"
        />
        {book.badge && (
          <div className="absolute right-[-4px] bottom-[-4px] size-10 rounded-full bg-[#ef7d2e] flex items-center justify-center shadow-[0px_0px_0px_2px_white,0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
            <span className="font-['Baloo_2'] font-extrabold text-[20px] leading-[28px] text-white">
              {book.badge}
            </span>
          </div>
        )}
      </div>
      <div className="flex w-40 max-w-40 items-center justify-between pt-[6px] px-[2px]">
        <p className="font-['Baloo_2'] font-extrabold leading-[20px] text-[#6e3410] text-[14px]">
          {book.price}
        </p>
        <button className="press font-['Nunito'] font-bold leading-[16px] text-[#29abe2] text-[12px]">
          + Giỏ
        </button>
      </div>
    </div>
  );
}

export function Shelf() {
  return (
    <div className="relative w-full">
      <div className="relative h-5 rounded-[4px] shadow-[0px_8px_14px_0px_rgba(130,85,43,0.35)]">
        <div className="absolute inset-0 rounded-[4px] bg-gradient-to-b from-[#d9a066] via-[#c89257] via-[35%] to-[#9c6a38]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_0px_0px_rgba(255,255,255,0.25)]" />
      </div>
      <div className="absolute left-8 top-5 h-3 w-2 rounded-b-[4px] bg-[#7a7a7a]" />
      <div className="absolute right-8 top-5 h-3 w-2 rounded-b-[4px] bg-[#7a7a7a]" />
    </div>
  );
}

/* Original animated SVG — an open book in a growing garden */
export function BookGardenScene() {
  return (
    <div
      className="hidden shrink-0 sm:block"
      role="img"
      aria-label="Cuốn sách mở với mầm cây đang lớn, lá bay và những ngôi sao lấp lánh"
    >
      <svg width="180" height="170" viewBox="0 0 180 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="scene-sun">
          <circle cx="150" cy="30" r="13" fill="#f5b84c" />
          <g stroke="#f5b84c" strokeWidth="2.5" strokeLinecap="round">
            <line x1="150" y1="8" x2="150" y2="13" />
            <line x1="150" y1="47" x2="150" y2="52" />
            <line x1="128" y1="30" x2="133" y2="30" />
            <line x1="167" y1="30" x2="172" y2="30" />
            <line x1="134" y1="14" x2="137.5" y2="17.5" />
            <line x1="162.5" y1="42.5" x2="166" y2="46" />
            <line x1="166" y1="14" x2="162.5" y2="17.5" />
            <line x1="137.5" y1="42.5" x2="134" y2="46" />
          </g>
        </g>
        <path className="scene-star scene-star-1" d="M28 24 l2.2 4.6 5 .7 -3.6 3.5 .9 5 -4.5-2.4 -4.5 2.4 .9-5 -3.6-3.5 5-.7z" fill="#29abe2" />
        <path className="scene-star scene-star-2" d="M112 16 l1.6 3.4 3.7.5 -2.7 2.6 .7 3.7 -3.3-1.8 -3.3 1.8 .7-3.7 -2.7-2.6 3.7-.5z" fill="#bf4599" />
        <path className="scene-leaf scene-leaf-1" d="M52 44 C58 36 70 36 74 42 C68 50 56 50 52 44 Z" fill="#4caf50" />
        <path className="scene-leaf scene-leaf-2" d="M124 60 C130 53 141 54 144 60 C138 67 127 66 124 60 Z" fill="#7bc47f" />
        <g className="scene-sprout">
          <path d="M90 108 C90 96 90 86 90 78" stroke="#4a9e6d" strokeWidth="3" strokeLinecap="round" />
          <path d="M90 90 C82 86 76 90 74 96 C82 98 88 96 90 90 Z" fill="#4caf50" />
          <path d="M90 82 C98 78 105 82 107 88 C99 90 92 88 90 82 Z" fill="#7bc47f" />
        </g>
        <g>
          <path d="M90 110 C74 100 56 100 40 106 L40 146 C56 140 74 140 90 150 Z" fill="#ffffff" stroke="#d9a066" strokeWidth="2" strokeLinejoin="round" />
          <path d="M90 110 C106 100 124 100 140 106 L140 146 C124 140 106 140 90 150 Z" fill="#fdf3e3" stroke="#d9a066" strokeWidth="2" strokeLinejoin="round" />
          <g stroke="#c7b6a3" strokeWidth="2" strokeLinecap="round">
            <line x1="50" y1="114" x2="80" y2="118" />
            <line x1="50" y1="122" x2="80" y2="126" />
            <line x1="50" y1="130" x2="80" y2="134" />
          </g>
          <path className="scene-page" d="M90 110 C106 100 124 100 140 106 L140 146 C124 140 106 140 90 150 Z" fill="#ffffff" stroke="#d9a066" strokeWidth="2" strokeLinejoin="round" />
          <path d="M90 110 L90 150" stroke="#9c6a38" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

/* Original animated SVG — a bell ringing with notification pings */
export function BellScene() {
  return (
    <div
      className="hidden shrink-0 sm:block"
      role="img"
      aria-label="Chiếc chuông rung với các gợn thông báo"
    >
      <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className="scene-ping scene-ping-1" cx="75" cy="70" r="46" stroke="#4caf50" strokeWidth="3" fill="none" />
        <circle className="scene-ping scene-ping-2" cx="75" cy="70" r="46" stroke="#7bc47f" strokeWidth="3" fill="none" />
        <g className="scene-bell">
          <path d="M75 26 C60 26 50 38 50 56 C50 74 44 84 40 90 L110 90 C106 84 100 74 100 56 C100 38 90 26 75 26 Z" fill="#f5b84c" stroke="#d98f2b" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="75" cy="22" r="5" fill="#d98f2b" />
          <path d="M66 90 C66 100 84 100 84 90 Z" fill="#d98f2b" />
        </g>
        <circle cx="106" cy="34" r="12" fill="#e2574c" />
        <text x="106" y="39" textAnchor="middle" className="font-['Baloo_2']" fontSize="14" fontWeight="800" fill="#ffffff">3</text>
      </svg>
    </div>
  );
}

/* Original animated SVG — a chat bubble with a beating heart */
export function SupportScene() {
  return (
    <div
      className="hidden shrink-0 sm:block"
      role="img"
      aria-label="Bong bóng trò chuyện với trái tim đang đập"
    >
      <svg width="160" height="150" viewBox="0 0 160 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="scene-star scene-star-1" d="M22 30 l1.8 3.8 4.1.6 -3 2.9 .7 4.1 -3.7-2 -3.7 2 .7-4.1 -3-2.9 4.1-.6z" fill="#f5b84c" />
        <path className="scene-star scene-star-2" d="M138 22 l1.5 3.1 3.4.5 -2.5 2.4 .6 3.4 -3-1.6 -3 1.6 .6-3.4 -2.5-2.4 3.4-.5z" fill="#29abe2" />
        <g className="scene-bubble">
          <path d="M40 34 L120 34 C130 34 138 42 138 52 L138 92 C138 102 130 110 120 110 L70 110 L50 128 L52 110 L40 110 C30 110 22 102 22 92 L22 52 C22 42 30 34 40 34 Z" fill="#29abe2" stroke="#1f8bbd" strokeWidth="3" strokeLinejoin="round" />
          <path className="scene-heart" d="M80 58 C76 51 66 51 64 60 C62 68 72 76 80 82 C88 76 98 68 96 60 C94 51 84 51 80 58 Z" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}

/* Original animated SVG — a stack of books with a bouncing bookmark */
export function BookStackScene() {
  return (
    <div
      className="hidden shrink-0 sm:block"
      role="img"
      aria-label="Chồng sách nhiều màu với dải đánh dấu đang nhún nhảy"
    >
      <svg width="170" height="150" viewBox="0 0 170 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="scene-leaf scene-leaf-1" d="M30 30 C36 22 48 22 52 28 C46 36 34 36 30 30 Z" fill="#4caf50" />
        <path className="scene-star scene-star-2" d="M142 34 l1.6 3.4 3.7.5 -2.7 2.6 .7 3.7 -3.3-1.8 -3.3 1.8 .7-3.7 -2.7-2.6 3.7-.5z" fill="#bf4599" />
        <g className="scene-stack">
          <rect x="38" y="104" width="96" height="20" rx="4" fill="#e2574c" stroke="#b8433a" strokeWidth="2.5" />
          <rect x="30" y="82" width="104" height="20" rx="4" fill="#29abe2" stroke="#1f8bbd" strokeWidth="2.5" />
          <rect x="44" y="60" width="88" height="20" rx="4" fill="#f5b84c" stroke="#d98f2b" strokeWidth="2.5" />
        </g>
        <g className="scene-bookmark">
          <path d="M96 40 L116 40 L116 74 L106 66 L96 74 Z" fill="#6b4a9e" stroke="#523979" strokeWidth="2.5" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}
