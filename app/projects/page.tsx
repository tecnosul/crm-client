import { lusitana } from '@/app/ui/fonts';
import ProjectsList from '../ui/projects/projects-list';


export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Projetos
      </h1>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <ProjectsList></ProjectsList>
      </div>
    </main>
  );
}