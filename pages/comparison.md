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

## vs. AWS SageMaker

AWS SageMaker is great, but complex. There are tens of concepts to learn and understand before you can deploy your model. 

OpenModelZ is much simpler and easier to use. And it could manage different machines and clouds, not just AWS.
