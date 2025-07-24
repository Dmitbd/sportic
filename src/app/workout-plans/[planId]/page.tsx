import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plan } from '../types';

export default async function WorkoutPlanPage() {
  const plan: Plan = {
    id: '1',
    name: '1',
  };

  return (
    <div className='container py-8'>
      <div className='flex justify-between items-start mb-8'>
        <h1 className='text-3xl font-bold'>{plan.name}</h1>
        <Button asChild variant='outline'>
          <Link href='/workout-plans'>← Все планы</Link>
        </Button>
      </div>

      <div className='space-y-6'>
        {/* {plan.days.map(day => (
          <section key={day.id} className="border p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">День {day.number}</h2>
            <ul className="space-y-3">
              {day.exercises.map(ex => (
                <li key={ex.id} className="p-3 bg-muted rounded-md">
                  {ex.name} - {ex.sets}×{ex.reps}
                </li>
              ))}
            </ul>
          </section>
        ))} */}
      </div>
    </div>
  );
}
