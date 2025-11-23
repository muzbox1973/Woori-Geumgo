import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { PRODUCT_HEADER } from '../images/assets';

const Products: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <div className="relative h-[300px] bg-gray-900 flex items-center justify-center">
        <img 
          src={PRODUCT_HEADER} 
          alt="Office" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">기업/사업자 전용 상품</h1>
          <p className="text-gray-300">성공하는 사장님을 위한 우리금고만의 특별한 혜택을 확인하세요.</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">금융상품 안내</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Product 1: Loans */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="bg-blue-50 text-primary text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
              Best Seller
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">우리 사장님 성공 대출</h2>
            <p className="text-lg text-gray-600 mb-6">
              사업 확장을 꿈꾸시나요? 복잡한 심사 없이, 합리적인 금리로 사장님의 꿈을 지원합니다.
            </p>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-bold text-gray-900 block">대상</span>
                    <span className="text-gray-600">개업 1년 이상 경과한 개인사업자 및 법인</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-bold text-gray-900 block">한도</span>
                    <span className="text-gray-600">최대 <span className="text-primary font-bold">1억 원</span> (신용도에 따라 차등 적용)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-bold text-gray-900 block">금리</span>
                    <span className="text-gray-600 font-roboto">최저 연 <span className="text-primary font-bold">3.5%</span> ~</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <Link to="/consultation">
              <Button variant="primary" size="lg" className="gap-2">
                대출 상담 신청하기 <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
          
          <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 pattern-grid-lg"></div>
            <div className="relative z-10 bg-white p-8 rounded-xl shadow-lg max-w-sm w-full transform group-hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500 text-sm">월 예상 상환액</span>
                <span className="text-primary font-bold text-xs bg-blue-50 px-2 py-1 rounded">예시</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2 font-roboto">1,250,000 원</div>
              <div className="text-sm text-gray-500 mb-6">원리금균등상환 (1억 원 / 36개월 기준)</div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-secondary w-2/3 h-full"></div>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-right">상환 진행률 66%</p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 my-12"></div>

        {/* Product 2: Savings */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2">
             <div className="bg-green-50 text-secondary text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
              수수료 Zero
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">사업자 우대 입출금 통장</h2>
            <p className="text-lg text-gray-600 mb-6">
              매일 발생하는 거래 비용, 이제 아끼세요. 사장님을 위한 수수료 면제 전용 통장입니다.
            </p>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-bold text-gray-900 block">가입 대상</span>
                    <span className="text-gray-600">사업자등록증을 소지한 개인사업자</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-bold text-gray-900 block">우대 혜택</span>
                    <span className="text-gray-600">일 평균 잔액 500만 원 이상 시 <span className="text-secondary font-bold">전자금융 수수료 전액 면제</span></span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary mt-1 shrink-0" size={20} />
                  <div>
                    <span className="font-bold text-gray-900 block">부가 서비스</span>
                    <span className="text-gray-600">세무 신고용 거래 내역 자동 발송 서비스 제공</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <Link to="/consultation">
              <Button variant="secondary" size="lg" className="gap-2">
                가입 문의하기 <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
          
           <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center p-8 relative overflow-hidden group">
             <div className="absolute inset-0 bg-secondary/5"></div>
              <div className="relative z-10 w-full max-w-sm space-y-4">
                 {/* Card Mockup */}
                 <div className="bg-gradient-to-br from-[#2E8B57] to-[#1a5c38] rounded-xl p-6 shadow-xl text-white transform group-hover:rotate-1 transition-transform duration-300">
                    <div className="flex justify-between items-start mb-8">
                       <span className="font-bold text-lg opacity-80">WOORI GEUMGO</span>
                       <span className="text-xs border border-white/30 px-2 py-1 rounded">Biz Premier</span>
                    </div>
                    <div className="font-roboto text-xl tracking-widest mb-4">1234 5678 9012 3456</div>
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-xs opacity-70 mb-1">MEMBER NAME</p>
                          <p className="font-medium">KIM SA JANG</p>
                       </div>
                       <div className="w-8 h-8 rounded-full bg-white/20"></div>
                    </div>
                 </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;