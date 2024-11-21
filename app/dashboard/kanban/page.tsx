import KanbanViewPage from './_components/kanban-view-page';

export const runtime = 'edge';
export const metadata = {
  title: 'Dashboard : Kanban view'
};

export default function page() {
  return <KanbanViewPage />;
}
