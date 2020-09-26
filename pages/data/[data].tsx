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
  const docs = loadDataFromYaml();
  const paths = docs.map((doc) => ({ params: { data: encodeURIComponent(doc.caseName) } }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(ctx): Promise<Props> {
  const caseName = ctx.params.data;
  const docs = loadDataFromYaml();
  const caseObject = docs[0];

  return {
    props: {
      caseName,
      caseObject,
    },
  };
}

function loadDataFromYaml(): Record<string, any>[] {
  return yaml.safeLoad(fs.readFileSync("utils/crimeCases.yml", "utf8")) as Record<string, any>[];
}

export default Data;
