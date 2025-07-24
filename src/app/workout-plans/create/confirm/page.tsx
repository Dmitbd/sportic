import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plan } from '../../types';

export default async function ConfirmationPage() {
  const plan: Plan = {
    id: '1',
    name: '1',
  };

  return (
    <div className='container py-8'>
      <h1 className='text-3xl font-bold mb-6'>Подтвердите план</h1>

      <div className='mb-8 p-6 border rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>{plan.name}</h2>
        {/* Детали плана по дням */}
        {/* {plan.days.map(day => (
          <div key={day.id} className="mb-4">
            <h3 className="text-lg font-medium">День {day.number}</h3>
            <ul className="ml-4 list-disc">
              {day.exercises.map(ex => (
                <li key={ex.id}>{ex.name}</li>
              ))}
            </ul>
          </div>
        ))} */}
      </div>

      <div className='flex gap-4'>
        <Button asChild>
          <Link href='/workout-plans'>Подтвердить</Link>
        </Button>

        <Button variant='outline' asChild>
          <Link href={`/workout-plans/create/guided?edit=${plan.id}`}>Изменить</Link>
        </Button>
      </div>
    </div>
  );
}
