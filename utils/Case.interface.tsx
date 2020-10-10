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
      config_requirements: string;
      sentencing: string;
    },
  ];

  petition: {
    defendant: string;
    victim: string;
  };

  plusImpacts: {
    reason: string[];
  };

  minusImpacts: {
    reason: string[];
  };

  result: {
    trial: string;
    servitude?: number;
    content: string;
  };
}

export default Case;
