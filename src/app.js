import AceEditor from "ace-editor";
import {} from "brace/theme/chrome";
import {} from "brace/mode/provn";
import {} from "brace/mode/javascript";

/*import {} from "prov-n-worker";
import {} from "worker-base";*/

export class App {

  myeditor;
  aceEditor;

  attached() {
    console.log("Ace-Editor.attached() aceEditor:",this.aceEditor);
    this.myeditor = this.aceEditor.au.ace.viewModel.editor;
    console.log("Ace-Editor.attached() myeditor:",this.myeditor);
    this.myeditor.setTheme('ace/theme/chrome');
    this.myeditor.session.setMode('ace/mode/provn');
  }

  bind(){
  }
  constructor() {
  }
}
