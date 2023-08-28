# OpenModelZ vs. Others

You may want to know how OpenModelZ compares to other tools. Here is a quick comparison:

## vs. Kubeflow/KFServing

KFServing is a great tool for deploying machine learning models. However, it's not easy to set up and maintain. It requires a lot of technical knowledge and resources to get it up and running. You need to know Kubernetes, Istio, and other components to get it working.

OpenModelZ is a much simpler solution that can be used by anyone without any technical knowledge. You could **start from a single machine** and scale it up to a cluster of machines without any hassle.

## vs. MLFlow

MLFlow requires their python package to interact with the MLFlow server. This means that you need to change your code to use MLFlow. This is not ideal for many use cases, especially if you want to deploy a model that is already trained and ready to go.

OpenModelZ does not require any code changes to your inference servers. You can deploy any model with any framework, without any changes to the code:

- [text-generation-inference](https://github.com/huggingface/text-generation-inference)
- [triton-inference-server](https://github.com/triton-inference-server/server)
- [mosec](https://github.com/mosecorg/mosec)
- [vLLM](https://github.com/vllm-project/vllm)
- Your own custom inference server, and more!

Besides this, you could also use [Gradio](https://www.gradio.app/) or [Streamlit](https://streamlit.io/) to create a web interface on OpenModelZ.

And, OpenModelZ could **automatically scale your deployments based on the load, no matter what framework you use**.

## vs. AWS SageMaker

AWS SageMaker is great, but complex. There are tens of concepts to learn and understand before you can deploy your model. 

OpenModelZ is much simpler and easier to use. And it could manage different machines and clouds, not just AWS.

## vs. SkyPilot

Here's a breakdown of how the two platforms differ:

OpenModelZ:

- Autoscaling: OpenModelZ supports autoscaling, allowing your deployment to dynamically adjust the number of replicas based on the inflow of requests. This helps optimize resource allocation and ensures efficient handling of varying workloads.
- Flexibility: Deployments on OpenModelZ can be dynamically scheduled on any machine, providing flexibility in resource allocation. In contrast, Skypilot requires a fixed set of machines and doesn't allow for changes to the application once it's deployed without recreating the cluster from scratch.
- Cloud Native: OpenModelZ is a container-based solution, leveraging technologies like Docker to package applications into lightweight and portable containers. This approach enables easier deployment and management across different environments.
- Traffic Management: OpenModelZ provides public endpoints for your deployments, allowing external access to your applications. This simplifies the process of serving API requests and enables interaction with your application from external systems.
- Observability: OpenModelZ offers built-in observability features, with metrics of your deployments stored in Prometheus. You can visualize these metrics using tools like Grafana or the Prometheus dashboard. This includes metrics such as CPU, memory, GPU usage, as well as the number of requests and replicas.

Skypilot:

- Virtual Machines (VMs): Skypilot focuses on provisioning and managing VMs in a cloud environment. It provides a streamlined process for deploying and configuring VMs declaratively.
- Setup Bash Scripts: Skypilot allows you to run setup bash scripts as part of the VM provisioning process, enabling you to customize the configuration of your VMs based on specific requirements.
- Cloud Support: Skypilot is compatible with various cloud providers, allowing you to deploy and manage VMs across different cloud environments.

When comparing OpenModelZ and Skypilot, consider factors such as autoscaling support, flexibility in resource allocation, containerization, traffic management options, and built-in observability features. These considerations will help determine which platform aligns better with your specific needs and use cases.
