module.exports = {
  apps: [
    {
      name: "agent-starter-react",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: 2,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
      },
    },
  ],
};
