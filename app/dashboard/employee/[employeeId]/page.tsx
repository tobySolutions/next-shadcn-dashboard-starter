import EmployeeViewPage from '../_components/employee-view-page';

export const runtime = 'edge';

export const metadata = {
  title: 'Dashboard : Employee View'
};

export default function Page() {
  return <EmployeeViewPage />;
}
