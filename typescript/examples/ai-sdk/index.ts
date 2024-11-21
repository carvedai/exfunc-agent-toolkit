import {ExfuncAgentToolkit} from '@exfunc/agent-toolkit/ai-sdk';
import {openai} from '@ai-sdk/openai';
import {generateText} from 'ai';

require('dotenv').config();

const exfuncAgentToolkit = new ExfuncAgentToolkit();

(async () => {
  const result = await generateText({
    model: openai('gpt-4o-mini'),
    tools: {
      ...exfuncAgentToolkit.getTools(),
    },
    maxSteps: 5,
    prompt: 'What is the website URL of Exfunc?',
  });

  console.log(result.text);
})();
