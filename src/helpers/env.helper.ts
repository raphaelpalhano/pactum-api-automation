import { getArgumentValue } from "./arguments.utils";

export function envControl(variable: string) {
    const environment: any = getArgumentValue(variable);
    return environment;
  }