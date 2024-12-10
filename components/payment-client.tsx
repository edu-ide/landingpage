'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface PaymentClientProps {
  amount: string;
  itemName: string;
}

export default function PaymentClient({ amount, itemName }: PaymentClientProps) {
  useEffect(() => {
    const handlePayment = () => {
      try {
        const payAmount = parseInt(amount) || 1000;
        console.log('결제 시도:', { amount: payAmount, itemName });

        if (!window.Naver?.Pay) {
          throw new Error('Naver Pay SDK가 로드되지 않았습니다.');
        }

        const oPay = window.Naver.Pay.create({
          mode: "development",
          clientId: process.env.NEXT_PUBLIC_NAVER_PAY_CLIENT_ID ?? '',
          chainId: process.env.NEXT_PUBLIC_NAVER_PAY_CHAIN_ID ?? '',
          payType: "NORMAL",
          openType: "POPUP",
          isPopup: true
        });

        console.log('SDK 초기화 성공');

        oPay.open({
          merchantUserKey: 'user123',
          merchantPayKey: Date.now().toString(),
          productName: itemName || '상품',
          totalPayAmount: payAmount,
          taxScopeAmount: payAmount,
          taxExScopeAmount: 0,
          returnUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/payments/naver/callback`
        });
      } catch (error) {
        console.error('네이버페이 초기화 실패:', error);
        if (error instanceof Error) {
          console.error('에러 상세:', error.message);
        }
      }
    };

    const payButton = document.getElementById('naverPayBtn');
    if (payButton) {
      payButton.addEventListener('click', handlePayment);
    }

    return () => {
      if (payButton) {
        payButton.removeEventListener('click', handlePayment);
      }
    };
  }, [amount, itemName]);

  return (
    <>
      <Script
        src="https://test-nsp.pay.naver.com/sdk/js/naverpay.min.js"
        strategy="afterInteractive"
      />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold mb-4">네이버페이 결제</h1>
          <p className="mb-4">결제 금액: {parseInt(amount).toLocaleString()}원</p>
        </div>
        <button
          id="naverPayBtn"
          className="bg-[#03C75A] text-white px-6 py-3 rounded-md hover:bg-[#02B350]"
        >
          네이버페이 결제하기
        </button>
      </div>
    </>
  );
} 