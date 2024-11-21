import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const runtime = 'edge';

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) {
    return redirect('/');
  } else {
    redirect('/dashboard/overview');
  }
}
