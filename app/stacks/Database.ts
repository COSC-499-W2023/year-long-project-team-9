import { StackContext, RDS} from "sst/constructs";

export function Database({ stack }: StackContext) {
    const rds = new RDS(stack, "Database", {
        engine: "postgresql11.13",
        defaultDatabaseName: "obscurus",
        migrations: "./packages/core/migrations/",
      });
      return rds;
}
