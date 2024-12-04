import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container max-w-[900px] mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">개인정보처리방침</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="mb-8">
            유갓(이하 '회사')는 이용자의 개인정보를 중요시하며, 『개인정보 보호법』, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』 등 
            관련 법령을 준수합니다. 회사는 본 개인정보처리방침을 통해 이용자가 제공한 개인정보가 어떻게 이용되고 보호되고 있는지 안내드립니다.
          </p>

          <p className="mb-8">
            본 개인정보처리방침은 회사가 운영하는 리워드팩토리(이하 '서비스')에 적용됩니다.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제1조 (개인정보 수집에 대한 동의)</h2>
            <p>회사는 개인정보 수집에 대한 동의를 받기 위해 서비스 이용 약관 및 개인정보처리방침 동의 절차를 제공합니다. 
            이용자는 동의를 거부할 수 있으며, 이 경우 서비스 이용이 제한될 수 있습니다.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제2조 (개인정보의 수집 항목 및 이용 목적)</h2>
            <p>회사는 서비스 제공 및 운영, 법적 의무 이행을 위해 다음과 같은 개인정보를 수집합니다.</p>
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">1. 필수 수집 정보</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>회원가입: 이름, 이메일 주소, 비밀번호, 휴대폰 번호</li>
                <li>서비스 운영: IP 주소, 기기정보(운영체제, 브라우저 유형), 이용 로그</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">2. 선택 수집 정보</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>마케팅 및 이벤트 참여: 생년월일, 성별</li>
                <li>유료 결제: 결제정보(카드번호, 계좌번호), 환불 계좌정보</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">3. 자동 수집 정보</h3>
              <ul className="list-disc pl-6">
                <li>앱 사용 기록, 광고 식별자(ADID/IDFA), 쿠키</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">이용 목적</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>서비스 제공 및 사용자 인증</li>
                <li>맞춤형 콘텐츠 및 광고 제공</li>
                <li>고객 문의 및 불만 처리</li>
                <li>법적 의무 이행 및 분쟁 해결</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제3조 (개인정보 수집 방법)</h2>
            <p>회사는 다음 방법으로 개인정보를 수집합니다.</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>회원가입 및 서비스 이용 시 이용자가 직접 입력</li>
              <li>자동수집 장치(쿠키, 로그 분석 도구) 활용</li>
              <li>고객센터 문의 시 제공</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제4조 (개인정보의 공유 및 제공)</h2>
            <p>회사는 이용자의 사전 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 단, 아래의 경우는 예외로 합니다.</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령에 따라 요구되는 경우</li>
              <li>서비스 제공을 위해 불가피한 경우(결제 대행, 본인 인증 등)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제5조 (개인정보 처리 위탁)</h2>
            <p>회사는 서비스 운영을 위해 일부 업무를 외부 업체에 위탁하며, 개인정보의 안전한 처리를 위해 관리·감독합니다.</p>
            <div className="mt-4">
              <p className="font-semibold">위탁 내용 및 수탁자</p>
              <ul className="list-disc pl-6 mt-2">
                <li>결제 대행: ㈜카카오</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제6조 (개인정보의 보유 및 이용 기간)</h2>
            <p>이용자의 개인정보는 수집·이용 목적이 달성된 후 지체 없이 파기됩니다. 다만, 관련 법령에 따라 보존해야 하는 경우, 다음과 같이 보관합니다.</p>
            <div className="mt-4">
              <p className="font-semibold">법령에 따른 보관 정보</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>계약 및 청약철회 기록: 5년 (전자상거래법)</li>
                <li>소비자 불만 및 분쟁 처리 기록: 3년 (전자상거래법)</li>
                <li>로그 기록: 3개월 (통신비밀보호법)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제7조 (이용자의 권리와 행사 방법)</h2>
            <p>이용자는 언제든지 자신의 개인정보를 열람, 수정, 삭제하거나 처리 정지를 요청할 수 있습니다. 
            이를 위해 고객센터 또는 개인정보 보호책임자에게 문의하십시오.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제8조 (쿠키의 사용 및 거부)</h2>
            <p>회사는 맞춤형 서비스를 제공하기 위해 쿠키를 사용합니다. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다. 
            다만, 쿠키 거부 시 일부 서비스 이용이 제한될 수 있습니다.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제9조 (개인정보의 파기 절차 및 방법)</h2>
            <p>회사는 개인정보의 보유 기간이 경과하거나 처리 목적이 달성된 경우, 다음 절차와 방법으로 개인정보를 파기합니다.</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>종이 문서: 분쇄 또는 소각</li>
              <li>전자 파일: 복구할 수 없는 방식으로 삭제</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제10조 (개인정보 보호를 위한 기술적·관리적 대책)</h2>
            <p>회사는 개인정보 보호를 위해 다음과 같은 조치를 시행합니다.</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>데이터 암호화 및 접근 통제</li>
              <li>백신 프로그램 및 보안 시스템 운영</li>
              <li>개인정보 취급 직원에 대한 정기 교육</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">제11조 (의견 수렴 및 불만 처리)</h2>
            <p>회사는 개인정보 보호를 위해 고객지원센터를 운영하며, 관련 문의 및 불만 사항 접수를 받고 있습니다.</p>
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">개인정보 보호책임자</h3>
              <ul className="list-none pl-6 space-y-1">
                <li>이름: 윤석규</li>
                <li>직책: 개인정보 보호책임자</li>
                <li>연락처: skyutech@gmail.com</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">고객센터</h3>
              <ul className="list-none pl-6 space-y-1">
                <li>전화: 070-4090-6579</li>
                <li>운영시간: 평일 10:00 ~ 17:00 (점심시간 12:30 ~ 13:30)</li>
              </ul>
            </div>
          </section>

          <section className="mt-12 border-t pt-8">
            <h2 className="text-xl font-semibold mb-4">부칙</h2>
            <p>본 개인정보처리방침은 2024년 12월 1일부터 적용됩니다. 변경 사항은 사전 공지 후 시행됩니다.</p>
          </section>
        </div>
      </div>
    </div>
  )
} 