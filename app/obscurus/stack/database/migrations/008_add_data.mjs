import { Kysely, sql } from "kysely";

// const uuid = uuidv4()

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db
    .insertInto("users")
    .values([
      {
        email: "imightbejan@gmail.com",
        givenName: "Jan-Yaeger",
        familyName: "Dhillon",
        profileImage: null,
        joinedDate: new Date("2023-12-12"),
      },
      {
        email: "soren.is@hotmail.ca",
        givenName: "Soren",
        familyName: "Stenback",
        profileImage: null,
        joinedDate: new Date("2023-11-02"),
      },
      {
        email: "ansivana@gmail.com",
        givenName: "Baz",
        familyName: "Sivakua",
        profileImage: null,
        joinedDate: new Date("2024-01-01"),
      },
      {
        email: "bakar.a.muhammad@gmail.com",
        givenName: "Muhammad",
        familyName: "Bakar",
        profileImage: null,
        joinedDate: new Date("2024-02-15"),
      },
      {
        email:
          "WfgmXE9IhA2vUvADnvy9RqmWaykKSLZwcc487KQA090kSiNOAiNO2japFzcfhoXfi9EFAl3jib0Jrm9O3kBrbzO7aVA69pMb9KtF8PhQFzVXTuTrs24zFAhjzHJG8zXBIMID2m6u10iZBHnPu5GfSmLhvJLPPmTd0jJg4rQMsC811VE0WzPV2F7WKrKkfBI6awIjatWZyGWCGOIOl1jWnkuTkDA480DDJtO1BTP0ffFQiGGnEWd9lzxridsISzjaCNMLhb0AMgLvafvi3eoOCvE1UpmEL8MhvjbCNyr29MBq2A3ztriZ@example.com",
        givenName:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius tellus et est porttitor nam.",
        familyName:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius tellus et est porttitor nam.",
        profileImage: null,
        joinedDate: new Date("2024-02-02"),
      },
    ])
    .execute();

  await db
    .insertInto("requests")
    .values([
      {
        requestId: "f50a22fb-f9ce-4c83-8954-60d6aa4dba3b",
        requestTitle: "Spanish Lesson 1",
        requesterEmail: "imightbejan@gmail.com",
        grouping: null,
        description: "Send video of you speaking section 1 from the textbook",
        blurred: true,
        creationDate: new Date("2023-12-12"),
        dueDate: new Date("2024-04-02"),
      },
      {
        requestId: "af45472d-21c4-4b1a-b536-74704418e17b",
        requestTitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan diam sed molestie dapibus nam.",
        requesterEmail: "imightbejan@gmail.com",
        grouping: null,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a odio finibus, auctor lorem sit amet, viverra metus. Etiam ultricies sodales dignissim. Suspendisse porttitor ipsum non lacus faucibus, eget gravida enim eleifend. Vestibulum nisi neque, tincidunt tempus imperdiet accumsan, mollis eget ligula. Sed eget vestibulum risus. Sed non massa non risus lacinia iaculis at rhoncus turpis. Nulla a tortor mi. Morbi aliquet dolor mattis elit varius rhoncus. Vestibulum scelerisque a nisi in viverra. Nullam non lorem id nulla molestie lacinia et sed lacus. Phasellus purus ante, tristique ut tempus vitae, porttitor iaculis magna. Vivamus iaculis rutrum congue. Aliquam erat volutpat. Quisque maximus nisl odio, nec venenatis leo vehicula at. Aliquam mauris massa, faucibus ac finibus vel, mollis ut metus.\n\n\n\n\n\n\n\n\n\n\n\n\n\nAenean eget mauris urna. Integer non leo lectus. Suspendisse pharetra ipsum id fermentum commodo. Proin ut dignissim nibh. Maecenas non scelerisque diam. Phasellus suscipit posuere suscipit. Pellentesque mollis quam quis lectus pretium maximus. Donec in sem vel mauris venenatis gravida sed a nulla.\n\nVestibulum a mattis felis, in tempor neque. Integer auctor, ipsum et varius fringilla, nisi elit pulvinar ligula, eu interdum ligula mi egestas odio. Nulla porttitor iaculis efficitur. Donec a nunc vel enim iaculis ultrices et ullamcorper magna. Mauris a congue nisl. Curabitur ut nisi ac risus finibus sodales eu id nibh. Suspendisse vel porttitor tortor. Nulla sit amet nisi orci. Sed at mi vehicula, lobortis tellus nec, venenatis urna.\n\n\n\n\n\n\n\nCras lobortis efficitur nibh, rutrum consequat est bibendum at. Mauris ornare sodales tincidunt. Donec quis lorem porttitor, faucibus mi vitae, facilisis est. Quisque nunc leo, vehicula id magna sit amet, efficitur consectetur lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean quis finibus ipsum, in feugiat elit. Etiam vel leo posuere, hendrerit nisi vitae, venenatis elit\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a odio finibus, auctor lorem sit amet, viverra metus. Etiam ultricies sodales dignissim. Suspendisse porttitor ipsum non lacus faucibus, eget gravida enim eleifend. Vestibulum nisi neque, tincidunt tempus imperdiet accumsan, mollis eget ligula. Sed eget vestibulum risus. Sed non massa non risus lacinia iaculis at rhoncus turpis. Nulla a tortor mi. Morbi aliquet dolor mattis elit varius rhoncus. Vestibulum scelerisque a nisi in viverra. Nullam non lorem id nulla molestie lacinia et sed lacus. Phasellus purus ante, tristique ut tempus vitae, porttitor iaculis magna. Vivamus iaculis rutrum congue. Aliquam erat volutpat. Quisque maximus nisl odio, nec venenatis leo vehicula at. Aliquam mauris massa, faucibus ac finibus vel, mollis ut metus.",
        blurred: true,
        creationDate: new Date("2023-12-12"),
        dueDate: new Date("2999-10-30"),
      },
      {
        requestId: "092c4718-bde0-4a31-9471-7d5a459b4e22",
        requestTitle: "Math Lesson 2",
        requesterEmail: "imightbejan@gmail.com",
        grouping: null,
        description:
          "Send video of you reading out section 10 from the textbook",
        blurred: true,
        creationDate: new Date("2023-09-09"),
        dueDate: new Date("2024-02-02"),
      },
      {
        requestId: "7eca082e-7286-4e49-a5f0-0d2cf4264326",
        requestTitle: "AWS Job Interview",
        requesterEmail: "ansivana@gmail.com",
        grouping: null,
        description:
          "Please answer the following: Tell me about yourself. Walk me through your resume. How did you hear about this position? Why do you want to work at this company? Why do you want this job? Why should we hire you? What can you bring to the company? What are your greatest strengths?",
        blurred: true,
        dueDate: new Date("2024-03-02"),
      },
      {
        requestId: "c2c762f7-80f7-4b06-a3d6-769a07df6793",
        requestTitle: "AWS Job Interview Stage 2",
        requesterEmail: "ansivana@gmail.com",
        grouping: null,
        description:
          "Please answer the following: Tell me about yourself. Walk me through your resume. How did you hear about this position? Why do you want to work at this company? Why do you want this job? Why should we hire you? What can you bring to the company? What are your greatest strengths?",
        blurred: true,
        creationDate: new Date("2024-01-01"),
        dueDate: new Date("2024-03-02"),
      },
      {
        requestId: "df6a3872-7210-49fc-b4d8-fc78631d95f5",
        requestTitle: "AWS Job Interview Stage 3",
        requesterEmail: "ansivana@gmail.com",
        grouping: null,
        description:
          "What are you looking for from a new position? Are you considering other positions in other companies? What is the professional achievement you're most proud of? What kind of working environment do you work best in?",
        blurred: true,
        dueDate: new Date("2024-05-02"),
      },
      {
        requestId: "be4b5ba1-777d-4a7e-a54a-8fc5f2f14c92",
        requestTitle: "Test",
        requesterEmail: "bakar.a.muhammad@gmail.com",
        grouping: null,
        description: "This is a test",
        blurred: false,
        dueDate: new Date("2024-01-02"),
      },
      {
        requestId: "f11ded41-37c6-4709-968d-5b8c7d77b19f",
        requestTitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan diam sed molestie dapibus nam.",
        requesterEmail:
          "WfgmXE9IhA2vUvADnvy9RqmWaykKSLZwcc487KQA090kSiNOAiNO2japFzcfhoXfi9EFAl3jib0Jrm9O3kBrbzO7aVA69pMb9KtF8PhQFzVXTuTrs24zFAhjzHJG8zXBIMID2m6u10iZBHnPu5GfSmLhvJLPPmTd0jJg4rQMsC811VE0WzPV2F7WKrKkfBI6awIjatWZyGWCGOIOl1jWnkuTkDA480DDJtO1BTP0ffFQiGGnEWd9lzxridsISzjaCNMLhb0AMgLvafvi3eoOCvE1UpmEL8MhvjbCNyr29MBq2A3ztriZ@example.com",
        grouping: null,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a odio finibus, auctor lorem sit amet, viverra metus. Etiam ultricies sodales dignissim. Suspendisse porttitor ipsum non lacus faucibus, eget gravida enim eleifend. Vestibulum nisi neque, tincidunt tempus imperdiet accumsan, mollis eget ligula. Sed eget vestibulum risus. Sed non massa non risus lacinia iaculis at rhoncus turpis. Nulla a tortor mi. Morbi aliquet dolor mattis elit varius rhoncus. Vestibulum scelerisque a nisi in viverra. Nullam non lorem id nulla molestie lacinia et sed lacus. Phasellus purus ante, tristique ut tempus vitae, porttitor iaculis magna. Vivamus iaculis rutrum congue. Aliquam erat volutpat. Quisque maximus nisl odio, nec venenatis leo vehicula at. Aliquam mauris massa, faucibus ac finibus vel, mollis ut metus.\n\n\n\n\n\n\n\n\n\n\n\n\n\nAenean eget mauris urna. Integer non leo lectus. Suspendisse pharetra ipsum id fermentum commodo. Proin ut dignissim nibh. Maecenas non scelerisque diam. Phasellus suscipit posuere suscipit. Pellentesque mollis quam quis lectus pretium maximus. Donec in sem vel mauris venenatis gravida sed a nulla.\n\nVestibulum a mattis felis, in tempor neque. Integer auctor, ipsum et varius fringilla, nisi elit pulvinar ligula, eu interdum ligula mi egestas odio. Nulla porttitor iaculis efficitur. Donec a nunc vel enim iaculis ultrices et ullamcorper magna. Mauris a congue nisl. Curabitur ut nisi ac risus finibus sodales eu id nibh. Suspendisse vel porttitor tortor. Nulla sit amet nisi orci. Sed at mi vehicula, lobortis tellus nec, venenatis urna.\n\n\n\n\n\n\n\nCras lobortis efficitur nibh, rutrum consequat est bibendum at. Mauris ornare sodales tincidunt. Donec quis lorem porttitor, faucibus mi vitae, facilisis est. Quisque nunc leo, vehicula id magna sit amet, efficitur consectetur lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean quis finibus ipsum, in feugiat elit. Etiam vel leo posuere, hendrerit nisi vitae, venenatis elit\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a odio finibus, auctor lorem sit amet, viverra metus. Etiam ultricies sodales dignissim. Suspendisse porttitor ipsum non lacus faucibus, eget gravida enim eleifend. Vestibulum nisi neque, tincidunt tempus imperdiet accumsan, mollis eget ligula. Sed eget vestibulum risus. Sed non massa non risus lacinia iaculis at rhoncus turpis. Nulla a tortor mi. Morbi aliquet dolor mattis elit varius rhoncus. Vestibulum scelerisque a nisi in viverra. Nullam non lorem id nulla molestie lacinia et sed lacus. Phasellus purus ante, tristique ut tempus vitae, porttitor iaculis magna. Vivamus iaculis rutrum congue. Aliquam erat volutpat. Quisque maximus nisl odio, nec venenatis leo vehicula at. Aliquam mauris massa, faucibus ac finibus vel, mollis ut metus.",
        blurred: false,
        dueDate: new Date("2999-01-02"),
      },
    ])
    .execute();

  await db
    .insertInto("submissions")
    .values([
      {
        submissionId: "6b82a368-dd60-49f4-93fe-c6f8c9a05e1b",
        requesteeEmail: "soren.is@hotmail.ca",
        status: "TODO",

        isRead: false,
        submittedDate: null,
        requestId: "f50a22fb-f9ce-4c83-8954-60d6aa4dba3b",
      },
      {
        submissionId: "0c49d690-a96f-445a-bcbe-a964dc0e7e21",
        requesteeEmail: "ansivana@gmail.com",
        status: "PROCESSING",

        isRead: true,
        submittedDate: null,
        requestId: "f50a22fb-f9ce-4c83-8954-60d6aa4dba3b",
      },
      {
        submissionId: "674b2c03-210e-46e3-b71a-dccbb4d5a079",
        requesteeEmail: "ansivana@gmail.com",
        status: "ARCHIVED",

        isRead: false,
        submittedDate: null,
        requestId: "092c4718-bde0-4a31-9471-7d5a459b4e22",
      },
      {
        submissionId: "b8807202-e0b8-4e3f-aa22-d8b8264139a5",
        requesteeEmail: "bakar.a.muhammad@gmail.com",
        status: "COMPLETED",

        isRead: false,
        submittedDate: null,
        requestId: "092c4718-bde0-4a31-9471-7d5a459b4e22",
      },
      {
        submissionId: "8224741d-a388-4bf9-ba35-6a00c01a5ad8",
        requesteeEmail: "soren.is@hotmail.ca",
        status: "FAILED",

        isRead: false,
        submittedDate: null,
        requestId: "7eca082e-7286-4e49-a5f0-0d2cf4264326",
      },
      {
        submissionId: "e1e25c2a-0a02-4cc6-9922-414755eb5e7f",
        requesteeEmail: "bakar.a.muhammad@gmail.com",
        status: "PROCESSING",

        isRead: true,
        submittedDate: null,
        requestId: "7eca082e-7286-4e49-a5f0-0d2cf4264326",
      },
      {
        submissionId: "bc94f9bd-dd57-4a7a-a935-6c76f3113212",
        requesteeEmail: "imightbejan@gmail.com",
        status: "TODO",

        isRead: true,
        submittedDate: null,
        requestId: "7eca082e-7286-4e49-a5f0-0d2cf4264326",
      },
      {
        submissionId: "2c48358c-b0bf-4826-bd28-aa4e54a67b4a",
        requesteeEmail: "soren.is@hotmail.ca",
        status: "PROCESSING",

        isRead: false,
        submittedDate: null,
        requestId: "c2c762f7-80f7-4b06-a3d6-769a07df6793",
      },
      {
        submissionId: "ce03c21a-a659-412e-b25a-baa4a3d1b5e8",
        requesteeEmail: "bob@gamil.com",
        status: "TODO",

        isRead: false,
        submittedDate: null,
        requestId: "df6a3872-7210-49fc-b4d8-fc78631d95f5",
      },
      {
        submissionId: "ac837adb-2994-4769-9d84-d34581b24ad4",
        requesteeEmail: "soren.is@hotmail.ca",
        status: "TODO",

        isRead: true,
        submittedDate: null,
        requestId: "be4b5ba1-777d-4a7e-a54a-8fc5f2f14c92",
      },
      {
        submissionId: "cf780978-c459-406b-b6fc-a11ab5d1500a",
        requesteeEmail: "imightbejan@gmail.com",
        status: "COMPLETED",

        isRead: false,
        submittedDate: null,
        requestId: "be4b5ba1-777d-4a7e-a54a-8fc5f2f14c92",
      },
      {
        submissionId: "37594b67-e2da-4a87-b97b-c86f65b3c731",
        requesteeEmail: "ansivana@gmail.com",
        status: "PROCESSING",

        isRead: true,
        submittedDate: null,
        requestId: "be4b5ba1-777d-4a7e-a54a-8fc5f2f14c92",
      },
      {
        submissionId: "bf6a2646-0ac2-4634-9af9-a439bed02665",
        requesteeEmail:
          "WfgmXE9IhA2vUvADnvy9RqmWaykKSLZwcc487KQA090kSiNOAiNO2japFzcfhoXfi9EFAl3jib0Jrm9O3kBrbzO7aVA69pMb9KtF8PhQFzVXTuTrs24zFAhjzHJG8zXBIMID2m6u10iZBHnPu5GfSmLhvJLPPmTd0jJg4rQMsC811VE0WzPV2F7WKrKkfBI6awIjatWZyGWCGOIOl1jWnkuTkDA480DDJtO1BTP0ffFQiGGnEWd9lzxridsISzjaCNMLhb0AMgLvafvi3eoOCvE1UpmEL8MhvjbCNyr29MBq2A3ztriZ@example.com",
        status: "TODO",
        isRead: true,
        submittedDate: null,
        requestId: "af45472d-21c4-4b1a-b536-74704418e17b",
      },
      {
        submissionId: "e093c0b0-0376-4d7e-9f49-d09f05b79fc2",
        requesteeEmail:
          "E4EhC6FAvJO382hcaPE2TOhUbKcnIFHJhyTk5IDP2bScbbKk3Db22ED7wggnmB9JEZluCxns8r9c03g6FKgjc69v8Y0B514txCUi1kR0h1QlsONYUhMDFnm0U86ZZ67ucO1ejZCam4oAaDFh4SjLRltmIrJD1OEGvl5ockzgNHOuOiBgkf3SGj0ogCy1iOhd2kXJC511qQW98nS6Vv9jeal3yxOBJLXdFoof4QlVpv57romcC7U1XTO2cyUZcLc3daXsuOwuaX5d3RblCQ9Xj7uaDrRiiNTn4f440dv1OpQQANViixbo@example.com",
        status: "TODO",
        isRead: true,
        submittedDate: null,
        requestId: "af45472d-21c4-4b1a-b536-74704418e17b",
      },
      {
        submissionId: "bc53a450-b420-4c4d-9506-e81fecdcf3ef",
        requesteeEmail:
          "Pi9nD26zVTMaoDzBcVBw7rYkHtSDU746mJsxYcL9X8VhZOurxRxyAtBcFLheWiWindgb7GfI3Pv2OkJ8MrckDW5peBhFTBiPDX0uOCCu9huByDxzrHbbFkmqgOjwo7oEQEaO20o2G3oPt9ZceP1ROmhoTbTsgL6iI9WgJMikv8CAlGzjcXlCCKBlgHskD7x0nGHELmaeDGrRYL6IAfJLq7HU1ZxdrhxGnDhnXzXXJ3bUpztoUpyvhoMmPEJbtkHWo2BRnJbGCx89LGlOWuCTb1s49f7jbOKnbneajSaYSBn5fUbbLB2N@example.com",
        status: "TODO",
        isRead: true,
        submittedDate: null,
        requestId: "af45472d-21c4-4b1a-b536-74704418e17b",
      },
      {
        submissionId: "45d06ee3-7cdc-4530-a78d-a1a93cf2c0de",
        requesteeEmail:
          "1wWfnvBJbh6e8R5W8XBkEBp6omQViOAy4HI69QBa07o964Q1G70DSF2tHArTr3HCdoUvfoqcMyfaBm4Wbkc8s6bZhd3cevF7Mk86MsOADZGJv5Da8CStRXcrDWAPYcAwtoxaDJDM40S2Es04r3xL3hYYa23Xi4WqPMJhoemULqSatXImQql49GIg7GQMo1vy4E7cx6Kri668zEzUseSfR6VbMCngNEBTe82nyPzRjcdyBy1eK2QDWsWtt35aYY1uI2Asw3TiebVTMu2GHGbMJipODnKqB5eC0NVkDrzHf990S7UOquu2@example.com",
        status: "TODO",
        isRead: true,
        submittedDate: null,
        requestId: "af45472d-21c4-4b1a-b536-74704418e17b",
      },
      {
        submissionId: "77a654e6-a336-429b-a391-62f451b65e45",
        requesteeEmail:
          "Sagwpe6fM7n2A26oQC1Nj1lKcHMqejOW71a7w20rgEb2QLxfSWUFD3gGPISz9cbqAPswVx9QZ2zG5ngkJeZosxZhiqw611sLiOhFfU4KMEXt4vnK71j4VAQMMCTVOqt963Fi2ImJDcPSpUdrQNvoz4m6Nl7JMshhOVmpozpKDIMpGx3SBYmmel2YbTQCHkoTiKBkXTZ53IDvieRpcipKYaFG1jjE093Lddpasdod0dnoQg4Ot9VXF6nR1t1Fbn7wyVjOTVBJFBqOQxs84sucaMWEnIkZ6xNQdiZdySlB1MWCh1tDuLU1@example.com",
        status: "TODO",
        isRead: true,
        submittedDate: null,
        requestId: "af45472d-21c4-4b1a-b536-74704418e17b",
      },
      {
        submissionId: "7ca8c3ad-4294-4239-b595-b157114c558e",
        requesteeEmail:
          "2ZZaKfQju9yetVylaVGpKLXtStfeW3zXWtcYVSsoSePYCCfRZXoqVZ9M0unIdtwQUPJclpssXTLCEsjIhXtSbgK252rl5G6m8syZejH9zH0SPw8h8CnhSu4WKZ4BRrhy8lvP1ZUEIhT3Bl6NUZUyz6PEwOuNW4wkJeRIUE6azCkA5QcP3HJpPzqY9semlRkIRwAOkjRlPof70xOfBjnQfgpwSYWf606NC5vXdJDk3hN9rbIGVlpD6dsrkgZOEysGasoYir39YWaWZiE62rN4vFlBXeScxQCCTiuKdfVEz0Gvu1ot7L5Q@example.com",
        status: "TODO",
        isRead: true,
        submittedDate: null,
        requestId: "af45472d-21c4-4b1a-b536-74704418e17b",
      },
      {
        submissionId: "5d2704bc-54b5-41f7-a1d6-5c16716c9586",
        requesteeEmail:
          "zkJYBHrgrvgcP0Iu5SwXJMOvWkijsvuTrCDoRxxRFvoAZiHMekLIxjR3uCsJuAVhftA0TfEboRmzEC2lRQfm4juZiyXS93MqnIKrviO9ETAZjP5ZoVIdENqFFdhkDwXBYxLFhEN8zjRWW1U96xb2XudjRv5ZvdJyc1zHz88F8u0w0lo8QRcQuG7QdeTaGJHrxI6AYZrvBbkBJpNPhNpTBl440Z36Uqap1Rf9xrPAV58U1LIaF9rIAWpEBpTIFtr8mePBBT1nd6fHflgdubGZKRerdlreyaOjgTynp8ZwtDROF814Pa2S@example.com",
        status: "PROCESSING",
        isRead: true,
        submittedDate: null,
        requestId: "af45472d-21c4-4b1a-b536-74704418e17b",
      },
      {
        submissionId: "2098f03a-1c39-43c3-b953-a21052c04a50",
        requesteeEmail:
          "q5eYNFs06vA5D4s4qRSZFckISZfCeyWUb65zxNlMk192YGifg4HNi70mA0vNGzrmnq7OIMlnCuUa6RTP5VUOq4QNYfc2MotF5ZkS0MArwxKqHG64jouCQ5NbiIsv0KduFHzEHA5gdjq9ZSTOZC6Ya9TWnRKfMMvh8UcJz1wUlgoD8OQ5vc88Cd2mpkSW8n2AaTuXzs6rJ0a0rVgVbbgf1l6Y5sWy0AnUdQU5LdFgwSAoNw2n0L386KJ5CYrpwaXlN3YhJThUFXonLNcHFKDWKk6jU2G8zQSXiCGjIwTSSxwiAj8lRZI5@example.com",
        status: "COMPLETED",
        isRead: true,
        submittedDate: null,
        requestId: "af45472d-21c4-4b1a-b536-74704418e17b",
      },
      {
        submissionId: "8ef0b712-dfa3-43b6-8f67-a86df5246135",
        requesteeEmail:
          "hURdvTKWdDHLEIu3aoVKpFFxQjkaHTTaNuHF2M2cHnttCi2UknQgB2R5yzok7mbchgDrdJnRXU0IEjH7fPIDiM71nAjksNmrjoHNTDokHU8XSQBKltiaff0tWULiucx456H7x5jU8DZAeE6fkh7KXCxNpCUSisNvcHZRUXmuCrotacouIr4GNUezJG09mnjrRYcITiNCdLQwvvDlLJAjHNJWMjesJHqhbKUs9cEp8q4xbPDijviqavOqf33ZvPpYZVNAVCDbeaGNYtLsyrnSkysYo7yVjxRze1iXKaJ7QWRQGPubSC0o@example.com",
        status: "TODO",
        isRead: true,
        submittedDate: null,
        requestId: "af45472d-21c4-4b1a-b536-74704418e17b",
      },
      {
        submissionId: "82b65173-2f7e-49f2-8d26-ace28431789a",
        requesteeEmail:
          "iKALTR5YtVJyeVxOK6boNOBgMvTEeio2qrcjNklQjpbt6mOOEI7LguF7N8mmNJov4JTfeNNtDmfnoOCtOmpyegGF6rxfQvQP6PkHa278Itfyq2YSz8iaQcbVpHToyiwYhXB0qOsQ9XVjRC95bQBKXXO1JEq4meFKYUNp6lRTqWqkFtBT8f2LTpFNvsFLQJuiOZ007Xrc4PyFdqNSVmPxsAJyOJtlyyNFTaYby6T9nhFujjmjJQ7zitHqpmNwUTSk8s3v5Jbczas4MnySQ8FP54unlf03VO9sQ9k65Jg1JQuXmENcuoWO@example.com",
        status: "TODO",
        isRead: true,
        submittedDate: null,
        requestId: "af45472d-21c4-4b1a-b536-74704418e17b",
      },
      {
        submissionId: "8e53e568-7215-43c3-ad3d-aa2f4992487b",
        requesteeEmail: "imightbejan@gmail.com",
        status: "TODO",
        isRead: false,
        submittedDate: null,
        requestId: "f11ded41-37c6-4709-968d-5b8c7d77b19f",
      },
      {
        submissionId: "3e00d553-a129-4d9d-997c-57b31df2e714",
        requesteeEmail:
          "Pi9nD26zVTMaoDzBcVBw7rYkHtSDU746mJsxYcL9X8VhZOurxRxyAtBcFLheWiWindgb7GfI3Pv2OkJ8MrckDW5peBhFTBiPDX0uOCCu9huByDxzrHbbFkmqgOjwo7oEQEaO20o2G3oPt9ZceP1ROmhoTbTsgL6iI9WgJMikv8CAlGzjcXlCCKBlgHskD7x0nGHELmaeDGrRYL6IAfJLq7HU1ZxdrhxGnDhnXzXXJ3bUpztoUpyvhoMmPEJbtkHWo2BRnJbGCx89LGlOWuCTb1s49f7jbOKnbneajSaYSBn5fUbbLB2N@example.com",
        status: "TODO",
        isRead: true,
        submittedDate: null,
        requestId: "f11ded41-37c6-4709-968d-5b8c7d77b19f",
      },
    ])
    .execute();

  await db
    .insertInto("rooms")
    .values([
      {
        roomId: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        participant1Email: "imightbejan@gmail.com",
        participant2Email: "soren.is@hotmail.ca",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
      {
        roomId: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        participant1Email: "imightbejan@gmail.com",
        participant2Email: "ansivana@gmail.com",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
      {
        roomId: "bd240dd9-5ff4-46df-9273-d216685b3683",
        participant1Email: "imightbejan@gmail.com",
        participant2Email: "bakar.a.muhammad@gmail.com",
        creationDate: new Date("2023-09-09"),
        isActive: true,
      },
      {
        roomId: "dac6ccb4-d0a2-43cc-a2a5-d0d04205ab99",
        participant1Email: "ansivana@gmail.com",
        participant2Email: "bob@gamil.com",
        isActive: false,
      },
      {
        roomId: "6fd596e1-a882-430b-be02-d6fb5c405802",
        participant1Email: "imightbejan@gmail.com",
        participant2Email:
          "E4EhC6FAvJO382hcaPE2TOhUbKcnIFHJhyTk5IDP2bScbbKk3Db22ED7wggnmB9JEZluCxns8r9c03g6FKgjc69v8Y0B514txCUi1kR0h1QlsONYUhMDFnm0U86ZZ67ucO1ejZCam4oAaDFh4SjLRltmIrJD1OEGvl5ockzgNHOuOiBgkf3SGj0ogCy1iOhd2kXJC511qQW98nS6Vv9jeal3yxOBJLXdFoof4QlVpv57romcC7U1XTO2cyUZcLc3daXsuOwuaX5d3RblCQ9Xj7uaDrRiiNTn4f440dv1OpQQANViixbo@example.com",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
      {
        roomId: "b9e33dc6-ac44-4c2c-aea4-d45f3f3e2810",
        participant1Email: "imightbejan@gmail.com",
        participant2Email:
          "Pi9nD26zVTMaoDzBcVBw7rYkHtSDU746mJsxYcL9X8VhZOurxRxyAtBcFLheWiWindgb7GfI3Pv2OkJ8MrckDW5peBhFTBiPDX0uOCCu9huByDxzrHbbFkmqgOjwo7oEQEaO20o2G3oPt9ZceP1ROmhoTbTsgL6iI9WgJMikv8CAlGzjcXlCCKBlgHskD7x0nGHELmaeDGrRYL6IAfJLq7HU1ZxdrhxGnDhnXzXXJ3bUpztoUpyvhoMmPEJbtkHWo2BRnJbGCx89LGlOWuCTb1s49f7jbOKnbneajSaYSBn5fUbbLB2N@example.com",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
      {
        roomId: "eaaeb305-5d64-4a30-ac77-f6e3c5271395",
        participant1Email: "imightbejan@gmail.com",
        participant2Email:
          "1wWfnvBJbh6e8R5W8XBkEBp6omQViOAy4HI69QBa07o964Q1G70DSF2tHArTr3HCdoUvfoqcMyfaBm4Wbkc8s6bZhd3cevF7Mk86MsOADZGJv5Da8CStRXcrDWAPYcAwtoxaDJDM40S2Es04r3xL3hYYa23Xi4WqPMJhoemULqSatXImQql49GIg7GQMo1vy4E7cx6Kri668zEzUseSfR6VbMCngNEBTe82nyPzRjcdyBy1eK2QDWsWtt35aYY1uI2Asw3TiebVTMu2GHGbMJipODnKqB5eC0NVkDrzHf990S7UOquu2@example.com",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
      {
        roomId: "6937e6f0-9ee8-492d-a4dd-faa7fad629bc",
        participant1Email: "imightbejan@gmail.com",
        participant2Email:
          "Sagwpe6fM7n2A26oQC1Nj1lKcHMqejOW71a7w20rgEb2QLxfSWUFD3gGPISz9cbqAPswVx9QZ2zG5ngkJeZosxZhiqw611sLiOhFfU4KMEXt4vnK71j4VAQMMCTVOqt963Fi2ImJDcPSpUdrQNvoz4m6Nl7JMshhOVmpozpKDIMpGx3SBYmmel2YbTQCHkoTiKBkXTZ53IDvieRpcipKYaFG1jjE093Lddpasdod0dnoQg4Ot9VXF6nR1t1Fbn7wyVjOTVBJFBqOQxs84sucaMWEnIkZ6xNQdiZdySlB1MWCh1tDuLU1@example.com",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
      {
        roomId: "a181ff4b-b816-43b2-b99b-b6f1ffb8500f",
        participant1Email: "imightbejan@gmail.com",
        participant2Email:
          "2ZZaKfQju9yetVylaVGpKLXtStfeW3zXWtcYVSsoSePYCCfRZXoqVZ9M0unIdtwQUPJclpssXTLCEsjIhXtSbgK252rl5G6m8syZejH9zH0SPw8h8CnhSu4WKZ4BRrhy8lvP1ZUEIhT3Bl6NUZUyz6PEwOuNW4wkJeRIUE6azCkA5QcP3HJpPzqY9semlRkIRwAOkjRlPof70xOfBjnQfgpwSYWf606NC5vXdJDk3hN9rbIGVlpD6dsrkgZOEysGasoYir39YWaWZiE62rN4vFlBXeScxQCCTiuKdfVEz0Gvu1ot7L5Q@example.com",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
      {
        roomId: "7d9bc5da-6f1a-461e-be1d-6ea2d71aac58",
        participant1Email: "imightbejan@gmail.com",
        participant2Email:
          "zkJYBHrgrvgcP0Iu5SwXJMOvWkijsvuTrCDoRxxRFvoAZiHMekLIxjR3uCsJuAVhftA0TfEboRmzEC2lRQfm4juZiyXS93MqnIKrviO9ETAZjP5ZoVIdENqFFdhkDwXBYxLFhEN8zjRWW1U96xb2XudjRv5ZvdJyc1zHz88F8u0w0lo8QRcQuG7QdeTaGJHrxI6AYZrvBbkBJpNPhNpTBl440Z36Uqap1Rf9xrPAV58U1LIaF9rIAWpEBpTIFtr8mePBBT1nd6fHflgdubGZKRerdlreyaOjgTynp8ZwtDROF814Pa2S@example.com",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
      {
        roomId: "84953bf3-a3c0-4677-a4ff-725d96a843d3",
        participant1Email: "imightbejan@gmail.com",
        participant2Email:
          "q5eYNFs06vA5D4s4qRSZFckISZfCeyWUb65zxNlMk192YGifg4HNi70mA0vNGzrmnq7OIMlnCuUa6RTP5VUOq4QNYfc2MotF5ZkS0MArwxKqHG64jouCQ5NbiIsv0KduFHzEHA5gdjq9ZSTOZC6Ya9TWnRKfMMvh8UcJz1wUlgoD8OQ5vc88Cd2mpkSW8n2AaTuXzs6rJ0a0rVgVbbgf1l6Y5sWy0AnUdQU5LdFgwSAoNw2n0L386KJ5CYrpwaXlN3YhJThUFXonLNcHFKDWKk6jU2G8zQSXiCGjIwTSSxwiAj8lRZI5@example.com",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
      {
        roomId: "d20517d2-7260-4ec1-b0c0-4edecea269a1",
        participant1Email: "imightbejan@gmail.com",
        participant2Email:
          "hURdvTKWdDHLEIu3aoVKpFFxQjkaHTTaNuHF2M2cHnttCi2UknQgB2R5yzok7mbchgDrdJnRXU0IEjH7fPIDiM71nAjksNmrjoHNTDokHU8XSQBKltiaff0tWULiucx456H7x5jU8DZAeE6fkh7KXCxNpCUSisNvcHZRUXmuCrotacouIr4GNUezJG09mnjrRYcITiNCdLQwvvDlLJAjHNJWMjesJHqhbKUs9cEp8q4xbPDijviqavOqf33ZvPpYZVNAVCDbeaGNYtLsyrnSkysYo7yVjxRze1iXKaJ7QWRQGPubSC0o@example.com",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
      {
        roomId: "1d993b6f-38c4-4223-9a97-80ee78a6c941",
        participant1Email: "imightbejan@gmail.com",
        participant2Email:
          "iKALTR5YtVJyeVxOK6boNOBgMvTEeio2qrcjNklQjpbt6mOOEI7LguF7N8mmNJov4JTfeNNtDmfnoOCtOmpyegGF6rxfQvQP6PkHa278Itfyq2YSz8iaQcbVpHToyiwYhXB0qOsQ9XVjRC95bQBKXXO1JEq4meFKYUNp6lRTqWqkFtBT8f2LTpFNvsFLQJuiOZ007Xrc4PyFdqNSVmPxsAJyOJtlyyNFTaYby6T9nhFujjmjJQ7zitHqpmNwUTSk8s3v5Jbczas4MnySQ8FP54unlf03VO9sQ9k65Jg1JQuXmENcuoWO@example.com",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
      {
        roomId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        participant1Email: "imightbejan@gmail.com",
        participant2Email:
          "WfgmXE9IhA2vUvADnvy9RqmWaykKSLZwcc487KQA090kSiNOAiNO2japFzcfhoXfi9EFAl3jib0Jrm9O3kBrbzO7aVA69pMb9KtF8PhQFzVXTuTrs24zFAhjzHJG8zXBIMID2m6u10iZBHnPu5GfSmLhvJLPPmTd0jJg4rQMsC811VE0WzPV2F7WKrKkfBI6awIjatWZyGWCGOIOl1jWnkuTkDA480DDJtO1BTP0ffFQiGGnEWd9lzxridsISzjaCNMLhb0AMgLvafvi3eoOCvE1UpmEL8MhvjbCNyr29MBq2A3ztriZ@example.com",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
    ])
    .execute();

  await db
    .insertInto("messages")
    .values([
      {
        roomId: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        messageId: "bf6687d7-a0a2-408a-83ec-a61fd2c2dbd1",
        senderEmail: "imightbejan@gmail.com",
        creationDate: new Date("2024.01.30 00:00:01"),
        messageContent: "Hello",
        isRead: true,
      },
      {
        roomId: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        senderEmail: "soren.is@hotmail.ca",
        messageId: "3a939655-202f-4208-8a14-0a27eb3c56a6",
        creationDate: new Date("2024.01.30 00:00:59"),
        messageContent: "Hello",
        isRead: true,
      },
      {
        roomId: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        senderEmail: "imightbejan@gmail.com",
        messageId: "763a3bc3-a2ce-42fb-814d-8c3f7845a9a0",
        creationDate: new Date("2024.01.30 00:01:49"),
        messageContent: "Bey",
        isRead: true,
      },
      {
        roomId: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        senderEmail: "soren.is@hotmail.ca",
        messageId: "c23da8c8-2886-4c7f-8d01-fa8becf2d4bd",
        creationDate: new Date("2024.01.30 00:40:01"),
        messageContent: "Bey",
        isRead: true,
      },
      {
        roomId: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        senderEmail: "ansivana@gmail.com",
        messageId: "68dd44a1-e7c4-4737-a9b8-244e8d8a0611",
        creationDate: new Date("2024.02.3 00:40:01"),
        messageContent: "Hey",
        isRead: true,
      },
      {
        roomId: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        senderEmail: "ansivana@gmail.com",
        messageId: "3f24294a-ce65-40a1-af7d-94b63a2a605b",
        creationDate: new Date("2024.02.3 00:41:01"),
        messageContent: "How are you?",
        isRead: true,
      },
      {
        roomId: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        senderEmail: "imightbejan@gmail.com",
        messageId: "e4e086c4-813b-442c-82e7-8803e98433bc",
        creationDate: new Date("2024.02.3 00:42:01"),
        messageContent: "good",
        isRead: true,
      },
      {
        roomId: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        senderEmail: "imightbejan@gmail.com",
        messageId: "f3d17592-2262-4082-927d-259793795377",
        creationDate: new Date("2024.02.3 00:43:01"),
        messageContent: "hbu?",
        isRead: true,
      },
      {
        roomId: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        senderEmail: "ansivana@gmail.com",
        messageId: "9fa8f751-d3ba-4701-87b7-cb0ec9094ad3",
        creationDate: new Date("2024.02.3 00:44:01"),
        messageContent: "fine",
        isRead: true,
      },
      {
        roomId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        senderEmail:
          "WfgmXE9IhA2vUvADnvy9RqmWaykKSLZwcc487KQA090kSiNOAiNO2japFzcfhoXfi9EFAl3jib0Jrm9O3kBrbzO7aVA69pMb9KtF8PhQFzVXTuTrs24zFAhjzHJG8zXBIMID2m6u10iZBHnPu5GfSmLhvJLPPmTd0jJg4rQMsC811VE0WzPV2F7WKrKkfBI6awIjatWZyGWCGOIOl1jWnkuTkDA480DDJtO1BTP0ffFQiGGnEWd9lzxridsISzjaCNMLhb0AMgLvafvi3eoOCvE1UpmEL8MhvjbCNyr29MBq2A3ztriZ@example.com",
        messageId: "2eec5ff5-bac5-4a7a-8b1b-32f020cbf887",
        creationDate: new Date("2024.02.3 00:44:01"),
        messageContent:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem augue. Suspendisse potenti. Mauris vestibulum ipsum sit amet purus auctor, eu volutpat.",
        isRead: true,
      },
      {
        roomId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        senderEmail:
          "WfgmXE9IhA2vUvADnvy9RqmWaykKSLZwcc487KQA090kSiNOAiNO2japFzcfhoXfi9EFAl3jib0Jrm9O3kBrbzO7aVA69pMb9KtF8PhQFzVXTuTrs24zFAhjzHJG8zXBIMID2m6u10iZBHnPu5GfSmLhvJLPPmTd0jJg4rQMsC811VE0WzPV2F7WKrKkfBI6awIjatWZyGWCGOIOl1jWnkuTkDA480DDJtO1BTP0ffFQiGGnEWd9lzxridsISzjaCNMLhb0AMgLvafvi3eoOCvE1UpmEL8MhvjbCNyr29MBq2A3ztriZ@example.com",
        messageId: "f5d73407-6384-41be-beef-4e5d3183f317",
        creationDate: new Date("2024.02.3 00:44:02"),
        messageContent: "ðŸµ ðŸ™ˆ ðŸ™‰ ðŸ™Š",
        isRead: true,
      },
      {
        roomId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        senderEmail: "imightbejan@gmail.com",
        messageId: "f4f1dbaf-5bc8-4eaa-b461-31298d4daf17",
        creationDate: new Date("2024.02.3 00:44:03"),
        messageContent:
          "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues",
        isRead: true,
      },
      {
        roomId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        senderEmail:
          "WfgmXE9IhA2vUvADnvy9RqmWaykKSLZwcc487KQA090kSiNOAiNO2japFzcfhoXfi9EFAl3jib0Jrm9O3kBrbzO7aVA69pMb9KtF8PhQFzVXTuTrs24zFAhjzHJG8zXBIMID2m6u10iZBHnPu5GfSmLhvJLPPmTd0jJg4rQMsC811VE0WzPV2F7WKrKkfBI6awIjatWZyGWCGOIOl1jWnkuTkDA480DDJtO1BTP0ffFQiGGnEWd9lzxridsISzjaCNMLhb0AMgLvafvi3eoOCvE1UpmEL8MhvjbCNyr29MBq2A3ztriZ@example.com",
        messageId: "8e968147-e100-49a9-b6db-0dcd405f2f87",
        creationDate: new Date("2024.02.3 00:44:04"),
        messageContent: "º",
        isRead: true,
      },
      {
        roomId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        senderEmail: "imightbejan@gmail.com",
        messageId: "bc03da91-32f3-4403-a02e-2ff1623da6e2",
        creationDate: new Date("2024.02.3 00:44:05"),
        messageContent: "-1",
        isRead: true,
      },
      {
        roomId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        senderEmail: "imightbejan@gmail.com",
        messageId: "82cd1b3d-2058-427c-8632-b0abb61eaff4",
        creationDate: new Date("2024.02.3 00:44:06"),
        messageContent: "-$1.00",
        isRead: true,
      },
      {
        roomId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        senderEmail:
          "WfgmXE9IhA2vUvADnvy9RqmWaykKSLZwcc487KQA090kSiNOAiNO2japFzcfhoXfi9EFAl3jib0Jrm9O3kBrbzO7aVA69pMb9KtF8PhQFzVXTuTrs24zFAhjzHJG8zXBIMID2m6u10iZBHnPu5GfSmLhvJLPPmTd0jJg4rQMsC811VE0WzPV2F7WKrKkfBI6awIjatWZyGWCGOIOl1jWnkuTkDA480DDJtO1BTP0ffFQiGGnEWd9lzxridsISzjaCNMLhb0AMgLvafvi3eoOCvE1UpmEL8MhvjbCNyr29MBq2A3ztriZ@example.com",
        messageId: "f8c69cc3-d07a-435c-90e4-3c6e1ef51a92",
        creationDate: new Date("2024.02.3 00:44:07"),
        messageContent: "null",
        isRead: true,
      },
      {
        roomId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        senderEmail:
          "WfgmXE9IhA2vUvADnvy9RqmWaykKSLZwcc487KQA090kSiNOAiNO2japFzcfhoXfi9EFAl3jib0Jrm9O3kBrbzO7aVA69pMb9KtF8PhQFzVXTuTrs24zFAhjzHJG8zXBIMID2m6u10iZBHnPu5GfSmLhvJLPPmTd0jJg4rQMsC811VE0WzPV2F7WKrKkfBI6awIjatWZyGWCGOIOl1jWnkuTkDA480DDJtO1BTP0ffFQiGGnEWd9lzxridsISzjaCNMLhb0AMgLvafvi3eoOCvE1UpmEL8MhvjbCNyr29MBq2A3ztriZ@example.com",
        messageId: "df6448ae-5b11-43e4-a6cc-1a21c0c30cf9",
        creationDate: new Date("2024.02.3 00:44:08"),
        messageContent: "https://www.youtube.com/",
        isRead: true,
      },
      {
        roomId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        senderEmail: "imightbejan@gmail.com",
        messageId: "325bbe99-e304-4cbb-b725-023f33940f92",
        creationDate: new Date("2024.02.3 00:44:09"),
        messageContent: "Jon, listen to me...",
        isRead: true,
      },
      {
        roomId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        senderEmail: "imightbejan@gmail.com",
        messageId: "8e9185c4-55ea-4db6-bfde-0148f2ddb1ee",
        creationDate: new Date("2024.02.3 00:44:10"),
        messageContent: "(ï½¡â—• âˆ€ â—•ï½¡)",
        isRead: true,
      },
      {
        roomId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        senderEmail:
          "WfgmXE9IhA2vUvADnvy9RqmWaykKSLZwcc487KQA090kSiNOAiNO2japFzcfhoXfi9EFAl3jib0Jrm9O3kBrbzO7aVA69pMb9KtF8PhQFzVXTuTrs24zFAhjzHJG8zXBIMID2m6u10iZBHnPu5GfSmLhvJLPPmTd0jJg4rQMsC811VE0WzPV2F7WKrKkfBI6awIjatWZyGWCGOIOl1jWnkuTkDA480DDJtO1BTP0ffFQiGGnEWd9lzxridsISzjaCNMLhb0AMgLvafvi3eoOCvE1UpmEL8MhvjbCNyr29MBq2A3ztriZ@example.com",
        messageId: "14d889dd-b36a-41f9-9f1a-f16841738e8b",
        creationDate: new Date("2024.02.3 00:44:11"),
        messageContent:
          "abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ !\"§ $%& /() =?* '<> #|; ²³~ @` ©«» ¤¼× {} abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL",
        isRead: false,
      },
      {
        roomId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        senderEmail:
          "WfgmXE9IhA2vUvADnvy9RqmWaykKSLZwcc487KQA090kSiNOAiNO2japFzcfhoXfi9EFAl3jib0Jrm9O3kBrbzO7aVA69pMb9KtF8PhQFzVXTuTrs24zFAhjzHJG8zXBIMID2m6u10iZBHnPu5GfSmLhvJLPPmTd0jJg4rQMsC811VE0WzPV2F7WKrKkfBI6awIjatWZyGWCGOIOl1jWnkuTkDA480DDJtO1BTP0ffFQiGGnEWd9lzxridsISzjaCNMLhb0AMgLvafvi3eoOCvE1UpmEL8MhvjbCNyr29MBq2A3ztriZ@example.com",
        messageId: "c23767c5-2a89-4457-be62-dfa032204f23",
        creationDate: new Date("2024.02.3 00:44:12"),
        messageContent:
          "Ì¡Í“Í…ÌžIÍÌ—Ì˜Ì¦nÍ‡Í‡Í™vÌ®Ì«okÌ²Ì«Ì™ÍˆiÌ–Í™Ì­Ì¹Ì ÌžnÌ¡Ì»Ì®Ì£ÌºgÌ²ÍˆÍ™Ì­Í™Ì¬ÍŽ Ì°tÍ”Ì¦hÌžÌ²eÌ¢Ì¤ ÍÌ¬Ì²Í–fÌ´Ì˜Í•Ì£eÍ€Í–eÌ£Ì¥Ì©lÍ–Í”ÍšiÍ Í“ÍšÌ¦nÍ–ÍÌ—Í“Ì³Ì®g ",
        isRead: false,
      },
    ])
    .execute();
  await db
    .insertInto("notifications")
    .values([
      {
        notificationId: "d14e0786-01d9-4da2-9372-618b08edf863",
        userEmail: "imightbejan@gmail.com",
        type: "CHAT",
        referenceId: "2a4f1a2a-1202-4f62-a019-da190c39a97f",
        creationDate: new Date("2024.02.3 00:44:12"),
        content:
          "You have new message from Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan diam sed molestie dapibus nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan diam sed molestie dapibus nam.",
        isRead: false,
        isTrashed: false,
      },
      {
        notificationId: "0fbb2904-6611-4917-832e-b63cd541997f",
        userEmail: "imightbejan@gmail.com",
        type: "REQUEST",
        referenceId: "f50a22fb-f9ce-4c83-8954-60d6aa4dba3b",
        creationDate: new Date("2024.02.3 02:44:12"),
        content: "A request has been updated.",
        isRead: true,
        isTrashed: false,
      },
      {
        notificationId: "01ae65a9-aa87-4c8d-b61a-7d468f04ab4e",
        userEmail: "imightbejan@gmail.com",
        type: "SUBMIT",
        referenceId: "f50a22fb-f9ce-4c83-8954-60d6aa4dba3b",
        creationDate: new Date("2024.02.3 01:44:12"),
        content:
          "You have a new request from Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan diam sed molestie dapibus nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan diam sed molestie dapibus nam.",
        isRead: true,
        isTrashed: true,
      },
      {
        notificationId: "82f4c6bc-aa01-4b70-ab38-ea00b3d5eae8",
        userEmail: "imightbejan@gmail.com",
        type: "CHAT",
        referenceId: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        creationDate: new Date("2024.02.3 03:44:12"),
        content: "You have a new message from Baz Sivakua.",
        isRead: true,
        isTrashed: false,
      },
    ])
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  // Order matters
  const deleteFromConnections = await db.deleteFrom("connections").execute();
  const deleteFromNotifications = await db
    .deleteFrom("notifications")
    .execute();
  const deleteFromMessages = await db.deleteFrom("messages").execute();
  const deleteFromRoom = await db.deleteFrom("rooms").execute();
  const deleteFromSubmissions = await db.deleteFrom("submissions").execute();
  const deleteFromRequests = await db.deleteFrom("requests").execute();
  const deleteFromUsers = await db.deleteFrom("users").execute();
}
