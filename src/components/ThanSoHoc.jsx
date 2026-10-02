import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, User, Calendar, Award } from 'lucide-react';

const NUMEROLOGY_TRAITS = {
  2: {
    title: 'Người Hòa Giải & Đồng Cảm',
    hanh: 'Thủy',
    desc: 'Lắng nghe tuyệt vời, trực giác nhạy bén, thiên bẩm về ngoại giao và hàn gắn mối quan hệ. Giàu lòng trắc ẩn, hợp tác và yêu hòa bình.',
    strengths: ['Khéo léo trong giao tiếp', 'Giàu lòng trắc ẩn', 'Khả năng kết nối mọi người'],
    careers: ['Ngoại giao, tâm lý học, tư vấn, nhân sự, nghệ thuật'],
  },
  3: {
    title: 'Người Truyền Cảm Hứng & Sáng Tạo',
    hanh: 'Hỏa',
    desc: 'Tư duy linh hoạt, hoạt ngôn, giàu sức sống và khiếu hài hước bẩm sinh. Luôn là tâm điểm thu hút năng lượng tích cực của đám đông.',
    strengths: ['Sáng tạo không giới hạn', 'Khả năng biểu đạt xuất sắc', 'Lạc quan, nhiệt huyết'],
    careers: ['Truyền thông, marketing, nghệ sĩ, diễn thuyết gia, nhà văn'],
  },
  4: {
    title: 'Người Xây Dựng & Kỷ Luật',
    hanh: 'Thổ',
    desc: 'Chắc chắn, thực tế, tỉ mỉ và có tinh thần trách nhiệm cực cao. Đặt nền móng vững chắc cho mọi tổ chức, làm việc khoa học và có nguyên tắc.',
    strengths: ['Ý chí kiên định', 'Tổ chức khoa học', 'Đáng tin cậy bậc nhất'],
    careers: ['Quản trị, tài chính, kỹ thuật, bất động sản, luật'],
  },
  5: {
    title: 'Người Khám Phá & Tự Do',
    hanh: 'Kim / Hỏa',
    desc: 'Tâm hồn phóng khoáng, thích trải nghiệm mới, ghét sự gò bó và luôn tiên phong đón đầu xu hướng. Khả năng thích ứng nhanh phi thường.',
    strengths: ['Thích ứng thần tốc', 'Dám đổi mới và bứt phá', 'Nhiệt huyết phiêu lưu'],
    careers: ['Du lịch, kinh doanh tự do, công nghệ, truyền thông, bán hàng'],
  },
  6: {
    title: 'Người Chăm Sóc & Yêu Thương',
    hanh: 'Thổ / Kim',
    desc: 'Giàu tình mẫu tử/phụ tử, gắn bó với gia đình, có khiếu thẩm mỹ tinh tế và luôn muốn che chở, vun đắp cho những người thân yêu.',
    strengths: ['Bao dung, ấm áp', 'Thẩm mỹ cao', 'Trách nhiệm với cộng đồng'],
    careers: ['Y tế, giáo dục, thiết kế nội thất, công tác xã hội, chăm sóc khách hàng'],
  },
  7: {
    title: 'Nhà Tri Thức & Chiêm Nghiệm',
    hanh: 'Thủy / Kim',
    desc: 'Đầu óc phân tích sâu sắc, tìm tòi chân lý, có xu hướng tâm linh hoặc triết học. Cần không gian tĩnh lặng để đúc kết tri thức độc bản.',
    strengths: ['Tư duy phản biện sắc bén', 'Trực giác tâm linh', 'Độc lập trong tư tưởng'],
    careers: ['Nghiên cứu khoa học, triết học, lập trình, chuyên gia phân tích'],
  },
  8: {
    title: 'Nhà Điều Hành & Quyền Lực',
    hanh: 'Kim',
    desc: 'Tư duy tài chính xuất chúng, có bản lĩnh lãnh đạo, tham vọng lớn và năng lực hiện thực hóa mục tiêu tài chính vĩ mô.',
    strengths: ['Bản lĩnh kinh doanh', 'Kiểm soát tài chính', 'Ý chí vươn lên đỉnh cao'],
    careers: ['Chủ doanh nghiệp, giám đốc điều hành, đầu tư tài chính, ngân hàng'],
  },
  9: {
    title: 'Nhà Nhân Đạo & Lý Tưởng',
    hanh: 'Hỏa',
    desc: 'Tầm nhìn bao quát, tâm thế phụng sự xã hội, giàu lòng bao dung và có sức ảnh hưởng sâu rộng đến tinh thần của tập thể.',
    strengths: ['Tấm lòng quảng đại', 'Sức hút lãnh đạo tinh thần', 'Lý tưởng nhân văn cao đẹp'],
    careers: ['Tổ chức phi chính phủ, giáo dục khai phóng, văn hóa nghệ thuật'],
  },
  10: {
    title: 'Nhà Tiên Phong Đa Năng',
    hanh: 'Kim / Thủy',
    desc: 'Linh hoạt, tự tin, khả năng thích ứng tuyệt vời trong mọi hoàn cảnh. Có thể chuyển mình thành công ở nhiều lĩnh vực khác nhau.',
    strengths: ['Tự lập cao', 'Khả năng đa nhiệm', 'Sức bật kiên cường'],
    careers: ['Doanh nhân, quản lý dự án, cố vấn chiến lược, công nghệ'],
  },
  11: {
    title: 'Bậc Thầy Trực Giác (Master Number)',
    hanh: 'Hỏa / Thủy',
    desc: 'Con số Master đặc biệt mang năng lượng tâm linh cao độ, trực giác siêu phàm, nhạy cảm với năng lượng vũ trụ và có sứ mệnh dẫn dắt tinh thần.',
    strengths: ['Trực giác nhạy bén', 'Khả năng truyền cảm hứng tâm linh', 'Tầm nhìn vượt thời đại'],
    careers: ['Nhà trị liệu tâm lý, cố vấn tâm linh, triết học, nghệ thuật thị giác'],
  },
  22: {
    title: 'Kiến Trúc Sư Bậc Thầy (Master Builder)',
    hanh: 'Thổ / Kim',
    desc: 'Khả năng biến những giấc mơ vĩ đại nhất thành hiện thực hữu hình trên mặt đất. Kết hợp giữa trực giác tâm linh của số 11 và tính thực tế của số 4.',
    strengths: ['Tầm nhìn vĩ mô', 'Năng lực thực thi phi thường', 'Tạo tác công trình để đời'],
    careers: ['Chính khách, nhà kiến thiết đô thị, lãnh đạo tập đoàn đa quốc gia'],
  },
};

function calculateLifePath(birthDateStr) {
  // birthDateStr: YYYY-MM-DD
  const parts = birthDateStr.split('-');
  if (parts.length !== 3) return 7;
  const digits = birthDateStr.replace(/[^0-9]/g, '').split('').map(Number);
  let sum = digits.reduce((acc, cur) => acc + cur, 0);

  // Reduce to 2-11 or 22
  while (sum > 11 && sum !== 22) {
    sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
  }
  return sum;
}

export default function ThanSoHoc({ onBackToServices, onOpen199k }) {
  const [fullName, setFullName] = useState('Nguyễn Văn An');
  const [dob, setDob] = useState('1995-10-15');
  const [activeNumber, setActiveNumber] = useState(9);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();
    const lp = calculateLifePath(dob);
    setActiveNumber(lp);
    setHasCalculated(true);
  };

  const trait = NUMEROLOGY_TRAITS[activeNumber] || NUMEROLOGY_TRAITS[9];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Back button & Title */}
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
            Tra Cứu Thần Số Học Pythagoras
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Khám phá Con Số Chủ Đạo (Life Path), tiềm năng thiên bẩm và định hướng vận mệnh tương lai
          </p>
        </div>

        <button
          type="button"
          onClick={onOpen199k}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-700 to-amber-700 text-white font-bold text-xs shadow-md hover:brightness-105 cursor-pointer"
        >
          Luận Giải Chuyên Sâu 199k
        </button>
      </div>

      {/* Input Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-md mb-8">
        <form onSubmit={handleCalculate} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              Họ và tên của bạn:
            </label>
            <div className="relative">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="VD: Nguyễn Văn An"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-300 bg-[#fdfbf7] text-stone-900 font-bold focus:border-amber-600 focus:ring-1 focus:ring-amber-500"
              />
              <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              Ngày sinh dương lịch:
            </label>
            <div className="relative">
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-300 bg-[#fdfbf7] text-stone-900 font-bold focus:border-amber-600 focus:ring-1 focus:ring-amber-500"
              />
              <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-700 via-red-700 to-amber-800 text-white font-bold text-sm shadow-md hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Tra Cứu Bản Đồ Số</span>
            </button>
          </div>
        </form>
      </div>

      {/* Result Display */}
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-[#fffdfa] via-white to-amber-50/40 rounded-3xl p-6 sm:p-8 border-2 border-amber-400 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-amber-200">
            <div>
              <span className="text-xs text-amber-800 font-bold uppercase tracking-wider block mb-1">
                Bản mệnh đương số: {fullName || 'Quý khách'} (Ngày sinh: {dob})
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 flex items-center gap-3">
                <span>Con Số Chủ Đạo:</span>
                <span className="text-red-700 text-3xl sm:text-4xl font-extrabold underline decoration-amber-500">
                  Số {activeNumber}
                </span>
              </h3>
              <p className="text-sm font-semibold text-amber-900 mt-1">
                Danh hiệu: {trait.title} (Ngũ hành tượng trưng: {trait.hanh})
              </p>
            </div>

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-700 via-amber-600 to-amber-800 flex items-center justify-center text-white font-display text-4xl font-extrabold shadow-md shrink-0">
              {activeNumber}
            </div>
          </div>

          {/* Description */}
          <div className="py-6 border-b border-stone-200">
            <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-700" />
              <span>Đặc Điểm Tính Cách & Bản Lĩnh Thiên Bẩm:</span>
            </h4>
            <p className="text-stone-700 text-sm leading-relaxed">{trait.desc}</p>
          </div>

          {/* Strengths & Careers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-300">
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block mb-2">
                3 Thế Mạnh Vượt Trội Của Bạn:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-emerald-800">
                {trait.strengths.map((s, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-300">
              <span className="text-xs font-bold text-amber-950 uppercase tracking-wider block mb-2">
                Lĩnh Vực & Ngành Nghề Thăng Tiến Nhất:
              </span>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                {trait.careers[0]}
              </p>
              <p className="text-[11px] text-stone-500 mt-2">
                Khi chọn đúng ngành tương ứng với con số chủ đạo, bạn sẽ được khai mở 100% năng lượng và hạn chế tối đa trở ngại.
              </p>
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-red-50 to-amber-50 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="font-bold text-sm text-stone-900">
                Muốn kết hợp Thần Số Học cùng Lá Số Tử Vi 12 Cung?
              </h5>
              <p className="text-xs text-stone-600 mt-0.5">
                Nhận bản luận giải đối chiếu đa trường phái chi tiết 15-20 trang chỉ với 199.000đ.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpen199k}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-amber-700 text-white font-bold text-xs shadow-md hover:brightness-105 shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Đăng Ký Luận 199k</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
