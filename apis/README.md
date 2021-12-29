# Getting Started on Okteto with Node.js

[![Develop on Okteto](https://okteto.com/develop-okteto.svg)](https://cloud.okteto.com/deploy?repository=https://github.com/okteto/node-getting-started)

This example shows how to leverage [Okteto](https://github.com/okteto/okteto) to develop a Node Sample App directly in Kubernetes. The Node Sample App is deployed using raw Kubernetes manifests.

This is the application used for the [How to Develop and Debug Node.js Applications in Kubernetes](https://okteto.com/blog/how-to-develop-node-apps-in-kubernetes/) blog post.

## STEP BY STEP :

- Git clone https://github.com/admhabits/api-portal-services-splp.git
- Run Command `$ git checkout okteto`
- Move to root project by running `cd api-portal-services`
- Run command `$ okteto stack deploy --wait`
- Run development mode with `$ okteto up`
- Open your browser on `http://localhost:4000`
