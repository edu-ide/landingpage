export default function AppPrivacyPolicy() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container max-w-[900px] mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">리워드팩토리 앱 개인정보처리방침</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-500 mb-8">
            최종 수정일: 2024년 3월 19일
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. 개인정보의 처리 목적</h2>
            <p>리워드팩토리 앱(이하 '앱')은 다음의 목적을 위하여 개인정보를 처리하고 있습니다.</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>앱 회원 가입 및 관리</li>
              <li>포인트 적립 및 사용 서비스 제공</li>
              <li>위치 기반 서비스 제공</li>
              <li>푸시 알림 서비스 제공</li>
              <li>마케팅 및 광고 활용 (선택)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. 수집하는 개인정보 항목</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>필수항목
                <ul className="list-circle pl-6 mt-1">
                  <li>이메일 주소, 이름, 휴대폰 번호</li>
                  <li>기기 식별자(UUID, UDID)</li>
                  <li>OS 버전, 앱 버전</li>
                </ul>
              </li>
              <li>선택항목
                <ul className="list-circle pl-6 mt-1">
                  <li>위치 정보</li>
                  <li>카메라/사진 접근</li>
                  <li>푸시 알림 토큰</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. 모바일 앱 접근 권한</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>필수 접근 권한
                <ul className="list-circle pl-6 mt-1">
                  <li>저장소: QR코드 스캔 이미지 저장</li>
                  <li>카메라: QR코드 스캔</li>
                </ul>
              </li>
              <li>선택 접근 권한
                <ul className="list-circle pl-6 mt-1">
                  <li>위치: 주변 매장 검색</li>
                  <li>알림: 푸시 알림 수신</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* 기존 섹션들과 동일... */}
        </div>
      </div>
    </div>
  )
} 