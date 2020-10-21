interface Case {
  caseName: string;
  caseNum: string;
  caseTitle: string;
  crimes: [
    {
      crime: string;
    },
  ];
  instructions: [
    {
      content: string;
      title: string;
    },
  ];
  statutes: [
    {
      article: string;
      config_requirement: string;
      sentencing: string;
    },
  ];

  petition: {
    defendant: string;
    victim: string;
  };

  plusImpacts: string[];
  minusImpacts: string[];

  result: {
    trial: string;
    servitude: string;
    content: string;
  }[];
  epilogue: string;
}

export default Case;
