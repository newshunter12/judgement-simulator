import Judgement from "component/judgement";
import yaml from "js-yaml";
import { InferGetStaticPropsType } from "next";
import { GetStaticPaths } from "next";
import React from "react";
import fs from "fs";

interface Props {
  props: {
    caseName: string;
    caseObject: Record<string, any>;
  };
}

function Data({
  caseName,
  caseObject,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement {
  return (
    <div>
      <Judgement caseName={caseName} caseObject={caseObject} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { data: "1" } }],
    fallback: true,
  };
};

export async function getStaticProps(ctx): Promise<Props> {
  const caseName = ctx.params.data;
  const docs = yaml.safeLoad(fs.readFileSync("utils/crimeCases.yml", "utf8"));
  const caseObject = docs[0];

  return {
    props: {
      caseName,
      caseObject,
    },
  };
}

export default Data;
