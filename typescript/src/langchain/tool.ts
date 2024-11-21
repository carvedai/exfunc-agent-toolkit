import {z} from 'zod';
import {StructuredTool} from '@langchain/core/tools';
import {CallbackManagerForToolRun} from '@langchain/core/callbacks/manager';
import {RunnableConfig} from '@langchain/core/runnables';
import ExfuncAPI from '../shared/api';

class ExfuncTool extends StructuredTool {
  exfuncAPI: ExfuncAPI;

  method: string;

  name: string;

  description: string;

  schema: z.ZodObject<any, any, any, any>;

  constructor(
    ExfuncAPI: ExfuncAPI,
    method: string,
    description: string,
    schema: z.ZodObject<any, any, any, any, {[x: string]: any}>
  ) {
    super();

    this.exfuncAPI = ExfuncAPI;
    this.method = method;
    this.name = method;
    this.description = description;
    this.schema = schema;
  }

  _call(
    arg: z.output<typeof this.schema>,
    _runManager?: CallbackManagerForToolRun,
    _parentConfig?: RunnableConfig
  ): Promise<any> {
    return this.exfuncAPI.run(this.method, arg);
  }
}

export default ExfuncTool;
