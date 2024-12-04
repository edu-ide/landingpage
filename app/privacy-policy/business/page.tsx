export default function BusinessPrivacyPolicy() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container max-w-[900px] mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">리워드팩토리 비즈니스 개인정보처리방침</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-500 mb-8">
            최종 수정일: 2024년 3월 19일
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. 개인정보의 처리 목적</h2>
            <p>리워드팩토리 비즈니스(이하 '서비스')는 다음의 목적을 위하여 개인정보를 처리하고 있습니다.</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>비즈니스 회원 가입 및 관리</li>
              <li>매장 정보 등록 및 관리</li>
              <li>포인트 적립/사용 내역 관리</li>
              <li>정산 처리</li>
              <li>고객 관리 및 마케팅</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. 수집하는 개인정보 항목</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>사업자 정보
                <ul className="list-circle pl-6 mt-1">
                  <li>상호명, 사업자등록번호</li>
                  <li>대표자명, 사업장 주소</li>
                  <li>사업자등록증 사본</li>
                </ul>
              </li>
              <li>담당자 정보
                <ul className="list-circle pl-6 mt-1">
                  <li>이름, 휴대폰 번호, 이메일</li>
                  <li>부서, 직책</li>
                </ul>
              </li>
              <li>정산 정보
                <ul className="list-circle pl-6 mt-1">
                  <li>정산계좌 정보(은행명, 계좌번호, 예금주)</li>
                  <li>통장사본</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. 개인정보의 제3자 제공</h2>
            <p>서비스는 정산 처리 등을 위해 다음과 같이 개인정보를 제3자에게 제공할 수 있습니다.</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>결제 대행사: 결제 처리</li>
              <li>정산 대행사: 정산금 지급</li>
              <li>문자 발송 대행사: 알림 발송</li>
            </ul>
          </section>

          {/* 기존 섹션들과 동일... */}
        </div>
      </div>
    </div>
  )
} 