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
    },
  ];
  statutes: [
    {
      article: string;
      config_requirements: string;
      sentencing: string;
    },
  ];

  petitions: [
    {
      isDefendant: boolean;
      content: string;
    },
  ];
  result: {
    trial: string;
    servitude?: number;
    content: string;
  };
}

export default Case;
