export const ruleTemplate = {
  operator: '',
  leftOperand: '',
  rightOperand: '',
};

export const ruleSetTemplate = {
  operator: 'OR',
  rules: [
    {
      ...ruleTemplate,
    },
  ],
};

export const actionsSetTemplate = {
  action: '',
  field: '',
  operator: 'AND',
  ruleSet: [
    {
      ...ruleSetTemplate,
    },
  ],
};

const attributeTemplate = {
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

export const attributesMap = [
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
