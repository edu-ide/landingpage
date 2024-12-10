import PaymentClient from "../../../components/payment-client";

interface SearchParams {
  amount?: string;
  itemName?: string;
}

interface Props {
  params: { locale: string };
  searchParams: SearchParams;
}

export default function PaymentPage({ searchParams }: Props) {
  // Next.js 15에서는 서버 컴포넌트에서도 동기적으로 처리 가능
  const amount = searchParams?.amount ?? '1000';
  const itemName = searchParams?.itemName ?? '상품';

  return <PaymentClient amount={amount} itemName={itemName} />;
} 