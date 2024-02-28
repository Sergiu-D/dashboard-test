type SearchTabsOptions = {
  tabs: {
    label: string;
    value: string;
  }[];
  options: {
    label: string;
    value: string;
    type: string;
  }[];
};

type ActionsOptions = {
  label: string;
  value: string;
  componentType: string;
}[];

type RuleOperator = {
  label: string;
  value: string;
}[];

type SeparatorOptions = {
  label: string;
  value: string;
}[];

export const searchTabsOptions: SearchTabsOptions = {
  tabs: [
    { label: 'All', value: 'all' },
    { label: 'Internal filed', value: 'internal' },
    { label: 'Input field', value: 'input' },
  ],
  options: [
    {
      label: 'Select field',
      value: '',
      type: '',
    },
    {
      label: 'additional images',
      value: 'additional_images',
      type: 'internal',
    },
    {
      label: 'description',
      value: 'description',
      type: 'internal',
    },
    {
      label: 'id',
      value: 'id',
      type: 'internal',
    },
    {
      label: 'acoperire',
      value: 'acoperire',
      type: 'input',
    },
    {
      label: 'actionare',
      value: 'actionare',
      type: 'input',
    },
    {
      label: 'agabaritic',
      value: 'agabaritic',
      type: 'input',
    },
  ],
};

export const actionsOptions: ActionsOptions = [
  {
    label: 'Select action',
    value: '',
    componentType: '',
  },
  {
    label: 'Rename',
    value: 'rename',
    componentType: 'elements',
  },
  {
    label: 'Combine',
    value: 'combine',
    componentType: 'products',
  },
];

export const separator: SeparatorOptions = [
  {
    label: 'Select separator',
    value: '',
  },
  {
    label: 'space',
    value: 'space',
  },
  {
    label: 'comma',
    value: 'comma',
  },
];

export const ruleOperator: RuleOperator = [
  {
    label: 'Select operator',
    value: '',
  },
  {
    label: 'includes',
    value: 'includes',
  },
  {
    label: 'is not equal to',
    value: 'is_not_equal_to',
  },
  {
    label: 'is equal to',
    value: 'is_equal_to',
  },
];
