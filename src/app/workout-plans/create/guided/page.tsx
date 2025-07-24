import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GuidedCreationPage() {
  return (
    <div className='container py-8'>
      <h1 className='text-3xl font-bold mb-6'>Создание плана</h1>
      <div className='mb-6'>
        <p>- сколько раз в день?</p>
        <p>- где?</p>
        <p>- что?</p>
        <p>- какое оборудование?</p>
      </div>
      <div className='flex gap-4'>
        <Button asChild>
          <Link
            href='/workout-plans/create/confirm'
            className='mb-6 inline-block bg-primary text-white px-6 py-3 rounded-lg'
          >
            Подобрать
          </Link>
        </Button>
        <Button asChild>
          <Link
            href='/workout-plans'
            className='mb-6 inline-block bg-primary text-white px-6 py-3 rounded-lg'
          >
            Назад
          </Link>
        </Button>
      </div>
    </div>
  );
}
