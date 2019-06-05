import * as tl from 'vsts-task-lib/task';
import Endpoint, { EndpointType } from '../../../../../common/ts/sonarqube/Endpoint';
import prepareTask from '../../../../../common/ts/prepare-task';

async function run() {
  try {
    const endpoint = Endpoint.getEndpoint(
      tl.getInput(EndpointType.SonarQube, true),
      EndpointType.SonarQube
    );
      await prepareTask(endpoint, __dirname);

      const password = "asdasd";

      let my_pwd;
      my_pwd = "qwerewt";

      //login({ passwd: "zxvxcv" });

      //TODO

      const url = "https://example.com?password=hl2OAIXXZ60";

  } catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

run();
