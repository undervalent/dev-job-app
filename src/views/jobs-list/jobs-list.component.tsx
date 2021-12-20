import React from "react";
import { Wrapper } from "./job-list.styles";
import { FilterMenu } from "./components";
import { useAppSelector } from "../../state/hooks";
import { JobItem } from "./components/job-item";
import { ContentWrapper } from "../../lib/styles";
export const JobsList = () => {
  const { jobList } = useAppSelector((state) => state.jobList);
  const renderList = jobList.map((job) => (
    <JobItem key={job.id} jobData={job} />
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
