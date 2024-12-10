interface NaverPay {
  Pay: {
    new(config: {
      mode: 'development' | 'production';
      clientId: string;
      chainId: string;
    }): {
      open(params: {
        merchantUserKey: string;
        merchantPayKey: string;
        productName: string;
        totalPayAmount: number;
        taxScopeAmount: number;
        taxExScopeAmount: number;
        returnUrl: string;
      }): void;
    };
  };
}

declare global {
  interface Window {
    Naver: NaverPay;
  }
} 