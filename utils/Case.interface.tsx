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

  petition: {
    defendant: boolean;
    victim: string;
  };

  result: {
    trial: string;
    servitude?: number;
    content: string;
  };
}

export default Case;
