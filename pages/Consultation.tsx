import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, FileText, Check } from 'lucide-react';
import Button from '../components/Button';
import { CONSULT_HEADER } from '../images/assets';
import { ConsultationType, ConsultationFormState } from '../types';

const Consultation: React.FC = () => {
  const [formState, setFormState] = useState<ConsultationFormState>({
    companyName: '',
    ownerName: '',
    contact: '',
    interests: [],
    preferredTime: '',
    memo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: ConsultationType) => {
    setFormState(prev => {
      const interests = prev.interests.includes(type)
        ? prev.interests.filter(t => t !== type)
        : [...prev.interests, type];
      return { ...prev, interests };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form Submitted:", formState);
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">상담 신청이 완료되었습니다</h2>
          <p className="text-gray-600 mb-8">
            남겨주신 정보를 바탕으로 기업 금융 전문 팀장이<br />
            빠른 시일 내에({formState.contact})로 연락드리겠습니다.
          </p>
          <Link to="/">
            <Button size="lg" fullWidth>홈으로 돌아가기</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="relative h-[250px] bg-primary flex items-center justify-center">
        <img 
          src={CONSULT_HEADER} 
          alt="Consultation" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">1:1 기업 금융 상담</h1>
          <p className="text-blue-100">전문가가 직접 찾아가는 맞춤형 상담 서비스를 경험해보세요.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Info Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">방문 상담 안내</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">전화 상담</h4>
                    <p className="text-sm text-gray-600 mt-1">1588-0000 (내선 2번)</p>
                    <p className="text-xs text-gray-500">평일 09:00 ~ 16:00</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">찾아가는 서비스</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      원하시는 시간과 장소에 맞춰<br/>담당 팀장이 방문합니다.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">준비 서류</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      사업자등록증 사본, 신분증<br/>
                      <span className="text-xs text-gray-400">* 상담 내용에 따라 추가될 수 있습니다.</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl text-white">
              <h3 className="font-bold text-lg mb-2">꼭 확인해주세요</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                상담 신청 후 24시간 이내(영업일 기준)에 담당자가 배정되어 연락을 드립니다. 급한 용무가 있으신 경우 고객센터로 직접 연락 부탁드립니다.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">상담 예약 신청서</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">업체명 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="companyName"
                      required
                      value={formState.companyName}
                      onChange={handleInputChange}
                      placeholder="(주)우리금고"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">대표자 성함 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="ownerName"
                      required
                      value={formState.ownerName}
                      onChange={handleInputChange}
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">연락처 <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    name="contact"
                    required
                    value={formState.contact}
                    onChange={handleInputChange}
                    placeholder="010-1234-5678"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">관심 분야 (중복 선택 가능)</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Object.values(ConsultationType).map((type) => (
                      <label key={type} className={`
                        cursor-pointer border rounded-lg p-3 text-center text-sm transition-all
                        ${formState.interests.includes(type) 
                          ? 'bg-primary text-white border-primary font-bold shadow-md' 
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}
                      `}>
                        <input 
                          type="checkbox" 
                          className="hidden"
                          checked={formState.interests.includes(type)}
                          onChange={() => handleCheckboxChange(type)}
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">상담 희망 시간</label>
                  <select 
                    name="preferredTime"
                    value={formState.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">시간 선택</option>
                    <option value="09:00 ~ 11:00">오전 (09:00 ~ 11:00)</option>
                    <option value="11:00 ~ 13:00">점심 (11:00 ~ 13:00)</option>
                    <option value="13:00 ~ 15:00">오후 (13:00 ~ 15:00)</option>
                    <option value="15:00 ~ 17:00">늦은 오후 (15:00 ~ 17:00)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">기타 문의사항</label>
                  <textarea 
                    name="memo"
                    value={formState.memo}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="궁금하신 내용을 자유롭게 적어주세요."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" fullWidth variant="primary" className="text-lg shadow-lg">
                    무료 상담 예약하기
                  </Button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    보내주신 개인정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;