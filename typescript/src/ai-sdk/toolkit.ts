import ExfuncAPI from '../shared/api';
import tools from '../shared/tools';
import type {CoreTool} from 'ai';
import ExfuncTool from './tool';

class ExfuncAgentToolkit {
  private _exfunc: ExfuncAPI;

  tools: {[key: string]: CoreTool};

  constructor({apiKey}: {apiKey?: string} = {}) {
    this._exfunc = new ExfuncAPI(apiKey);
    this.tools = {};

    tools.forEach((tool) => {
      // @ts-ignore
      this.tools[tool.method] = ExfuncTool(
        this._exfunc,
        tool.method,
        tool.description,
        tool.parameters
      );
    });
  }

  getTools(): {[key: string]: CoreTool} {
    return this.tools;
  }
}

export default ExfuncAgentToolkit;
