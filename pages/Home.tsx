import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Calculator, Scale, ChevronRight, Users, TrendingUp } from 'lucide-react';
import Button from '../components/Button';
import { HERO_BG, FEATURE_LOAN, FEATURE_PAYROLL, FEATURE_TAX } from '../images/assets';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG} 
            alt="Business Office" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
            사장님의 든든한 사업 파트너,<br />
            <span className="text-accent">우리금고</span>가 함께 뜁니다.
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            지역 사장님을 위한 맞춤형 자금 지원부터 직원 급여 관리까지.<br className="hidden md:block"/>
            복잡한 금융, 우리금고에 맡기고 사업에만 집중하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <Button size="lg" variant="accent" className="font-bold min-w-[200px]">
                상담 신청하기
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white min-w-[200px]">
                상품 자세히 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-500">
          <span className="font-medium text-gray-700">지역 내 <span className="text-primary font-bold font-roboto">1,200</span>여 개 파트너사가 선택한 금융기관</span>
          <div className="hidden md:block h-4 w-px bg-gray-300"></div>
          <div className="flex gap-4 opacity-70 grayscale">
             {/* Simple visual placeholders for partner logos using text/icons for simplicity */}
             <div className="flex items-center gap-1"><Users size={16}/> 파트너스 A</div>
             <div className="flex items-center gap-1"><Users size={16}/> 파트너스 B</div>
             <div className="flex items-center gap-1"><Users size={16}/> 파트너스 C</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-wider text-sm uppercase">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">사장님을 위한 핵심 금융 혜택</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">사업 운영에 꼭 필요한 세 가지 핵심 서비스를 담았습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="h-48 overflow-hidden">
                <img src={FEATURE_LOAN} alt="Loan" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">기업 자금 대출</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  담보는 넉넉하게, 금리는 합리적으로.<br/>사업 확장을 위한 든든한 지원군이 되어드립니다.
                </p>
                <Link to="/products" className="text-primary font-bold inline-flex items-center hover:underline">
                  자세히 보기 <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="h-48 overflow-hidden">
                <img src={FEATURE_PAYROLL} alt="Payroll" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary">
                  <Calculator size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">급여 이체 관리</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  전 직원 급여 이체 수수료 0원.<br/>매월 반복되는 업무를 간편하고 빠르게 처리하세요.
                </p>
                <Link to="/products" className="text-secondary font-bold inline-flex items-center hover:underline">
                  자세히 보기 <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="h-48 overflow-hidden">
                <img src={FEATURE_TAX} alt="Tax" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 text-accent">
                  <Scale size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">세무/법무 제휴</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  우리금고 우수 고객을 위한<br/>지역 전문 세무사/법무사 무료 자문 서비스.
                </p>
                <Link to="/consultation" className="text-accent font-bold inline-flex items-center hover:underline">
                  상담 문의하기 <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">사업 고민, 혼자 하지 마세요</h2>
          <p className="text-blue-100 text-lg mb-10">
            우리금고 기업 금융 전문 팀장이 직접 찾아뵙고 가장 알맞은 금융 솔루션을 제안해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/consultation">
              <Button size="lg" variant="accent" className="shadow-lg min-w-[200px] text-lg">
                무료 방문 상담 신청
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 min-w-[200px]">
              지점 위치 확인하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;