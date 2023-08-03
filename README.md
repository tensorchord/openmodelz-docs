<div align="center">

# OpenModelZ

Simplify machine learning deployment for any environment.

</div>

<p align=center>
<a href="https://discord.gg/KqswhpVgdU"><img alt="discord invitation link" src="https://dcbadge.vercel.app/api/server/KqswhpVgdU?style=flat"></a>
<a href="https://twitter.com/TensorChord"><img src="https://img.shields.io/twitter/follow/tensorchord?style=social" alt="trackgit-views" /></a>
<a href="https://docs.open.modelz.ai"><img src="https://img.shields.io/badge/docs.open.modelz.ai-455946.svg?style=socail&logo=googlechrome&logoColor=white" alt="docs" /></a>
<a href="https://github.com/tensorchord/openmodelz#contributors-"><img alt="all-contributors" src="https://img.shields.io/github/all-contributors/tensorchord/openmodelz/main"></a>
</p>

OpenModelZ (MDZ) provides a simple CLI to deploy and manage your machine learning workloads on any cloud or home lab.

## Why use OpenModelZ 🙋

OpenModelZ is the ideal solution for practitioners who want to quickly deploy their machine learning models to a (public or private) endpoint without the hassle of spending excessive time, money, and effort to figure out the entire end-to-end process.

We created OpenModelZ in response to the difficulties of finding a simple, cost-effective way to get models into production fast. Traditional deployment methods can be complex and time-consuming, requiring significant effort and resources to get models up and running.

- Kubernetes: Setting up and maintaining Kubernetes and Kubeflow can be challenging due to their technical complexity. Data scientists spend significant time configuring and debugging infrastructure instead of focusing on model development.
- Managed services: Alternatively, using a managed service like AWS SageMaker can be expensive and inflexible, limiting the ability to customize deployment options.
- Virtual machines: As an alternative, setting up a cloud VM-based solution requires learning complex infrastructure concepts like load balancers, ingress controllers, and other components. This takes a lot of specialized knowledge and resources.

With OpenModelZ, we take care of the underlying technical details for you, and provide a simple and easy-to-use CLI to deploy your models to **any cloud (GCP, AWS, or others), your home lab, or even a single machine**.

You could **start from a single machine and scale it up to a cluster of machines** without any hassle. OpenModelZ lies at the heart of our [ModelZ](https://modelz.ai), which is a serverless inference platform. It's used in production to deploy models for our customers.

## Documentation 📝

You can find the documentation at [docs.open.modelz.ai](https://docs.open.modelz.ai).

## Local Development

First, run `pnpm i` to install the dependencies.

Then, run `pnpm dev` to start the development server and visit localhost:3000.
