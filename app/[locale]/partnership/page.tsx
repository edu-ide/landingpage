import { PartnershipInquiry } from '@/types/partnership';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const partnershipInfo: PartnershipInquiry = {
  title: "리워드팩토리 광고 제휴 문의",
  description: "리워드팩토리와 함께 성장할 파트너를 찾습니다. 광고 제휴를 통해 새로운 고객을 만나보세요.",
  benefits: [
    "리워드팩토리 회원 대상 광고 노출",
    "맞춤형 프로모션 진행 가능",
    "실시간 광고 효과 분석 제공",
    "전문 광고 담당자 배정"
  ],
  requirements: [
    "사업자등록증 보유 필수",
    "6개월 이상 운영 이력",
    "광고 소재 자체 제작 가능"
  ],
  contactInfo: {
    email: "skyutech@gmail.com",
    phone: "070-4090-6579",
    kakao: "리워드팩토리"
  }
};

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            {partnershipInfo.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12">
            {partnershipInfo.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {/* 혜택 섹션 */}
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">제휴 혜택</h2>
              <ul className="space-y-3 sm:space-y-4">
                {partnershipInfo.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base">
                    <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* 요구사항 섹션 */}
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">제휴 요건</h2>
              <ul className="space-y-3 sm:space-y-4">
                {partnershipInfo.requirements.map((req, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base">
                    <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 문의 방법 섹션 */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">문의 방법</h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-gray-400" />
                  <a href={`mailto:${partnershipInfo.contactInfo.email}`} 
                     className="text-blue-600 hover:underline text-sm sm:text-base">
                    {partnershipInfo.contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-gray-400" />
                  <a href={`tel:${partnershipInfo.contactInfo.phone}`}
                     className="text-blue-600 hover:underline text-sm sm:text-base">
                    {partnershipInfo.contactInfo.phone}
                  </a>
                </div>
              </div>
              {partnershipInfo.contactInfo.kakao && (
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-gray-400" />
                  <span className="text-sm sm:text-base">
                    카카오톡: {partnershipInfo.contactInfo.kakao}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 추가 안내사항 */}
          <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
            <p>* 문의하실 때 다음 정보를 함께 보내주시면 더 빠른 답변이 가능합니다:</p>
            <ul className="list-disc pl-4 sm:pl-5 mt-2">
              <li>회사/브랜드명</li>
              <li>웹사이트 URL</li>
              <li>희망하는 광고 형태</li>
              <li>예상 광고 예산</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 