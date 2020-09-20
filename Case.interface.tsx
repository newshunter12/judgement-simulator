interface Case {
  cassName: {
    crimes: {
      crime: string[];
    };
    instructions: {
      title: string;
      content: string;
    };
    statues: [
      {
        article: string;
        config_requirements: string;
        sentencing: string;
      },
    ];

    petitions: {
      category: string;
      content: string;
    };
    result: {
      trial: string;
      servitude: number;
      content: string;
    };
  };
}

export default Case;
