<<<<<<< HEAD
import { deleteProjectById, duplicateProjectById, editProjectById, getAllPlaygroundForUser } from "@/modules/dashboard/actions";
=======
import { getAllPlaygroundForUser } from "@/modules/dashboard/actions";
>>>>>>> 9184baf122948a68c5918bf432693bcac587424c
import AddNewButton from "@/modules/dashboard/components/add-new";
import AddRepo from "@/modules/dashboard/components/add-repo";
import EmptyState from "@/modules/dashboard/components/empty-state";
import ProjectTable from "@/modules/dashboard/components/project-table";
import React from "react";

const Page = async () => {
  const playgrounds = await getAllPlaygroundForUser();
  console.log("Playgrounds:", playgrounds);
  return (
    <div className="flex flex-col justify-start items-center min-h-screen mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <AddNewButton />
        <AddRepo />
      </div>

      <div className="mt-10 flex flex-col justify-center items-center w-full">
        {playgrounds && playgrounds.length === 0 ? (
          <EmptyState />
        ) : (
          <ProjectTable
<<<<<<< HEAD
            projects={playgrounds || []}
            onDeleteProject={deleteProjectById}
            onUpdateProject={editProjectById}
            onDuplicateProject={duplicateProjectById}
=======
            // projects={playgrounds || []}
            // onDeleteProject={deleteProjectById}
            // onUpdateProject={editProjectById}
            // onDuplicateProject={duplicateProjectById}
>>>>>>> 9184baf122948a68c5918bf432693bcac587424c
          />
        )}
      </div>
    </div>
  );
};

export default Page;
