import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Code, Lightbulb, Laptop, BookOpen, Target, Check } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  const t = useTranslations('Index');

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-12 md:py-24 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 max-w-[800px]">
          EduSense
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-gray-600 max-w-xl md:max-w-2xl px-4">
          AI 기반 코드 분석과 맞춤형 피드백으로 여러분의 코딩 실력을 극대화하세요
        </p>
        <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Button size="lg" className="w-full sm:w-auto">무료로 시작하기</Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">IDE 다운로드</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            EduSense만의 특별한 학습 경험
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={<Brain className="w-10 h-10 text-blue-500" />}
              title="AI 코드 분석"
              description="작성한 코드에 대한 상세한 분석과 개선 방향을 제시합니다."
            />
            <FeatureCard
              icon={<Lightbulb className="w-10 h-10 text-yellow-500" />}
              title="인터랙티브 힌트 시스템"
              description="텍스트 힌트와 함께 IDE 내 시각적 가이드로 다음 단계를 직관적으로 안내합니다."
            />
            <FeatureCard
              icon={<Code className="w-10 h-10 text-green-500" />}
              title="강력한 로컬 IDE"
              description="최적화된 개발 환경에서 AI 피드백과 함께 효율적인 학습이 가능합니다."
            />
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            자율적 학습, 지능적 가이드
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ProcessCard
              number="01"
              icon={<Laptop className="w-8 h-8" />}
              title="로컬 IDE 설치"
              description="간편한 설치로 바로 시작하는 전문가급 개발 환경"
            />
            <ProcessCard
              number="02"
              icon={<Brain className="w-8 h-8" />}
              title="코드 분석 요청"
              description="AI가 코드의 품질, 성능, 보안성을 분석하고 구체적인 개선점을 제안합니다."
            />
            <ProcessCard
              number="03"
              icon={<Lightbulb className="w-8 h-8" />}
              title="시각적 가이드"
              description="텍스트 힌트와 함께 IDE 내 UI 하이라이트로 다음 액션을 명확하게 안내합니다."
            />
            <ProcessCard
              number="04"
              icon={<Target className="w-8 h-8" />}
              title="성장 트래킹"
              description="데이터 기반으로 여러분의 성장을 시각화하고 다음 단계를 제안합니다."
            />
          </div>
        </div>
      </section>

      {/* IDE Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            전문가급 로컬 IDE
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <h3 className="text-xl md:text-2xl font-semibold">
                직관적인 학습 가이드가 통합된 개발 환경
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  AI 기반 코드 분석 및 피드백
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  UI 하이라이트를 통한 시각적 가이드
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  단계별 인터랙티브 힌트 시스템
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  통합 디버깅 환경
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  다양한 프로그래밍 언어 지원
                </li>
              </ul>
              <div className="space-y-4">
                <p className="text-sm md:text-base text-gray-600">
                  예시: 디버깅 시 다음 중단점 위치 하이라이트, 
                  코드 리팩토링 시 수정이 필요한 부분 강조,
                  새로운 기능 구현 시 관련 메뉴나 버튼 가이드 등
                </p>
              </div>
              <Button className="w-full sm:w-auto">IDE 다운로드</Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image 
                src="/ide-screenshot.png" 
                alt="EduSense IDE" 
                width={600} 
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            체계적인 학습 경로
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <CourseCard
              icon={<Code className="w-8 h-8" />}
              title="웹 개발"
              level="입문 ~ 고급"
              duration="6개월"
              technologies={['HTML/CSS', 'JavaScript', 'React', 'Node.js']}
            />
            <CourseCard
              icon={<Laptop className="w-8 h-8" />}
              title="앱 개발"
              level="입문 ~ 고급"
              duration="6개월"
              technologies={['Flutter', 'Dart', 'Firebase']}
            />
            <CourseCard
              icon={<Brain className="w-8 h-8" />}
              title="AI/ML"
              level="중급 ~ 고급"
              duration="8개월"
              technologies={['Python', 'TensorFlow', 'PyTorch']}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-blue-500 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            미래의 개발자로 성장하세요
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            EduSense의 지능형 코드 분석과 함께라면 누구나 전문 개발자가 될 수 있습니다
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              무료로 시작하기
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              IDE 다운로드
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="p-6">
      <CardContent className="space-y-4">
        <div className="flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold text-center">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
    </Card>
  );
}

function ProcessCard({ number, icon, title, description }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold text-blue-500">{number}</span>
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CourseCard({ icon, title, level, duration, technologies }) {
  return (
    <Card className="p-6">
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">난이도: {level}</p>
          <p className="text-sm text-gray-600">기간: {duration}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-gray-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
