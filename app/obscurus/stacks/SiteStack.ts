import { HostedZone } from "aws-cdk-lib/aws-route53";
import {
  StackContext,
  NextjsSite,
  Bucket,
  Table,
  Service,
} from "sst/constructs";

export default function SiteStack({ stack }: StackContext) {
  const bucket = new Bucket(stack, "public");
  const table = new Table(stack, "counter", {
    fields: { counter: "string" },
    primaryIndex: { partitionKey: "counter" },
  });
  // If you want to add a field, just append it to the table
  // Adding user table
  const user = new Table(stack, "Users", {
    fields: {
      sub: "string",
      email: "string",
      first_name: "string",
      last_name: "string",
      bday: "string",
      requests: "string", //json object
      time_zone: "string", 
      language: "string"
    },
    primaryIndex: { partitionKey: "sub"},
  });
  // adding chat room folder
  const room = new Table(stack, "Rooms", {
    fields: {
      room_id: "string",
      connect_id: "string",
      users: "string", //json
      creation_date: "string",
      number_of_participants: "string",
      message: "string" //json object
    },
    primaryIndex: { partitionKey: "room_id"},
  });
  const service = new Service(stack, "processVideo", {
    path: "./service",
    port: 8080,
    bind: [bucket],
  });

const site = new NextjsSite(stack, "site", {
  bind: [bucket, table, service],
  environment: {
    TABLE_NAME: table.tableName,
  },
  // customDomain: {
  //   domainName: "obscurus.me",
  //   domainAlias: "www.obscurus.me",
  //   cdk: {
  //     hostedZone: HostedZone.fromHostedZoneAttributes(stack, "MyZone", {
  //       hostedZoneId: "Z09403151W7ZFKPC0YJEL",
  //       zoneName: "obscurus.me",
  //     }),
  //   },
  // },
});

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
  });
}
