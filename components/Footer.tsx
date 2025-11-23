import React from 'react';
import { ShieldCheck, Phone, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-white" size={24} />
              <span className="text-xl font-bold text-white">우리금고</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              지역 사장님들의 든든한 동반자.<br />
              정직과 신뢰를 바탕으로<br />
              함께 성장합니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">메뉴</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">회사소개</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">금융소비자보호</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">고객센터</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span className="font-roboto font-bold text-lg text-white">1588-0000</span>
                <span className="text-gray-500 text-xs ml-2">(평일 09:00 ~ 16:00)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>서울특별시 강남구 테헤란로 123, 우리금고 빌딩 1층</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@woorigeumgo.co.kr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-xs text-center text-gray-500">
          <p>© 2024 WOORI GEUMGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;