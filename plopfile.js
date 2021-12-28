module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: (data) => {
      const path = "src/components/";

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
};
