import Judgement from "components/Judgement";
import Case from "utils/Case.interface";
import yaml from "js-yaml";
import { InferGetStaticPropsType } from "next";
import { GetStaticPaths } from "next";
import React from "react";
import fs from "fs";

interface Props {
  props: {
    caseObject: Case;
  };
}

function Data({ caseObject }: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement {
  return (
    <div>
      <Judgement caseObject={caseObject} />
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
  const caseObjects = docs.filter((caseObj) => caseObj.caseName === caseName);
  const caseObject = caseObjects[0];

  return {
    props: {
      caseObject,
    },
  };
}

function loadDataFromYaml(): Case[] {
  return yaml.safeLoad(fs.readFileSync("utils/crimeCases.yml", "utf8")) as Case[];
}

export default Data;
