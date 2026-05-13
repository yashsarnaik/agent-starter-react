module.exports = {
  apps: [
    {
      name: "agent-starter-react",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
      },
    },
  ],
};
