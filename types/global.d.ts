declare global {
  interface Window {
    Naver: {
      Pay: {
        create(config: {
          mode: string;
          clientId: string;
          chainId: string;
          payType?: string;
          openType?: string;
          isPopup?: boolean;
          locale?: string;
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
    };
  }
}

export {}; 