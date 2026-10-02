import React, { useState } from 'react';
import { Compass, Shield, ArrowRight, CheckCircle2, AlertOctagon, Sparkles, Navigation } from 'lucide-react';

const BAT_MON = [
  {
    name: 'Sinh Môn (生門)',
    cung: 'Cấn (Đông Bắc)',
    nature: 'Đại Cát',
    type: 'cat',
    desc: 'Đệ nhất môn về tiền bạc, tài lộc dồi dào, sinh sôi nảy nở. Thích hợp nhất cho: Mua bán nhà đất, đầu tư sinh lời, khai trương, mưu cầu lợi lộc.',
    advice: 'Nên chọn hướng Đông Bắc xuất hành cầu tài hoặc đặt bàn đàm phán.',
  },
  {
    name: 'Khai Môn (開門)',
    cung: 'Càn (Tây Bắc)',
    nature: 'Đại Cát',
    type: 'cat',
    desc: 'Chủ về khởi đầu quang minh, quan lộc hanh thông, công việc thăng tiến. Thích hợp: Nhậm chức, khai trương công ty, ký kết văn bản lớn, gặp gỡ lãnh đạo.',
    advice: 'Nên chọn hướng Tây Bắc để triển khai dự án mới hoặc xuất hành cầu danh.',
  },
  {
    name: 'Hưu Môn (休門)',
    cung: 'Khảm (Chính Bắc)',
    nature: 'Cát',
    type: 'cat',
    desc: 'Chủ về hòa ái, nghỉ dưỡng, tái tạo năng lượng, gặp gỡ quý nhân và hòa giải tranh chấp. Thích hợp: Hôn nhân, đoàn tụ, cầu y tế chữa bệnh, nghỉ ngơi.',
    advice: 'Nên chọn hướng Bắc để hòa giải mâu thuẫn, bồi bổ sức khỏe và kết giao bạn hiền.',
  },
  {
    name: 'Cảnh Môn (景門)',
    cung: 'Ly (Chính Nam)',
    nature: 'Thứ Cát',
    type: 'binh',
    desc: 'Chủ về văn chương, danh tiếng, yến tiệc, giấy tờ thi cử. Thích hợp: Thi tuyển, quảng bá thương hiệu, nộp hồ sơ xin việc, tổ chức sự kiện.',
    advice: 'Nên chọn hướng Nam khi muốn tăng độ nhận diện, thi cử hoặc dự tiệc.',
  },
  {
    name: 'Đỗ Môn (杜門)',
    cung: 'Tốn (Đông Nam)',
    nature: 'Bình Hòa / Bế Tắc',
    type: 'binh',
    desc: 'Chủ về ẩn náu, che giấu, giữ kín bí mật kinh doanh, phòng thủ. Thích hợp: Nghiên cứu nội bộ, né tránh sự chú ý, bảo toàn tài sản.',
    advice: 'Không nên mưu cầu mở rộng lộ liễu, nên giữ im lặng và phòng thủ vững chắc.',
  },
  {
    name: 'Thương Môn (傷門)',
    cung: 'Chấn (Chính Đông)',
    nature: 'Hung',
    type: 'hung',
    desc: 'Chủ về tổn thương, tranh đoạt, xung đột. Chỉ lợi cho: Đòi nợ, bắt trộm cướp, săn bắn; rất kỵ cho việc hùn hạp làm ăn, xuất hành hay kết hôn.',
    advice: 'Tránh khởi sự kinh doanh hay ký hợp đồng về hướng Đông.',
  },
  {
    name: 'Kinh Môn (驚門)',
    cung: 'Đoài (Chính Tây)',
    nature: 'Hung',
    type: 'hung',
    desc: 'Chủ về kinh sợ, hoang mang, kiện tụng, khẩu thiệt thị phi. Thích hợp cho việc răn đe, xét xử, phòng ngự phản công.',
    advice: 'Tránh tranh cãi, đàm phán nhạy cảm hướng Tây kẻo sinh bất an.',
  },
  {
    name: 'Tử Môn (死門)',
    cung: 'Khôn (Tây Nam)',
    nature: 'Đại Hung',
    type: 'hung',
    desc: 'Cung chủ về tuyệt diệt, bế tắc tột cùng, đình trệ toàn bộ. Chỉ thích hợp: Tang lễ, chôn cất, trừ tà bẫy quái; vạn sự khởi đầu đều đại kỵ.',
    advice: 'Tuyệt đối không xuất hành khởi sự, động thổ hay khai trương về hướng Tây Nam.',
  },
];

export default function KyMon({ onBackToServices, onOpen199k }) {
  const [selectedGoal, setSelectedGoal] = useState('cautai');
  const [currentMon, setCurrentMon] = useState(BAT_MON[0]);

  const goals = [
    { id: 'cautai', label: 'Cầu Tài Lộc & Kinh Doanh', monIdx: 0 },
    { id: 'congdanh', label: 'Khai Trương & Nhậm Chức', monIdx: 1 },
    { id: 'quyNhan', label: 'Gặp Quý Nhân & Hòa Hợp', monIdx: 2 },
    { id: 'danhTieng', label: 'Thi Cử & Đánh Bóng Tên Tuổi', monIdx: 3 },
  ];

  const handleSelectGoal = (g) => {
    setSelectedGoal(g.id);
    setCurrentMon(BAT_MON[g.monIdx]);
  };

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
            Kỳ Môn Độn Giáp Quân Sư
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Đệ nhất bí thuật dự trắc & chọn hướng thời không cát lợi (Tam Cát Môn: Sinh - Khai - Hưu)
          </p>
        </div>

        <button
          type="button"
          onClick={onOpen199k}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-700 to-amber-700 text-white font-bold text-xs shadow-md hover:brightness-105 cursor-pointer"
        >
          Tư Vấn Mưu Lược 199k
        </button>
      </div>

      {/* Goal Selector */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-md mb-8">
        <label className="block text-xs font-bold text-stone-700 uppercase mb-3">
          Chọn mục tiêu xuất hành / mưu sự của bạn:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {goals.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => handleSelectGoal(g)}
              className={`p-3 rounded-2xl text-xs font-bold transition-all text-center border cursor-pointer ${
                selectedGoal === g.id
                  ? 'bg-amber-600 text-white border-amber-600 shadow-md scale-[1.02]'
                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Recommended Gate */}
      <div className="bg-gradient-to-br from-[#fffdfa] via-white to-amber-50/50 rounded-3xl p-6 sm:p-8 border-2 border-amber-400 shadow-lg mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-amber-200">
          <div>
            <span className="px-3 py-0.5 rounded-full text-xs font-extrabold bg-emerald-600 text-white uppercase tracking-wider">
              {currentMon.nature}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mt-2">
              {currentMon.name}
            </h3>
            <p className="text-sm font-semibold text-amber-900 mt-0.5">
              Cung Vị Trận Đồ: {currentMon.cung}
            </p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shadow-xs">
            <Compass className="w-7 h-7" />
          </div>
        </div>

        <div className="py-4 border-b border-stone-200 space-y-2">
          <p className="text-stone-700 text-sm leading-relaxed">{currentMon.desc}</p>
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-semibold text-emerald-900 flex items-center gap-2">
            <Navigation className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Chiến lược: {currentMon.advice}</span>
          </div>
        </div>

        {/* 8 Gates Matrix */}
        <div className="pt-6">
          <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-4">
            Bảng Tra Cứu Toàn Cảnh Bát Môn Độn Giáp:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {BAT_MON.map((m, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentMon(m)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  m.name === currentMon.name
                    ? 'border-amber-600 bg-amber-50/80 shadow-xs'
                    : 'border-stone-200 bg-white hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-stone-900">{m.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                      m.type === 'cat'
                        ? 'bg-emerald-100 text-emerald-800'
                        : m.type === 'hung'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-stone-100 text-stone-700'
                    }`}
                  >
                    {m.nature}
                  </span>
                </div>
                <div className="text-[11px] text-stone-500 mt-1">{m.cung}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
