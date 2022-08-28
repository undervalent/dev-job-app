import React from "react";
import { Wrapper } from "./job-list.styles";
import { FilterMenu } from "./components";
import { useAppSelector } from "../../state/hooks";
import { JobItem } from "./components/job-item";
import { ContentWrapper } from "../../lib/styles";
import { filterJobList } from "./utils";

export const JobsList = () => {
  const { jobList, filter, entities } = useAppSelector(
    ({ filter, jobList }) => {
      return {
        jobList: jobList.jobList.ids,
        entities: jobList.jobList.entities,
        filter,
      };
    }
  );

  const renderList = filterJobList(jobList, entities, filter).map((job) => (
    <JobItem key={job} jobData={entities[job]} />
  ));
  return (
    <ContentWrapper>
      <Wrapper>
        <FilterMenu />
        <div className="job-listings">{renderList}</div>
      </Wrapper>
    </ContentWrapper>
  );
};
