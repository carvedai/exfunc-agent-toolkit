import {BaseToolkit} from '@langchain/core/tools';
import ExfuncTool from './tool';
import ExfuncAPI from '../shared/api';
import tools from '../shared/tools';

class ExfuncAgentToolkit implements BaseToolkit {
  private _exfunc: ExfuncAPI;

  tools: ExfuncTool[];

  constructor({apiKey}: {apiKey?: string} = {}) {
    this._exfunc = new ExfuncAPI(apiKey);

    this.tools = tools.map(
      (tool) =>
        new ExfuncTool(
          this._exfunc,
          tool.method,
          tool.description,
          tool.parameters
        )
    );
  }

  getTools(): ExfuncTool[] {
    return this.tools;
  }
}

export default ExfuncAgentToolkit;
