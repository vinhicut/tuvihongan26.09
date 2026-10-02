import React, { useState } from 'react';
import { Compass, CheckCircle2, AlertTriangle, ShieldCheck, ArrowRight, Star } from 'lucide-react';

const CUNG_DATA = {
  Kham: {
    name: 'Khảm',
    hanh: 'Thủy',
    nhom: 'Đông Tứ Mệnh',
    color: 'Xanh dương, đen, trắng, ánh kim',
    badColor: 'Vàng, nâu đất',
    huongTot: [
      { huong: 'Đông Nam', sao: 'Sinh Khí', yNghia: 'Thu hút tài lộc, danh tiếng, thăng quan tiến chức' },
      { huong: 'Đông', sao: 'Thiên Y', yNghia: 'Cải thiện sức khỏe, trường thọ, gặp quý nhân trợ giúp' },
      { huong: 'Nam', sao: 'Diên Niên', yNghia: 'Củng cố các mối quan hệ tình cảm, gia đình êm ấm' },
      { huong: 'Bắc', sao: 'Phục Vị', yNghia: 'Củng cố sức mạnh tinh thần, may mắn trong thi cử' },
    ],
    huongXau: [
      { huong: 'Tây Nam', sao: 'Tuyệt Mệnh', yNghia: 'Họa tổn tài, bệnh tật, thị phi trắc trở' },
      { huong: 'Đông Bắc', sao: 'Ngũ Quỷ', yNghia: 'Mất nguồn thu nhập, mất việc làm, cãi vã' },
      { huong: 'Tây Bắc', sao: 'Lục Sát', yNghia: 'Xáo trộn trong quan hệ tình cảm, thù hận, tai nạn' },
      { huong: 'Tây', sao: 'Họa Hại', yNghia: 'Không may mắn, thị phi, thất bại công việc' },
    ],
  },
  Khon: {
    name: 'Khôn',
    hanh: 'Thổ',
    nhom: 'Tây Tứ Mệnh',
    color: 'Vàng, nâu đất, đỏ, hồng, tím',
    badColor: 'Xanh lá cây, xanh lục',
    huongTot: [
      { huong: 'Đông Bắc', sao: 'Sinh Khí', yNghia: 'Đại cát đại lợi, tài lộc dồi dào, phát triển kinh doanh' },
      { huong: 'Tây', sao: 'Thiên Y', yNghia: 'Sức khỏe dồi dào, tiêu trừ bệnh tật, bình an' },
      { huong: 'Tây Bắc', sao: 'Diên Niên', yNghia: 'Gia đạo hưng vượng, vợ chồng hòa thuận, nhân duyên tốt' },
      { huong: 'Tây Nam', sao: 'Phục Vị', yNghia: 'Tâm an định, củng cố nội lực, thi cử thăng tiến' },
    ],
    huongXau: [
      { huong: 'Bắc', sao: 'Tuyệt Mệnh', yNghia: 'Nguy hại sức khỏe, tai ương bất ngờ' },
      { huong: 'Đông Nam', sao: 'Ngũ Quỷ', yNghia: 'Thị phi phá tài, tiểu nhân hãm hại' },
      { huong: 'Nam', sao: 'Lục Sát', yNghia: 'Bất hòa tình cảm, kiện tụng rắc rối' },
      { huong: 'Đông', sao: 'Họa Hại', yNghia: 'Trục trặc công danh, hao tốn tiền của' },
    ],
  },
  Chan: {
    name: 'Chấn',
    hanh: 'Mộc',
    nhom: 'Đông Tứ Mệnh',
    color: 'Xanh lá cây, xanh lục, đen, xanh nước biển',
    badColor: 'Trắng, xám, ghi',
    huongTot: [
      { huong: 'Nam', sao: 'Sinh Khí', yNghia: 'Vượng khí công danh, tiền đồ sáng lạn' },
      { huong: 'Bắc', sao: 'Thiên Y', yNghia: 'Thân tâm an lạc, tiêu trừ tai ách' },
      { huong: 'Đông Nam', sao: 'Diên Niên', yNghia: 'Nhân duyên bền chặt, bạn bè quý nhân đồng hành' },
      { huong: 'Đông', sao: 'Phục Vị', yNghia: 'Vững vàng nội tâm, thi cử đỗ đạt' },
    ],
    huongXau: [
      { huong: 'Tây', sao: 'Tuyệt Mệnh', yNghia: 'Bất lợi sự nghiệp, hao tổn sức khỏe' },
      { huong: 'Tây Bắc', sao: 'Ngũ Quỷ', yNghia: 'Tổn hại tài vận, gia đạo lục đục' },
      { huong: 'Đông Bắc', sao: 'Lục Sát', yNghia: 'Tranh chấp thị phi, cản trở tài lộc' },
      { huong: 'Tây Nam', sao: 'Họa Hại', yNghia: 'Khó khăn bất ngờ, mưu sự khó thành' },
    ],
  },
  Ton: {
    name: 'Tốn',
    hanh: 'Mộc',
    nhom: 'Đông Tứ Mệnh',
    color: 'Xanh lá cây, xanh lam, xanh nước biển, đen',
    badColor: 'Trắng, bạc, ánh kim',
    huongTot: [
      { huong: 'Bắc', sao: 'Sinh Khí', yNghia: 'Hút vượng khí, tài lộc sinh sôi, danh vị thăng hoa' },
      { huong: 'Nam', sao: 'Thiên Y', yNghia: 'Tăng cường nguyên khí, bình an khang thái' },
      { huong: 'Đông', sao: 'Diên Niên', yNghia: 'Tình duyên thắm thiết, gia đạo ấm êm' },
      { huong: 'Đông Nam', sao: 'Phục Vị', yNghia: 'May mắn bình an, học hành tấn tới' },
    ],
    huongXau: [
      { huong: 'Đông Bắc', sao: 'Tuyệt Mệnh', yNghia: 'Tai họa sức khỏe, phá tài hao của' },
      { huong: 'Tây Nam', sao: 'Ngũ Quỷ', yNghia: 'Bất hòa quan hệ, gặp chuyện bất trắc' },
      { huong: 'Tây', sao: 'Lục Sát', yNghia: 'Tình cảm rạn nứt, hao mòn năng lượng' },
      { huong: 'Tây Bắc', sao: 'Họa Hại', yNghia: 'Thiếu may mắn, gặp khó khăn cản lối' },
    ],
  },
  Can: {
    name: 'Càn',
    hanh: 'Kim',
    nhom: 'Tây Tứ Mệnh',
    color: 'Trắng, xám bạc, vàng, nâu đất',
    badColor: 'Đỏ, hồng, cam, tím',
    huongTot: [
      { huong: 'Tây', sao: 'Sinh Khí', yNghia: 'Thịnh vượng công danh, tài lộc dồi dào' },
      { huong: 'Đông Bắc', sao: 'Thiên Y', yNghia: 'Gặp thời đắc ý, trường thọ, bình an' },
      { huong: 'Tây Nam', sao: 'Diên Niên', yNghia: 'Vợ chồng hòa hợp, quý nhân nâng đỡ' },
      { huong: 'Tây Bắc', sao: 'Phục Vị', yNghia: 'Nâng cao ý chí, thi cử đỗ đạt vinh hiển' },
    ],
    huongXau: [
      { huong: 'Nam', sao: 'Tuyệt Mệnh', yNghia: 'Tổn hao sinh khí, trở ngại sự nghiệp' },
      { huong: 'Đông', sao: 'Ngũ Quỷ', yNghia: 'Mất mát tài sản, tiểu nhân quấy phá' },
      { huong: 'Bắc', sao: 'Lục Sát', yNghia: 'Thị phi điều tiếng, bất ổn tình cảm' },
      { huong: 'Đông Nam', sao: 'Họa Hại', yNghia: 'Công việc trắc trở, hao tốn vô cớ' },
    ],
  },
  Doai: {
    name: 'Đoài',
    hanh: 'Kim',
    nhom: 'Tây Tứ Mệnh',
    color: 'Trắng, ánh kim, vàng sẫm, nâu đất',
    badColor: 'Đỏ, cam, tím, hồng',
    huongTot: [
      { huong: 'Tây Bắc', sao: 'Sinh Khí', yNghia: 'Chiêu tài đắc lộc, vượng đường kinh doanh' },
      { huong: 'Tây Nam', sao: 'Thiên Y', yNghia: 'Sức khỏe cải thiện, thân an tâm lạc' },
      { huong: 'Đông Bắc', sao: 'Diên Niên', yNghia: 'Nhân duyên hòa ái, phúc đức dài lâu' },
      { huong: 'Tây', sao: 'Phục Vị', yNghia: 'Gia đạo an vui, sự nghiệp ổn định' },
    ],
    huongXau: [
      { huong: 'Đông', sao: 'Tuyệt Mệnh', yNghia: 'Tổn hao nguyên khí, bất lợi danh vận' },
      { huong: 'Nam', sao: 'Ngũ Quỷ', yNghia: 'Bất an tinh thần, dễ gặp tranh chấp' },
      { huong: 'Đông Nam', sao: 'Lục Sát', yNghia: 'Tình cảm rắc rối, hao tài tốn lực' },
      { huong: 'Bắc', sao: 'Họa Hại', yNghia: 'Bất lợi thi cử, mưu sự dễ gặp trắc trở' },
    ],
  },
  CanTho: {
    name: 'Cấn',
    hanh: 'Thổ',
    nhom: 'Tây Tứ Mệnh',
    color: 'Vàng, nâu đất, đỏ, cam, hồng',
    badColor: 'Xanh lá cây, xanh nõn chuối',
    huongTot: [
      { huong: 'Tây Nam', sao: 'Sinh Khí', yNghia: 'Tài vận hanh thông, công thành danh toại' },
      { huong: 'Tây Bắc', sao: 'Thiên Y', yNghia: 'Gặp thầy gặp bạn tốt, sức khỏe khang cường' },
      { huong: 'Tây', sao: 'Diên Niên', yNghia: 'Gia đình gắn kết, vợ chồng hòa thuận thủy chung' },
      { huong: 'Đông Bắc', sao: 'Phục Vị', yNghia: 'Tâm trí sáng suốt, phát triển học vấn' },
    ],
    huongXau: [
      { huong: 'Đông Nam', sao: 'Tuyệt Mệnh', yNghia: 'Đại hạn sức khỏe, trở ngại tài lộc' },
      { huong: 'Bắc', sao: 'Ngũ Quỷ', yNghia: 'Thị phi khẩu thiệt, hao tán tiền của' },
      { huong: 'Đông', sao: 'Lục Sát', yNghia: 'Rạn nứt tình duyên, trở ngại công danh' },
      { huong: 'Nam', sao: 'Họa Hại', yNghia: 'Bất hòa, kế hoạch dễ bị đình trệ' },
    ],
  },
  Ly: {
    name: 'Ly',
    hanh: 'Hỏa',
    nhom: 'Đông Tứ Mệnh',
    color: 'Đỏ, hồng, tím, cam, xanh lục lá cây',
    badColor: 'Đen, xanh nước biển thẫm',
    huongTot: [
      { huong: 'Đông', sao: 'Sinh Khí', yNghia: 'Vinh hiển công danh, danh tiếng vang xa' },
      { huong: 'Đông Nam', sao: 'Thiên Y', yNghia: 'Bình an mạnh khỏe, tai qua nạn khỏi' },
      { huong: 'Bắc', sao: 'Diên Niên', yNghia: 'Gia đạo sum vầy, tình duyên thắm đượm' },
      { huong: 'Nam', sao: 'Phục Vị', yNghia: 'May mắn hỗ trợ, tâm trí an bình' },
    ],
    huongXau: [
      { huong: 'Tây Bắc', sao: 'Tuyệt Mệnh', yNghia: 'Tổn hao vượng khí, dễ gặp hiểm nguy' },
      { huong: 'Tây', sao: 'Ngũ Quỷ', yNghia: 'Tai tiếng thị phi, kinh doanh trắc trở' },
      { huong: 'Tây Nam', sao: 'Lục Sát', yNghia: 'Trục trặc gia đạo, bất lợi mưu sự' },
      { huong: 'Đông Bắc', sao: 'Họa Hại', yNghia: 'Gặp chuyện không may, hao tâm tổn sức' },
    ],
  },
};

function calculateCungPhi(year, gender) {
  const lastTwo = year % 100;
  let sum = Math.floor(lastTwo / 10) + (lastTwo % 10);
  while (sum > 9) sum = Math.floor(sum / 10) + (sum % 10);

  let val;
  if (year < 2000) {
    val = gender === 'nam' ? 10 - sum : 5 + sum;
  } else {
    val = gender === 'nam' ? 9 - sum : 6 + sum;
  }
  while (val > 9) val = Math.floor(val / 10) + (val % 10);
  if (val <= 0) val += 9;

  const keyMap = {
    1: 'Kham',
    2: 'Khon',
    3: 'Chan',
    4: 'Ton',
    5: gender === 'nam' ? 'Khon' : 'CanTho',
    6: 'Can',
    7: 'Doai',
    8: 'CanTho',
    9: 'Ly',
  };

  return CUNG_DATA[keyMap[val]] || CUNG_DATA.Kham;
}

export default function BatQuaiPhongThuy({ onBackToServices, onOpen199k }) {
  const [birthYear, setBirthYear] = useState('1990');
  const [gender, setGender] = useState('nam');
  const [result, setResult] = useState(() => calculateCungPhi(1990, 'nam'));

  const handleLookup = (e) => {
    e.preventDefault();
    const y = parseInt(birthYear, 10);
    if (!y || y < 1920 || y > 2035) {
      alert('Vui lòng nhập năm sinh từ 1920 đến 2035');
      return;
    }
    setResult(calculateCungPhi(y, gender));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Back Button & Header */}
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
            Tra Cứu Bát Quái - Cung Phi Bát Trạch
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Định hướng nhà cửa, ban thờ, hướng bàn làm việc & màu sắc phong thủy cát tường
          </p>
        </div>

        <button
          type="button"
          onClick={onOpen199k}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-700 to-amber-700 text-white font-bold text-xs shadow-md hover:brightness-105 cursor-pointer"
        >
          Tư Vấn Phong Thủy 199k
        </button>
      </div>

      {/* Input form */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-md mb-8">
        <form onSubmit={handleLookup} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              Năm sinh (Dương lịch / Âm lịch):
            </label>
            <input
              type="number"
              min="1920"
              max="2035"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-[#fdfbf7] text-stone-900 font-bold focus:border-amber-600 focus:ring-1 focus:ring-amber-500"
              placeholder="VD: 1990"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              Giới tính đương số:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setGender('nam')}
                className={`py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer border ${
                  gender === 'nam'
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                Nam Mạng
              </button>
              <button
                type="button"
                onClick={() => setGender('nu')}
                className={`py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer border ${
                  gender === 'nu'
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                Nữ Mạng
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-700 via-red-700 to-amber-800 text-white font-bold text-sm shadow-md hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-yellow-300" />
              <span>Tra Cứu Cung Phi</span>
            </button>
          </div>
        </form>
      </div>

      {/* Result Card */}
      {result && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#fffdfa] via-white to-amber-50/40 rounded-3xl p-6 sm:p-8 border-2 border-amber-400 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-amber-200">
              <div className="space-y-1">
                <span className="text-xs text-amber-800 font-bold uppercase tracking-wider">
                  Kết quả luận giải năm sinh {birthYear} ({gender === 'nam' ? 'Nam' : 'Nữ'})
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 flex items-center gap-3">
                  <span>Cung Mệnh:</span>
                  <span className="text-red-700 underline decoration-amber-500">
                    {result.name} ({result.hanh})
                  </span>
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-2xl bg-amber-100 border border-amber-300 text-amber-950 font-bold text-sm shadow-xs">
                  {result.nhom}
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-b border-stone-200 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
                <span className="font-bold text-emerald-900 block mb-1">Màu sắc tương sinh / vượng phát:</span>
                <span className="text-emerald-800 font-medium">{result.color}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200">
                <span className="font-bold text-red-900 block mb-1">Màu sắc tương khắc (nên tránh):</span>
                <span className="text-red-800 font-medium">{result.badColor}</span>
              </div>
            </div>

            {/* 4 Good Directions & 4 Bad Directions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-5">
              {/* 4 Good */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-800 uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>4 Hướng Cát Tường (Nên Đặt Cửa, Bàn Làm Việc, Ban Thờ):</span>
                </div>
                <div className="space-y-2.5">
                  {result.huongTot.map((h, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-emerald-300 shadow-2xs flex items-start justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                          <span className="text-emerald-700">Hướng {h.huong}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                            {h.sao}
                          </span>
                        </div>
                        <p className="text-stone-600 mt-1 leading-relaxed">{h.yNghia}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Bad */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-red-800 uppercase tracking-wide">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>4 Hướng Hung Hiểm (Cần Tránh Hoặc Đặt Khu Vệ Sinh Hóa Giải):</span>
                </div>
                <div className="space-y-2.5">
                  {result.huongXau.map((h, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-red-200 shadow-2xs flex items-start justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                          <span className="text-red-700">Hướng {h.huong}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-800 font-semibold">
                            {h.sao}
                          </span>
                        </div>
                        <p className="text-stone-600 mt-1 leading-relaxed">{h.yNghia}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Note banner */}
            <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-stone-700">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
                <span>
                  Để bố trí phong thủy nhà ở chuẩn xác theo địa hình thực tế, quý khách nên đăng ký bản luận giải phong thủy chi tiết 199k hoặc kết nối Zalo với Thầy Hồng Ân.
                </span>
              </div>
              <button
                type="button"
                onClick={onOpen199k}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-700 to-amber-700 text-white font-bold shrink-0 hover:brightness-105 shadow-xs cursor-pointer"
              >
                Đăng Ký Luận 199k
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
