import React from "react";
import { Wrapper } from "./job-list.styles";
import { FilterMenu } from "./components";
import { useAppSelector } from "../../state/hooks";
import { JobItem } from "./components/job-item";
import { ContentWrapper } from "../../lib/styles";
import { filterJobList } from "./utils";

function useJobData() {
  const { jobList, filter, entities } = useAppSelector(
    ({ filter, jobList }) => {
      return {
        jobList: jobList.ids,
        entities: jobList.entities,
        filter,
      };
    }
  );
  const filteredList = filterJobList(jobList, entities, filter).map(
    (job) => entities[job]
  );

  return filteredList;
}

export const JobsList = () => {
  const filteredList = useJobData();

  const renderList = filteredList.map((job) => {
    return job ? <JobItem key={job.id} jobData={job} /> : null;
  });
  return (
    <ContentWrapper>
      <Wrapper>
        <FilterMenu />
        <div className="job-listings">{renderList}</div>
      </Wrapper>
    </ContentWrapper>
  );
};
