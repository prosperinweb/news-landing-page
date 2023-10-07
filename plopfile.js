export default function (plop) {
  // create your generators here
  plop.setGenerator("view", {
    description: "Create a view",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your view name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/views/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/views/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/component.module.css.hbs",
      },
      {
        type: "add",
        path: "src/components/views/index.ts",
        templateFile: "plop-templates/injectable-index.ts.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/components/views/index.ts",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { default as {{pascalCase name}} } from './{{pascalCase name}}/{{pascalCase name}}';`,
      },
    ],
  });

  plop.setGenerator("container", {
    description: "Create a container",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your container name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/containers/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/containers/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/component.module.css.hbs",
      },
      {
        type: "add",
        path: "src/components/containers/index.ts",
        templateFile: "plop-templates/injectable-index.ts.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/components/containers/index.ts",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { default as {{pascalCase name}} } from './{{pascalCase name}}/{{pascalCase name}}';`,
      },
    ],
  });
  plop.addHelper("eq", (a, b) => a.toLowerCase() === b.toLowerCase());
  plop.addHelper("or", (...args) => args.slice(0, -1).some(Boolean)); // This function is used to check if any of the arguments is true
}
