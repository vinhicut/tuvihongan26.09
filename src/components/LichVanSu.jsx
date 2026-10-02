import React, { useState } from 'react';
import { Calendar, Clock, Sun, Moon, CheckCircle2, XCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
const CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

export default function LichVanSu({ onBackToServices, onOpen199k }) {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const parsedDate = new Date(selectedDate);
  const day = parsedDate.getDate() || 1;
  const month = parsedDate.getMonth() + 1 || 1;
  const year = parsedDate.getFullYear() || 2026;

  // Derive Can Chi of the day
  const baseDayNumber = Math.floor(parsedDate.getTime() / (1000 * 60 * 60 * 24));
  const canIndex = Math.abs((baseDayNumber + 9) % 10);
  const chiIndex = Math.abs((baseDayNumber + 1) % 12);
  const canChiDay = `${CAN[canIndex]} ${CHI[chiIndex]}`;

  // Hoang Dao flag
  const isHoangDao = (chiIndex % 2 === 0);

  const gioHoangDao = [
    { gio: 'Tý (23h - 01h)', cat: true },
    { gio: 'Sửu (01h - 03h)', cat: true },
    { gio: 'Mão (05h - 07h)', cat: false },
    { gio: 'Thìn (07h - 09h)', cat: true },
    { gio: 'Tỵ (09h - 11h)', cat: true },
    { gio: 'Thân (15h - 17h)', cat: true },
    { gio: 'Dậu (17h - 19h)', cat: true },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-amber-200">
        <div>
          <button
            type="button"
            onClick={onBackToServices}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl transition-colors cursor-pointer mb-2"
          >
            ← Quay lại Dịch Vụ Nổi Bật
          </button>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900">
            Lịch Vạn Sự & Giờ Hoàng Đạo
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Tra cứu ngày lành tháng tốt, việc nên làm, việc kiêng cữ và hướng xuất hành nghênh đón tài lộc
          </p>
        </div>

        <button
          type="button"
          onClick={onOpen199k}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-700 to-amber-700 text-white font-bold text-xs shadow-md hover:brightness-105 cursor-pointer"
        >
          Chọn Ngày Giờ Đẹp 199k
        </button>
      </div>

      {/* Date Picker */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-md mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              Chọn ngày cần tra cứu vạn sự:
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-stone-300 bg-[#fdfbf7] text-stone-900 font-bold focus:border-amber-600 focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold shadow-xs uppercase tracking-wider ${
                isHoangDao
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}
            >
              {isHoangDao ? '✨ Ngày Hoàng Đạo (Cát Lợi)' : '⚠️ Ngày Hắc Đạo (Cẩn Trọng)'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Day Info */}
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-[#fffdfa] via-white to-amber-50/50 rounded-3xl p-6 sm:p-8 border-2 border-amber-400 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-amber-200">
            <div>
              <span className="text-xs text-amber-800 font-bold uppercase tracking-wider block mb-1">
                Lịch Dương: Ngày {day} tháng {month} năm {year}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900">
                Ngày {canChiDay}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Tiết Khí: Hàn Lộ • Trực: Khai (Mọi việc khởi đầu tốt đẹp)
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
                <span className="text-stone-500 block">Hướng Hỷ Thần:</span>
                <strong className="text-stone-900">Đông Bắc</strong>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs">
                <span className="text-stone-500 block">Hướng Tài Thần:</span>
                <strong className="text-emerald-800">Chính Nam</strong>
              </div>
            </div>
          </div>

          {/* Do and Don't */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b border-stone-200">
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-300">
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Việc Đại Cát Nên Làm Trong Ngày:
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                <li>• Khai trương cửa hàng, mở hàng buôn bán</li>
                <li>• Ký kết hợp đồng giao dịch, nộp đơn nhậm chức</li>
                <li>• Cầu tài lộc, xuất hành đi xa hướng Đông Bắc / Nam</li>
                <li>• An vị ban thờ, cúng bái tạ lễ gia tiên</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-red-50/80 border border-red-300">
              <span className="text-xs font-bold text-red-900 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-red-600" />
                Việc Kiêng Cữ Không Nên Làm:
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                <li>• Tránh tranh chấp cãi vã, kiện tụng</li>
                <li>• Đổ trần lợp mái vào các giờ hắc đạo</li>
                <li>• Cho vay mượn số tiền lớn mà không có bảo chứng</li>
                <li>• Xuất hành về hướng Hạc Thần (hướng Tây)</li>
              </ul>
            </div>
          </div>

          {/* Lucky Hours */}
          <div className="pt-6">
            <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>Khung Giờ Hoàng Đạo Trong Ngày:</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {gioHoangDao.map((g, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-stone-200 text-center shadow-2xs"
                >
                  <span className="text-xs font-bold text-stone-900 block">{g.gio}</span>
                  <span className="text-[10px] text-emerald-700 font-semibold mt-1 inline-block">
                    ★ Hoàng Đạo
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-stone-700">
              Cần chọn ngày giờ hoàng đạo chính xác đến từng phút cho việc đại sự (Cưới hỏi, Động thổ, Khai trương, Mua xe, Xuất hành lớn)?
            </span>
            <button
              type="button"
              onClick={onOpen199k}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-700 to-amber-700 text-white font-bold shrink-0 hover:brightness-105 shadow-xs cursor-pointer"
            >
              Chọn Ngày Giờ Đẹp 199k
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
