import {
  StackContext,
  NextjsSite,
  Bucket,
  Table,
  Function,
  Api,
  Service
} from "sst/constructs";

export default function SiteStack({ stack }: StackContext) {
  const videoBucket = new Bucket(stack, "VideoBucket");

  const processedVideoBucket = new Bucket(stack, "ProcessedVideoBucket");

  const opencvLambda = new Function(stack, "OpenCvLambda", {
    handler: "src/opencvLambda.handler",
    runtime: "python3.8",
  });

  opencvLambda.attachPermissions([videoBucket]);


  const service = new Service(stack, "processVideo", {
    path: "./service",
    port: 8080,
    bind: [videoBucket],
    environment: {
      BUCKET_NAME: videoBucket.bucketName,
    },
  });


  
  
  // const table = new Table(stack, "counter", {
  //   fields: { counter: "string" },
  //   primaryIndex: { partitionKey: "counter" },
  // });
  // const user = new Table(stack, "Users", {
  //   fields: {
  //     sub: "string",
  //     email: "string",
  //     first_name: "string",
  //     last_name: "string",
  //     bday: "string",
  //     requests: "string", //json object
  //     time_zone: "string", 
  //     language: "string"
  //   },
  //   primaryIndex: { partitionKey: "sub"},
  // });
  // // adding chat room folder
  // const room = new Table(stack, "Rooms", {
  //   fields: {
  //     room_id: "string",
  //     connect_id: "string",
  //     users: "string", //json
  //     creation_date: "string",
  //     number_of_participants: "string",
  //     message: "string" //json object
  //   },
  //   primaryIndex: { partitionKey: "room_id"},
  // });

  const site = new NextjsSite(stack, "site", {
    bind: [videoBucket, service],
  });


  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
  });
}
