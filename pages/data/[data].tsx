import Judgement from "component/judgement";
import yaml from "js-yaml";
import { InferGetStaticPropsType } from "next";
import { GetStaticPaths } from "next";
import React from "react";
import fs from "fs";

interface Props {
  props: {
    caseName: string;
    json: string;
  };
}

function Data({
  caseName,
  json,
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement {
  return (
    <div>
      <Judgement caseName={caseName} json={json} />
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
  let json = "";
  try {
    const doc = yaml.safeLoad(fs.readFileSync("utils/crimeCases.yml", "utf8"));
    const caseObject = doc[0];
    json = JSON.stringify(caseObject);
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      caseName: caseName,
      json: json,
    },
  };
}

export default Data;
