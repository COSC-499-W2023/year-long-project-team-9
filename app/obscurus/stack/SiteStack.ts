import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import {
  StackContext,
  NextjsSite,
  Bucket,
  RDS,
  Api,
  Job,
  Cognito,
  Config,
  WebSocketApi,
  Service,
  Topic,
} from "sst/constructs";
import * as cdk from "aws-cdk-lib";
import { UserPoolEmail, VerificationEmailStyle } from "aws-cdk-lib/aws-cognito";
import * as ec2 from "aws-cdk-lib/aws-ec2";

export default function SiteStack({ stack }: StackContext) {
  const chumBucket = new Bucket(stack, "ChumBucket", {
    cdk: {
      bucket: {
        autoDeleteObjects: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      },
    },
  });

  const rekognitionPolicyStatement = new PolicyStatement({
    actions: ["rekognition:*", "rekognition:DetectFaces"],
    effect: Effect.ALLOW,
    resources: ["*"],
  });

  const rds = new RDS(stack, "Database", {
    engine: "postgresql11.13",
    defaultDatabaseName: "obscurus",
    migrations: "stack/database/migrations/",
    cdk: {
      cluster: {
        vpc: ec2.Vpc.fromLookup(stack, "Veep", {
          vpcId: "vpc-03517d1439c6e7459",
        }),
        vpcSubnets: {
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        },
      },
    },
  });

  const sesPolicyStatement = new PolicyStatement({
    actions: ["ses:SendEmail", "ses:SendRawEmail", "ses:SendTemplatedEmail"],
    effect: Effect.ALLOW,
    resources: ["*"],
  });

  const auth = new Cognito(stack, "Auth", {
    login: ["email"],
    cdk: {
      userPool: {
        standardAttributes: {
          givenName: { required: true, mutable: true },
          familyName: { required: true, mutable: true },
        },
        userVerification: {
          emailStyle: VerificationEmailStyle.CODE,
          emailBody:
            '<!doctype html>\r\n<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\r\n\r\n<head>\r\n  <title>\r\n  </title>\r\n  <!--[if !mso]><!-->\r\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n  <!--<![endif]-->\r\n  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\r\n  <meta name="viewport" content="width=device-width, initial-scale=1">\r\n  <style type="text/css">\r\n    #outlook a {\r\n      padding: 0;\r\n    }\r\n\r\n    body {\r\n      margin: 0;\r\n      padding: 0;\r\n      -webkit-text-size-adjust: 100%;\r\n      -ms-text-size-adjust: 100%;\r\n    }\r\n\r\n    table,\r\n    td {\r\n      border-collapse: collapse;\r\n      mso-table-lspace: 0pt;\r\n      mso-table-rspace: 0pt;\r\n    }\r\n\r\n    img {\r\n      border: 0;\r\n      height: auto;\r\n      line-height: 100%;\r\n      outline: none;\r\n      text-decoration: none;\r\n      -ms-interpolation-mode: bicubic;\r\n    }\r\n\r\n    p {\r\n      display: block;\r\n      margin: 13px 0;\r\n    }\r\n  </style>\r\n  <!--[if mso]>\r\n        <noscript>\r\n        <xml>\r\n        <o:OfficeDocumentSettings>\r\n          <o:AllowPNG/>\r\n          <o:PixelsPerInch>96</o:PixelsPerInch>\r\n        </o:OfficeDocumentSettings>\r\n        </xml>\r\n        </noscript>\r\n        <![endif]-->\r\n  <!--[if lte mso 11]>\r\n        <style type="text/css">\r\n          .mj-outlook-group-fix { width:100% !important; }\r\n        </style>\r\n        <![endif]-->\r\n  <!--[if !mso]><!-->\r\n  <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">\r\n  <style type="text/css">\r\n    @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);\r\n  </style>\r\n  <!--<![endif]-->\r\n  <style type="text/css">\r\n    @media only screen and (min-width:480px) {\r\n      .mj-column-per-50 {\r\n        width: 50% !important;\r\n        max-width: 50%;\r\n      }\r\n    }\r\n  </style>\r\n  <style media="screen and (min-width:480px)">\r\n    .moz-text-html .mj-column-per-50 {\r\n      width: 50% !important;\r\n      max-width: 50%;\r\n    }\r\n  </style>\r\n  <style type="text/css">\r\n    @media only screen and (max-width:480px) {\r\n      table.mj-full-width-mobile {\r\n        width: 100% !important;\r\n      }\r\n\r\n      td.mj-full-width-mobile {\r\n        width: auto !important;\r\n      }\r\n    }\r\n  </style>\r\n</head>\r\n\r\n<body style="word-spacing:normal;background-color:#ffffff;">\r\n  <div style="background-color:#ffffff;">\r\n    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->\r\n    <div style="margin:0px auto;max-width:600px;">\r\n      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">\r\n        <tbody>\r\n          <tr>\r\n            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">\r\n              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]-->\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->\r\n    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">\r\n      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">\r\n        <tbody>\r\n          <tr>\r\n            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">\r\n              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->\r\n              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">\r\n                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">\r\n                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">\r\n                          <tbody>\r\n                            <tr>\r\n                              <td style="width:150px;">\r\n                                <a href="https://obscurus.me" target="_blank">\r\n                                  <img alt="" height="auto" src="https://obscurus-branding-images.s3.us-west-2.amazonaws.com/logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150" />\r\n                                </a>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">\r\n                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:50px;font-style:GeistSans;line-height:1;text-align:center;color:#0F172A;">obscurus</div>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">\r\n                        <p style="border-top:dashed 1px #0F172A;font-size:1px;margin:0px auto;width:100%;">\r\n                        </p>\r\n                        <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:dashed 1px #0F172A;font-size:1px;margin:0px auto;width:250px;" role="presentation" width="250px" ><tr><td style="height:0;line-height:0;"> &nbsp;\r\n</td></tr></table><![endif]-->\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">\r\n                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;font-style:GeistSans;line-height:1;text-align:center;color:#0F172A;">Your email verification code:</div>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">\r\n                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-style:GeistSans;line-height:1;text-align:center;color:#0F172A;">{####}</div>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!--[if mso | IE]></td></tr></table><![endif]-->\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!--[if mso | IE]></td></tr></table><![endif]-->\r\n  </div>\r\n</body>\r\n\r\n</html>',
        },
        email: UserPoolEmail.withSES({
          fromEmail: "no-reply@obscurus.me",
          sesRegion: stack.region,
          sesVerifiedDomain: "obscurus.me",
        }),
        deviceTracking: {
          challengeRequiredOnNewDevice: true,
          deviceOnlyRememberedOnUserPrompt: false,
        },
      },
    },
    triggers: {
      postAuthentication: {
        handler: "stack/lambdas/postAuthentication.main",
        bind: [rds],
      },
    },
  });

  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        timeout: 20,
        permissions: [rds, chumBucket, sesPolicyStatement],
        bind: [rds, chumBucket],
        environment: { DB_NAME: rds.clusterArn },
      },
    },
    authorizers: {
      myAuthorizer: {
        type: "user_pool",
        userPool: {
          id: auth.userPoolId,
          clientIds: [auth.userPoolClientId],

        },
      },
    },
    routes: {
      "GET /getUsers": {
        function: {
          handler: "stack/lambdas/listUsers.handler",
        },
      },
      "GET /getRequests": {
        function: {
          handler: "stack/lambdas/listRequests.handler",
        },
      },
      "POST /processVideo": {
        function: {
          handler: "stack/lambdas/process.handler",
        },
      },
      "POST /createRequest": {
        function: {
          handler: "stack/lambdas/createRequest.handler",
        },
      },
      "GET /getSubmissions": {
        function: {
          handler: "stack/lambdas/listSubmissions.handler",
        },
      },
      "POST /getNotificationsViaEmail": {
        function: {
          handler: "stack/lambdas/getNotificationsViaEmail.handler",
        },
      },
      "POST /readNotification": {
        function: {
          handler: "stack/lambdas/readNotification.handler",
        },
      },
      "POST /deleteNotification": {
        function: {
          handler: "stack/lambdas/getNotificationsViaEmail.handler",
        },
      },
      "POST /getRequestsViaEmail": {
        function: {
          handler: "stack/lambdas/getRequestsViaEmail.handler",
        },
      },
      "POST /archiveRequest": {
        function: {
          handler: "stack/lambdas/archiveRequest.handler",
        },
      },
      "POST /unarchiveRequest": {
        function: {
          handler: "stack/lambdas/unarchiveRequest.handler",
        },
      },
      "POST /trashRequest": {
        function: {
          handler: "stack/lambdas/trashRequest.handler",
        },
      },
      "POST /getUserViaEmail": {
        function: {
          handler: "stack/lambdas/getUserViaEmail.handler",
        },
      },
      "POST /updateStatus": {
        function: {
          handler: "stack/lambdas/updateStatus.handler",
        },
      },
      "POST /getStatus": {
        function: {
          handler: "stack/lambdas/getStatus.handler",
        },
      },
      "POST /getRequest": {
        function: {
          handler: "stack/lambdas/getRequest.handler",
        },
      },
      "GET /getRoomsViaEmail": {
        function: {
          handler: "stack/lambdas/getRoomsViaEmail.handler",
        },
      },
      "GET /getMessages": {
        function: {
          handler: "stack/lambdas/listMessages.handler",
        },
      },
      "POST /createMessage": {
        function: {
          handler: "stack/lambdas/createMessage.handler",
        },
      },
      "POST /setIsReadTrue": {
        function: {
          handler: "stack/lambdas/setIsReadTrue.handler",
        },
      },
      "GET /listNotifications": {
        function: {
          handler: "stack/lambdas/listNotifications.handler",
        },
      },
      "POST /createNotification": {
        function: {
          handler: "stack/lambdas/createNotification.handler",
        },
      },
      "POST /updateNotificationDate": {
        function: {
          handler: "stack/lambdas/updateNotificationDate.handler",
        },
      },
      "POST /getUserDataByEmail": {
        function: {
          handler: "stack/lambdas/getUserDataByEmail.handler",
        },
      },
      "GET /getUserNames": {
        function: {
          handler: "stack/lambdas/getUserNames.handler",
        },
      },
      "POST /getRequestsAndSubmissionsByEmail": {
        function: {
          handler: "stack/lambdas/getRequestsAndSubmissionsByEmail.handler",
        },
      },
      "POST /sendEmail": {
        function: {
          handler: "stack/lambdas/sendEmail.handler",
        },
      },
      "POST /setSubmittedDate": {
        function: {
          handler: "stack/lambdas/setSubmittedDate.handler",
        },
      },
    },
  });

  const wsApi = new WebSocketApi(stack, "WSApi", {
    defaults: {
      function: {
        bind: [rds],
      },
    },
    routes: {
      $connect: "stack/lambdas/chat/connect.main",
      $disconnect: "stack/lambdas/chat/disconnect.main",
      sendmessage: "stack/lambdas/chat/sendMessage.main",
      updateSubmissionStatus: "stack/lambdas/updateSubmissionStatus.main",
      newNotification: "stack/lambdas/newNotification.main",
    },
  });

  const processVideo = new Service(stack, "ProcessVideo", {
    path: "stack/process-video",
    port: 8080,
    bind: [chumBucket, api, wsApi, rds],
    cdk: {
      fargateService: {
        circuitBreaker: { rollback: true },
      },
      vpc: ec2.Vpc.fromLookup(stack, "Veep", {
        vpcId: "vpc-03517d1439c6e7459",
      }),
    },
    environment: {
      BUCKET_NAME: chumBucket.bucketName,
      API_URL: api.url,
      WS_API_URL: wsApi.url,
    },
    permissions: [
      "s3",
      rekognitionPolicyStatement,
      "rds-data",
      rds,
      wsApi,
      api,
      chumBucket,
      sesPolicyStatement,
    ],
    cpu: "8 vCPU",
    memory: "32 GB",
  });

  auth.attachPermissionsForAuthUsers(stack, [api]);

  api.bind([wsApi]);

  const site = new NextjsSite(stack, "site", {
    bind: [chumBucket, chumBucket, rds, api, wsApi, processVideo],
    permissions: [rekognitionPolicyStatement, wsApi],
    environment: {
      NEXT_PUBLIC_WEBSOCKET_API_ENDPOINT: wsApi.url,
      NEXT_PUBLIC_USER_POOL_ID: auth.userPoolId,
      NEXT_PUBLIC_USER_POOL_WEB_CLIENT_ID: auth.userPoolClientId,
    },
  });

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
    ApiEndpoint: api.url,
    UserPoolId: auth.userPoolId,
    UserPoolClientId: auth.userPoolClientId,
    WebSocketApiEndpoint: wsApi.url,
    ServiceUrl: processVideo.url,
  });
}
