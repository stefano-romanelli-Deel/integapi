import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "integrations/integration-api",
    },
    {
      type: "category",
      label: "Integrations",
      link: {
        type: "doc",
        id: "integrations/integrations",
      },
      items: [
        {
          type: "doc",
          id: "integrations/create-integration",
          label: "Create an integration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "integrations/list-sync-types",
          label: "List sync types",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Employee Sync",
      link: {
        type: "doc",
        id: "integrations/employee-sync",
      },
      items: [
        {
          type: "doc",
          id: "integrations/list-employee-sync-data",
          label: "List data required for employee sync",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Use Cases",
      link: {
        type: "doc",
        id: "integrations/use-cases",
      },
      items: [
        {
          type: "doc",
          id: "integrations/list-use-cases",
          label: "Retrieve detailed use case information",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
