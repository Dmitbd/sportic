import Link from 'next/link';
import { Plan } from './types';
import { Button } from '@/components/ui/button';

export default async function WorkoutPlansPage() {
  const plans: Plan[] = [
    {
      id: '1',
      name: '1',
    },
  ];

  return (
    <div className='py-8'>
      <h1 className='text-3xl font-bold mb-6'>Мои планы тренировок</h1>

      <Button asChild>
        <Link
          href='/workout-plans/create/guided'
          className='mb-6 inline-block bg-primary text-white px-6 py-3 rounded-lg'
        >
          + Создать новый план
        </Link>
      </Button>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {plans.map((plan) => (
          <Link
            key={plan.id}
            href={`/workout-plans/${plan.id}`}
            className='border p-4 rounded-lg hover:shadow-md transition-shadow'
          >
            <h2 className='text-xl font-semibold'>{plan.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
