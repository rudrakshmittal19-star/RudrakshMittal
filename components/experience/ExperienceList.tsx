import ExperienceCell from "./ExperienceCell";

type Job = Parameters<typeof ExperienceCell>[0]["job"];

export default function ExperienceList({ jobs }: { jobs: Job[] }) {
  return (
    <div className="grid grid-cols-1 border-t border-warm-grey lg:grid-cols-2">
      {jobs.map((job, index) => {
        const lastDesktopRowStart = jobs.length - (jobs.length % 2 === 0 ? 2 : 1);

        return (
          <ExperienceCell
            key={job.id}
            job={job}
            index={index}
            count={jobs.length}
            isLastDesktopRow={index >= lastDesktopRowStart}
          />
        );
      })}
    </div>
  );
}
