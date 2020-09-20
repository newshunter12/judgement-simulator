//import yaml from "js-yaml";
//import Case from "../utils/Case.interface";
import { InferGetStaticPropsType } from "next";
import { GetStaticPaths } from "next";
import React from "react";
//import fs from "fs";

function Data({ caseName }: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement {
  return (
    <div>
      <p>Data: {caseName}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { data: "1" } }, { params: { data: "2" } }],
    fallback: true,
  };
};

export async function getStaticProps(ctx): Promise<{ props: { caseName: string } }> {
  console.log(ctx.params.casename);
  const caseName = "c1";
  return {
    props: {
      caseName: caseName,
    },
  };
}

export default Data;
