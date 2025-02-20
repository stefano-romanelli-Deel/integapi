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
  ],
};

export default sidebar.apisidebar;
