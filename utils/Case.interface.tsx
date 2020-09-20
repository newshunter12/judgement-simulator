interface Case {
  cassName: string;
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
  statues: [
    {
      article: string;
      config_requirements: string;
      sentencing: string;
    },
  ];

  petitions: [
    {
      category: string;
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
