import ExperienceCell from "./ExperienceCell";

type Job = Parameters<typeof ExperienceCell>[0]["job"];

export default function ExperienceList({ jobs }: { jobs: Job[] }) {
  return (
    <div className="grid grid-cols-1 border-t border-warm-grey lg:grid-cols-2">
      {jobs.map((job, i) => (
        <ExperienceCell key={job.id} job={job} index={i} />
      ))}
    </div>
  );
}
