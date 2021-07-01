module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: (data) => {
      const path = 'src/components/';

      let actions = [
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/component/component.tsx.hbs',
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/component/index.ts.hbs',
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.module.scss',
          templateFile: 'plop-templates/component/module.scss.hbs',
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.types.ts',
          templateFile: 'plop-templates/component/types.ts.hbs',
        },
      ];
      return actions;
    },
  });
  plop.setGenerator('reducer', {
    description: 'Create redux-toolkit reducer',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your reducer name?',
      },
      {
        type: 'confirm',
        name: 'persisted',
        massage: 'Do you want use persistor for this reducer?',
        default: false,
      },
    ],
    actions: (data) => {
      const path = 'src/redux/';

      let actions = [
        {
          type: 'add',
          path: path + '{{camelCase name}}/{{camelCase name}}.slice.ts',
          templateFile: 'plop-templates/reducer/slice.ts.hbs',
        },
        {
          type: 'add',
          path: path + '{{camelCase name}}/{{camelCase name}}.selectors.ts',
          templateFile: 'plop-templates/reducer/selectors.ts.hbs',
        },
        {
          type: 'append',
          path: path + 'reducers.ts',
          pattern: /(from 'redux';)/g,
          template:
            "import { {{#if persisted}}T{{pascalCase name}}State, {{/if}}{{camelCase name}}Reducer } from 'src/redux/{{camelCase name}}/{{camelCase name}}.slice';",
        },
        {
          type: 'append',
          path: path + 'reducers.ts',
          pattern: /(combineReducers\({)/g,
          template:
            "    {{camelCase name}}: {{#if persisted}}withPersist<T{{pascalCase name}}State>('{{camelCase name}}', {{camelCase name}}Reducer){{else}}{{camelCase name}}Reducer{{/if}},",
        },
      ];

      return actions;
    },
  });
};
