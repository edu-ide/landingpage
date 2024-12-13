import { Notice } from '@/types/notice';

// 임시 데이터
const notices: Notice[] = [
  {
    id: 1,
    title: '리워드팩토리 서비스 오픈',
    content: '리워드팩토리 서비스가 정식 오픈했습니다. 많은 이용 부탁드립니다.',
    date: '2024-03-19',
    important: true,
    category: '공지'
  },
  {
    id: 2,
    title: '3월 이벤트 안내',
    content: '3월 한달 간 신규 가입 회원에게 특별 포인트를 지급합니다.',
    date: '2024-03-15',
    category: '이벤트'
  },
  // ... 더 많은 공지사항
];

export default function NoticePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">공지사항</h1>
          
          <div className="bg-white rounded-lg shadow">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="border-b last:border-b-0 p-4 sm:p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {notice.important && (
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                          중요
                        </span>
                      )}
                      {notice.category && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          {notice.category}
                        </span>
                      )}
                      <span className="text-sm text-gray-400 sm:ml-auto">
                        {notice.date}
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">{notice.title}</h2>
                    <p className="text-gray-600 text-sm sm:text-base">{notice.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 