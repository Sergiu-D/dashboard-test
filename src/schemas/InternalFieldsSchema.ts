type Rule = {
  operator: string;
  leftOperand: string;
  rightOperand: string;
};

type RuleSet = {
  operator: 'OR' | 'AND';
  rules: Rule[];
};

type ActionsSet = {
  action: string;
  field: string;
  operator: 'OR' | 'AND';
  ruleSet: RuleSet[];
};

type Attribute = {
  attributeName: string;
  areRulesSelected: boolean;
  actions: {
    operator: 'OR' | 'AND';
    actionsSet: ActionsSet[];
    defaultAction: {
      action: string;
      field: string;
    };
  };
};

type AttributesMap = Attribute[];

export const ruleTemplate: Rule = {
  operator: '',
  leftOperand: '',
  rightOperand: '',
};

export const ruleSetTemplate: RuleSet = {
  operator: 'OR',
  rules: [
    {
      ...ruleTemplate,
    },
  ],
};

export const actionsSetTemplate: ActionsSet = {
  action: '',
  field: '',
  operator: 'AND',
  ruleSet: [
    {
      ...ruleSetTemplate,
    },
  ],
};

const attributeTemplate: Attribute = {
  attributeName: '',
  areRulesSelected: false,
  actions: {
    operator: 'OR',
    actionsSet: [
      {
        ...actionsSetTemplate,
      },
    ],
    defaultAction: {
      action: '',
      field: '',
    },
  },
};

export const attributesMap: AttributesMap = [
  {
    ...attributeTemplate,
    attributeName: 'id',
  },
  {
    ...attributeTemplate,
    attributeName: 'title',
  },
  {
    ...attributeTemplate,
    attributeName: 'link',
  },
  {
    ...attributeTemplate,
    attributeName: 'price',
  },
  {
    ...attributeTemplate,
    attributeName: 'image_link',
  },
  {
    ...attributeTemplate,
    attributeName: 'description',
  },
];
